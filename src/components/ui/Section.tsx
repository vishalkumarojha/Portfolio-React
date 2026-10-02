import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  label: string
  title: ReactNode
  lede?: ReactNode
  children?: ReactNode
  action?: ReactNode
  className?: string
}

export default function Section({
  id,
  label,
  title,
  lede,
  children,
  action,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-hairline py-16 sm:py-20 lg:py-32 ${className}`.trim()}
    >
      <Reveal>
        <header className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <span className="eyebrow">{label}</span>
            {action}
          </div>
          <h2 className="display mt-7 max-w-[20ch] text-[clamp(1.9rem,5vw,3.25rem)]">{title}</h2>
          {lede ? (
            <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {lede}
            </p>
          ) : null}
        </header>
      </Reveal>
      {children}
    </section>
  )
}
