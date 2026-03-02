'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home, Palette, Box, Layout, BookOpen,
  ChevronDown, ChevronRight, X, Layers,
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
    label: '基础规范',
    href: '/foundations',
    icon: Palette,
    children: [
      { label: '颜色', href: '/foundations?tab=colors' },
      { label: '排版', href: '/foundations?tab=typography' },
      { label: '间距', href: '/foundations?tab=spacing' },
      { label: '阴影', href: '/foundations?tab=shadows' },
      { label: '圆角', href: '/foundations?tab=radius' },
    ],
  },
  {
    id: 'components',
    label: '组件库',
    href: '/components',
    icon: Box,
    children: [
      { label: 'Button', href: '/components/button' },
      { label: 'Link Button', href: '/components/link-button' },
      { label: 'Input Field', href: '/components/input' },
      { label: 'Badge', href: '/components/badge' },
      { label: 'Table', href: '/components/table' },
      { label: 'Modal', href: '/components/modal' },
      { label: 'Dropdown', href: '/components/dropdown' },
      { label: 'Tooltip', href: '/components/tooltip' },
      { label: 'Toast', href: '/components/toast' },
      { label: 'Data Card', href: '/components/data-card' },
      { label: 'Navigation', href: '/components/navigation' },
    ],
  },
  {
    id: 'patterns',
    label: '规范模式',
    href: '/patterns',
    icon: Layout,
    children: [
      { label: '空状态', href: '/patterns?p=empty-states' },
      { label: '加载骨架屏', href: '/patterns?p=loading' },
      { label: '表单布局', href: '/patterns?p=forms' },
      { label: '数据表格', href: '/patterns?p=data-table' },
      { label: '仪表盘布局', href: '/patterns?p=dashboard' },
      { label: '确认对话框', href: '/patterns?p=confirmation' },
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
    patterns: false,
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
      <div className="flex items-center gap-3 px-5 py-[18px] border-b" style={{ borderColor: 'var(--surface-border)' }}>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, var(--interactive-primary) 0%, #818cf8 100%)' }}
        >
          <Layers className="w-4 h-4 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
            Pulse DS
          </div>
          <div className="text-[10px] uppercase tracking-widest font-medium" style={{ color: 'var(--text-tertiary)' }}>
            设计系统
          </div>
        </div>
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
