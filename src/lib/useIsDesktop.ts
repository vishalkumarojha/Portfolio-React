import { useEffect, useState } from 'react'

/* Desktop keeps the list + selected-panel layout. Below the lg breakpoint the
   same data renders as a single-open inline accordion, so details sit directly
   under the row that was tapped. Shared by Professional Experience and
   Activities & Leadership so both switch at exactly the same width. */
const DESKTOP_QUERY = '(min-width: 1024px)'

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches,
  )

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)
    const onChange = () => setIsDesktop(query.matches)
    onChange()
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return isDesktop
}
