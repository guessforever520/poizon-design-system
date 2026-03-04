'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home, Palette, Box, BookOpen,
  ChevronDown, ChevronRight, X,
} from 'lucide-react'

interface NavChild {
  label: string
  href: string
}

interface NavSection {
  id: string
  label: string
  href: string
  icon: React.ElementType
  children: NavChild[]
}

const NAV: NavSection[] = [
  {
    id: 'foundations',
    label: '全局样式',
    href: '/foundations',
    icon: Palette,
    children: [
      { label: '颜色 Colors', href: '/foundations/colors' },
      { label: '排版 Typography', href: '/foundations/typography' },
      { label: '间距 Spacing', href: '/foundations/spacing' },
      { label: '阴影 Shadows', href: '/foundations/shadows' },
      { label: '圆角 Border Radius', href: '/foundations/radius' },
    ],
  },
  {
    id: 'components',
    label: '组件库',
    href: '/components',
    icon: Box,
    children: [
      { label: '按钮 Button', href: '/components/button' },
      { label: '文字链接 Link Button', href: '/components/link-button' },
      { label: '输入框 Input Field', href: '/components/input' },
      { label: '标签 Badge', href: '/components/badge' },
      { label: '表格 Table', href: '/components/table' },
      { label: '对话框 Modal', href: '/components/modal' },
      { label: '下拉菜单 Dropdown', href: '/components/dropdown' },
      { label: '文字提示 Tooltip', href: '/components/tooltip' },
      { label: '全局提示 Toast', href: '/components/toast' },
      { label: '数据卡片 Data Card', href: '/components/data-card' },
      { label: '导航菜单 Navigation', href: '/components/navigation' },
      { label: '面包屑导航 Breadcrumb', href: '/components/breadcrumb' },
      { label: '复选框 Checkbox', href: '/components/checkbox' },
    ],
  },
  {
    id: 'resources',
    label: '资源',
    href: '/resources',
    icon: BookOpen,
    children: [],
  },
]

interface SidebarProps {
  mobileOpen: boolean
  onMobileClose: () => void
}

export default function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    foundations: false,
    components: false,
    resources: false,
  })

  useEffect(() => {
    const activeSection = NAV.find(s => pathname.startsWith(s.href))
    if (activeSection) {
      setExpanded(prev => ({ ...prev, [activeSection.id]: true }))
    }
  }, [pathname])

  const toggle = (id: string) =>
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  const isChildActive = (href: string) => pathname === href.split('?')[0]

  const SidebarContent = () => (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Logo */}
      <div className="flex items-center px-5 h-[60px] border-b" style={{ borderColor: 'var(--surface-border)' }}>
        <img
          src="/images/sidebar-logo.png"
          alt="POIZON GLOBAL Design System"
          className="h-9 w-auto flex-shrink-0"
        />
        <button
          onClick={onMobileClose}
          className="ml-auto p-1.5 rounded-md lg:hidden"
          style={{ color: 'var(--text-tertiary)' }}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Home */}
      <div className="px-3 pt-3 pb-1">
        <Link
          href="/"
          onClick={onMobileClose}
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150"
          style={
            pathname === '/'
              ? { background: 'var(--interactive-primary)', color: '#fff' }
              : { color: 'var(--text-secondary)' }
          }
        >
          <Home className="w-4 h-4 flex-shrink-0" />
          首页
        </Link>
      </div>

      {/* Nav sections */}
      <nav className="flex-1 px-3 pb-4 overflow-y-auto space-y-0.5">
        {NAV.map(section => {
          const Icon = section.icon
          const isActive = pathname.startsWith(section.href)
          const isOpen = expanded[section.id]

          return (
            <div key={section.id}>
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 group"
                style={
                  isActive && pathname === section.href
                    ? { background: 'var(--interactive-primary)', color: '#fff' }
                    : isActive
                    ? { color: 'var(--interactive-primary)', background: 'var(--interactive-primary-subtle)' }
                    : { color: 'var(--text-secondary)' }
                }
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 text-left">{section.label}</span>
                {section.children.length > 0 && (
                  isOpen
                    ? <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    : <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                )}
              </button>

              {isOpen && section.children.length > 0 && (
                <div className="mt-0.5 ml-4 pl-3 border-l space-y-0.5" style={{ borderColor: 'var(--surface-border)' }}>
                  {section.children.map(child => {
                    const active = isChildActive(child.href)
                    return (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onMobileClose}
                        className="block px-3 py-1.5 rounded-md text-[13px] transition-all duration-150"
                        style={
                          active
                            ? { color: 'var(--interactive-primary)', fontWeight: 500, background: 'var(--interactive-primary-subtle)' }
                            : { color: 'var(--text-tertiary)' }
                        }
                      >
                        {child.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t" style={{ borderColor: 'var(--surface-border)' }}>
        <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
          v2.1.0 · 更新于 2026 年 3 月
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <aside
        className="hidden lg:flex flex-col w-60 fixed left-0 top-0 bottom-0 z-30"
        style={{
          background: 'var(--surface-sidebar)',
          borderRight: '1px solid var(--surface-border)',
        }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'var(--surface-overlay)' }}
          onClick={onMobileClose}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-72 z-50 flex flex-col lg:hidden transition-transform duration-200 ${
          mobileOpen ? 'translate-x-0 animate-slide-in-left' : '-translate-x-full'
        }`}
        style={{
          background: 'var(--surface-sidebar)',
          borderRight: '1px solid var(--surface-border)',
        }}
      >
        <SidebarContent />
      </aside>
    </>
  )
}
