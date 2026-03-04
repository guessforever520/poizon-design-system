'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

const LABELS: Record<string, string> = {
  // Top-level sections — match sidebar labels exactly
  foundations: '全局样式',
  components:  '组件库',
  resources:   '资源',
  // 全局样式 sub-pages
  colors:      '颜色',
  typography:  '排版',
  spacing:     '间距',
  shadows:     '阴影',
  radius:      '圆角',
  // 组件库 sub-pages
  button:         '按钮',
  'link-button':  '文字链接',
  input:          '输入框',
  badge:          '标签',
  table:          '表格',
  modal:          '对话框',
  dropdown:       '下拉菜单',
  tooltip:        '文字提示',
  toast:          '全局提示',
  'data-card':    '数据卡片',
  navigation:     '导航菜单',
}

export default function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.map((seg, i) => ({
    label: LABELS[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' '),
    href: '/' + segments.slice(0, i + 1).join('/'),
    isLast: i === segments.length - 1,
  }))

  return (
    <nav className="flex items-center gap-1.5 text-[13px]">
      <Link
        href="/"
        className="flex items-center gap-1 transition-colors duration-150"
        style={{ color: 'var(--text-tertiary)' }}
      >
        <Home className="w-3.5 h-3.5" />
      </Link>
      {crumbs.map(crumb => (
        <span key={crumb.href} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5" style={{ color: 'var(--text-tertiary)' }} />
          {crumb.isLast ? (
            <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
              {crumb.label}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="transition-colors duration-150"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}
