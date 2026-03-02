type Variant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
type Size = 'sm' | 'md'

interface BadgeProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  dot?: boolean
  className?: string
}

const variantMap: Record<Variant, { bg: string; color: string; border: string }> = {
  default: { bg: 'var(--surface-border)', color: 'var(--text-secondary)', border: 'transparent' },
  primary: { bg: 'var(--interactive-primary-subtle)', color: 'var(--interactive-primary)', border: 'transparent' },
  success: { bg: 'var(--color-success-50)', color: 'var(--color-success-700)', border: 'transparent' },
  warning: { bg: 'var(--color-warning-50)', color: 'var(--color-warning-700)', border: 'transparent' },
  error: { bg: 'var(--color-error-50)', color: 'var(--color-error-700)', border: 'transparent' },
  info: { bg: 'var(--color-info-50)', color: 'var(--color-info-700)', border: 'transparent' },
}

const dotColors: Record<Variant, string> = {
  default: 'var(--text-tertiary)',
  primary: 'var(--interactive-primary)',
  success: 'var(--color-success-500)',
  warning: 'var(--color-warning-500)',
  error: 'var(--color-error-500)',
  info: 'var(--color-info-500)',
}

export function Badge({ children, variant = 'default', size = 'md', dot = false, className = '' }: BadgeProps) {
  const styles = variantMap[variant]
  const px = size === 'sm' ? 'px-2 py-0.5' : 'px-2.5 py-1'
  const text = size === 'sm' ? 'text-[11px]' : 'text-xs'

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full ${px} ${text} ${className}`}
      style={{ background: styles.bg, color: styles.color, border: `1px solid ${styles.border}` }}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: dotColors[variant] }}
        />
      )}
      {children}
    </span>
  )
}
