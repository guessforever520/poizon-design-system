'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { patterns } from '@/lib/data'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

function PatternMockup({ id }: { id: string }) {
  const mockups: Record<string, React.ReactNode> = {
    'empty-states': (
      <div className="flex flex-col items-center justify-center py-10 gap-3">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'var(--interactive-primary-subtle)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--interactive-primary)' }}>
            <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>暂无报告</div>
          <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>创建您的第一份报告以开始使用</div>
        </div>
        <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: 'var(--interactive-primary)', color: '#fff' }}>
          创建报告
        </span>
      </div>
    ),
    'loading': (
      <div className="p-4 space-y-3">
        {[80, 60, 90, 50].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex-shrink-0 animate-pulse" style={{ background: 'var(--surface-border)' }} />
            <div className="flex-1 space-y-2">
              <div className="h-2.5 rounded-full animate-pulse" style={{ background: 'var(--surface-border)', width: `${w}%` }} />
              <div className="h-2 rounded-full animate-pulse" style={{ background: 'var(--surface-border)', width: `${w - 20}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
    'forms': (
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {['名', '姓', '邮箱地址', '电话号码'].map(f => (
            <div key={f}>
              <div className="text-[10px] font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>{f}</div>
              <div className="h-7 rounded-lg border" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)' }} />
            </div>
          ))}
        </div>
        <div>
          <div className="text-[10px] font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>公司</div>
          <div className="h-7 rounded-lg border w-full" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)' }} />
        </div>
        <div className="flex justify-end gap-2 pt-1">
          <span className="px-3 py-1 text-[10px] rounded-lg border font-medium" style={{ borderColor: 'var(--surface-border)', color: 'var(--text-secondary)' }}>取消</span>
          <span className="px-3 py-1 text-[10px] rounded-lg font-medium" style={{ background: 'var(--interactive-primary)', color: '#fff' }}>保存更改</span>
        </div>
      </div>
    ),
    'data-table': (
      <div className="p-3 space-y-2">
        <div className="flex gap-2 items-center">
          <div className="flex-1 h-7 rounded-lg border flex items-center px-2" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)' }}>
            <div className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>🔍 搜索...</div>
          </div>
          {['状态 ▾', '日期 ▾'].map(f => (
            <div key={f} className="h-7 px-2 rounded-lg border flex items-center text-[10px] font-medium" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)', color: 'var(--text-secondary)' }}>{f}</div>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden border" style={{ borderColor: 'var(--surface-border)' }}>
          <div className="flex text-[9px] font-semibold px-3 py-2" style={{ background: 'var(--surface-hover)', color: 'var(--text-tertiary)' }}>
            <span className="flex-1">名称</span><span className="w-16">状态</span><span className="w-14">金额</span>
          </div>
          {['Acme Corp', 'Globex Inc', 'Initech'].map(n => (
            <div key={n} className="flex text-[9px] px-3 py-2 border-t items-center" style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-card)' }}>
              <span className="flex-1 font-medium" style={{ color: 'var(--text-primary)' }}>{n}</span>
              <span className="w-16 text-[8px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: 'var(--color-success-50)', color: 'var(--color-success-700)' }}>活跃</span>
              <span className="w-14 font-mono" style={{ color: 'var(--text-secondary)' }}>$12.4k</span>
            </div>
          ))}
        </div>
      </div>
    ),
    'dashboard': (
      <div className="p-3 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: '营收', val: '$124k', trend: '↑ 18%', c: 'var(--color-success-600)' },
            { label: '用户', val: '3,842', trend: '↑ 240', c: 'var(--color-success-600)' },
            { label: '流失率', val: '2.4%', trend: '↓ 0.3%', c: 'var(--color-error-600)' },
          ].map(card => (
            <div key={card.label} className="p-2.5 rounded-xl border" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)' }}>
              <div className="text-[9px] font-medium mb-1" style={{ color: 'var(--text-tertiary)' }}>{card.label}</div>
              <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{card.val}</div>
              <div className="text-[9px] font-semibold mt-0.5" style={{ color: card.c }}>{card.trend}</div>
            </div>
          ))}
        </div>
        <div className="h-20 rounded-xl border flex items-center justify-center" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)' }}>
          <div className="flex items-end gap-1 h-12">
            {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
              <div
                key={i}
                className="w-5 rounded-t"
                style={{ height: `${h}%`, background: i === 5 ? 'var(--interactive-primary)' : 'var(--interactive-primary-subtle)' }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    'confirmation': (
      <div className="flex items-center justify-center py-4">
        <div className="w-52 rounded-2xl border overflow-hidden" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)', boxShadow: 'var(--shadow-xl)' }}>
          <div className="p-4 flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--color-error-50)' }}>
              <AlertCircle className="w-5 h-5" style={{ color: 'var(--color-error-500)' }} />
            </div>
            <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>确认删除 3 条记录？</div>
            <div className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>此操作不可撤销。</div>
          </div>
          <div className="flex border-t" style={{ borderColor: 'var(--surface-border)' }}>
            <span className="flex-1 text-center py-2.5 text-[10px] font-semibold border-r" style={{ borderColor: 'var(--surface-border)', color: 'var(--text-secondary)' }}>取消</span>
            <span className="flex-1 text-center py-2.5 text-[10px] font-semibold" style={{ color: 'var(--color-error-600)' }}>删除</span>
          </div>
        </div>
      </div>
    ),
  }

  return mockups[id] ?? null
}

export default function PatternsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const activeId = searchParams.get('p') ?? null

  const activePattern = activeId ? patterns.find(p => p.id === activeId) : null

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          UX 规范模式
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          适用于常见 B2B 设计挑战的规范解决方案。点击任意规范查看详情。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pattern list */}
        <div className="space-y-3">
          {patterns.map(pattern => (
            <button
              key={pattern.id}
              onClick={() => router.push(`/patterns?p=${pattern.id}`, { scroll: false })}
              className="w-full card text-left p-4 transition-all duration-150"
              style={
                activePattern?.id === pattern.id
                  ? { borderColor: 'var(--interactive-primary)', boxShadow: '0 0 0 2px rgba(99,102,241,0.2)' }
                  : {}
              }
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {pattern.title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {pattern.description}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {pattern.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                        style={{ background: 'var(--surface-hover)', color: 'var(--text-tertiary)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--interactive-primary)' }} />
              </div>
            </button>
          ))}
        </div>

        {/* Pattern detail */}
        <div className="lg:col-span-2">
          {activePattern ? (
            <div className="card p-6 space-y-6 animate-fade-in">
              <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {activePattern.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {activePattern.description}
                </p>
              </div>

              {/* Mockup */}
              <div
                className="rounded-xl border overflow-hidden"
                style={{ background: 'var(--surface-hover)', borderColor: 'var(--surface-border)' }}
              >
                <div
                  className="px-3 py-2 border-b text-xs font-mono"
                  style={{ borderColor: 'var(--surface-border)', color: 'var(--text-tertiary)' }}
                >
                  预览 · {activePattern.id}
                </div>
                <PatternMockup id={activePattern.id} />
              </div>

              {/* When to use */}
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  适用场景
                </h3>
                <ul className="space-y-2">
                  {activePattern.whenToUse.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success-500)' }} />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related components */}
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  相关组件
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activePattern.relatedComponents.map(slug => {
                    const comp = patterns.find(p => p.id === slug)
                    return (
                      <Link
                        key={slug}
                        href={`/components/${slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150"
                        style={{
                          background: 'var(--surface-card)',
                          borderColor: 'var(--surface-border)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}
                        <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--interactive-primary)' }} />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="card flex flex-col items-center justify-center h-72 gap-3"
              style={{ borderStyle: 'dashed' }}
            >
              <div className="text-3xl">⟵</div>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                选择规范以查看详情
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
