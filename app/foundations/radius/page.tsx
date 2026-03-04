import { RadiusContent } from '../_content'

export const metadata = { title: '圆角 Border Radius' }

export default function RadiusPage() {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          圆角 Border Radius
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          统一的圆角规范，保持界面一致性。
        </p>
      </div>
      <RadiusContent />
    </div>
  )
}
