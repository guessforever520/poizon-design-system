import Link from 'next/link'
import { ExternalLink, Download, Figma, Sparkles, Users, Mail, Github } from 'lucide-react'

const AI_TOOLS = [
  {
    name: 'UX Pilot',
    role: '探索',
    description: 'AI 驱动的 UX 研究与线框图助手。适用于快速概念探索、用户流程构思，以及在进入高保真设计前的早期草图阶段。',
    bestFor: ['概念探索', '用户流程映射', '低保真线框图', '设计评审'],
    badge: '探索阶段',
    badgeColor: { bg: 'var(--color-info-50)', color: 'var(--color-info-600)' },
  },
  {
    name: 'Figma Make',
    role: '原型制作',
    description: 'Figma 内的高保真 AI 原型工具。适用于交互式组件组装、最终精修稿件，以及与 Pulse 组件库关联的、面向利益相关者的演示文稿。',
    bestFor: ['高保真稿件', '交互式原型', '组件组装', '利益相关者演示'],
    badge: '高保真',
    badgeColor: { bg: 'var(--color-success-50)', color: 'var(--color-success-600)' },
  },
]

const LINKS = [
  { label: 'Figma 组件库', icon: Figma, href: '#', description: '包含所有组件、变量及样式的官方 Pulse DS 组件库' },
  { label: '图标集（Lucide）', icon: ExternalLink, href: 'https://lucide.dev', description: '系统中使用的 1000+ 个统一线条图标' },
  { label: '设计变量 JSON', icon: Download, href: '#', description: '机器可读的变量定义，可与任意代码库集成' },
  { label: 'GitHub 仓库', icon: Github, href: '#', description: 'React 组件库的源代码' },
  { label: 'Storybook', icon: ExternalLink, href: '#', description: '用于开发和测试的独立组件运行环境' },
]

const TEAM = [
  {
    name: 'Aria Santos',
    role: '视觉设计主导',
    area: '设计变量、视觉语言、品牌一致性',
    emoji: '🎨',
    color: { bg: 'var(--color-info-50)', color: 'var(--color-info-600)' },
  },
  {
    name: 'Hua Chen',
    role: '动效与交互',
    area: '动画、过渡效果、微交互',
    emoji: '✨',
    color: { bg: 'var(--color-warning-50)', color: 'var(--color-warning-600)' },
  },
  {
    name: 'Luca Bianchi',
    role: '组件工程',
    area: 'React 组件、无障碍访问、变量 API',
    emoji: '⚙️',
    color: { bg: 'var(--interactive-primary-subtle)', color: 'var(--interactive-primary)' },
  },
]

export default function ResourcesPage() {
  return (
    <div className="animate-fade-in space-y-10 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          资源
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Pulse 设计团队的工具、下载及联系方式。
        </p>
      </div>

      <section>
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-4 h-4" style={{ color: 'var(--interactive-primary)' }} />
          <h2 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            AI 工具策略
          </h2>
        </div>
        <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
          我们的双工具 AI 策略将快速构思与最终交付分离，根据设计阶段匹配工具能力。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AI_TOOLS.map(tool => (
            <div key={tool.name} className="card p-5 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
                    {tool.name}
                  </h3>
                  <div
                    className="text-xs font-semibold px-2 py-0.5 rounded-full mt-1 inline-block"
                    style={tool.badgeColor}
                  >
                    {tool.badge}
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: tool.badgeColor.bg }}
                >
                  {tool.role === '探索' ? '🔭' : '✦'}
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {tool.description}
              </p>

              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  最适合
                </p>
                <ul className="space-y-1">
                  {tool.bestFor.map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: tool.badgeColor.color }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4 p-4 rounded-xl border text-sm"
          style={{
            background: 'var(--interactive-primary-subtle)',
            borderColor: 'rgba(99,102,241,0.2)',
            color: 'var(--text-secondary)',
          }}
        >
          <strong style={{ color: 'var(--interactive-primary)' }}>工作流提示：</strong> 先使用 UX Pilot 快速验证概念，再将最佳方案引入 Figma Make，使用 Pulse 组件进行最终组装。
        </div>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          文件 & 链接
        </h2>
        <div className="space-y-2">
          {LINKS.map(link => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                className="card card-hover flex items-center gap-4 p-4 group"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--surface-hover)', color: 'var(--interactive-primary)' }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {link.label}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    {link.description}
                  </div>
                </div>
                <ExternalLink
                  className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--interactive-primary)' }}
                />
              </a>
            )
          })}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-4 h-4" style={{ color: 'var(--interactive-primary)' }} />
          <h2 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            团队联系方式
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TEAM.map(member => (
            <div key={member.name} className="card p-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: member.color.bg }}
              >
                {member.emoji}
              </div>
              <div className="mb-1 font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
                {member.name}
              </div>
              <div
                className="text-xs font-semibold mb-3"
                style={{ color: member.color.color }}
              >
                {member.role}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {member.area}
              </p>
              <button
                className="mt-4 flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                style={{ color: 'var(--interactive-primary)' }}
              >
                <Mail className="w-3.5 h-3.5" />
                发送消息
              </button>
            </div>
          ))}
        </div>
      </section>

      <div
        className="p-4 rounded-xl text-sm"
        style={{ background: 'var(--surface-card)', border: '1px solid var(--surface-border)', color: 'var(--text-secondary)' }}
      >
        缺少某项内容？欢迎提交 GitHub Issue，或在 Slack 的 <strong style={{ color: 'var(--text-primary)' }}>#design-system</strong> 频道联系团队。
      </div>
    </div>
  )
}
