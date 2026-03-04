import { SpacingContent } from '../_content'

export const metadata = { title: '间距 Spacing' }

export default function SpacingPage() {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          间距 Spacing
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          基于 4px 网格的间距系统，用于组件内外的布局。
        </p>
      </div>
      <SpacingContent />
    </div>
  )
}
