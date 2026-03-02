'use client'

// ── POIZON LinkButton — matches Figma node 38283:64233 ──────────────
//
//  Colors  : brand (蓝色) P140 default → P120 hover → P140 press
//            neutral (黑色) N140 default → P120 hover → P140 press
//  Icon    : optional 12×12 leading icon (gap 4px)
//  States  : Default → Hover → Press → Disabled
//  Font    : Noto Sans SC Regular 12px / 16px / letter-spacing 0.5px
//  Renders : <a> when href provided, <button> otherwise
// ────────────────────────────────────────────────────────────────────

type LinkColor = 'brand' | 'neutral'

interface LinkButtonProps extends React.HTMLAttributes<HTMLElement> {
  color?:    LinkColor       // 蓝色 = brand | 黑色 = neutral
  icon?:     React.ReactNode // optional 12px leading icon
  disabled?: boolean
  href?:     string
  children:  React.ReactNode
  className?: string
}

// ── Color tokens (exact from Figma) ──────────────────────────────────
const COLOR: Record<LinkColor, string> = {
  // 蓝色 — P140 #029999 default · P120 #01c2c3 hover · P140 press · N60 disabled
  brand: [
    'text-[#029999]',
    'hover:text-[#01c2c3]',
    'active:text-[#029999]',
    'disabled:text-[#c7c7d7]',
  ].join(' '),

  // 黑色 — N140 #14151a default · P120 #01c2c3 hover · P140 press · N60 disabled
  neutral: [
    'text-[#14151a]',
    'hover:text-[#01c2c3]',
    'active:text-[#029999]',
    'disabled:text-[#c7c7d7]',
  ].join(' '),
}

const BASE = [
  'inline-flex items-center gap-[4px]',
  'font-normal text-[12px] leading-[16px] tracking-[0.5px]',
  'bg-transparent border-0 p-0',
  'transition-colors duration-150',
  'focus:outline-none focus-visible:underline focus-visible:underline-offset-2',
  'cursor-pointer disabled:cursor-not-allowed',
].join(' ')

export function LinkButton({
  color     = 'brand',
  icon,
  disabled  = false,
  href,
  children,
  className = '',
  ...props
}: LinkButtonProps) {
  const cls   = `${BASE} ${COLOR[color]} ${className}`
  const style = { fontFamily: "'Noto Sans SC', sans-serif" }

  const inner = (
    <>
      {icon && (
        <span className="flex-shrink-0 flex items-center w-3 h-3">
          {icon}
        </span>
      )}
      {children}
    </>
  )

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={cls}
        style={style}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={cls}
      style={style}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  )
}
