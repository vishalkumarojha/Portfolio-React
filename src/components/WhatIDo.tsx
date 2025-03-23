import type React from "react"

interface Service {
  id: number
  title: string
  description: string
  icon: string
}

const WhatIDo: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Website & Web App Development",
      description:
        "Building modern, responsive, and high-performance websites and web applications using React, Next.js, and Tailwind CSS.",
      icon: "code",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications with Flutter and React Native, ensuring seamless user experiences.",
      icon: "mobile",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing designs using Figma and Adobe XD, with a focus on user experience and accessibility.",
      icon: "design",
    },
    {
      id: 4,
      title: "Video Editing & Content Creation",
      description:
        "Editing high-quality videos for YouTube, marketing, and social media using Premiere Pro, After Effects, and DaVinci Resolve.",
      icon: "video",
    },
    {
      id: 5,
      title: "Technical Writing & Documentation",
      description:
        "Writing clear and well-structured technical blogs, guides, and documentation to simplify complex concepts.",
      icon: "writing",
    },
    {
      id: 6,
      title: "Automation & Scripting",
      description:
        "Creating Python and JavaScript scripts to automate tasks, web scraping, data processing, and workflow optimization.",
      icon: "automation",
    },

  ]

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "code":
        return (
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        )
      case "mobile":
        return (
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 4h10M7 20h10M12 16h.01M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z"
            />
          </svg>
        )
      case "design":
        return (
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        )
      case "video":
        return (
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 2h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        )
      case "writing":
        return (
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 20h9M9 12h6M9 16h6M9 8h6M4 4v16a2 2 0 002 2h12a2 2 0 002-2V4"
            />
          </svg>
        )
      case "automation":
        return (
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6h4M12 4v4m-2 2h4m0 0v4m-4-4v4M6 18h12a2 2 0 002-2v-4a2 2 0 00-2-2h-4m-4 0H6a2 2 0 00-2 2v4a2 2 0 002 2z"
            />
          </svg>
        )
      default:
        return null
    }
  }


  return (
    <section id="what-i-do" className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">My Expertise</h2>
          <p className="text-gray-500 mb-8">Code, design, automate – I do it all!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-black mb-6">{getIconComponent(service.icon)}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo

