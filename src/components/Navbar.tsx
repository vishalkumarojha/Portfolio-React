import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { CONTACT_ID, SECTIONS } from '../lib/nav'
import { personal } from '../lib/data'

interface NavbarProps {
  activeSection: string
  onNavigate: (id: string) => void
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [condensed, setCondensed] = useState(false)

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navigate = (id: string) => {
    setOpen(false)
    window.requestAnimationFrame(() => onNavigate(id))
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-colors duration-300 ${
        condensed ? 'border-hairline' : 'border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[4.5rem] w-full max-w-shell items-center justify-between gap-6 px-5 sm:px-8 lg:px-10"
      >
        <a
          href={`#${SECTIONS[0].id}`}
          onClick={(event) => {
            event.preventDefault()
            navigate(SECTIONS[0].id)
          }}
          className="group flex min-w-0 flex-col leading-tight"
        >
          <span className="truncate text-[15px] font-semibold tracking-[-0.01em] text-ink transition-opacity group-hover:opacity-70">
            {personal.name}
          </span>
          <span className="truncate font-mono text-[10px] uppercase tracking-label text-ink-mute">
            {personal.tagline}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    navigate(section.id)
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className="group relative block py-1 text-[13px] transition-colors"
                >
                  <span className={isActive ? 'text-ink' : 'text-ink-mute group-hover:text-ink'}>
                    {section.label}
                  </span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-ink transition-transform duration-300 ease-editorial ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={personal.resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[13px] text-ink-mute transition-colors hover:text-ink"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <span className="h-4 w-px bg-hairline" />
          <button
            type="button"
            onClick={() => navigate(CONTACT_ID)}
            className="text-[13px] text-ink transition-opacity hover:opacity-70"
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="animate-menu border-t border-hairline bg-white lg:hidden"
      >
        <ul className="mx-auto w-full max-w-shell px-5 py-3 sm:px-8">
          {SECTIONS.map((section, index) => (
            <li key={section.id} className="border-b border-hairline last:border-b-0">
              <a
                href={`#${section.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  navigate(section.id)
                }}
                aria-current={activeSection === section.id ? 'true' : undefined}
                className="flex items-baseline justify-between py-3.5"
              >
                <span
                  className={`text-[15px] ${
                    activeSection === section.id ? 'text-ink' : 'text-ink-soft'
                  }`}
                >
                  {section.label}
                </span>
                <span className="font-mono text-[10px] text-ink-mute">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto flex w-full max-w-shell items-center gap-6 border-t border-hairline px-5 py-4 sm:px-8">
          <a
            href={personal.resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-ink-soft"
          >
            Resume ↗
          </a>
          <button
            type="button"
            onClick={() => navigate(CONTACT_ID)}
            className="text-[13px] text-ink-soft"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  )
}
