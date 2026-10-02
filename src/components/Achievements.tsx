import { achievements, pad } from '../lib/data'
import Section from './ui/Section'

export default function Achievements() {
  return (
    <Section
      id="achievements"
      label="Achievements"
      title="Recognition so far."
      lede="Hackathons, publications and the leadership roles behind them."
      action={<span className="eyebrow">{achievements.length} highlights</span>}
    >
      <ol className="border-t border-hairline">
        {achievements.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-2 border-b border-hairline py-7 sm:grid-cols-[3rem_7rem_minmax(0,1fr)] sm:gap-8 lg:py-8"
          >
            <p className="font-mono text-[10px] text-ink-mute">{pad(index)}</p>
            <p className="font-mono text-[10px] uppercase tracking-label text-ink-mute">
              {item.year}
            </p>
            <div className="min-w-0">
              <h3 className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[68ch] text-[14px] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
