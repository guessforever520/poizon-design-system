'use client'

import { useState, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyButtonProps {
  text: string
  size?: 'sm' | 'md'
  className?: string
}

export default function CopyButton({ text, size = 'sm', className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // fallback
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }, [text])

  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'
  const padding = size === 'sm' ? 'p-1.5' : 'p-2'

  return (
    <button
      onClick={handleCopy}
      className={`relative rounded-md transition-all duration-150 flex items-center gap-1.5 ${padding} ${className}`}
      style={{ color: copied ? 'var(--color-success-600)' : 'var(--text-tertiary)' }}
      title={copied ? '已复制！' : '复制到剪贴板'}
      aria-label={copied ? '已复制！' : '复制到剪贴板'}
    >
      {copied ? (
        <>
          <Check className={iconSize} />
          {size === 'md' && <span className="text-xs font-medium">已复制！</span>}
        </>
      ) : (
        <>
          <Copy className={iconSize} />
          {size === 'md' && <span className="text-xs font-medium">复制</span>}
        </>
      )}
    </button>
  )
}
