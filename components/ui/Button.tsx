'use client'

import { Loader2 } from 'lucide-react'

// ── POIZON Button — matches Figma node 38273:34295 ─────────────────
//
//  Styles  : 填充 (primary/danger)  |  线性 (secondary)  |  文本 (ghost)
//  Sizes   : sm → Small 12px/4px·8px  |  md → Middle 14px/6px·12px  |  lg → Large 16px/10px·16px
//  States  : Default → Hover → Active/Press → Disabled → Loading
//  Font    : Noto Sans SC, letter-spacing 0.5px, border-radius 4px
// ──────────────────────────────────────────────────────────────────

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?:    Size
  loading?: boolean
  icon?:    React.ReactNode   // left-side icon (hidden while loading)
  children: React.ReactNode
}

// ── Size tokens (exact from Figma) ────────────────────────────────
const SIZE: Record<Size, { cls: string; spin: string }> = {
  // Small  : 12px / 16px line-height  · px-2   py-1   · min-w-[54px]
  sm: {
    cls:  'text-[12px] leading-[16px] font-normal  px-[8px]  py-[4px]  min-w-[54px] gap-[4px]',
    spin: 'w-3 h-3',
  },
  // Middle : 14px / 20px              · px-3   py-1.5 · min-w-[68px]
  md: {
    cls:  'text-[14px] leading-[20px] font-normal  px-[12px] py-[6px]  min-w-[68px] gap-[4px]',
    spin: 'w-3 h-3',
  },
  // Large  : 16px / 20px  semibold   · px-4   py-2.5 · min-w-[80px]
  lg: {
    cls:  'text-[16px] leading-[20px] font-semibold px-[16px] py-[10px] min-w-[80px] gap-[4px]',
    spin: 'w-3.5 h-3.5',
  },
}

// ── Variant tokens (exact from Figma) ─────────────────────────────
const VARIANT: Record<Variant, string> = {
  // 填充 Primary
  //   Default  bg P100 #00dbdb  text N140 #14151a
  //   Hover    bg P60  #63f7f7
  //   Active   bg P120 #01c2c3
  //   Disabled bg #a6e9ea  text white
  primary: [
    'bg-[#00dbdb] text-[#14151a] border border-transparent',
    'hover:bg-[#63f7f7]',
    'active:bg-[#01c2c3]',
    'disabled:bg-[#a6e9ea] disabled:text-white disabled:border-transparent',
  ].join(' '),

  // 线性 Outlined
  //   Default  border N60 #c7c7d7  text N140 #14151a  bg transparent
  //   Hover    border P120 #01c2c3  text P120
  //   Active   border P140 #029999  text P140
  //   Disabled bg N10 #f5f5f9  border N60  text N60
  secondary: [
    'bg-transparent text-[#14151a] border border-[#c7c7d7]',
    'hover:border-[#01c2c3] hover:text-[#01c2c3]',
    'active:border-[#029999] active:text-[#029999]',
    'disabled:bg-[#f5f5f9] disabled:text-[#c7c7d7] disabled:border-[#c7c7d7]',
  ].join(' '),

  // 文本 Ghost — text-only, uses P100 teal on hover
  ghost: [
    'bg-transparent text-[#7f7f8e] border border-transparent',
    'hover:text-[#00dbdb] hover:bg-[#f4fffc]',
    'active:text-[#01c2c3]',
    'disabled:text-[#c7c7d7]',
  ].join(' '),

  // 危险 Danger — R100 filled (not in Figma spec but needed semantically)
  //   Default  bg R100 #fa4f5f  text white
  //   Hover/Active  bg R120 #c8291f
  //   Disabled bg R40 #f9c3c8  text white
  danger: [
    'bg-[#fa4f5f] text-white border border-transparent',
    'hover:bg-[#c8291f]',
    'active:bg-[#c8291f]',
    'disabled:bg-[#f9c3c8] disabled:text-white',
  ].join(' '),
}

const BASE = [
  'inline-flex items-center justify-center',
  'rounded-[4px]',                           // Figma: border-radius 4px
  'tracking-[0.5px]',                        // Figma: letter-spacing 0.5px
  'transition-colors duration-150',
  'focus:outline-none',
  'focus-visible:ring-2 focus-visible:ring-[#00dbdb]',
  'cursor-pointer disabled:cursor-not-allowed',
].join(' ')

export function Button({
  variant  = 'primary',
  size     = 'md',
  loading  = false,
  icon,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const { cls, spin } = SIZE[size]

  return (
    <button
      disabled={disabled || loading}
      className={`${BASE} ${cls} ${VARIANT[variant]} ${className}`}
      style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
      {...props}
    >
      {loading
        ? <Loader2 className={`${spin} animate-spin`} />
        : icon && <span className="flex-shrink-0 flex items-center">{icon}</span>
      }
      {children}
    </button>
  )
}
