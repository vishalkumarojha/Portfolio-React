"use client"

import type React from "react"

interface Experience {
  id: number
  company: string
  logo: string
  position: string
  department: string
  period: string
  type: string
  location: string
  mode: string
  description?: string
  skills?: string[]
}

const Internship: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
      position: "Community Manager",
      department: "Notion Community",
      period: "Sep 2025 - Present",
      type: "Part-time",
      location: "Remote",
      mode: "Remote",
      description:
        "To integrate technology, productivity, and collaboration for smarter learning and project execution.",
    },
    {
      id: 4,
      company: "Hindalco Industries Limited",
      logo: "https://en.wikipedia.org/wiki/Hindalco_Industries",
      position: "Project Intern",
      department: "Summer Intern",
      period: "Jun 2025 - Jul 2025",
      type: "Part-time",
      location: "Remote",
      mode: "Remote",
      description:
        "To integrate technology, productivity, and collaboration for smarter learning and project execution.",
    },
    {
      id: 2,
      company: "scramble labs , Arno codes & Arno Labs",
      logo: "",
      position: "Founding Team",
      department: "Web & Android Development",
      period: "Aug 2025 - Present",
      type: "Part-time",
      location: "Remote",
      mode: "Remote",
    },
    {
      id: 3,
      company: "Notion Community VIT Bhopal",
      logo: "https://github.com/vishalkumarojha/ArnoCodes/blob/main/src/assets/notion_vit_logo.jpg?raw=true",
      position: "Board Advisor",
      department: "Leadership",
      period: "Apr 2025 - Present",
      type: "Part-time",
      location: "VIT Bhopal",
      mode: "Hybrid",
      skills: ["Team Building", "Strategic Planning", "Leadership"],
    },
    {
      id: 11,
      company: "VIT Bhopal AI Innovators Hub",
      logo: "",
      position: "Project Collaborator",
      department: "AI & Innovation",
      period: "Jul 2025 - Sep 2025",
      type: "Part-time",
      location: "VIT Bhopal",
      mode: "On-site",
    },
    {
      id: 14,
      company: "TheSmartBridge",
      logo: "",
      position: "Virtual Internship Trainee – Salesforce Developer",
      department: "Salesforce Development",
      period: "May 2025 - Jul 2025",
      type: "Internship",
      location: "Remote",
      mode: "Remote",
      description: "Powered by Salesforce",
    },
    {
      id: 15,
      company: "Pawzz Foundation",
      logo: "",
      position: "Graphic Designer",
      department: "Design",
      period: "May 2025 - Jun 2025",
      type: "Internship",
      location: "Remote",
      mode: "Remote",
    },
    {
      id: 18,
      company: "buildspace",
      logo: "",
      position: "Member S5",
      department: "Community",
      period: "Jun 2024 - Aug 2024",
      type: "Part-time",
      location: "Remote",
      mode: "Remote",
    },
    {
      id: 19,
      company: "Earth5R",
      logo: "",
      position: "Content Writer",
      department: "Content Creation",
      period: "Dec 2023 - Jan 2024",
      type: "Internship",
      location: "Remote",
      mode: "Remote",
      skills: ["Web Content Writing", "Content Development", "Web Content Creation", "Analytical Skills"],
    },
    {
      id: 20,
      company: "Team Everest NGO",
      logo: "",
      position: "Content Writer",
      department: "Content Creation",
      period: "Nov 2023 - Dec 2023",
      type: "Internship",
      location: "Remote",
      mode: "Remote",
      skills: ["Content Development", "Web Content Creation", "Web Content Writing"],
    },
  ]

  const handleDownloadResume = () => {
    // Replace with your Google Drive link
    const resumeUrl = "https://docs.google.com/document/d/1_WsSxoErTPy1zxKIKGM_q614iUaUS__iiQT5nP4PtN8/edit?usp=sharing"
    window.open(resumeUrl, "_blank")
  }

  return (
    <section id="internship" className="py-16 bg-white/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Experiences</h2>
        <p className="text-gray-500 mb-8 text-center">Current and previous collaborations with leading companies.</p>

        <div className="space-y-8 mb-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white/70 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full p-2">
                  <img
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{exp.position}</h3>
                  <p className="text-sm text-gray-500">
                    {exp.company} • {exp.department}
                  </p>
                  {exp.description && <p className="text-sm text-gray-600 mt-2">{exp.description}</p>}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-sm font-medium mb-1">{exp.period}</p>
                  <p className="text-sm text-gray-500">
                    {exp.type} • {exp.location} • {exp.mode}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button onClick={handleDownloadResume} className="btn btn-primary">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default Internship
