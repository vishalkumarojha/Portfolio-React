"use client"

import type React from "react"

import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link: string
  problem: string
  solution: string
  result: string
  collaboration?: string
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    // {
    //   id: 4,
    //   title: "ArnoCodes",
    //   description:
    //     "A tech-based platform offering the best DSA practice sheets and resources. It is a one-stop solution for all your DSA needs. It is a platform where you can practice DSA problems, participate in contests, and learn from the best resources available.",
    //   image:
    //     "https://github.com/vishalkumarojha/testimonials-section/blob/main/css/Screenshot%202025-03-23%20144604.png?raw=true",
    //   category: "Web Development",
    //   technologies: ["React.js", "Notion Productivity Software", "appwrite", "Next.js", "Typescript"],
    //   link: "https://github.com/vishalkumarojha/ArnoCodes",
    //   problem: "Need for an simpilfied platform for startinf the DSA and Development journey",
    //   solution: "A tech-based platform offering the best DSA practice sheets and resources.Features a structured course covering 25 essential steps in Data Structures and Algorithms.Each step includes live lectures, with every lecture containing in-depth lessons, practice questions for a complete learning experience.",
    //   result: "Created an entertaining platform that promotes learning through gamification.",
    // },
    {
      id: 1,
      title: "ArnoX (Image to Speech Converter App)",
      description:
        "ArnoX is an image-to-speech narration app designed to assist visually impaired individuals. The app captures photos of objects, describes their appearance, recognizes written characters, and narrates them effectively.",
      image:
        "https://github.com/vishalkumarojha/Portfolio-React/blob/main/src/assets/drawer.png?raw=true",
      category: "App Development",
      technologies: ["Flutter", "Dart", "Firebase", "Google ML Kit"],
      link: "https://github.com/vishalkumarojha/ArnoX",
      problem:
        "Visually impaired individuals face challenges in identifying objects and reading text in their environment.",
      solution:
        "Developed a mobile application that uses machine learning to identify objects and text in images, converting them to speech.",
      result:
        "Created an accessible tool that helps visually impaired users navigate their environment more independently.",
      collaboration: "Developed it during the University Project Exibition 1",
    },
    {
      id: 2,
      title: "AdVITya’25: [ flagship Annual Techno-Cultural and sports fest of VITB University]",
      description:
        "The Website hosted 130+ Technical and Non-technical Events along with their registration,The Website has Key Highlights , Celebrity , organiser , guest speakers , listed along with a ticketing system",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAakBLxIbukhOWbrsVaD0gWGHZc5ja7XTgX87QTIJshZtZ2ZZ6_w0LdQf6V0da1oJTlVY&usqp=CAU?height=600&width=600",
      category: "Web Development",
      technologies: ["React.js" , "Javascript" , "Appwrite" , "Typescript" , "Tailwind CSS"],
      link: "https://vitbhopal.ac.in/advitya2025/",
      problem:
        "AdVITya’25: [ flagship Annual Techno-Cultural and sports fest of VITB University] needed a website to host 130+ Technical and Non-technical Events along with their registration.",
      solution:
        "Built The Website hosted 130+ Technical and Non-technical Events along with their registration, The Website handled 600K request in 30 days consuming 550 GB of bandwidth ,The Website has Key Highlights , Celebrity , organiser , guest speakers , listed along with a ticketing system",
      result: "Website handled 600K request in 30 days consuming 550 GB of bandwidth,hosted 130+ Technical and Non-technical Events along with their registration,",
    },
    {
      id: 3,
      title: "Farm-O-Help",
      description:
        "A mobile applications to help farmers to identify diesese of plants , improve its yield ,predict wheather , and rent tools cheaply available in the market",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwQ_S2nvM5EUvF5zJfuavvdIOm9Ojebskgw&s?height=600&width=600",
      category: "Machine Learning",
      technologies: ["Flutter","machine learning", "Dart", "Firebase", "Kraggle dataset", "Google Collab" , "Python"],
      link: "https://github.com/vishalkumarojha",
      problem: "Traditional it lacks an applications to help farmers to identify diesese of plants , improve its yield ,predict wheather , and rent tools cheaply available in the market",
      solution: "Developed a cross platform application identify diesese of plants , improve its yield ,predict wheather , and rent tools cheaply available in the market",
      result: "Its detect diseases , Provide tool rental facility and predict the soil and weather of the area .Features - Secured Authentication , Multilingual for efficient use, Smart connect , Weather",
    },
    
    // {
    //   id: 2,
    //   title: "Buildrapo (Resume/Career Path Organiser)",
    //   description:
    //     "BuildRapo is an AI-powered platform that enhances career success by offering personalized guidance. Using advanced AI algorithms and Large Language Models (LLMs), it optimizes resumes for ATS compatibility, tailors advice based on user interests, and provides structured learning paths.",
    //   image:
    //     "https://github.com/vishalkumarojha/testimonials-section/blob/main/css/1724776881249.jpg?raw=true",
    //   category: "AI/ML, Web Development",
    //   technologies: ["React", "Python", "OpenAI API", "MongoDB"],
    //   link: "#",
    //   problem: "Job seekers struggle to create ATS-optimized resumes and find personalized career guidance.",
    //   solution:
    //     "Built an AI platform that analyzes resumes, suggests improvements, and provides customized career paths.",
    //   result:
    //     "Helped users improve their resume quality and receive tailored career advice based on their skills and interests.",
    // },
    // {
    //   id: 3,
    //   title: "RushX (E-commerce Website)",
    //   description:
    //     "RushX, an e-commerce website developed for the Build for Bharat competition. This project features an AI-powered chatbox that allows users to ask questions and receive instant assistance, significantly enhancing the shopping experience.",
    //   image: "https://github.com/vishalkumarojha/testimonials-section/blob/main/css/intro.jpg?raw=true",
    //   category: "Web Development",
    //   technologies: ["Django", "Python", "JavaScript", "Bootstrap"],
    //   link: "https://github.com/vishalkumarojha/E-commerce-RUSHX-",
    //   problem:
    //     "Traditional e-commerce platforms lack personalized customer support and intuitive shopping experiences.",
    //   solution: "Created an e-commerce platform with an AI-powered chatbot to provide instant customer assistance.",
    //   result: "Enhanced user experience with real-time support, leading to improved customer satisfaction.",
    // },
  ]

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-16 bg-white/80 backdrop-blur-sm ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <p className="text-gray-500 mb-8 text-center">Selected works and case studies</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/90 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50"
            onClick={closeProjectModal}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 text-white text-xs rounded">
                  {selectedProject.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Problem Statement</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Results & Takeaways</h4>
                  <p className="text-gray-600 text-sm">{selectedProject.result}</p>
                </div>

                {selectedProject.collaboration && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Collaboration</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.collaboration}</p>
                  </div>
                )}

                <div className="flex justify-end">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

