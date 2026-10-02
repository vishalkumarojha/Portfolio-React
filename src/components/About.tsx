import { capabilities, pad, personal, skills } from '../lib/data'
import Reveal from './ui/Reveal'
import Section from './ui/Section'

const KEY_SKILLS = skills.slice(0, 5).map((skill) => skill.name)

export default function About() {
  const { about_texts } = personal

  return (
    <Section
      id="about"
      label="About"
      title="Student. Developer. Writer."
      action={<span className="eyebrow">VIT Bhopal University</span>}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 shadow-lg lg:max-w-none">
            <img
              src="/about-collage.png"
              alt="Experience Collage"
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </Reveal>

        <div>
          <Reveal delay={60}>
            <div className="max-w-[64ch]">
              {about_texts.map((text, index) => (
                <p
                  key={index}
                  className={`leading-relaxed text-ink-soft ${
                    index === 0 ? 'text-[17px] sm:text-lg' : 'mt-5 text-[15px]'
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-9">
              <p className="eyebrow">Key Skills</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {KEY_SKILLS.map((skill) => (
                  <li key={skill} className="pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="mt-16 border-t border-hairline pt-10 lg:mt-20">
          <div className="flex items-baseline gap-4">
            <span className="eyebrow">What I do</span>
            <span className="h-px flex-1 bg-hairline" />
          </div>
          <ul className="mt-8 grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <li key={capability.title} className="border-t border-hairline pt-4">
                <span className="font-mono text-[10px] text-ink-mute">{pad(index)}</span>
                <h3 className="mt-3 text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink">
                  {capability.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  {capability.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
