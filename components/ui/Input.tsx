'use client'

import { AlertCircle, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

// ── POIZON visual tokens (Figma node 37054:32317)
// Border  : default #c7c7d7 · hover/focus #00dbdb · error #fa4f5f
// Focus   : border #00dbdb + shadow 0px 0px 0px 1px #cafcfc
// Bg      : white (default/error) · #f5f5f9 (disabled)
// Sizes   : sm → h-[24px]  ·  md → h-[32px]  (same padding/font/radius for both)
// Padding : px-[8px] py-[4px] · radius 4px
// Font    : Noto Sans SC Regular · 12px/16px · tracking 0.5px
// Colors  : label #626276 · text #14151a · placeholder #aaaabb · hint #aaaabb · error #fa4f5f
//           disabled text/placeholder #c7c7d7 · icon #aaaabb · eye-button #7f7f8e

const FONT: React.CSSProperties = { fontFamily: "'Noto Sans SC', sans-serif" }

const HEIGHT = { sm: 'h-[24px]', md: 'h-[32px]' } as const

// ─────────────────────────────────────────────────────────────
// Input  (Figma node 37054:32317 + 37926:4624 password variant)
// ─────────────────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?:      'sm' | 'md'
  label?:     string
  hint?:      string
  error?:     string
  leftIcon?:  React.ReactNode
  rightIcon?: React.ReactNode
}

export function Input({
  size     = 'md',
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  disabled,
  type,
  id,
  className = '',
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const isDisabled  = Boolean(disabled)
  const inputId     = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  const inputCls = [
    'w-full outline-none',
    leftIcon                ? 'pl-[28px]' : 'pl-[8px]',
    rightIcon || isPassword ? 'pr-[28px]' : 'pr-[8px]',
    HEIGHT[size], 'py-[4px] rounded-[4px] border',
    'text-[12px] leading-[16px] tracking-[0.5px]',
    'transition-[border-color,box-shadow,background-color] duration-150',
    isDisabled
      ? 'bg-[#f5f5f9] border-[#c7c7d7] cursor-not-allowed placeholder:text-[#c7c7d7]'
      : error
        ? 'bg-white border-[#fa4f5f] placeholder:text-[#aaaabb]'
        : [
            'bg-white border-[#c7c7d7]',
            'placeholder:text-[#aaaabb]',
            'hover:border-[#00dbdb]',
            'focus:border-[#00dbdb]',
            'focus:bg-white',
            'focus:shadow-[0px_0px_0px_1px_#cafcfc]',
            '[&:-webkit-autofill]:shadow-[0_0_0_30px_white_inset]',
          ].join(' '),
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className="flex flex-col gap-[4px] w-full">

      {label && (
        <label
          htmlFor={inputId}
          className="text-[12px] leading-[16px] font-normal tracking-[0.5px]"
          style={{ ...FONT, color: error ? '#fa4f5f' : '#626276' }}
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">

        {leftIcon && (
          <div
            className="absolute left-[8px] flex items-center pointer-events-none"
            style={{ color: isDisabled ? '#c7c7d7' : '#aaaabb' }}
          >
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          type={isPassword && showPassword ? 'text' : type}
          disabled={isDisabled}
          className={inputCls}
          style={{ ...FONT, color: isDisabled ? '#c7c7d7' : '#14151a' }}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(v => !v)}
            className="absolute right-[8px] flex items-center"
            style={{ color: isDisabled ? '#c7c7d7' : '#7f7f8e' }}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}

        {rightIcon && !isPassword && (
          <div
            className="absolute right-[8px] flex items-center pointer-events-none"
            style={{ color: isDisabled ? '#c7c7d7' : '#aaaabb' }}
          >
            {rightIcon}
          </div>
        )}

      </div>

      {(error || hint) && (
        <div className="flex items-center gap-[4px]">
          {error && (
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#fa4f5f' }} />
          )}
          <span
            className="text-[12px] leading-[16px] tracking-[0.5px]"
            style={{ ...FONT, color: error ? '#fa4f5f' : '#aaaabb' }}
          >
            {error ?? hint}
          </span>
        </div>
      )}

    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Textarea  (Figma node 37054:32583)
// Font  : 14px / 20px / tracking 0.5px  (larger than Input)
// Border: Default #c7c7d7 · Hover #00dbdb · Focus stays #c7c7d7 (unique!)
// Char counter: "X/max" below right  · grey → red when over limit
// ─────────────────────────────────────────────────────────────
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  const isDisabled = Boolean(disabled)
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  // Track char count (works for both controlled & uncontrolled)
  const [charCount, setCharCount] = useState(() => {
    const init = value?.toString() ?? defaultValue?.toString() ?? ''
    return init.length
  })
  const isOverLimit = maxChars !== undefined && charCount > maxChars

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharCount(e.target.value.length)
    onChange?.(e)
  }

  // Textarea is unique: focus border stays #c7c7d7 (only hover turns teal)
  const textareaCls = [
    'w-full outline-none resize-y min-h-[52px]',
    'px-[8px] py-[4px] rounded-[4px] border',
    'text-[14px] leading-[20px] tracking-[0.5px]',
    'transition-[border-color] duration-150',
    isDisabled
      ? 'bg-[#f5f5f9] border-[#c7c7d7] cursor-not-allowed placeholder:text-[#c7c7d7]'
      : error
        ? 'bg-white border-[#fa4f5f] placeholder:text-[#aaaabb]'
        : [
            'bg-white border-[#c7c7d7]',
            'placeholder:text-[#aaaabb]',
            'hover:border-[#00dbdb]',
            // Focus intentionally stays gray — per Figma spec
            'focus:border-[#c7c7d7]',
          ].join(' '),
    className,
  ].filter(Boolean).join(' ')

  const showBottomRow = error || hint || maxChars !== undefined

  return (
    <div className="flex flex-col gap-[4px] w-full">

      {label && (
        <label
          htmlFor={inputId}
          className="text-[12px] leading-[16px] font-normal tracking-[0.5px]"
          style={{ ...FONT, color: error ? '#fa4f5f' : '#626276' }}
        >
          {label}
        </label>
      )}

      <textarea
        id={inputId}
        disabled={isDisabled}
        className={textareaCls}
        style={{ ...FONT, color: isDisabled ? '#c7c7d7' : '#14151a' }}
        value={value}
        defaultValue={value === undefined ? defaultValue : undefined}
        onChange={handleChange}
        {...props}
      />

      {showBottomRow && (
        <div className="flex items-center justify-between gap-[4px]">
          {/* Left: error icon + message or hint */}
          <div className="flex items-center gap-[4px]">
            {error && (
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#fa4f5f' }} />
            )}
            {(error || hint) && (
              <span
                className="text-[12px] leading-[16px] tracking-[0.5px]"
                style={{ ...FONT, color: error ? '#fa4f5f' : '#aaaabb' }}
              >
                {error ?? hint}
              </span>
            )}
          </div>
          {/* Right: char counter */}
          {maxChars !== undefined && (
            <span
              className="text-[12px] leading-[16px] flex-shrink-0"
              style={{ color: isOverLimit ? '#fa4f5f' : '#c7c7d7' }}
            >
              {charCount}/{maxChars}
            </span>
          )}
        </div>
      )}

    </div>
  )
}
