import { ArrowUpRight, MapPin } from 'lucide-react'
import { CONTACT_ID } from '../lib/nav'
import { contact, personal, socialLinks } from '../lib/data'
import { getSocialIcon } from '../utils/icons'

export default function Footer() {
  return (
    <footer id={CONTACT_ID} className="scroll-mt-24 border-t border-hairline">
      <div className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-20">
          <div className="min-w-0">
            <span className="eyebrow">Contact</span>
            <h2 className="display mt-7 max-w-[18ch] text-[clamp(1.9rem,5vw,3.25rem)]">
              Let us build something worth shipping.
            </h2>
            <a
              href={`mailto:${contact.email}`}
              className="group mt-9 inline-flex items-center gap-2 text-[clamp(1.1rem,3.4vw,2rem)] font-medium tracking-[-0.02em] text-ink"
            >
              {contact.email}
              <ArrowUpRight className="h-5 w-5 text-ink-mute transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] text-ink-mute">
              <MapPin className="h-3.5 w-3.5" />
              {contact.location}
            </p>
          </div>

          <div className="min-w-0">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-6 grid grid-cols-2 gap-px border border-hairline bg-hairline">
              {socialLinks.map((link) => (
                <li key={link.name} className="min-w-0">
                  <a
                    href={link.url}
                    target={link.name === 'Email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex min-h-[2.75rem] items-center gap-2.5 bg-white px-3 py-3 text-[12px] text-ink-soft transition-colors hover:text-ink sm:px-4 sm:text-[13px]"
                  >
                    <span className="shrink-0 text-ink-mute transition-colors group-hover:text-ink">
                      {getSocialIcon(link.name)}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{link.name}</span>
                    <ArrowUpRight className="hidden h-3.5 w-3.5 shrink-0 text-ink-mute opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-shell flex-col gap-2 px-5 py-6 font-mono text-[10px] uppercase tracking-label text-ink-mute sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {personal.name}
          </p>
          <p>Built with React, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
