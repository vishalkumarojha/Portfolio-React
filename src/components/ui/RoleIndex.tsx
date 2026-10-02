import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { Building2, Plus } from 'lucide-react'
import { pad, yearFrom } from '../../lib/data'
import Section from './Section'

export interface RoleEntry {
  company: string
  logo?: string
  position: string
  department?: string
  period?: string
  type: string
  location?: string
  mode?: string
  description?: string
  skills?: string[]
}

export function CompanyMark({ logo }: { logo?: string }) {
  const [failed, setFailed] = useState(false)

  if (!logo || failed) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-hairline text-ink-mute">
        <Building2 className="h-4 w-4" />
      </span>
    )
  }

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-hairline bg-surface">
      <img
        src={logo}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-6 w-6 object-contain"
      />
    </span>
  )
}

/* Desktop keeps the editorial list + selected-panel layout. Below the lg
   breakpoint the same data renders as a single-open inline accordion, so the
   details sit directly under the row that was tapped. */
const DESKTOP_QUERY = '(min-width: 1024px)'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches,
  )

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)
    const onChange = () => setIsDesktop(query.matches)
    onChange()
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return isDesktop
}

interface RoleIndexProps {
  id: string
  label: string
  title: ReactNode
  lede?: ReactNode
  items: RoleEntry[]
  prefix: string
  listLabel: string
  noun: string
  marker?: 'year' | 'index'
  action?: (active: number, total: number) => ReactNode
}

export default function RoleIndex({
  id,
  label,
  title,
  lede,
  action,
  items,
  prefix,
  listLabel,
  noun,
  marker = 'year',
}: RoleIndexProps) {
  const isDesktop = useIsDesktop()
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
  const panelId = `${prefix}-panel`
  const item = items[active]

  const markerFor = (index: number, entry: RoleEntry) =>
    marker === 'year' ? yearFrom(entry.period ?? '') : pad(index)

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = items.length - 1
    let next = active

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return

    event.preventDefault()
    setActive(next)
    itemRefs.current[next]?.focus()
  }

  const typeLabel = (entry: RoleEntry) => [entry.type, entry.mode].filter(Boolean).join(' · ')

  const orgLine = (entry: RoleEntry) => (
    <p className="mt-8 text-[13px] font-semibold uppercase leading-snug tracking-[0.1em] text-ink sm:text-[14px]">
      {entry.company}
      {entry.department ? <span className="text-ink-soft"> · {entry.department}</span> : null}
    </p>
  )

  const titleBlock = (entry: RoleEntry) => (
    <div className="mt-4 flex items-start gap-5">
      <CompanyMark logo={entry.logo} />
      <h3 className="display max-w-[24ch] text-[clamp(1.6rem,4.2vw,2.6rem)]">{entry.position}</h3>
    </div>
  )

  const locationLine = (entry: RoleEntry) =>
    entry.location ? (
      <p className="mt-6 font-mono text-[11px] uppercase tracking-label text-ink-mute">
        {entry.location}
      </p>
    ) : null

  const description = (entry: RoleEntry) =>
    entry.description ? (
      <p className="mt-8 max-w-[64ch] text-[15px] leading-relaxed text-ink-soft">
        {entry.description}
      </p>
    ) : null

  const focusBlock = (entry: RoleEntry) =>
    entry.skills?.length ? (
      <div className="mt-9 border-t border-hairline pt-6">
        <p className="eyebrow">Focus</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <li key={skill} className="pill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ) : null

  const desktop = (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-16">
      <div
        role="tablist"
        aria-label={listLabel}
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex flex-col border-b border-hairline lg:border-b-0"
      >
        {items.map((role, index) => {
          const selected = index === active
          return (
            <button
              key={`${role.company}-${role.position}`}
              ref={(node) => {
                itemRefs.current[index] = node
              }}
              role="tab"
              id={`${prefix}-tab-${index}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`group flex w-full shrink-0 flex-col gap-1 border-t border-hairline py-4 pl-4 pr-4 text-left transition-colors first:border-t-0 ${
                selected
                  ? 'border-l-2 border-l-ink'
                  : 'border-l-2 border-l-transparent hover:border-l-hairline'
              }`}
            >
              <span className="flex items-baseline gap-3">
                <span className="shrink-0 font-mono text-[10px] text-ink-mute">
                  {markerFor(index, role)}
                </span>
                <span
                  className={`min-w-0 text-[14px] leading-snug ${selected ? 'text-ink' : 'text-ink-soft group-hover:text-ink'}`}
                >
                  {role.position}
                </span>
              </span>
              <span className="pl-[2.1rem] text-[12px] leading-snug text-ink-mute lg:pl-0">
                {role.company}
              </span>
            </button>
          )
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${prefix}-tab-${active}`}
        tabIndex={0}
        className="role-panel border-t border-hairline pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
      >
        <div key={`${item.company}-${item.position}`} className="animate-panel">
          <div className="role-meta border-b border-hairline pb-6">
            <span className="eyebrow">{typeLabel(item)}</span>

            {item.period ? <span className="role-meta-date eyebrow">{item.period}</span> : null}
          </div>

          {orgLine(item)}
          {titleBlock(item)}
          {locationLine(item)}
          {description(item)}
          {focusBlock(item)}
        </div>
      </div>
    </div>
  )

  const accordion = (
    <div className="flex flex-col">
      {items.map((role, index) => {
        const isOpen = open === index
        const triggerId = `${prefix}-trigger-${index}`
        const detailId = `${prefix}-detail-${index}`

        return (
          <div key={`${role.company}-${role.position}`} className="border-t border-hairline first:border-t-0">
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={detailId}
                className={`flex w-full items-start gap-3 py-4 pl-4 pr-3 text-left transition-colors ${
                  isOpen ? 'border-l-2 border-l-ink' : 'border-l-2 border-l-transparent'
                }`}
              >
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline gap-3">
                    <span className="shrink-0 font-mono text-[10px] text-ink-mute">
                      {markerFor(index, role)}
                    </span>
                    <span
                      className={`min-w-0 text-[15px] leading-snug ${
                        isOpen ? 'text-ink' : 'text-ink-soft'
                      }`}
                    >
                      {role.position}
                    </span>
                  </span>
                  <span className="mt-1 block pl-[2.1rem] text-[12px] leading-snug text-ink-mute">
                    {role.company}
                  </span>
                </span>

                <Plus
                  aria-hidden="true"
                  className={`mt-0.5 h-5 w-5 shrink-0 text-ink-mute transition-transform duration-300 ease-editorial ${
                    isOpen ? 'rotate-45 text-ink' : ''
                  }`}
                />
              </button>
            </h3>

            <div
              className={`grid transition-all duration-500 ease-editorial ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div
                  id={detailId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  className="border-t border-hairline pb-7 pl-4 pr-4 pt-7"
                >
                  {orgLine(role)}
                  {titleBlock(role)}

                  <div className="mt-6 space-y-1.5">
                    <p className="eyebrow">{typeLabel(role)}</p>
                    {role.period ? <p className="eyebrow">{role.period}</p> : null}
                  </div>

                  {locationLine(role)}
                  {description(role)}
                  {focusBlock(role)}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <Section
      id={id}
      label={label}
      title={title}
      lede={lede}
      action={
        isDesktop && action ? (
          action(active, items.length)
        ) : (
          <span className="eyebrow">
            {items.length} {noun}
          </span>
        )
      }
    >
      {isDesktop ? desktop : accordion}
    </Section>
  )
}