/* Month arithmetic for the grouped Activities & Leadership timeline.

   Durations are counted inclusively, the way LinkedIn reports them: a role that
   starts in April 2025 and ends in December 2025 covers nine calendar months
   (Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec) and reads "9 mos".

   Nothing here invents precision. A period that only carries a year, such as
   "2026", has no resolvable month span, so it yields null and the caller omits
   the duration rather than guessing at one. */

const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
}

export interface MonthStamp {
  year: number
  month: number
}

const MONTH_PATTERN = new RegExp(`^(${Object.keys(MONTH_INDEX).join('|')})\\.?\\s+(\\d{4})$`, 'i')

/* Resolves "Apr 2025" to an exact month, and a bare "2026" to January of that
   year. The second case is only precise enough to be used for ordering, so
   `exact` records whether a real month was named. */
export function parseMonth(value: string): (MonthStamp & { exact: boolean }) | null {
  const trimmed = value.trim()
  if (!trimmed) return null

  const named = trimmed.match(MONTH_PATTERN)
  if (named) {
    return { year: Number(named[2]), month: MONTH_INDEX[named[1].toLowerCase()], exact: true }
  }

  const year = trimmed.match(/^(\d{4})$/)
  if (year) return { year: Number(year[1]), month: 0, exact: false }

  return null
}

const absolute = (stamp: MonthStamp) => stamp.year * 12 + stamp.month

/* Splits "Apr 2025 - Dec 2025" into its two endpoints. Returns null unless
   both sides resolve to an exact month. */
export function parsePeriod(period: string): { start: MonthStamp; end: MonthStamp } | null {
  const [rawStart, rawEnd] = period.split(/\s+[-–—]\s+/)
  if (!rawStart || !rawEnd) return null

  const start = parseMonth(rawStart)
  const end = parseMonth(rawEnd)

  if (!start?.exact || !end?.exact) return null
  if (absolute(end) < absolute(start)) return null

  return { start, end }
}

/* Inclusive month count, so a single-month period reads "1 mo". */
export function monthsBetween(start: MonthStamp, end: MonthStamp): number {
  return absolute(end) - absolute(start) + 1
}

export function formatMonths(total: number): string {
  if (total <= 0) return ''

  const years = Math.floor(total / 12)
  const months = total % 12

  const parts: string[] = []
  if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
  if (months) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`)

  return parts.join(' ')
}

/* "Apr 2025 - Dec 2025" -> "9 mos". Null when the period is not month-precise. */
export function durationOf(period: string): string | null {
  const parsed = parsePeriod(period)
  if (!parsed) return null
  return formatMonths(monthsBetween(parsed.start, parsed.end)) || null
}

/* The span an organisation covers end to end, derived from its positions rather
   than stored by hand, so adding a position keeps the header honest. Only the
   positions with month-precise periods contribute. */
export function spanOfPeriods(periods: string[]): string | null {
  const parsed = periods.map(parsePeriod).filter((entry): entry is NonNullable<typeof entry> => entry !== null)
  if (!parsed.length) return null

  const start = parsed.reduce((earliest, entry) =>
    absolute(entry.start) < absolute(earliest.start) ? entry : earliest,
  )
  const end = parsed.reduce((latest, entry) => (absolute(entry.end) > absolute(latest.end) ? entry : latest))

  return formatMonths(monthsBetween(start.start, end.end)) || null
}

/* Sort key for "most recent involvement". Year-only periods fall back to
   January so they order conservatively instead of claiming to be the newest,
   and an open-ended "Present" counts as the current month, so a role that is
   still running outranks one that ended earlier. */
export function recencyOf(periods: string[]): number {
  const now = new Date()
  const current: MonthStamp = { year: now.getFullYear(), month: now.getMonth() }

  const stamps = periods
    .map((period) => {
      const [, rawEnd = ''] = period.split(/\s+[-–—]\s+/)
      if (/^present$/i.test(rawEnd.trim())) return current
      return parseMonth(rawEnd) ?? parseMonth(period)
    })
    .filter((stamp): stamp is NonNullable<typeof stamp> => stamp !== null)

  if (!stamps.length) return Number.NEGATIVE_INFINITY

  return Math.max(...stamps.map(absolute))
}
