'use client'

import { colorGroups, typeScale, spacingTokens, shadowTokens, radiusTokens } from '@/lib/data'
import CopyButton from '@/components/shared/CopyButton'

export function ColorsContent() {
  return (
    <div className="space-y-10">
      {colorGroups.map(group => (
        <section key={group.title}>
          <div className="mb-4">
            <h2 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{group.title}</h2>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>{group.description}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {group.swatches.map(swatch => (
              <div key={swatch.name} className="card overflow-hidden">
                <div
                  className="h-20 w-full"
                  style={{ background: swatch.hex, boxShadow: 'var(--shadow-xs) inset' }}
                />
                <div className="p-2.5">
                  <div className="text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {group.title}-{swatch.name}
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <code className="text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                      {swatch.hex}
                    </code>
                    <CopyButton text={swatch.hex} size="sm" />
                  </div>
                  <div className="flex items-center justify-between gap-1 mt-1">
                    <code className="text-[10px] font-mono truncate" style={{ color: 'var(--text-tertiary)' }}>
                      {swatch.cssVar}
                    </code>
                    <CopyButton text={swatch.cssVar} size="sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function getFontFamily(family: string): string {
  switch (family) {
    case 'Roboto':           return 'var(--font-sans-en)'
    case 'Noto Sans SC':     return 'var(--font-sans)'
    case 'Roboto Condensed': return 'var(--font-condensed)'
    case 'JetBrains Mono':   return 'var(--font-mono)'
    default:                 return 'var(--font-sans)'
  }
}

export function TypographyContent() {
  return (
    <div className="space-y-2">
      <div
        className="grid items-center text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-lg mb-2 gap-4"
        style={{
          gridTemplateColumns: '100px 1fr 80px 80px 80px 120px',
          color: 'var(--text-tertiary)',
          background: 'var(--surface-hover)',
        }}
      >
        <span>名称</span>
        <span>预览</span>
        <span>大小</span>
        <span>字重</span>
        <span>行高</span>
        <span>字体</span>
      </div>
      {typeScale.map(ts => {
        const isNumber = ts.name.startsWith('数字/')
        const isCode = ts.name === 'Code'
        const cssLineHeight = ts.lineHeight === 'Auto' ? 'normal' : ts.lineHeight
        return (
          <div
            key={ts.name}
            className="card grid items-center px-4 py-4 gap-4"
            style={{ gridTemplateColumns: '100px 1fr 80px 80px 80px 120px' }}
          >
            <div>
              <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{ts.name}</div>
              <code className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>&lt;{ts.tag}&gt;</code>
            </div>
            <div
              className="truncate"
              style={{
                fontSize: ts.size,
                fontWeight: ts.weight,
                lineHeight: cssLineHeight,
                fontFamily: getFontFamily(ts.family),
                letterSpacing: (!isNumber && !isCode) ? '0.5px' : undefined,
                color: 'var(--text-primary)',
              }}
            >
              {ts.sample}
            </div>
            <code className="text-xs" style={{ color: 'var(--text-secondary)' }}>{ts.size}</code>
            <code className="text-xs" style={{ color: 'var(--text-secondary)' }}>{ts.weight}</code>
            <code className="text-xs" style={{ color: 'var(--text-secondary)' }}>{ts.lineHeight}</code>
            <code className="text-xs truncate" style={{ color: 'var(--text-tertiary)' }}>{ts.family}</code>
          </div>
        )
      })}
    </div>
  )
}

export function SpacingContent() {
  return (
    <div className="space-y-3">
      {spacingTokens.map(token => (
        <div
          key={token.name}
          className="card flex items-center gap-6 px-5 py-4"
        >
          <div className="flex-shrink-0 flex items-end h-16">
            <div
              className="rounded-md"
              style={{
                width: `${Math.min(token.value * 2, 192)}px`,
                height: `${Math.min(token.value, 64)}px`,
                background: 'var(--interactive-primary)',
                opacity: 0.8,
                minWidth: '4px',
                minHeight: '4px',
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <code className="text-sm font-mono font-semibold" style={{ color: 'var(--text-primary)' }}>
                {token.name}
              </code>
              <span
                className="px-2 py-0.5 rounded-md text-xs font-bold font-mono"
                style={{ background: 'var(--interactive-primary-subtle)', color: 'var(--interactive-primary)' }}
              >
                {token.value}px
              </span>
              <span
                className="px-2 py-0.5 rounded-md text-xs font-bold font-mono"
                style={{ background: 'var(--surface-hover)', color: 'var(--text-secondary)' }}
              >
                {(token.value / 16).toFixed(3).replace(/\.?0+$/, '')}rem
              </span>
            </div>
            <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{token.usage}</div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <code className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>{token.cssVar}</code>
            <CopyButton text={token.cssVar} size="sm" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ShadowsContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {shadowTokens.map(token => (
        <div key={token.name} className="card p-5 space-y-4">
          <div
            className="w-full h-20 rounded-xl"
            style={{
              background: 'var(--surface-card)',
              boxShadow: token.value,
              border: '1px solid var(--surface-border)',
            }}
          />
          <div>
            <div className="flex items-center justify-between mb-1">
              <code className="text-sm font-mono font-semibold" style={{ color: 'var(--text-primary)' }}>
                {token.name}
              </code>
              <div className="flex items-center gap-1">
                <span
                  className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                  style={{ background: 'var(--interactive-primary-subtle)', color: 'var(--interactive-primary)' }}
                >
                  层级 {token.level}
                </span>
                <CopyButton text={token.cssVar} size="sm" />
              </div>
            </div>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              <strong>适用于：</strong> {token.usage}
            </p>
            <code className="text-[10px] block mt-2 truncate font-mono" style={{ color: 'var(--text-tertiary)' }}>
              {token.value}
            </code>
          </div>
        </div>
      ))}
    </div>
  )
}

export function RadiusContent() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {radiusTokens.map(token => (
        <div key={token.name} className="card p-5">
          <div
            className="w-full h-20 mb-4 border-2"
            style={{
              borderRadius: token.value,
              borderColor: 'var(--interactive-primary)',
              background: 'var(--interactive-primary-subtle)',
            }}
          />
          <code className="text-sm font-mono font-semibold block mb-1" style={{ color: 'var(--text-primary)' }}>
            {token.name}
          </code>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold" style={{ color: 'var(--interactive-primary)' }}>
              {token.value}
            </span>
            <CopyButton text={token.cssVar} size="sm" />
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--text-tertiary)' }}>{token.usage}</p>
        </div>
      ))}
    </div>
  )
}
