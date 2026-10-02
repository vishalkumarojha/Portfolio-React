import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Activities from './components/Activities'
import Projects from './components/Projects'
import Education from './components/Education'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
import { NAV_OFFSET, SECTIONS } from './lib/nav'

export default function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const probe = window.scrollY + NAV_OFFSET + 32
      let current = SECTIONS[0].id

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id)
        if (!element) continue
        if (element.getBoundingClientRect().top + window.scrollY <= probe) current = section.id
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = SECTIONS[SECTIONS.length - 1].id

      setActiveSection(current)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
    setActiveSection(id)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-10">
        <Hero />

        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_17.5rem] xl:gap-[clamp(3rem,5vw,5rem)]">
          <main className="min-w-0">
            <div className="pb-2 pt-9 xl:hidden">
              <p className="eyebrow">Profile / Connect</p>
              <div className="mt-5">
                <ProfileCard />
              </div>
            </div>

            <About />
            <Publications />
            <Skills />
            <Experience />
            <Activities />
            <Projects />
            <Education />
            <Achievements />
          </main>

          <aside className="hidden xl:block xl:pt-32">
            <div className="sticky top-24">
              <ProfileCard />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
