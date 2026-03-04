'use client'

import React, { useId, useRef, useEffect } from 'react'

// ── POIZON Checkbox — matches Figma node 37336:301 ─────────────────
//
//  Unchecked  : white bg, #c7c7d7 border
//  Checked    : #00dbdb bg+border, white checkmark (16×16px, r=4px)
//  Indeterminate: white bg, gray border, teal 10×10 inner square
//  Hover      : white bg, #00dbdb border (via CSS :hover)
//  Disabled   : #f1f1f5 bg, #c7c7d7 border, gray mark, gray label #c7c7d7
//  Error      : #fff7f6 bg, #c8291f border (unchecked)
//               #c8291f bg+border (checked), red inner square (indeterminate)
//               + red error message row
//  Font       : Noto Sans SC 12px/400, tracking 0.5px
// ──────────────────────────────────────────────────────────────────

export interface CheckboxProps {
  label?: string
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  error?: string
  onChange?: (checked: boolean) => void
  className?: string
}

// SVG checkmark path matching Figma 10×8px check shape
function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 3.5L3.8 6.5L9 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// SVG error info icon (12×12)
function ErrorIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5.5" stroke="#c8291f" />
      <path d="M6 3.5V6.5" stroke="#c8291f" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="6" cy="8.5" r="0.6" fill="#c8291f" />
    </svg>
  )
}

export function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  error,
  onChange,
  className,
}: CheckboxProps) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  // sync indeterminate state to native input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  // ── box visual ───────────────────────────────────────────────────
  const getBoxStyle = (): React.CSSProperties => {
    if (disabled) {
      return { background: '#f1f1f5', borderColor: '#c7c7d7' }
    }
    if (error) {
      if (checked) return { background: '#c8291f', borderColor: '#c8291f' }
      if (indeterminate) return { background: '#fff7f6', borderColor: '#c8291f' }
      return { background: '#fff7f6', borderColor: '#c8291f' }
    }
    if (checked) return { background: '#00dbdb', borderColor: '#00dbdb' }
    return { background: '#ffffff', borderColor: '#c7c7d7' }
  }

  const checkColor = disabled ? '#c7c7d7' : '#ffffff'

  const innerSquareColor = (() => {
    if (disabled) return '#c7c7d7'
    if (error) return '#c8291f'
    return '#00dbdb'
  })()

  const labelColor = disabled ? '#c7c7d7' : '#14151a'

  return (
    <div className={`inline-flex flex-col gap-[4px] ${className ?? ''}`}>
      <label
        htmlFor={id}
        className={`inline-flex items-center gap-[4px] ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} group`}
      >
        {/* Native input (visually hidden) */}
        <input
          ref={inputRef}
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={e => !disabled && onChange?.(e.target.checked)}
          className="sr-only"
        />

        {/* Visual box */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-[4px] border transition-colors duration-150"
          style={{
            width: 16,
            height: 16,
            ...getBoxStyle(),
            // hover teal border when unchecked + not disabled + no error
            ...(!checked && !indeterminate && !disabled && !error
              ? {}
              : {}),
          }}
        >
          {checked && !indeterminate && <CheckIcon color={checkColor} />}
          {indeterminate && (
            <div
              className="rounded-[2px]"
              style={{ width: 10, height: 10, background: innerSquareColor }}
            />
          )}
        </div>

        {/* Label */}
        {label && (
          <span
            className="text-[12px] leading-[16px] tracking-[0.5px] select-none"
            style={{ color: labelColor, fontFamily: '"Noto Sans SC", sans-serif' }}
          >
            {label}
          </span>
        )}
      </label>

      {/* Error message */}
      {error && (
        <div className="flex items-center gap-[4px] pl-[20px]">
          <ErrorIcon />
          <span
            className="text-[12px] leading-[16px] tracking-[0.5px]"
            style={{ color: '#c8291f', fontFamily: '"Noto Sans SC", sans-serif' }}
          >
            {error}
          </span>
        </div>
      )}
    </div>
  )
}
