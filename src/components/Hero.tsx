import { useState } from 'react'
import { contact, personal } from '../lib/data'
import SocialModal from './SocialModal'

const ROLE_LINES: string[][] = []
for (let index = 0; index < personal.roles.length; index += 2) {
  ROLE_LINES.push(personal.roles.slice(index, index + 2))
}

export default function Hero() {
  const { name, photos, resume_url } = personal
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
      <div className="animate-fadeIn lg:grid lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:items-end lg:gap-[clamp(2.5rem,4vw,5rem)]">
        <div className="lg:order-1">
          <span className="eyebrow">Hero / Introduction</span>

          <h1 className="display mt-7 text-[clamp(2.5rem,6.4vw,5.25rem)]">{name}</h1>

          <p className="mt-7 max-w-[52ch] text-[clamp(1.05rem,1.9vw,1.35rem)] leading-[1.45] text-ink-soft">
            {ROLE_LINES.map((line, index) => (
              <span key={index} className="block">
                {line.join(' • ')}
              </span>
            ))}
          </p>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-ink-mute">
            <span className="text-base leading-none" aria-hidden="true">
              📍
            </span>
            {contact.location}
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-flex min-h-[2.75rem] w-full max-w-[16rem] items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-editorial hover:bg-ink-soft sm:mx-0 sm:w-auto sm:max-w-none"
            >
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mx-auto inline-flex min-h-[2.75rem] w-full max-w-[16rem] items-center justify-center gap-2 rounded-full border border-hairline px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:border-ink sm:mx-0 sm:w-auto sm:max-w-none"
            >
              Connect With Me
            </button>
          </div>
        </div>

        <div className="mt-9 sm:mt-10 lg:order-2 lg:mt-0 lg:justify-self-end">
          <div className="relative mx-auto w-32 sm:mx-0 sm:w-40 lg:w-full">
            <img
              src={photos[0]}
              alt={`${name}`}
              className="aspect-[4/5] w-full rounded-2xl border border-hairline object-cover object-top shadow-xl"
            />
            <span className="absolute -bottom-3 left-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-3 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="font-mono text-[10px] uppercase tracking-label text-ink-mute">
                Available
              </span>
            </span>
          </div>
        </div>
      </div>

      <SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}