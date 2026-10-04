import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { pad } from '../../lib/data'
import { useIsDesktop } from '../../lib/useIsDesktop'
import { spanOfPeriods } from '../../lib/duration'
import type { ActivityOrganization } from '../../lib/activities'
import { CompanyMark } from './RoleIndex'
import PositionTimeline from './PositionTimeline'
import Section from './Section'

interface OrganizationIndexProps {
  id: string
  label: string
  title: ReactNode
  lede?: ReactNode
  organizations: ActivityOrganization[]
  prefix?: string
  action?: ReactNode
}

/* One selectable entry per organisation or activity, holding the full history
   of the positions held there.

   There is exactly one level of selection. A group is chosen from the list on
   the left and its positions appear in the panel beside it; nothing inside the
   panel collapses, so AdVITya'26 and AdVITya'25 are read as one continuous
   record rather than as two activities or a nested dropdown.

   Desktop mirrors Professional Experience: a vertical tablist feeding a single
   panel. Below the lg breakpoint the same groups become a single-open
   accordion so the history sits directly under the group that was tapped. */
export default function OrganizationIndex({
  id,
  label,
  title,
  lede,
  action,
  organizations,
  prefix = 'activity-org',
}: OrganizationIndexProps) {
  const isDesktop = useIsDesktop()
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
  const panelId = `${prefix}-panel`
  const organization = organizations[active]

  const spanFor = (entry: ActivityOrganization) =>
    spanOfPeriods(entry.positions.map((position) => position.period ?? ''))

  const subLine = (entry: ActivityOrganization) =>
    entry.context ??
    [
      entry.type,
      entry.positions.length > 1 ? `${entry.positions.length} positions` : undefined,
    ]
      .filter(Boolean)
      .join(' · ')

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = organizations.length - 1
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

  /* The organisation header plus its whole position history. Shared by the
     desktop panel and the mobile accordion so both read identically. */
  const history = (entry: ActivityOrganization, headingId: string) => {
    const span = spanFor(entry)
    const summary = [
      entry.type,
      entry.positions.length > 1 ? `${entry.positions.length} positions` : undefined,
    ]
      .filter(Boolean)
      .join(' · ')

    return (
      <>
        <div className="role-meta border-b border-hairline pb-6">
          {summary ? <span className="eyebrow">{summary}</span> : <span />}
          {span ? <span className="role-meta-date eyebrow">{span}</span> : null}
        </div>

        <div className="mt-8 flex items-start gap-5">
          <CompanyMark logo={entry.logo} />
          <div className="min-w-0">
            <h3
              id={headingId}
              className="text-[13px] font-semibold uppercase leading-snug tracking-[0.1em] text-ink sm:text-[14px]"
            >
              {entry.organization}
            </h3>
            {entry.context ? (
              <p className="mt-2 text-[13px] leading-snug text-ink-soft sm:text-[14px]">
                {entry.context}
              </p>
            ) : null}
          </div>
        </div>

        {entry.link ? (
          <a
            href={entry.link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-1.5 border-b border-hairline pb-0.5 text-[12px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            {new URL(entry.link).hostname.replace(/^www\./, '')}
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        ) : null}

        <PositionTimeline organization={entry} />
      </>
    )
  }

  const desktop = (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-16">
      <div
        role="tablist"
        aria-label="Activities and leadership"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex flex-col border-b border-hairline lg:border-b-0"
      >
        {organizations.map((entry, index) => {
          const selected = index === active
          return (
            <button
              key={entry.organization}
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
                <span className="shrink-0 font-mono text-[10px] text-ink-mute">{pad(index)}</span>
                <span
                  className={`min-w-0 text-[14px] leading-snug ${selected ? 'text-ink' : 'text-ink-soft group-hover:text-ink'}`}
                >
                  {entry.organization}
                </span>
              </span>
              <span className="pl-[2.1rem] text-[12px] leading-snug text-ink-mute lg:pl-0">
                {subLine(entry)}
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
        <div key={organization.organization} className="animate-panel">
          {history(organization, `${prefix}-org-${active}`)}
        </div>
      </div>
    </div>
  )

  const accordion = (
    <div className="flex flex-col">
      {organizations.map((entry, index) => {
        const isOpen = open === index
        const triggerId = `${prefix}-trigger-${index}`
        const detailId = `${prefix}-detail-${index}`

        return (
          <div
            key={entry.organization}
            className="border-t border-hairline first:border-t-0"
          >
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
                      {pad(index)}
                    </span>
                    <span
                      className={`min-w-0 text-[15px] leading-snug ${
                        isOpen ? 'text-ink' : 'text-ink-soft'
                      }`}
                    >
                      {entry.organization}
                    </span>
                  </span>
                  <span className="mt-1 block pl-[2.1rem] text-[12px] leading-snug text-ink-mute">
                    {subLine(entry)}
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
                  {history(entry, `${prefix}-org-${index}`)}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  const positions = organizations.reduce(
    (total, entry) => total + entry.positions.length,
    0,
  )

  return (
    <Section
      id={id}
      label={label}
      title={title}
      lede={lede}
      action={
        isDesktop && action ? (
          action
        ) : (
          <span className="eyebrow">
            {organizations.length} organisations · {positions} roles
          </span>
        )
      }
    >
      {isDesktop ? desktop : accordion}
    </Section>
  )
}
