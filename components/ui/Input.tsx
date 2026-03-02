'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

// ── POIZON Input — Figma nodes 37054:32317 (text) · 37926:4624 (password)
//                             37054:32583 (textarea)
//
//  Sizes   : sm → h-[24px]  |  md → h-[32px]  ·  padding px-[8px] py-[4px]
//  Gap     : gap-[4px] between prefix / input / suffix
//  States  : Default (#c7c7d7) → Hover (#00dbdb) → Focused (#00dbdb + P20 glow)
//            Disabled / ReadOnly → bg #f5f5f9  ·  Error → border #fa4f5f
//  Font    : Noto Sans SC Regular 12px/16px, tracking 0.5px
//            Textarea: 14px/20px
//  Radius  : 4px
// ────────────────────────────────────────────────────────────────────

export type InputSize = 'sm' | 'md'

// ── Shared helpers ────────────────────────────────────────────────────
const FONT = { fontFamily: "'Noto Sans SC', sans-serif" }
const LABEL = 'block text-[12px] leading-[16px] font-normal tracking-[0.5px]'
const HELPER = 'text-[12px] leading-[16px] tracking-[0.5px]'

const H: Record<InputSize, string> = {
  sm: 'h-[24px]',
  md: 'h-[32px]',
}

function inputWrapCls(
  error?:    string,
  disabled?: boolean,
  readOnly?: boolean,
  size:      InputSize = 'md',
) {
  const base = [
    'flex items-center gap-[4px] px-[8px] py-[4px] rounded-[4px] border w-full transition-[border-color,box-shadow,background-color] duration-150',
    H[size],
  ]
  if (disabled || readOnly) {
    base.push('bg-[#f5f5f9] border-[#c7c7d7] cursor-not-allowed')
  } else if (error) {
    base.push('bg-white border-[#fa4f5f]')
  } else {
    base.push(
      'bg-white border-[#c7c7d7]',
      'hover:border-[#00dbdb]',
      'focus-within:border-[#00dbdb]',
      'focus-within:bg-white',
      'focus-within:shadow-[0px_0px_0px_1px_#cafcfc]',
    )
  }
  return base.join(' ')
}

// ── Input ─────────────────────────────────────────────────────────────
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?:     string
  hint?:      string
  error?:     string
  size?:      InputSize
  leftIcon?:  React.ReactNode
  rightIcon?: React.ReactNode
  prefix?:    string    // left text prefix e.g. "¥"
  suffix?:    string    // right text suffix e.g. "元" "kg"
}

export function Input({
  label,
  hint,
  error,
  size     = 'md',
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  disabled,
  readOnly,
  type,
  id,
  className = '',
  ...props
}: InputProps) {
  const [showPw, setShowPw]   = useState(false)
  const isPassword             = type === 'password'
  const isDisabled             = Boolean(disabled)
  const isReadOnly             = Boolean(readOnly)
  const inputId                = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  const iconColor              = isDisabled ? '#c7c7d7' : '#7f7f8e'

  return (
    <div className={`flex flex-col gap-[4px] w-full ${className}`}>

      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className={LABEL}
          style={{ ...FONT, color: error ? '#fa4f5f' : '#626276' }}
        >
          {label}
        </label>
      )}

      {/* Input wrapper — carries border + state styles */}
      <div className={inputWrapCls(error, isDisabled, isReadOnly, size)}>

        {/* Left icon (14×14) */}
        {leftIcon && (
          <span className="flex-shrink-0 flex items-center w-[14px] h-[14px]" style={{ color: iconColor }}>
            {leftIcon}
          </span>
        )}

        {/* Left text prefix e.g. ¥ */}
        {prefix && !leftIcon && (
          <span
            className="flex-shrink-0 text-[12px] leading-[16px] tracking-[0.5px] whitespace-nowrap"
            style={{ ...FONT, color: iconColor }}
          >
            {prefix}
          </span>
        )}

        {/* Native input — transparent bg, inherits wrapper focus state */}
        <input
          id={inputId}
          type={isPassword ? (showPw ? 'text' : 'password') : type}
          disabled={isDisabled}
          readOnly={isReadOnly}
          className={[
            'flex-1 min-w-0 bg-transparent outline-none',
            'font-normal text-[12px] leading-[16px] tracking-[0.5px]',
            'placeholder:text-[#aaaabb] placeholder:font-normal',
            'disabled:cursor-not-allowed',
            // Override browser autofill background (Chrome injects a teal/yellow bg)
            '[&:-webkit-autofill]:shadow-[0_0_0_30px_white_inset]',
            '[&:-webkit-autofill]:[color:#14151a]',
          ].join(' ')}
          style={{ ...FONT, color: isDisabled ? '#c7c7d7' : '#14151a' }}
          {...props}
        />

        {/* Right text suffix e.g. 元 */}
        {suffix && (
          <span
            className="flex-shrink-0 text-[12px] leading-[16px] tracking-[0.5px] whitespace-nowrap"
            style={{ ...FONT, color: iconColor }}
          >
            {suffix}
          </span>
        )}

        {/* Password eye-toggle (14×14, tabIndex -1 so tab skips it) */}
        {isPassword && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => !isDisabled && setShowPw(v => !v)}
            className="flex-shrink-0 flex items-center w-[14px] h-[14px] focus:outline-none"
            style={{ color: iconColor }}
          >
            {showPw ? <EyeOff className="w-[14px] h-[14px]" /> : <Eye className="w-[14px] h-[14px]" />}
          </button>
        )}

        {/* Right icon — only when not password */}
        {rightIcon && !isPassword && (
          <span className="flex-shrink-0 flex items-center w-[14px] h-[14px]" style={{ color: iconColor }}>
            {rightIcon}
          </span>
        )}
      </div>

      {/* Helper / error text */}
      {(error || hint) && (
        <span className={HELPER} style={{ ...FONT, color: error ? '#fa4f5f' : '#aaaabb' }}>
          {error ?? hint}
        </span>
      )}
    </div>
  )
}

// ── Textarea ──────────────────────────────────────────────────────────
// Figma node 37054:32583
//   Font   : Noto Sans SC 14px/20px, tracking 0.5px
//   States : Default/Focus → #c7c7d7 border  ·  Hover → #00dbdb  ·  Error → #fa4f5f
//   Counter: bottom-right X/max, turns red when over limit
// ─────────────────────────────────────────────────────────────────────

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?:    string
  hint?:     string
  error?:    string
  maxChars?: number
}

export function Textarea({
  label,
  hint,
  error,
  maxChars,
  disabled,
  id,
  className = '',
  value,
  defaultValue,
  onChange,
  ...props
}: TextareaProps) {
  const [charCount, setCharCount] = useState(() => {
    if (typeof value        === 'string') return value.length
    if (typeof defaultValue === 'string') return defaultValue.length
    return 0
  })
  const textareaId  = id ?? label?.toLowerCase().replace(/\s+/g, '-')
  const isDisabled  = Boolean(disabled)
  const isOverLimit = maxChars !== undefined && charCount > maxChars
  const hasError    = Boolean(error) || isOverLimit

  // Textarea border per Figma: Default & Focused → #c7c7d7, Hover → #00dbdb
  const wrapCls = [
    'relative w-full rounded-[4px] border transition-[border-color] duration-150',
    isDisabled ? 'bg-[#f5f5f9] border-[#c7c7d7] cursor-not-allowed'
      : hasError ? 'bg-white border-[#fa4f5f]'
      : 'bg-white border-[#c7c7d7] hover:border-[#00dbdb] focus-within:border-[#c7c7d7]',
  ].join(' ')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length)
    onChange?.(e)
  }

  return (
    <div className={`flex flex-col gap-[4px] w-full ${className}`}>

      {/* Label */}
      {label && (
        <label
          htmlFor={textareaId}
          className={LABEL}
          style={{ ...FONT, color: hasError ? '#fa4f5f' : '#626276' }}
        >
          {label}
        </label>
      )}

      {/* Textarea wrapper */}
      <div className={wrapCls}>
        <textarea
          id={textareaId}
          disabled={isDisabled}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={[
            'w-full bg-transparent outline-none resize-y',
            'font-normal text-[14px] leading-[20px] tracking-[0.5px]',
            'px-[8px] pt-[4px] min-h-[52px]',
            'placeholder:text-[#aaaabb] placeholder:font-normal',
            'disabled:cursor-not-allowed',
          ].join(' ')}
          style={{
            ...FONT,
            color:         isDisabled ? '#c7c7d7' : '#14151a',
            paddingBottom: maxChars !== undefined ? '22px' : '6px',
          }}
          {...props}
        />

        {/* Character counter: X/max */}
        {maxChars !== undefined && (
          <span
            className="absolute bottom-[4px] right-[8px] text-[12px] leading-[16px] tracking-[0.5px] pointer-events-none select-none"
            style={{ ...FONT, color: isOverLimit ? '#fa4f5f' : '#c7c7d7' }}
          >
            {charCount}/{maxChars}
          </span>
        )}
      </div>

      {/* Helper / error text */}
      {(error || hint) && (
        <span className={HELPER} style={{ ...FONT, color: hasError ? '#fa4f5f' : '#aaaabb' }}>
          {error ?? hint}
        </span>
      )}
    </div>
  )
}
