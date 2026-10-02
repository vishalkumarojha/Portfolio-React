import { useState } from 'react'
import { ArrowUpRight, GitFork, Plus, Star } from 'lucide-react'
import {
  contributions,
  isRepoLink,
  pad,
  projects,
  shortTitle,
  type Project,
} from '../lib/data'
import Section from './ui/Section'

function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="aspect-[4/3] w-full overflow-hidden border border-hairline bg-surface">
      <img
        src={failed ? '/placeholder.svg' : project.image}
        alt={project.title}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

function ProjectRow({
  project,
  index,
  isOpen,
  onToggle,
}: {
  project: Project
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const panelId = `project-panel-${index}`
  const actionLabel = isRepoLink(project.link) ? 'Repository' : 'Live site'

  return (
    <div className="border-b border-hairline">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex w-full items-start gap-4 py-6 text-left sm:gap-8 sm:py-8"
        >
          <span className="w-6 shrink-0 pt-1.5 font-mono text-[10px] text-ink-mute">{pad(index)}</span>
          <span className="min-w-0 flex-1">
            <span className="block text-[clamp(1.15rem,2.6vw,1.75rem)] font-medium leading-tight tracking-[-0.02em] text-ink transition-opacity group-hover:opacity-60">
              {shortTitle(project.title)}
            </span>
            <span className="mt-2 block max-w-[54ch] text-[14px] leading-relaxed text-ink-mute line-clamp-2">
              {project.description}
            </span>
          </span>
          <span
            className={`mt-1 shrink-0 text-ink-mute transition-all duration-300 ease-editorial group-hover:text-ink ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            <Plus className="h-5 w-5" />
          </span>
        </button>
      </h3>

      <div
        className={`grid transition-all duration-500 ease-editorial ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div
            id={panelId}
            aria-hidden={!isOpen}
            className="grid gap-8 pb-10 sm:pb-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 lg:pl-14"
          >
            <div className="min-w-0">
              {project.title !== shortTitle(project.title) ? (
                <h4 className="max-w-[46ch] text-[19px] font-medium leading-snug tracking-[-0.01em] text-ink">
                  {project.title}
                </h4>
              ) : null}

              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="pill bg-surface">{project.category}</span>
                {project.collaboration ? (
                  <span className="pill bg-surface">{project.collaboration}</span>
                ) : null}
              </div>

              <dl className="mt-8 space-y-5 border-t border-hairline pt-6">
                <div>
                  <dt className="eyebrow">Problem</dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-ink-soft">{project.problem}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Approach</dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-ink-soft">{project.solution}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Outcome</dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-ink-soft">{project.result}</dd>
                </div>
              </dl>

              <div className="mt-8">
                <p className="eyebrow">Built with</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="pill">
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                className="group mt-9 inline-flex items-center gap-2 border-b border-ink pb-1 text-[14px] font-medium text-ink"
              >
                {actionLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="lg:order-last">
              <ProjectImage project={project} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section
      id="work"
      label="Work"
      title="Things I have shipped."
      lede="Products, platforms and research prototypes — each one started as a problem I wanted to solve."
      action={<span className="eyebrow">{projects.length} projects</span>}
    >
      <div className="border-t border-hairline">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.title}
            project={project}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
          />
        ))}
      </div>

      <div className="mt-16 border-t border-hairline pt-12 sm:mt-20 sm:pt-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <span className="eyebrow">Open Source</span>
          <span className="eyebrow">{contributions.length} repositories</span>
        </div>
        <h3 className="display mt-7 max-w-[24ch] text-[clamp(1.5rem,3.4vw,2.25rem)]">
          Community work I contribute to.
        </h3>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {contributions.map((contribution, index) => (
            <li
              key={contribution.title}
              className="flex flex-col rounded-2xl border border-hairline bg-white p-5 sm:min-h-[13.5rem] sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[10px] text-ink-mute">{pad(index)}</span>
                <span className="flex items-center gap-4 font-mono text-[10px] text-ink-mute">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {contribution.stars}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {contribution.forks}
                  </span>
                </span>
              </div>
              <a
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-start gap-1.5 text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink"
              >
                {contribution.title}
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-mute transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 max-w-[42ch] text-[13px] leading-relaxed text-ink-soft">
                {contribution.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
