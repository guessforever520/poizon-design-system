'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

const LABELS: Record<string, string> = {
  foundations: '基础规范',
  components: '组件库',
  patterns: '规范模式',
  resources: '资源',
  button: 'Button',
  input: 'Input Field',
  badge: 'Badge',
  table: 'Table',
  modal: 'Modal',
  dropdown: 'Dropdown',
  tooltip: 'Tooltip',
  toast: 'Toast',
  'data-card': 'Data Card',
  navigation: 'Navigation',
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
