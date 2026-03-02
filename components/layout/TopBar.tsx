'use client'

import { useEffect } from 'react'
import { Search, Moon, Sun, Menu } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import Breadcrumb from './Breadcrumb'

interface TopBarProps {
  onMenuClick: () => void
  onSearchOpen: () => void
}

export default function TopBar({ onMenuClick, onSearchOpen }: TopBarProps) {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onSearchOpen()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onSearchOpen])

  return (
    <header
      className="fixed top-0 right-0 left-0 lg:left-60 h-14 z-20 flex items-center px-4 gap-3 backdrop-blur-md"
      style={{
        background: 'var(--surface-topbar)',
        borderBottom: '1px solid var(--surface-border)',
      }}
    >
      {/* Mobile hamburger + logo */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg transition-colors"
        style={{ color: 'var(--text-secondary)' }}
        aria-label="打开菜单"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="lg:hidden font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
        Pulse DS
      </div>

      {/* Breadcrumb (desktop) */}
      <div className="hidden lg:block">
        <Breadcrumb />
      </div>

      <div className="flex-1" />

      {/* Search trigger */}
      <button
        onClick={onSearchOpen}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-150 border"
        style={{
          background: 'var(--surface-card)',
          borderColor: 'var(--surface-border)',
          color: 'var(--text-tertiary)',
          minWidth: '200px',
        }}
      >
        <Search className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="flex-1 text-left text-[13px]">搜索...</span>
        <span className="hidden sm:flex items-center gap-0.5 text-[11px] opacity-60">
          <kbd
            className="px-1.5 py-0.5 rounded text-[11px] font-mono font-medium"
            style={{ background: 'var(--surface-border)', color: 'var(--text-secondary)' }}
          >
            ⌘
          </kbd>
          <kbd
            className="px-1.5 py-0.5 rounded text-[11px] font-mono font-medium"
            style={{ background: 'var(--surface-border)', color: 'var(--text-secondary)' }}
          >
            K
          </kbd>
        </span>
      </button>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-all duration-150"
        style={{ color: 'var(--text-secondary)' }}
        aria-label={`切换到${theme === 'light' ? '深色' : '浅色'}模式`}
      >
        {theme === 'light'
          ? <Moon className="w-4 h-4" />
          : <Sun className="w-4 h-4" />
        }
      </button>
    </header>
  )
}
