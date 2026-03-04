'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, ArrowRight } from 'lucide-react'

interface SearchResult {
  label: string
  description: string
  href: string
  section: 'Foundations' | 'Components'
}

const ALL_RESULTS: SearchResult[] = [
  // 全局样式 — matches sidebar /foundations/* routes exactly
  { label: 'Colors 颜色',         description: '主色、中性色及语义颜色色板',    href: '/foundations/colors',     section: 'Foundations' },
  { label: 'Typography 排版',     description: '字体规范、字体家族、字重及行高', href: '/foundations/typography', section: 'Foundations' },
  { label: 'Spacing 间距',        description: '以 4px 为基础单位的间距规范',  href: '/foundations/spacing',    section: 'Foundations' },
  { label: 'Shadows 阴影',        description: '通过阴影层级建立视觉深度',      href: '/foundations/shadows',    section: 'Foundations' },
  { label: 'Border Radius 圆角',  description: '统一的圆角规范，保持界面一致性', href: '/foundations/radius',     section: 'Foundations' },
  // 组件库 — matches sidebar /components/* routes exactly
  { label: '按钮 Button',         description: '主要、次要、幽灵及危险变体',    href: '/components/button',      section: 'Components' },
  { label: '文字链接 Link Button', description: '内联文字链接样式按钮',          href: '/components/link-button', section: 'Components' },
  { label: '输入框 Input Field',  description: '带标签、状态及校验的文本输入框', href: '/components/input',       section: 'Components' },
  { label: '标签 Badge',          description: '状态指示器与分类标签',          href: '/components/badge',       section: 'Components' },
  { label: '表格 Table',          description: '支持排序与分页的数据表格',       href: '/components/table',       section: 'Components' },
  { label: '对话框 Modal',        description: '用于确认操作和表单的对话框',     href: '/components/modal',       section: 'Components' },
  { label: '下拉菜单 Dropdown',   description: '下拉选择菜单与选项列表',         href: '/components/dropdown',    section: 'Components' },
  { label: '文字提示 Tooltip',    description: '悬停时的上下文提示信息',         href: '/components/tooltip',     section: 'Components' },
  { label: '全局提示 Toast',      description: '短暂的全局通知消息',             href: '/components/toast',       section: 'Components' },
  { label: '数据卡片 Data Card',  description: '仪表盘专用 KPI 与统计数据卡片', href: '/components/data-card',   section: 'Components' },
  { label: '导航菜单 Navigation', description: '侧边栏导航组件',                 href: '/components/navigation',  section: 'Components' },
  { label: '面包屑导航 Breadcrumb', description: '多层级页面的路径导航组件',      href: '/components/breadcrumb',  section: 'Components' },
  { label: '复选框 Checkbox',       description: '支持选中、半选与错误状态的多选组件', href: '/components/checkbox', section: 'Components' },
]

const SECTION_LABELS: Record<string, string> = {
  Foundations: '全局样式',
  Components:  '组件库',
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
        className="w-full max-w-xl overflow-hidden animate-scale-in"
        style={{
          background: '#ffffff',
          border: '1px solid #f1f1f5',
          borderRadius: '16px',
          boxShadow: '0px 8px 24px 0px rgba(20,21,26,0.15)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search input row */}
        <div
          className="flex items-center gap-[12px] px-[16px] h-[49px] shrink-0"
          style={{ borderBottom: '1px solid #f1f1f5' }}
        >
          <Search className="w-4 h-4 flex-shrink-0" style={{ color: '#9ca3af' }} />
          <input
            ref={inputRef}
            value={query}
            onChange={e => { setQuery(e.target.value); setActiveIndex(0) }}
            placeholder="搜索组件、变量、规范..."
            className="flex-1 bg-transparent text-[14px] outline-none focus-visible:outline-none placeholder:text-[#9ca3af]"
            style={{ color: 'var(--text-primary)' }}
          />
          <button onClick={onClose} className="flex-shrink-0" style={{ color: '#9ca3af' }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="h-[380px] overflow-y-auto pl-[8px] pr-[13px] pt-[8px] flex flex-col gap-[8px]">
          {flat.length === 0 ? (
            <div className="py-10 text-center text-[14px]" style={{ color: '#aaaabb' }}>
              无 &ldquo;{query}&rdquo; 的搜索结果
            </div>
          ) : (
            Object.entries(grouped).flatMap(([section, results], idx) => {
              const sectionEl = (
                <div key={section}>
                  {/* Section label — text only, no icon */}
                  <div className="px-[12px] py-[8px]">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.88px]"
                      style={{ color: '#aaaabb' }}
                    >
                      {SECTION_LABELS[section] ?? section}
                    </span>
                  </div>

                  {/* Result rows */}
                  {results.map(r => {
                    const globalIdx = flat.indexOf(r)
                    const isActive = globalIdx === activeIndex
                    return (
                      <button
                        key={r.href}
                        onClick={() => handleSelect(r.href)}
                        onMouseEnter={() => setActiveIndex(globalIdx)}
                        className="w-full flex items-center h-[58px] pl-[12px] pr-[40px] rounded-[8px] text-left transition-all duration-100 group"
                        style={{
                          background: isActive ? '#f4fffc' : 'transparent',
                        }}
                      >
                        <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
                          <div
                            className="text-[14px] font-medium leading-[20px] truncate"
                            style={{ color: isActive ? '#00dbdb' : '#14151a' }}
                          >
                            {r.label}
                          </div>
                          <div
                            className="text-[12px] leading-[16px] truncate"
                            style={{ color: '#aaaabb' }}
                          >
                            {r.description}
                          </div>
                        </div>
                        <ArrowRight
                          className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: '#00dbdb' }}
                        />
                      </button>
                    )
                  })}
                </div>
              )

              if (idx === 0) return [sectionEl]
              return [
                <hr key={`divider-${section}`} className="border-0 border-t border-[#f1f1f5] shrink-0 mx-0 my-0" />,
                sectionEl,
              ]
            })
          )}
        </div>

        {/* Footer */}
        <div
          className="h-[41px] pl-[16px] flex items-center gap-[16px]"
          style={{ borderTop: '1px solid #f1f1f5' }}
        >
          {[
            { keys: '↑↓', label: '导航' },
            { keys: '↵',  label: '选择' },
            { keys: 'Esc', label: '关闭' },
          ].map(({ keys, label }) => (
            <span key={label} className="flex items-center gap-[4px]">
              <kbd
                className="px-[6px] py-[2px] rounded-[4px] font-mono text-[12px] leading-[16px]"
                style={{ background: '#f1f1f5', color: '#aaaabb' }}
              >
                {keys}
              </kbd>
              <span className="text-[12px] leading-[16px]" style={{ color: '#aaaabb' }}>
                {label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
