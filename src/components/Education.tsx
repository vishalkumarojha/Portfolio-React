import type React from "react"

interface EducationItem {
  id: number
  degree: string
  institution: string
  location: string
  period: string
  description: string
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      degree: "B.Tech CSE (Specialization in Health Informatics) ",
      institution: "VIT Bhopal University",
      location: "(Bhopal, Madhya Pradesh)",
      period: "2023 - Present",
      description:
        "I am currently a second-year student at VIT Bhopal University, pursuing a B.Tech. in Computer Science and Engineering with a specialization in Health Informatics. Throughout my 1st year, My Cumulative GPA is 9.4",
    },
    {
      id: 2,
      degree: "NEET U.G. Preparation ",
      institution: "Allen Career Institute",
      location: "Kota, Rajasthan",
      period: "2021 - 2023",
      description:
        "I dedicated my time to preparing for the NEET Examination. To achieve my goal, I enrolled in ALLEN Institute, Kota, where I was in their prestigious SRG Batch and achived 607/720 in the Exam.",
    },
  ]

  return (
    <section id="education" className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Education</h2>
        <p className="text-gray-500 mb-8 text-center">Academic background and qualifications</p>

        <div className="relative max-w-3xl mx-auto pl-8 border-l-2 border-gray-200">
          {education.map((edu) => (
            <div className="relative mb-12 last:mb-0" key={edu.id}>
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 bg-white">
                <div className="w-3 h-3 bg-black rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(0,0,0,1)]"></div>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded text-sm font-medium mb-3">
                  {edu.period}
                </span>
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <div className="text-gray-600 mb-3">
                  {edu.institution}, {edu.location}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

