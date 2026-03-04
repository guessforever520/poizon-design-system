import { TypographyContent } from '../_content'

export const metadata = { title: '排版 Typography' }

export default function TypographyPage() {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          排版 Typography
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          定义文字大小、字重和行高的排版规范。
        </p>
      </div>
      <TypographyContent />
    </div>
  )
}
