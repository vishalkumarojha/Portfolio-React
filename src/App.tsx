import type React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Internship from "./components/Internship"
import Certification from "./components/Certification"
import Blog from "./components/Blog"
import WhatIDo from "./components/WhatIDo"
import Contribution from "./components/Contribution"
import Newsletter from "./components/Newsletter"
import Webslogs from "./components/Webslogs"
import Contact from "./components/Contact"
import Hobbies from "./components/Hobbies"
import Footer from "./components/Footer"
import BackgroundCanvas from "./components/BackgroundCanvas"

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <BackgroundCanvas />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Internship />
          <Certification />
          <Blog />
          <WhatIDo />
          <Contribution />
          <Hobbies />
          <Contact />
          <Newsletter />
          <Webslogs />
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  )
}

export default App

