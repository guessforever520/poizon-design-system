'use client'

import { X } from 'lucide-react'

// ── POIZON tag tokens (Figma node 36254:5875)
// Shape  : border-radius 2px · padding px-[4px] py-[2px] · gap-[4px] (with icon/close)
// Font   : Noto Sans SC · 10px · weight 400 · line-height normal
// ┌─────────┬──────────┬──────────┬──────────┐
// │ variant │    bg    │  border  │   text   │
// ├─────────┼──────────┼──────────┼──────────┤
// │ default │ #ffffff  │ #e6e6eb  │ #626276  │
// │ error   │ #fff6f4  │ #f9c3c8  │ #c8291f  │
// │ warning │ #fffcf4  │ #fde3a0  │ #c17606  │
// │ success │ #f4fffc  │ #abeede  │ #08765c  │
// │ info    │ #f0faff  │ #b0e2f6  │ #00678f  │
// └─────────┴──────────┴──────────┴──────────┘

const FONT: React.CSSProperties = { fontFamily: "'Noto Sans SC', sans-serif" }

type Variant = 'default' | 'success' | 'warning' | 'error' | 'info'

interface BadgeProps {
  children:   React.ReactNode
  variant?:   Variant
  dot?:       boolean          // small filled circle indicator (Simple w/ dot)
  icon?:      React.ReactNode  // explicit icon element (W/ Icon type)
  onClose?:   () => void       // renders × button right of text (Closable type)
  size?:      'sm' | 'md'      // kept for API compatibility — single visual size
  className?: string
}

const TOKEN: Record<Variant, { bg: string; border: string; text: string }> = {
  default: { bg: '#ffffff', border: '#e6e6eb', text: '#626276' },
  error:   { bg: '#fff6f4', border: '#f9c3c8', text: '#c8291f' },
  warning: { bg: '#fffcf4', border: '#fde3a0', text: '#c17606' },
  success: { bg: '#f4fffc', border: '#abeede', text: '#08765c' },
  info:    { bg: '#f0faff', border: '#b0e2f6', text: '#00678f' },
}

export function Badge({
  children,
  variant   = 'default',
  dot       = false,
  icon,
  onClose,
  size:     _size,   // accepted but not used — single Figma size
  className = '',
}: BadgeProps) {
  const { bg, border, text } = TOKEN[variant] ?? TOKEN.default

  return (
    <span
      className={`inline-flex items-center gap-[4px] rounded-[2px] border px-[4px] py-[2px] text-[10px] leading-normal font-normal ${className}`}
      style={{ ...FONT, background: bg, borderColor: border, color: text }}
    >
      {/* dot — colored filled circle (Simple dot type) */}
      {dot && !icon && (
        <span
          className="w-[6px] h-[6px] rounded-full flex-shrink-0"
          style={{ background: text }}
        />
      )}

      {/* icon — 12×12 slot for any ReactNode (W/ Icon type) */}
      {icon && (
        <span className="w-3 h-3 flex-shrink-0 flex items-center justify-center">
          {icon}
        </span>
      )}

      {children}

      {/* close button — × icon right of text (Closable type) */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="w-3 h-3 flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: text }}
          aria-label="关闭"
        >
          <X className="w-[10px] h-[10px]" />
        </button>
      )}
    </span>
  )
}
