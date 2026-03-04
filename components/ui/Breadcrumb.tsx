'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'

// ── POIZON Breadcrumb — matches Figma node 38005:37736 ─────────────────
//
//  Levels  : 2nd (1 parent + current)  |  3rd (2 parents + current)  |  4th (3 parents + current)
//  States  : Default (parent item, gray)  |  Current (last item, bold dark + optional icon)
//  Font    : Default: Noto Sans SC 12px/400 #626276
//             Current: Noto Sans SC 12px/500 #14151a
//  Sep     : ChevronRight 12×12 color #aaaabb
// ──────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode  // optional icon shown after current label (e.g. Star)
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className={`flex items-center gap-2 ${className ?? ''}`}>
      {items.map((item, i) => {
        const isCurrent = i === items.length - 1
        const isLast = i === items.length - 1
        return (
          <React.Fragment key={i}>
            <span
              className={`flex items-center gap-[4px] text-[12px] leading-[16px] tracking-[0.5px] whitespace-nowrap ${
                isCurrent ? 'font-medium' : 'font-normal'
              }`}
              style={{
                color: isCurrent ? '#14151a' : '#626276',
                fontFamily: '"Noto Sans SC", sans-serif',
              }}
              aria-current={isCurrent ? 'page' : undefined}
            >
              {item.href && !isCurrent ? (
                <a
                  href={item.href}
                  className="transition-colors duration-150 hover:underline"
                  style={{ color: '#626276' }}
                >
                  {item.label}
                </a>
              ) : (
                item.label
              )}
              {isCurrent && item.icon && (
                <span className="flex-shrink-0 flex items-center">{item.icon}</span>
              )}
            </span>
            {!isLast && (
              <span className="flex-shrink-0 flex items-center justify-center w-3 h-3">
                <ChevronRight className="w-3 h-3" style={{ color: '#aaaabb' }} />
              </span>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
