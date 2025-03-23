"use client"

import type React from "react"

import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import SocialModal from "./SocialModal"
import ParticleBackground from "./ParticleBackground"

const Hero: React.FC = () => {
  const [showSocialModal, setShowSocialModal] = useState(false)

  const handleDownloadResume = () => {
    // Replace with your Google Drive link
    const resumeUrl = "https://drive.google.com/file/d/14wxPujnXBn3EmS0Fs3aSnF9dvT_ymNii/view?usp=sharing"
    window.open(resumeUrl, "_blank")
  }

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:min-h-screen lg:flex lg:items-center bg-white/5 backdrop-blur-sm"
    >
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl font-extrabold mb-6">Vishal Kumar Ojha</h1>
            <div className="mb-6">
              <p className="text-2xl">Student | Developer</p>
              <p className="text-2xl">
                I'm a{" "}
                <span className="text-rose-600 font-semibold">
                  <TypeAnimation
                    sequence={[
                      "Founder@ArnoCodes",
                      2000,
                      "Web Developer",
                      2000,
                      "Flutter Developer",
                      2000,
                      "UI/UX Designer",
                      2000,
                      "Competitive Programmer",
                      2000,
                      "Video Editor",
                      2000,
                      "Technical Content Writer",
                      2000,
                      "B.Tech CSE VITB'27",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </span>
              </p>
            </div>
            <p className="text-gray-600 mb-8 max-w-xl">
              Hey, I'm Vishal Kumar Ojha, a 2nd-year student at VIT University, Bhopal, passionate about building
              impactful tech solutions. As the Founder of ArnoCodes, building HackCrusade, I
              specialize in UI/UX design, full-stack development (MERN), and frameworks like React, Django & Flask.
              Beyond coding, I have 75K+ impressions on LinkedIn and experience in content writing and video editing. I
              currently DCA of Notion Community VITB and former lead tech teams at Notion Community VIT Bhopal and E-Cell VIT Bhopal. Always eager to learn,
              grow, and collaborate—let's create something remarkable together!
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={handleDownloadResume} className="btn btn-primary">
                Download Resume
              </button>
              <button onClick={() => setShowSocialModal(true)} className="btn btn-secondary">
                Connect With Me
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67a936a000306ebb2683/view?project=67a074a3000f8ad60523&mode=admin"
              alt="Vishal Kumar Ojha"
              className="w-full max-w-md rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Social Media Icons - Visible on all screen sizes */}
      <div className="fixed left-6 bottom-0 flex flex-col items-center gap-4 z-20">
        <a
          href="https://github.com/vishalkumarojha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Icon" className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/vishalkumarojha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUueLb///8gcrMqdrUIbLFMiL7z+Pv7/P6Zu9ra6PIXb7LE1ugecbPe5/F9q9GjxN+TtdVVkcO4z+Q4gbzq8ffM2+vj7PRhmsjV4u8zfbluocyuyOGIsdRBhr7R4O680eV4ps5elsarwtxvncmwzOS9v/3QAAADyUlEQVR4nO3da3OiMBiGYZKsCUJEEDwBAmr//29cRLdbJa/rDpaUzHN9LZ3hbjgG2PU8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAcQnBdYsL2yvyXbSX+6swLMpDwG2vy3fQ+6VUirWU3OXauXEUqd/V/bHbCrcaRRKye7K0vU5vJZKK9fgu7Yzp4wh2IncS9dIUyDaJK7uiSJWxkNWuDGLwYQ5k2daRQUwlUcgKbXvd3oJHxEbKWJXaXrm30AUVyBZubKbBmizMGieONcGCLJRunBKDnfOFxgsal7ZS4ormYn504kgjzuTZIvTcKPQyIlD5bpzxPe0The5celODuHTiOHPBI2PgLnVmCIVnOpyqmTOBlzvE/g2U2jqzjV4I4T/cQs0TpwJbIq/+NqpNcXBoE73hXhTOM6mU3KxPRydn9gUXSVPGcXlO3ZvxvhGCX7iaBwAwKd0xWVzYXpNvILjmhyTPmybfHmfej3kpgJvdr9ztbPlsIaHT6GO32GSdzWZRrcqE/4DrB95ERne3+GKfm5ZpPhcSPNjW8nHOR8lseQhsb6+/iEczd0+BxWxuWkbdFmobGmq+h1Vnz24jUaheKZTXhdoRpieWW+HRUtvVkMLrQmK2JB/R3f4S8d7iKA4u5Ef66c6nwuK0z9BCfjT+6NHKXuLAQr59KbBN3E+zMDg8PcZ8XdbaBOywQo9+dvXI2rOsYYUx+WCnr7I0BzuoMHx1G+3EVgIHFbL/GMHW3M4gDir8T5HzhWsrlzZjFjIrm+mohbGNE8aohfPA9UJm4+2H9xUqKf9xF8WYjXfl3lMoq9UpLsv4VKyfVtp4f/wdhXLVJPvr3JQ3a+on1wFrCzviGwo3efo5PSoET2NyzoZlkyycHx5nHktyS5UW7hIHF2a946PQPrWhKgvvIQ0uNB0e99Q9h8qnV/hhutbkJTGIqhz/YDqwUJ6Ng7InDjbKwuliYGFofjMlqInlLXzjMLDQN+9XxNtyjK2mVki9DC4SojCcWiH1qrTgRGE1/il/WCGxG9KPtHZTK6ypeQnqM4fJFa6oEzj1Mc5iaoUn6vSmidPF5ArJhxGa+K5xaoX0JQr1UdzkCsnJM+pjnKkVShSicAwo7KCwD4UjQmEHhX0oHBEKOyjsQ+GIUNhBYR8KR4TCDgr7UDgiFHZQ2IfCEaGwg8I+FI4IhR0U9qFwRCjsTLpQ16FRc/e206EwLlSTLzXzaG38jcLCBxc6MHn8FzteW+oLbvwFN/97EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Il+A15PUatCKPBoAAAAAElFTkSuQmCC" alt="Linkedin" className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/arno_dorien628"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-400 transition-colors"
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtlA5ciAX_YBD7GIiMDLY5xgHQhGoks1JmA&s" alt="X" className="w-5 h-5" />
        </a>
        <a href="mailto:work.vishalojha@gmail.com" className="text-gray-600 hover:text-red-500 transition-colors">
          <img src="data:image/jpeg;base64,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" alt="Mail" className="w-5 h-5" />
        </a>
        <div className="h-20 w-px bg-gray-300 mt-2"></div>
      </div>

      {/* Right side social icons */}
      <div className="fixed right-6 bottom-0 flex flex-col items-center gap-4 z-20">
        <a
          href="https://topmate.io/vishal_ojha10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600 transition-colors"
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DU6vyn1kUo3Pflwl0TqsjEofH0lWiKOnOQ&s" alt="Topmate" className="w-5 h-5" />
        </a>
        <div className="h-20 w-px bg-gray-300 mt-2"></div>
      </div>

      {showSocialModal && <SocialModal onClose={() => setShowSocialModal(false)} />}
    </section>
  )
}

export default Hero

