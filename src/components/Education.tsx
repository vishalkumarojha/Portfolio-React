import { education } from '../lib/data'
import Section from './ui/Section'

export default function Education() {
  return (
    <Section id="education" label="Education" title="Academic background.">
      <ol className="border-t border-hairline">
        {education.map((item) => (
          <li
            key={item.degree}
            className="grid gap-3 border-b border-hairline py-8 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-10 lg:py-10"
          >
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-label text-ink-mute">
              {item.period}
            </p>
            <div className="min-w-0">
              <h3 className="text-[clamp(1.15rem,2.6vw,1.6rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
                {item.institution}
              </h3>
              <p className="mt-3 text-[15px] text-ink-soft">{item.degree}</p>
              <p className="mt-1 font-mono text-[11px] text-ink-mute">{item.location}</p>
              <p className="mt-5 max-w-[64ch] text-[14px] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
