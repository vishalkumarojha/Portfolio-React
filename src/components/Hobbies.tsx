import type React from "react"
import { Globe, Book, Camera, Gamepad, FileText, Palette } from "lucide-react"

interface Hobby {
  icon: React.ReactNode
  name: string
  description: string
}

const Hobbies: React.FC = () => {
  const hobbies: Hobby[] = [
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Website Development & Custom Web Applications",
      description: "Designing and developing responsive, modern websites.Expertise in React, Next.js, Tailwind CSS, and other required web technologies. Developing dynamic, scalable, and API-integrated web apps.",
    },
    {
      icon: <Book className="w-6 h-6" />,
      name: "Mobile App Development",
      description: "Building cross-platform mobile apps using Flutter and React Native. Creating smooth, user-friendly experiences optimized for performance.",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      name: "Video Editing & Content Creation",
      description: "Editing videos for social media, marketing, and YouTube. Using tools like Adobe Premiere Pro, After Effects, and DaVinci Resolve",
    },
    {
      icon: <Gamepad className="w-6 h-6" />,
      name: "Automation & Scripting",
      description: "Writing Python and JavaScript scripts for task automation. Web scraping, data processing, and workflow automation.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      name: "Technical Writing & Blogging",
      description: "Writing clear, engaging, and well-researched technical content. Creating blogs, documentation, and tutorials on tech-related topics.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      name: "UI/UX Design",
      description: "Crafting visually appealing and intuitive interfaces. Designing wireframes and prototypes using Figma",
    },
  ]

  return (
    <section id="hobbies" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Freelance Services</h2>
        <p className="text-gray-500 mb-8 text-center">freelance services to help businesses and individuals build impactful digital solutions. Here’s what I can do for you:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full mr-4 text-gray-700">{hobby.icon}</div>
                <h3 className="text-lg font-semibold">{hobby.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-4">
          <a href="https://topmate.io/vishal_ojha10" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Book A Service
          </a>
        </div>


      </div>
    </section>
  )
}

export default Hobbies

