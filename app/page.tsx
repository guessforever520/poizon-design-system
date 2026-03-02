import Link from 'next/link'
import { Palette, Box, Layout, BookOpen, ArrowRight, Star, Zap, Users, GitBranch } from 'lucide-react'

const SECTIONS = [
  {
    href: '/foundations',
    icon: Palette,
    label: '基础规范',
    description: '颜色、排版、间距、阴影及圆角变量，支持一键复制。',
    tag: '5 个类别',
    color: 'var(--color-info-500)',
    bg: 'var(--color-info-50)',
  },
  {
    href: '/components',
    icon: Box,
    label: '组件库',
    description: '每个 UI 组件均提供实时演示、Props 文档、使用规范及代码示例。',
    tag: '10 个组件',
    color: 'var(--interactive-primary)',
    bg: 'var(--interactive-primary-subtle)',
  },
  {
    href: '/patterns',
    icon: Layout,
    label: '规范模式',
    description: '适用于 B2B 场景的 UX 规范：空状态、表单、仪表盘等。',
    tag: '6 种规范',
    color: 'var(--color-success-600)',
    bg: 'var(--color-success-50)',
  },
  {
    href: '/resources',
    icon: BookOpen,
    label: '资源',
    description: 'Figma 组件库、设计变量导出、AI 工具推荐及团队联系方式。',
    tag: '工具 & 链接',
    color: 'var(--color-warning-600)',
    bg: 'var(--color-warning-50)',
  },
]

const STATS = [
  { label: '组件', value: '10', icon: Box },
  { label: '设计变量', value: '60+', icon: Star },
  { label: 'UX 规范', value: '6', icon: Layout },
  { label: '团队成员', value: '3', icon: Users },
]

export default function HomePage() {
  return (
    <div className="animate-fade-in space-y-12">
      {/* Hero */}
      <section className="pt-6 pb-4">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{
            background: 'var(--interactive-primary-subtle)',
            color: 'var(--interactive-primary)',
          }}
        >
          <Zap className="w-3.5 h-3.5" />
          v2.1.0 · 更新于 2026 年 3 月
        </div>

        <h1
          className="text-5xl font-extrabold tracking-tight leading-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          <span className="gradient-text">Pulse</span>{' '}
          设计系统
        </h1>

        <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          设计与研发的唯一标准来源。使用一致的设计变量、无障碍组件和经过验证的 UX 规范，更快构建产品。
        </p>

        <div className="flex items-center gap-3 mt-8">
          <Link
            href="/components"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
            style={{ background: 'var(--interactive-primary)', color: '#fff' }}
          >
            浏览组件
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/foundations"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-150"
            style={{
              background: 'var(--surface-card)',
              color: 'var(--text-primary)',
              borderColor: 'var(--surface-border)',
            }}
          >
            查看变量
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
        style={{ background: 'var(--surface-border)' }}
      >
        {STATS.map(s => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              className="flex items-center gap-4 px-6 py-4"
              style={{ background: 'var(--surface-card)' }}
            >
              <Icon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--interactive-primary)' }} />
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {s.value}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {s.label}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Getting Started Banner */}
      <div
        className="rounded-2xl p-6 border relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(167,139,250,0.06) 100%)',
          borderColor: 'rgba(99,102,241,0.2)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/4"
          style={{ background: 'var(--interactive-primary)' }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <GitBranch className="w-4 h-4" style={{ color: 'var(--interactive-primary)' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--interactive-primary)' }}>
              初次使用？
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            快速上手指南
          </h2>
          <p className="text-sm mb-4 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            安装 Figma 组件库，获取设计变量 JSON，并克隆组件仓库，立即开始构建。
          </p>
          <div className="flex flex-wrap gap-2">
            {['安装 Figma 库', '下载变量', '阅读组件文档'].map(step => (
              <Link
                key={step}
                href="/resources"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150"
                style={{
                  background: 'var(--surface-card)',
                  borderColor: 'rgba(99,102,241,0.2)',
                  color: 'var(--text-primary)',
                }}
              >
                {step}
                <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--interactive-primary)' }} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Section cards */}
      <section>
        <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          探索系统
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SECTIONS.map(s => {
            const Icon = s.icon
            return (
              <Link
                key={s.href}
                href={s.href}
                className="card card-hover block p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.bg, color: s.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
                        {s.label}
                      </h3>
                      <span
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: s.bg, color: s.color }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {s.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-150 translate-x-0 group-hover:translate-x-0.5"
                    style={{ color: s.color }}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
