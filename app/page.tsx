import Link from 'next/link'
import { Palette, Box, Layout, BookOpen, ArrowRight, Zap } from 'lucide-react'

const SECTIONS = [
  {
    href: '/foundations',
    icon: Palette,
    label: '全局样式',
    description: '颜色、排版、间距、阴影及圆角变量，支持一键复制。',
    tag: '5 个类别',
    tagColor: '#0098d5',
    tagBg: '#f0faff',
    iconBg: '#f0faff',
    iconColor: '#0098d5',
  },
  {
    href: '/components',
    icon: Box,
    label: '组件库',
    description: '每个 UI 组件均提供实时演示、Props 文档、使用规范及代码示例。',
    tag: '10 个组件',
    tagColor: '#00dbdb',
    tagBg: '#f4fffc',
    iconBg: '#f4fffc',
    iconColor: '#00dbdb',
  },
  {
    href: '/patterns',
    icon: Layout,
    label: '设计规范',
    description: '适用于 B2B 场景的 UX 规范：设计原则、国际化规范等。',
    tag: '6 种规范',
    tagColor: '#08765c',
    tagBg: '#f4fffc',
    iconBg: '#f4fffc',
    iconColor: '#08765c',
  },
  {
    href: '/resources',
    icon: BookOpen,
    label: '资源',
    description: 'Figma 组件库、设计变量导出、AI 工具推荐及团队联系方式。',
    tag: '工具 & 链接',
    tagColor: '#c17606',
    tagBg: '#fffcf4',
    iconBg: '#fffcf4',
    iconColor: '#c17606',
  },
]

export default function HomePage() {
  return (
    <div className="animate-fade-in space-y-12">
      {/* Hero */}
      <section className="pt-6 pb-4 space-y-[24px]">
        {/* Version badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-medium"
          style={{
            background: 'rgba(255,255,255,0.8)',
            color: '#14151a',
            boxShadow: '0px 1px 2px 0px rgba(0,15,46,0.05)',
          }}
        >
          <Zap className="w-3.5 h-3.5" style={{ color: '#00dbdb' }} />
          v2.1.0 · 更新于 2026 年 3 月
        </div>

        {/* Title — logo images from Figma */}
        <div className="flex items-center gap-4 sm:gap-5">
          <img
            src="/images/hero-poizon.png"
            alt="POIZON"
            className="h-[45px] sm:h-[55px] md:h-[60px] w-auto"
          />
          <img
            src="/images/hero-design-system.png"
            alt="设计系统"
            className="h-[45px] sm:h-[55px] md:h-[60px] w-auto"
          />
        </div>

        {/* Description */}
        <p
          className="text-[18px] leading-[1.625] max-w-[576px]"
          style={{ color: '#7f7f8e', fontFamily: '"Noto Sans SC", sans-serif' }}
        >
          设计与研发的唯一标准来源。使用一致的设计变量、无障碍组件和经过验证的 UX 规范，更快构建产品。
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/components"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-[8px] text-[14px] font-medium transition-all duration-150"
            style={{ background: '#00dbdb', color: '#14151a' }}
          >
            浏览组件
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/foundations"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-[8px] text-[14px] font-medium border transition-all duration-150"
            style={{ background: '#ffffff', borderColor: '#f1f1f5', color: '#14151a' }}
          >
            查看变量
          </Link>
        </div>
      </section>

      {/* Getting Started Banner */}
      <div
        className="rounded-[16px] relative overflow-hidden"
        style={{
          background: 'linear-gradient(119.92deg, #002f35 16.69%, #347679 104.57%)',
          border: '1px solid rgba(0,219,219,0.4)',
          minHeight: '180px',
        }}
      >
        {/* Decorative ellipse blobs — Figma node 32:2410 / 32:2411 */}
        <img
          src="/images/getting-started-ellipse1.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ left: '4%', top: '-100px', width: '105%', height: 'auto' }}
        />
        <img
          src="/images/getting-started-ellipse2.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ left: '60%', top: '-210px', width: '70%', height: 'auto', transform: 'scaleX(-1)' }}
        />

        <div className="relative p-6">
          {/* Label — no icon per Figma */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[12px] font-bold uppercase tracking-[0.6px]"
              style={{ color: '#00dbdb' }}
            >
              初次使用？
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[20px] font-bold mb-2"
            style={{ color: '#ffffff', fontFamily: '"Noto Sans SC", sans-serif' }}
          >
            快速上手指南
          </h2>

          {/* Description */}
          <p
            className="text-[14px] mb-6 max-w-[512px]"
            style={{ color: '#ffffff', fontFamily: '"Noto Sans SC", sans-serif', lineHeight: '20px' }}
          >
            安装 Figma 组件库，获取设计变量 JSON，并克隆组件仓库，立即开始构建。
          </p>

          {/* Action links — white buttons, unchanged from Figma */}
          <div className="flex flex-wrap gap-3">
            {['安装 Figma 库', '下载变量', '阅读组件文档'].map(step => (
              <Link
                key={step}
                href="/resources"
                className="inline-flex items-center gap-[6px] px-3 py-2 rounded-[8px] text-[14px] font-medium border transition-all duration-150"
                style={{
                  background: '#ffffff',
                  borderColor: '#f1f1f5',
                  color: '#14151a',
                  fontFamily: '"Noto Sans SC", sans-serif',
                  letterSpacing: '0.5px',
                }}
              >
                {step}
                <img
                  src="/images/getting-started-icon-arrow.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-3.5 h-3.5 flex-shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Section cards */}
      <section>
        <h2
          className="text-[18px] font-bold mb-4"
          style={{ color: '#14151a', fontFamily: '"Noto Sans SC", sans-serif' }}
        >
          探索系统
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SECTIONS.map(s => {
            const Icon = s.icon
            return (
              <Link
                key={s.href}
                href={s.href}
                className="block p-[25px] group transition-all duration-150 hover:shadow-md"
                style={{
                  background: '#ffffff',
                  border: '1px solid #f1f1f5',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.05)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: s.iconBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.iconColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="font-bold text-[15px]"
                        style={{ color: '#14151a', fontFamily: '"Noto Sans SC", sans-serif' }}
                      >
                        {s.label}
                      </h3>
                      <span
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{ background: s.tagBg, color: s.tagColor }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <p
                      className="text-[14px] leading-relaxed"
                      style={{ color: '#7f7f8e', fontFamily: '"Noto Sans SC", sans-serif' }}
                    >
                      {s.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-150"
                    style={{ color: s.iconColor }}
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
