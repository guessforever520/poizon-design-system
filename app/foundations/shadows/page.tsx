import { ShadowsContent } from '../_content'

export const metadata = { title: '阴影 Shadows' }

export default function ShadowsPage() {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          阴影 Shadows
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          通过阴影层级建立视觉深度与空间感。
        </p>
      </div>
      <ShadowsContent />
    </div>
  )
}
