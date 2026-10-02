import { contact, personal, socialByName } from '../lib/data'
import { getSocialIcon } from '../utils/icons'

const CARD_LINKS = socialByName(['GitHub', 'LinkedIn', 'Instagram', 'Topmate'])

export default function ProfileCard() {
  const { name, roles, photos } = personal

  return (
    <div className="animate-fadeIn w-full rounded-2xl border border-hairline bg-white p-5 sm:p-6">
      <div className="text-center">
        <div className="relative mb-4 inline-block">
          <img
            src={photos[0]}
            alt="Profile"
            className="mx-auto h-16 w-16 rounded-full border-2 border-white object-cover object-center shadow-sm sm:h-20 sm:w-20"
          />
          <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
        </div>

        <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink sm:text-lg">
          {name}
        </h3>
        <p className="mt-1 px-1 text-[12px] leading-relaxed text-ink-soft">
          {roles.slice(0, 2).join(' • ')}
        </p>

        <p className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-hairline bg-surface px-3 py-2.5">
          <span className="text-sm leading-none" aria-hidden="true">
            📍
          </span>
          <span className="text-[11px] font-medium leading-tight text-ink-soft">
            {contact.location}
          </span>
        </p>

        <div className="mt-5 border-t border-hairline pt-4">
          <p className="text-[9px] font-semibold uppercase tracking-label text-ink-mute">
            Socials
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {CARD_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[2.75rem] items-center gap-2 rounded-lg border border-hairline px-2.5 py-2 text-[12px] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
                >
                  <span className="shrink-0 text-ink-mute">
                    {getSocialIcon(link.name, 'h-3.5 w-3.5')}
                  </span>
                  <span className="truncate">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}