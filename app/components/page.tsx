import Link from 'next/link'
import { ArrowRight, Box } from 'lucide-react'
import { components } from '@/lib/data'

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  Actions:      { bg: 'var(--interactive-primary-subtle)', color: 'var(--interactive-primary)' },
  Forms:        { bg: 'var(--color-info-50)', color: 'var(--color-info-600)' },
  Display:      { bg: 'var(--color-warning-50)', color: 'var(--color-warning-600)' },
  'Data Display':{ bg: 'var(--color-success-50)', color: 'var(--color-success-600)' },
  Overlays:     { bg: 'var(--color-error-50)', color: 'var(--color-error-600)' },
  Feedback:     { bg: 'var(--color-warning-50)', color: 'var(--color-warning-700)' },
  Layout:       { bg: 'var(--color-neutral-100)', color: 'var(--color-neutral-600)' },
}

export default function ComponentsPage() {
  const seen = new Set<string>()
  const categories = components.map(c => c.category).filter(cat => seen.has(cat) ? false : (seen.add(cat), true))

  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          组件库
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {components.length} 个生产就绪组件——每个均提供实时演示、Props 文档及使用规范。
        </p>
      </div>

      {categories.map(cat => {
        const catComponents = components.filter(c => c.category === cat)
        const catStyle = CATEGORY_COLORS[cat] ?? { bg: 'var(--surface-hover)', color: 'var(--text-secondary)' }

        return (
          <section key={cat}>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="section-label px-2 py-1 rounded-md"
                style={{ background: catStyle.bg, color: catStyle.color }}
              >
                {cat}
              </span>
              <div className="h-px flex-1" style={{ background: 'var(--surface-border)' }} />
              <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                {catComponents.length} 个组件
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {catComponents.map(comp => (
                <div key={comp.slug} className="card card-hover flex flex-col overflow-hidden">
                  <div
                    className="h-28 flex items-center justify-center"
                    style={{ background: 'var(--surface-hover)' }}
                  >
                    <ComponentPreview slug={comp.slug} />
                  </div>

                  <div className="p-4 flex-1 flex flex-col gap-3">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
                          {comp.name}
                        </h3>
                        <span
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                          style={{ background: catStyle.bg, color: catStyle.color }}
                        >
                          {comp.category}
                        </span>
                      </div>
                      <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {comp.description}
                      </p>
                    </div>

                    <Link
                      href={`/components/${comp.slug}`}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
                      style={{ color: 'var(--interactive-primary)' }}
                    >
                      查看详情
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

function ComponentPreview({ slug }: { slug: string }) {
  const previews: Record<string, React.ReactNode> = {
    button: (
      <div className="flex gap-2 flex-wrap justify-center">
        {['primary', 'secondary', 'ghost', 'danger'].map(v => (
          <span
            key={v}
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium"
            style={
              v === 'primary' ? { background: 'var(--interactive-primary)', color: '#fff' }
              : v === 'secondary' ? { background: 'var(--surface-card)', color: 'var(--text-primary)', border: '1px solid var(--surface-border)' }
              : v === 'ghost' ? { color: 'var(--text-secondary)' }
              : { background: 'var(--color-error-600)', color: '#fff' }
            }
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </span>
        ))}
      </div>
    ),
    input: (
      <div className="w-48 space-y-2">
        <div className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>邮箱</div>
        <div
          className="w-full px-3 py-2 rounded-lg text-xs border"
          style={{
            background: 'var(--surface-card)',
            borderColor: 'var(--surface-border)',
            color: 'var(--text-tertiary)',
          }}
        >
          you@company.com
        </div>
      </div>
    ),
    badge: (
      <div className="flex gap-1.5 flex-wrap justify-center">
        {[
          { label: '活跃', bg: 'var(--color-success-50)', c: 'var(--color-success-700)' },
          { label: '待处理', bg: 'var(--color-warning-50)', c: 'var(--color-warning-700)' },
          { label: '错误', bg: 'var(--color-error-50)', c: 'var(--color-error-700)' },
          { label: '信息', bg: 'var(--color-info-50)', c: 'var(--color-info-700)' },
        ].map(b => (
          <span key={b.label} className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: b.bg, color: b.c }}>
            {b.label}
          </span>
        ))}
      </div>
    ),
    table: (
      <div className="w-52 text-xs rounded-lg overflow-hidden border" style={{ borderColor: 'var(--surface-border)' }}>
        <div className="flex" style={{ background: 'var(--surface-hover)' }}>
          {['名称', '状态', '金额'].map(h => (
            <div key={h} className="flex-1 px-2 py-1.5 font-semibold" style={{ color: 'var(--text-secondary)' }}>{h}</div>
          ))}
        </div>
        {[['Acme', '活跃', '$1.2k'], ['Globex', '草稿', '$800']].map((row, i) => (
          <div key={i} className="flex border-t" style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-card)' }}>
            {row.map((cell, j) => (
              <div key={j} className="flex-1 px-2 py-1.5 truncate" style={{ color: 'var(--text-primary)' }}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    ),
    modal: (
      <div className="relative w-44">
        <div className="w-full rounded-xl overflow-hidden border" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)', boxShadow: 'var(--shadow-xl)' }}>
          <div className="p-3 border-b" style={{ borderColor: 'var(--surface-border)' }}>
            <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>确认操作</div>
          </div>
          <div className="p-3">
            <div className="text-[10px] mb-3" style={{ color: 'var(--text-secondary)' }}>此操作不可撤销。</div>
            <div className="flex gap-2 justify-end">
              <span className="text-[10px] px-2 py-1 rounded border font-medium" style={{ borderColor: 'var(--surface-border)', color: 'var(--text-secondary)' }}>取消</span>
              <span className="text-[10px] px-2 py-1 rounded font-medium" style={{ background: 'var(--color-error-600)', color: '#fff' }}>删除</span>
            </div>
          </div>
        </div>
      </div>
    ),
    dropdown: (
      <div className="w-40">
        <div className="w-full px-3 py-2 rounded-lg text-xs border flex items-center justify-between" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)', color: 'var(--text-primary)' }}>
          <span>北美洲</span>
          <span style={{ color: 'var(--text-tertiary)' }}>▾</span>
        </div>
        <div className="mt-1 rounded-lg border overflow-hidden" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)', boxShadow: 'var(--shadow-md)' }}>
          {['欧洲', '亚太地区'].map(opt => (
            <div key={opt} className="px-3 py-1.5 text-xs" style={{ color: 'var(--text-primary)' }}>{opt}</div>
          ))}
        </div>
      </div>
    ),
    tooltip: (
      <div className="flex flex-col items-center gap-1">
        <div className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium" style={{ background: 'var(--color-neutral-900)', color: '#fff' }}>
          账户设置
        </div>
        <div className="w-0 h-0" style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: `5px solid var(--color-neutral-900)` }} />
        <div className="w-8 h-8 rounded-lg flex items-center justify-center border" style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)' }}>
          <span className="text-sm">⚙</span>
        </div>
      </div>
    ),
    toast: (
      <div className="w-52 rounded-xl border p-3 flex items-start gap-2.5" style={{ background: 'var(--surface-card)', borderColor: 'var(--color-success-500)', boxShadow: 'var(--shadow-lg)' }}>
        <span className="text-base">✓</span>
        <div>
          <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>更改已保存</div>
          <div className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>个人资料已成功更新。</div>
        </div>
      </div>
    ),
    'data-card': (
      <div className="w-44 card p-4">
        <div className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>月营收</div>
        <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>$124.5k</div>
        <div className="text-xs font-semibold flex items-center gap-1" style={{ color: 'var(--color-success-600)' }}>
          ↑ +18% 对比上月
        </div>
      </div>
    ),
    navigation: (
      <div className="w-36 rounded-xl border overflow-hidden text-[11px]" style={{ background: 'var(--surface-sidebar)', borderColor: 'var(--surface-border)' }}>
        {[
          { label: '仪表盘', active: false },
          { label: '组件库', active: true },
          { label: '规范模式', active: false },
        ].map(item => (
          <div
            key={item.label}
            className="px-3 py-2 font-medium"
            style={item.active
              ? { background: 'var(--interactive-primary)', color: '#fff' }
              : { color: 'var(--text-secondary)' }
            }
          >
            {item.label}
          </div>
        ))}
      </div>
    ),
  }

  return previews[slug] ?? (
    <div className="flex items-center justify-center">
      <Box className="w-8 h-8" style={{ color: 'var(--text-tertiary)' }} />
    </div>
  )
}
