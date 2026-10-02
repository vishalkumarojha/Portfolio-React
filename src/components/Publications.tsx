import { ArrowUpRight } from 'lucide-react'
import { pad, publications } from '../lib/data'
import Section from './ui/Section'

export default function Publications() {
  return (
    <Section
      id="publications"
      label="Publications"
      title="Research, published."
      lede="Peer-reviewed work on assistive technology and multimodal accessibility."
      action={<span className="eyebrow">{publications.length} paper</span>}
    >
      <ol className="border-t border-hairline">
        {publications.map((publication, index) => (
          <li key={publication.doi} className="border-b border-hairline py-8 lg:py-10">
            <div className="grid gap-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-10">
              <p className="font-mono text-[10px] text-ink-mute">{pad(index)}</p>
              <div className="min-w-0">
                <h3 className="max-w-[46ch] text-[clamp(1.15rem,2.6vw,1.65rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
                  {publication.title}
                </h3>

                <p className="mt-5 max-w-[64ch] text-[14px] leading-relaxed text-ink-soft">
                  {publication.authors}
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-mute">
                  {publication.journal} — {publication.location}
                </p>

                <p className="mt-6 max-w-[68ch] text-[14px] leading-relaxed text-ink-soft">
                  {publication.description}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-label text-ink-mute">
                    {publication.date} · DOI {publication.doi}
                  </span>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-[14px] font-medium text-ink"
                  >
                    Read publication
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
