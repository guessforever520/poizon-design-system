import { ColorsContent } from '../_content'

export const metadata = { title: '颜色 Colors' }

export default function ColorsPage() {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          颜色 Colors
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          驱动所有组件的设计变量。直接复制 CSS 变量或十六进制颜色值。
        </p>
      </div>
      <ColorsContent />
    </div>
  )
}
