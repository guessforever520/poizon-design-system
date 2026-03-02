'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

function highlight(code: string): string {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // strings
    .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, '<span style="color:#a5d6ff">$1</span>')
    // keywords
    .replace(/\b(import|export|from|const|let|var|function|return|default|type|interface|extends|implements|class|new|if|else|for|while|switch|case|break|async|await|typeof|keyof|as)\b/g, '<span style="color:#ff7b72">$1</span>')
    // JSX tags
    .replace(/(&lt;\/?)([\w.]+)/g, '$1<span style="color:#7ee787">$2</span>')
    // props/attributes
    .replace(/\b([a-zA-Z]+)(?==)/g, '<span style="color:#79c0ff">$1</span>')
    // comments
    .replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, '<span style="color:#8b949e;font-style:italic">$1</span>')
    // numbers
    .replace(/\b(\d+)\b/g, '<span style="color:#f2cc60">$1</span>')
}

export default function CodeBlock({ code, language = 'tsx', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: '#0d1117', border: '1px solid #21262d' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: '1px solid #21262d' }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
          </div>
          {filename && (
            <span className="text-xs font-mono" style={{ color: '#8b949e' }}>
              {filename}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider font-mono px-2 py-0.5 rounded" style={{ color: '#8b949e', background: '#161b22' }}>
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all duration-150"
            style={{
              background: copied ? 'rgba(34,197,94,0.15)' : '#161b22',
              color: copied ? '#4ade80' : '#8b949e',
              border: `1px solid ${copied ? 'rgba(34,197,94,0.3)' : '#30363d'}`,
            }}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? '已复制！' : '复制'}
          </button>
        </div>
      </div>

      {/* Code */}
      <div className="p-5 overflow-x-auto">
        <pre className="text-[13px] leading-7 font-mono">
          <code
            dangerouslySetInnerHTML={{ __html: highlight(code) }}
            style={{ color: '#e6edf3' }}
          />
        </pre>
      </div>
    </div>
  )
}
