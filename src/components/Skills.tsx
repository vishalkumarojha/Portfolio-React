import { useRef, useState, type KeyboardEvent } from 'react'
import { skillGroups } from '../lib/data'
import { skillIconUrl } from '../lib/skillIcons'
import Section from './ui/Section'

function SkillIcon({ name }: { name: string }) {
  const [failed, setFailed] = useState(false)
  const url = skillIconUrl(name)

  if (!url || failed) {
    return (
      <span className="flex h-7 w-7 items-center justify-center bg-surface font-mono text-[11px] uppercase text-ink-mute">
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <img
      src={url}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-7 w-7 object-contain"
    />
  )
}

export default function Skills() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const group = skillGroups[active]

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = skillGroups.length - 1
    let next = active

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return

    event.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section
      id="skills"
      label="Skills & Expertise"
      title="The stack I reach for."
      lede="A working set of languages, frameworks and tools, grouped the way I actually use them."
      action={<span className="eyebrow">{skillGroups.length} groups</span>}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16">
        <div
          role="tablist"
          aria-label="Skill categories"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="-mx-5 flex gap-6 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {skillGroups.map((item, index) => {
            const selected = index === active
            return (
              <button
                key={item.category}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                role="tab"
                id={`skill-tab-${index}`}
                aria-selected={selected}
                aria-controls="skill-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={`group flex shrink-0 items-center gap-3 whitespace-nowrap border-b border-hairline py-3 text-left transition-colors lg:w-full lg:whitespace-normal lg:border-b-0 lg:border-t lg:first:border-t-0 ${
                  selected ? 'text-ink' : 'text-ink-mute hover:text-ink'
                }`}
              >
                <span
                  className={`font-mono text-[10px] transition-colors ${
                    selected ? 'text-ink' : 'text-ink-mute'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-[14px] leading-snug">{item.category}</span>
                <span className="hidden font-mono text-[10px] text-ink-mute lg:block">
                  {String(item.items.length).padStart(2, '0')}
                </span>
              </button>
            )
          })}
        </div>

        <div
          id="skill-panel"
          role="tabpanel"
          aria-labelledby={`skill-tab-${active}`}
          tabIndex={0}
          className="border border-hairline bg-white p-6 sm:p-8 lg:p-10"
        >
          <div key={group.category} className="animate-panel">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-hairline pb-6">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                {group.category}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-label text-ink-mute">
                {group.items.length} {group.items.length === 1 ? 'technology' : 'technologies'}
              </span>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3 sm:gap-x-10">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <SkillIcon name={item} />
                  <span className="text-[14px] leading-tight text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
