import { durationOf } from '../../lib/duration'
import type { ActivityPosition } from '../../lib/activities'

/* One position inside an expanded organisation. Reads top to bottom as
   role, duration, location and mode, then optional skills and description.
   The duration is derived from the period, and simply omitted when the period
   is not precise enough to support one. */
export default function PositionItem({ position }: { position: ActivityPosition }) {
  const duration = position.duration ?? (position.period ? durationOf(position.period) : null)
  const tenure = [position.period, duration].filter(Boolean).join(' · ')
  const place = [position.location, position.mode].filter(Boolean).join(' · ')

  return (
    <li className="relative pl-9">
      <span
        aria-hidden="true"
        className="absolute -left-9 top-[0.4rem] h-2 w-2 rounded-full border border-ink bg-white"
      />

      <h4 className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-ink sm:text-base">
        {position.title}
      </h4>

      {tenure ? (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-label text-ink-mute sm:text-[11px]">
          {tenure}
        </p>
      ) : null}

      {place ? (
        <p className="mt-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-label text-ink-mute sm:text-[11px]">
          {place}
        </p>
      ) : null}

      {position.skills?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {position.skills.map((skill) => (
            <li key={skill} className="pill">
              {skill}
            </li>
          ))}
        </ul>
      ) : null}

      {position.description ? (
        <p className="mt-4 max-w-[62ch] text-[14px] leading-relaxed text-ink-soft">
          {position.description}
        </p>
      ) : null}
    </li>
  )
}
