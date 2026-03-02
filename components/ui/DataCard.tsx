import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

type Trend = 'up' | 'down' | 'neutral'

interface DataCardProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: Trend
  trendValue?: string
  icon?: React.ReactNode
  className?: string
}

const trendConfig: Record<Trend, { icon: React.ElementType; color: string }> = {
  up: { icon: TrendingUp, color: 'var(--color-success-600)' },
  down: { icon: TrendingDown, color: 'var(--color-error-600)' },
  neutral: { icon: Minus, color: 'var(--text-tertiary)' },
}

export function DataCard({ title, value, subtitle, trend, trendValue, icon, className = '' }: DataCardProps) {
  const tc = trend ? trendConfig[trend] : null
  const TrendIcon = tc?.icon

  return (
    <div
      className={`card p-5 flex flex-col gap-3 ${className}`}
    >
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {title}
        </p>
        {icon && (
          <div
            className="p-2 rounded-lg"
            style={{ background: 'var(--interactive-primary-subtle)', color: 'var(--interactive-primary)' }}
          >
            {icon}
          </div>
        )}
      </div>

      <div>
        <div className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {value}
        </div>
        {subtitle && (
          <div className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
            {subtitle}
          </div>
        )}
      </div>

      {tc && TrendIcon && trendValue && (
        <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: tc.color }}>
          <TrendIcon className="w-3.5 h-3.5" />
          {trendValue}
        </div>
      )}
    </div>
  )
}
