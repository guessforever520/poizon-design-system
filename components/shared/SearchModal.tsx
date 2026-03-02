'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, Palette, Box, Layout, ArrowRight } from 'lucide-react'

interface SearchResult {
  label: string
  description: string
  href: string
  section: 'Foundations' | 'Components' | 'Patterns'
}

const ALL_RESULTS: SearchResult[] = [
  // Foundations
  { label: '颜色', description: '主色、中性色及语义颜色色板', href: '/foundations?tab=colors', section: 'Foundations' },
  { label: '排版', description: '字体规范、字体家族、字重及行高', href: '/foundations?tab=typography', section: 'Foundations' },
  { label: '间距', description: '以 4px 为基础单位的间距规范', href: '/foundations?tab=spacing', section: 'Foundations' },
  { label: '阴影与层级', description: '层级与阴影变量', href: '/foundations?tab=shadows', section: 'Foundations' },
  { label: '圆角', description: '圆角变量', href: '/foundations?tab=radius', section: 'Foundations' },
  // Components
  { label: 'Button', description: '主要、次要、幽灵及危险变体', href: '/components/button', section: 'Components' },
  { label: 'Input Field', description: '带标签、状态及校验的文本输入框', href: '/components/input', section: 'Components' },
  { label: 'Badge', description: '状态指示器与标签', href: '/components/badge', section: 'Components' },
  { label: 'Table', description: '支持排序与分页的数据表格', href: '/components/table', section: 'Components' },
  { label: 'Modal', description: '用于确认操作和表单的对话框遮罩层', href: '/components/modal', section: 'Components' },
  { label: 'Dropdown', description: '下拉选择菜单与选项列表', href: '/components/dropdown', section: 'Components' },
  { label: 'Tooltip', description: '悬停时的上下文提示信息', href: '/components/tooltip', section: 'Components' },
  { label: 'Toast', description: '短暂通知消息', href: '/components/toast', section: 'Components' },
  { label: 'Data Card', description: '仪表盘专用 KPI 与统计数据卡片', href: '/components/data-card', section: 'Components' },
  { label: 'Navigation', description: '侧边栏导航组件', href: '/components/navigation', section: 'Components' },
  // Patterns
  { label: '空状态', description: '零数据与无结果状态', href: '/patterns?p=empty-states', section: 'Patterns' },
  { label: '加载骨架屏', description: '加载状态的骨架屏', href: '/patterns?p=loading', section: 'Patterns' },
  { label: '表单布局', description: '单列与多列表单结构', href: '/patterns?p=forms', section: 'Patterns' },
  { label: '带筛选器的数据表格', description: '可筛选、可排序的数据表格', href: '/patterns?p=data-table', section: 'Patterns' },
  { label: '仪表盘布局', description: 'KPI 网格与仪表盘排版', href: '/patterns?p=dashboard', section: 'Patterns' },
  { label: '确认对话框', description: '破坏性操作的确认规范', href: '/patterns?p=confirmation', section: 'Patterns' },
]

const SECTION_ICONS: Record<string, React.ElementType> = {
  Foundations: Palette,
  Components: Box,
  Patterns: Layout,
}

const SECTION_LABELS: Record<string, string> = {
  Foundations: '基础规范',
  Components: '组件',
  Patterns: '规范',
}

const SECTION_COLORS: Record<string, string> = {
  Foundations: 'var(--color-info-600)',
  Components: 'var(--interactive-primary)',
  Patterns: 'var(--color-success-600)',
}

interface SearchModalProps {
  open: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filtered = query.trim()
    ? ALL_RESULTS.filter(r =>
        r.label.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase())
      )
    : ALL_RESULTS.slice(0, 8)

  const grouped = filtered.reduce<Record<string, SearchResult[]>>((acc, r) => {
    if (!acc[r.section]) acc[r.section] = []
    acc[r.section].push(r)
    return acc
  }, {})

  const flat = filtered

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const handleSelect = useCallback((href: string) => {
    router.push(href)
    onClose()
  }, [router, onClose])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex(i => Math.min(i + 1, flat.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex(i => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter' && flat[activeIndex]) {
        handleSelect(flat[activeIndex].href)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, flat, activeIndex, onClose, handleSelect])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 animate-fade-in"
      style={{ background: 'var(--surface-overlay)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl overflow-hidden animate-scale-in"
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--surface-border)',
          boxShadow: 'var(--shadow-2xl)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Input */}
        <div
          className="flex items-center gap-3 px-4 py-3.5"
          style={{ borderBottom: '1px solid var(--surface-border)' }}
        >
          <Search className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-tertiary)' }} />
          <input
            ref={inputRef}
            value={query}
            onChange={e => { setQuery(e.target.value); setActiveIndex(0) }}
            placeholder="搜索组件、变量、规范..."
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: 'var(--text-primary)' }}
          />
          <button onClick={onClose} style={{ color: 'var(--text-tertiary)' }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[380px] overflow-y-auto p-2">
          {flat.length === 0 ? (
            <div className="py-10 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
              无 &ldquo;{query}&rdquo; 的搜索结果
            </div>
          ) : (
            Object.entries(grouped).map(([section, results]) => {
              const Icon = SECTION_ICONS[section]
              const color = SECTION_COLORS[section]
              return (
                <div key={section} className="mb-3">
                  <div className="flex items-center gap-1.5 px-2 py-1 mb-1">
                    <Icon className="w-3.5 h-3.5" style={{ color }} />
                    <span className="section-label">{SECTION_LABELS[section] ?? section}</span>
                  </div>
                  {results.map(r => {
                    const globalIdx = flat.indexOf(r)
                    const isActive = globalIdx === activeIndex
                    return (
                      <button
                        key={r.href}
                        onClick={() => handleSelect(r.href)}
                        onMouseEnter={() => setActiveIndex(globalIdx)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-100 group"
                        style={{
                          background: isActive ? 'var(--interactive-primary-subtle)' : 'transparent',
                        }}
                      >
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-sm font-medium truncate"
                            style={{ color: isActive ? 'var(--interactive-primary)' : 'var(--text-primary)' }}
                          >
                            {r.label}
                          </div>
                          <div className="text-xs truncate mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                            {r.description}
                          </div>
                        </div>
                        <ArrowRight
                          className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: 'var(--interactive-primary)' }}
                        />
                      </button>
                    )
                  })}
                </div>
              )
            })
          )}
        </div>

        {/* Footer */}
        <div
          className="px-4 py-2.5 flex items-center gap-4 text-xs"
          style={{
            borderTop: '1px solid var(--surface-border)',
            color: 'var(--text-tertiary)',
          }}
        >
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded font-mono" style={{ background: 'var(--surface-border)' }}>↑↓</kbd>
            导航
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded font-mono" style={{ background: 'var(--surface-border)' }}>↵</kbd>
            选择
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded font-mono" style={{ background: 'var(--surface-border)' }}>Esc</kbd>
            关闭
          </span>
        </div>
      </div>
    </div>
  )
}
