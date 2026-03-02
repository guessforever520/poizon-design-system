'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, X, ArrowRight, ExternalLink, Plus, Download, Trash2 } from 'lucide-react'
import { components } from '@/lib/data'
import CodeBlock from '@/components/shared/CodeBlock'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { DataCard } from '@/components/ui/DataCard'
import { LinkButton } from '@/components/ui/LinkButton'
import { Mail, Search, TrendingUp, Users, DollarSign, Activity, Image, ExternalLink as LinkIcon, ArrowUpRight, Star } from 'lucide-react'

// ============================================================
// Live demos per component
// ============================================================
function ButtonDemo() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="space-y-6 p-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>变体</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>尺寸</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary" size="sm">小</Button>
          <Button variant="primary" size="md">中</Button>
          <Button variant="primary" size="lg">大</Button>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>状态</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary" disabled>禁用</Button>
          <Button
            variant="primary"
            loading={loading}
            onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000) }}
          >
            {loading ? '保存中...' : '点击加载'}
          </Button>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>图标</p>
        <div className="flex flex-wrap gap-3 items-center mb-3">
          <Button variant="primary"   icon={<Plus     className="w-4 h-4" />}>新建商品</Button>
          <Button variant="secondary" icon={<Download className="w-4 h-4" />}>导出数据</Button>
          <Button variant="ghost"     icon={<Search   className="w-4 h-4" />}>搜索</Button>
          <Button variant="danger"    icon={<Trash2   className="w-4 h-4" />}>删除记录</Button>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary" size="sm" icon={<Plus className="w-3.5 h-3.5" />}>新建</Button>
          <Button variant="primary" size="md" icon={<Plus className="w-4 h-4"     />}>新建商品</Button>
          <Button variant="primary" size="lg" icon={<Plus className="w-4 h-4"     />}>新建商品</Button>
        </div>
      </div>
    </div>
  )
}

function InputDemo() {
  return (
    <div className="space-y-5 p-2 max-w-sm">
      {/* Sizes */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>尺寸</p>
        <div className="flex gap-3 items-center">
          <Input size="sm" placeholder="Small (24px)" className="flex-1" />
          <Input size="md" placeholder="Middle (32px)" className="flex-1" />
        </div>
      </div>

      {/* States */}
      <Input label="默认" placeholder="请输入..." />
      <Input label="带图标" placeholder="搜索..." leftIcon={<Search className="w-[14px] h-[14px]" />} />
      <Input label="邮箱" type="email" placeholder="you@company.com" leftIcon={<Mail className="w-[14px] h-[14px]" />} hint="我们绝不会共享您的邮箱地址。" />
      <Input label="错误状态" defaultValue="invalid-email" error="请输入有效的邮箱地址" />
      <Input label="只读" defaultValue="ACC-00291" readOnly />
      <Input label="禁用" defaultValue="ACC-00291" disabled />

      {/* Prefix / suffix */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>前缀 / 后缀</p>
        <div className="flex flex-col gap-3">
          <Input placeholder="0.00" prefix="¥" suffix="元" />
          <Input placeholder="请输入重量" suffix="kg" />
        </div>
      </div>

      {/* Password */}
      <Input label="密码" type="password" placeholder="请输入密码" />

      {/* Textarea */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>文本域</p>
        <div className="flex flex-col gap-3">
          <Textarea label="商品描述" placeholder="请输入..." maxChars={50} />
          <Textarea label="错误状态" defaultValue="这段文字超出了限制长度。这段文字超出了限制长度。这段文字超出了限制长度。" maxChars={30} error="内容超出字数限制" />
        </div>
      </div>
    </div>
  )
}

function BadgeDemo() {
  return (
    <div className="space-y-6 p-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>变体</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>带状态点</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success" dot>上线</Badge>
          <Badge variant="warning" dot>处理中</Badge>
          <Badge variant="error" dot>失败</Badge>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>尺寸</p>
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="primary" size="sm">小</Badge>
          <Badge variant="primary" size="md">中</Badge>
        </div>
      </div>
    </div>
  )
}

function TableDemo() {
  const data = [
    { name: 'Acme Corp', status: 'active', revenue: '$12,400', date: 'Feb 14' },
    { name: 'Globex Inc', status: 'pending', revenue: '$8,900', date: 'Feb 10' },
    { name: 'Initech LLC', status: 'error', revenue: '$3,200', date: 'Jan 28' },
    { name: 'Umbrella Co', status: 'active', revenue: '$24,100', date: 'Mar 01' },
  ]

  const statusBadge: Record<string, React.ReactNode> = {
    active: <Badge variant="success" dot size="sm">活跃</Badge>,
    pending: <Badge variant="warning" dot size="sm">待处理</Badge>,
    error: <Badge variant="error" dot size="sm">失败</Badge>,
  }

  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--surface-border)' }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: 'var(--surface-hover)', borderBottom: '1px solid var(--surface-border)' }}>
            {['公司 ↑', '状态', '营收', '日期'].map(h => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="border-t transition-colors duration-100 cursor-pointer"
              style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-card)' }}
            >
              <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>{row.name}</td>
              <td className="px-4 py-3">{statusBadge[row.status]}</td>
              <td className="px-4 py-3 font-mono text-xs" style={{ color: 'var(--text-primary)' }}>{row.revenue}</td>
              <td className="px-4 py-3 text-xs" style={{ color: 'var(--text-tertiary)' }}>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="px-4 py-3 flex items-center justify-between text-xs border-t"
        style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-hover)', color: 'var(--text-secondary)' }}
      >
        <span>显示第 1-4 条，共 94 条</span>
        <div className="flex gap-1">
          {['← 上一页', '1', '2', '3', '下一页 →'].map(p => (
            <button
              key={p}
              className="px-2 py-1 rounded font-medium transition-colors"
              style={p === '1' ? { background: 'var(--interactive-primary)', color: '#fff' } : { color: 'var(--text-secondary)' }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function ModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-center p-4">
      <Button variant="danger" onClick={() => setOpen(true)}>
        打开删除对话框
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
          style={{ background: 'var(--surface-overlay)' }}
        >
          <div
            className="w-full max-w-md rounded-2xl overflow-hidden animate-scale-in"
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--surface-border)',
              boxShadow: 'var(--shadow-2xl)',
              margin: '16px',
            }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--surface-border)' }}>
              <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>确认删除记录？</h3>
              <button onClick={() => setOpen(false)} style={{ color: 'var(--text-tertiary)' }}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                此操作不可撤销。该记录及所有关联数据将从我们的服务器中永久删除。
              </p>
            </div>
            <div className="px-6 py-4 flex justify-end gap-3 border-t" style={{ borderColor: 'var(--surface-border)' }}>
              <Button variant="secondary" onClick={() => setOpen(false)}>取消</Button>
              <Button variant="danger" onClick={() => setOpen(false)}>删除记录</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function DropdownDemo() {
  const [value, setValue] = useState('na')
  const [open, setOpen] = useState(false)
  const options = [
    { label: '北美洲', value: 'na' },
    { label: '欧洲', value: 'eu' },
    { label: '亚太地区', value: 'apac' },
    { label: '拉丁美洲', value: 'latam' },
  ]
  const selected = options.find(o => o.value === value)

  return (
    <div className="relative w-64 p-2">
      <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-primary)' }}>地区</label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition-all"
        style={{
          background: 'var(--surface-card)',
          borderColor: open ? 'var(--interactive-primary)' : 'var(--surface-border)',
          color: 'var(--text-primary)',
        }}
      >
        {selected?.label ?? '请选择...'}
        <span style={{ color: 'var(--text-tertiary)' }}>{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div
          className="absolute left-2 right-2 mt-1 rounded-xl border overflow-hidden z-10 animate-slide-up"
          style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)', boxShadow: 'var(--shadow-lg)' }}
        >
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => { setValue(opt.value); setOpen(false) }}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left transition-colors"
              style={{
                background: opt.value === value ? 'var(--interactive-primary-subtle)' : 'transparent',
                color: opt.value === value ? 'var(--interactive-primary)' : 'var(--text-primary)',
              }}
            >
              {opt.value === value && <Check className="w-3.5 h-3.5" />}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function TooltipDemo() {
  const [shown, setShown] = useState<string | null>(null)
  const items = ['顶部提示', '右侧提示', '底部提示']

  return (
    <div className="flex gap-8 items-center justify-center p-6 flex-wrap">
      {items.map(label => (
        <div key={label} className="relative flex flex-col items-center">
          {shown === label && (
            <div
              className="absolute -top-10 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap animate-slide-up"
              style={{ background: 'var(--color-neutral-900)', color: '#fff', boxShadow: 'var(--shadow-md)' }}
            >
              {label}
            </div>
          )}
          <button
            onMouseEnter={() => setShown(label)}
            onMouseLeave={() => setShown(null)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border"
            style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)', color: 'var(--text-primary)' }}
          >
            鼠标悬停
          </button>
        </div>
      ))}
    </div>
  )
}

function ToastDemo() {
  const [toasts, setToasts] = useState<Array<{ id: number; type: string; title: string; desc: string }>>([])
  const add = (type: string, title: string, desc: string) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, type, title, desc }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000)
  }

  const typeConfig: Record<string, { color: string; icon: string }> = {
    success: { color: 'var(--color-success-500)', icon: '✓' },
    error: { color: 'var(--color-error-500)', icon: '✕' },
    warning: { color: 'var(--color-warning-500)', icon: '⚠' },
    info: { color: 'var(--color-info-500)', icon: 'ℹ' },
  }

  return (
    <div className="p-4">
      <div className="flex gap-2 flex-wrap mb-6">
        <Button variant="secondary" size="sm" onClick={() => add('success', '更改已保存', '个人资料已成功更新。')}>
          成功提示
        </Button>
        <Button variant="secondary" size="sm" onClick={() => add('error', '导出失败', '无法生成 CSV 文件。')}>
          错误提示
        </Button>
        <Button variant="secondary" size="sm" onClick={() => add('warning', '配额使用率 90%', '请升级套餐以避免服务中断。')}>
          警告提示
        </Button>
        <Button variant="secondary" size="sm" onClick={() => add('info', '同步已开始', '数据正在刷新中...')}>
          信息提示
        </Button>
      </div>

      <div className="space-y-2">
        {toasts.map(t => {
          const cfg = typeConfig[t.type]
          return (
            <div
              key={t.id}
              className="flex items-start gap-3 p-3 rounded-xl border animate-slide-up"
              style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)', boxShadow: 'var(--shadow-md)' }}
            >
              <span className="text-base flex-shrink-0" style={{ color: cfg.color }}>{cfg.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.title}</div>
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{t.desc}</div>
              </div>
              <button onClick={() => setToasts(prev => prev.filter(x => x.id !== t.id))} style={{ color: 'var(--text-tertiary)' }}>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function DataCardDemo() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      <DataCard title="月营收" value="$124.5k" subtitle="对比上月" trend="up" trendValue="+18% 本期" icon={<DollarSign className="w-4 h-4" />} />
      <DataCard title="活跃用户" value="3,842" trend="up" trendValue="+240 本周" icon={<Users className="w-4 h-4" />} />
      <DataCard title="流失率" value="2.4%" trend="down" trendValue="-0.3% 改善" icon={<Activity className="w-4 h-4" />} />
    </div>
  )
}

function NavigationDemo() {
  const [active, setActive] = useState('组件库')
  const items = ['仪表盘', '基础规范', '组件库', '规范模式', '资源']

  return (
    <div
      className="w-48 rounded-xl overflow-hidden border"
      style={{ background: 'var(--surface-sidebar)', borderColor: 'var(--surface-border)' }}
    >
      <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--surface-border)' }}>
        <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Pulse DS</div>
      </div>
      <nav className="p-2 space-y-0.5">
        {items.map(item => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150"
            style={
              active === item
                ? { background: 'var(--interactive-primary)', color: '#fff' }
                : { color: 'var(--text-secondary)' }
            }
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  )
}

function LinkButtonDemo() {
  return (
    <div className="space-y-6 p-2">
      {/* Brand (蓝色) */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>
          品牌色 · Brand
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <LinkButton color="brand">查看详情</LinkButton>
          <LinkButton color="brand" href="#">跳转链接</LinkButton>
          <LinkButton color="brand" icon={<LinkIcon className="w-3 h-3" />}>外部链接</LinkButton>
          <LinkButton color="brand" icon={<ArrowUpRight className="w-3 h-3" />} href="#">了解更多</LinkButton>
          <LinkButton color="brand" disabled>已禁用</LinkButton>
        </div>
      </div>

      {/* Neutral (黑色) */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>
          黑色 · Neutral
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <LinkButton color="neutral">查看详情</LinkButton>
          <LinkButton color="neutral" href="#">跳转链接</LinkButton>
          <LinkButton color="neutral" icon={<Star className="w-3 h-3" />}>收藏商品</LinkButton>
          <LinkButton color="neutral" icon={<Image className="w-3 h-3" />} href="#">查看图片</LinkButton>
          <LinkButton color="neutral" disabled>已禁用</LinkButton>
        </div>
      </div>

      {/* Inline usage */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>
          内联用法
        </p>
        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          同意我们的{' '}
          <LinkButton color="brand" href="#">服务条款</LinkButton>
          {' '}和{' '}
          <LinkButton color="brand" href="#">隐私政策</LinkButton>
          ，即可继续使用。
        </p>
        <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
          遇到问题？{' '}
          <LinkButton color="neutral" icon={<LinkIcon className="w-3 h-3" />} href="#">
            联系客服
          </LinkButton>
        </p>
      </div>
    </div>
  )
}

const DEMOS: Record<string, React.ReactNode> = {
  button: <ButtonDemo />,
  input: <InputDemo />,
  badge: <BadgeDemo />,
  table: <TableDemo />,
  modal: <ModalDemo />,
  dropdown: <DropdownDemo />,
  tooltip: <TooltipDemo />,
  toast: <ToastDemo />,
  'data-card': <DataCardDemo />,
  navigation: <NavigationDemo />,
  'link-button': <LinkButtonDemo />,
}

// ============================================================
// Page
// ============================================================
export default function ComponentDetailPage({ params }: { params: { slug: string } }) {
  const comp = components.find(c => c.slug === params.slug)
  if (!comp) notFound()

  const related = components.filter(c => comp.related.includes(c.slug))

  return (
    <div className="animate-fade-in space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{comp.name}</h1>
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'var(--interactive-primary-subtle)', color: 'var(--interactive-primary)' }}
          >
            {comp.category}
          </span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {comp.summary}
        </p>
      </div>

      {/* Live Demo */}
      <section>
        <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>实时演示</h2>
        <div
          className="rounded-2xl border overflow-hidden"
          style={{ background: 'var(--surface-card)', borderColor: 'var(--surface-border)' }}
        >
          <div
            className="px-4 py-2.5 border-b flex items-center gap-2"
            style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-hover)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
            </div>
            <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
              {comp.name.toLowerCase().replace(/ /g, '-')}.preview
            </span>
          </div>
          <div className="p-6 min-h-[160px] flex items-start justify-start">
            {DEMOS[comp.slug] ?? <p style={{ color: 'var(--text-tertiary)' }}>演示即将上线。</p>}
          </div>
        </div>
      </section>

      {/* Code snippet */}
      <section>
        <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>代码示例</h2>
        <CodeBlock code={comp.code} language="tsx" filename={`${comp.slug}.tsx`} />
      </section>

      {/* Props table */}
      <section>
        <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Props</h2>
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--surface-border)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'var(--surface-hover)', borderBottom: '1px solid var(--surface-border)' }}>
                {['属性名', '类型', '默认值', '说明'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comp.props.map((prop, i) => (
                <tr
                  key={i}
                  className="border-t"
                  style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-card)' }}
                >
                  <td className="px-4 py-3">
                    <code className="text-sm font-mono font-semibold" style={{ color: 'var(--interactive-primary)' }}>
                      {prop.name}
                    </code>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-xs font-mono" style={{ color: 'var(--color-warning-600)' }}>
                      {prop.type}
                    </code>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                      {prop.default}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage guidelines */}
      <section>
        <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>使用规范</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Do */}
          <div
            className="rounded-xl border p-5"
            style={{ borderColor: 'var(--color-success-500)', background: 'var(--color-success-50)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--color-success-500)' }}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-success-700)' }}>推荐做法</span>
            </div>
            <ul className="space-y-2">
              {comp.dos.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-success-700)' }}>
                  <span className="mt-1 flex-shrink-0">·</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Don't */}
          <div
            className="rounded-xl border p-5"
            style={{ borderColor: 'var(--color-error-500)', background: 'var(--color-error-50)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--color-error-500)' }}>
                <X className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-error-700)' }}>避免做法</span>
            </div>
            <ul className="space-y-2">
              {comp.donts.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-error-700)' }}>
                  <span className="mt-1 flex-shrink-0">·</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related components */}
      {related.length > 0 && (
        <section>
          <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>相关组件</h2>
          <div className="flex flex-wrap gap-3">
            {related.map(rel => (
              <Link
                key={rel.slug}
                href={`/components/${rel.slug}`}
                className="card card-hover flex items-center gap-2 px-4 py-2.5"
              >
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{rel.name}</span>
                <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--interactive-primary)' }} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
