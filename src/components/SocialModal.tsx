import { useEffect } from 'react'
import { X } from 'lucide-react'
import { socialLinks } from '../lib/data'
import { getSocialIcon } from '../utils/icons'

interface SocialModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SocialModal({ isOpen, onClose }: SocialModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="All links"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/25 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="animate-panel w-full max-w-md border border-hairline bg-white p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-hairline pb-5">
          <div>
            <p className="eyebrow">Connect</p>
            <h2 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-ink">
              Every place I am online
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 -mt-1 inline-flex h-8 w-8 items-center justify-center text-ink-mute transition-colors hover:text-ink"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        <ul className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white px-4 py-3.5 text-[13px] text-ink-soft transition-colors hover:text-ink"
              >
                <span className="text-ink-mute transition-colors group-hover:text-ink">
                  {getSocialIcon(link.name)}
                </span>
                <span className="flex-1">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
