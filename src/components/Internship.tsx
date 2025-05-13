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
}

const Internship: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "University Club's Lead Position",
      logo: "https://github.com/vishalkumarojha/ArnoCodes/blob/main/src/assets/notion_vit_logo.jpg?raw=true",
      position: "President@NotionCommunityVITB , Co-Lead @E-cell",
      department: "Former's Tech, Ceative , operations and Events team Lead",
      period: "Dec 2023 - Present",
      type: "Full-time",
      location: "VIT Bhopal University",
      mode: "Hybrid",
    },
    {
      id: 2,
      company: "Team Everest NGO",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLzsBzgQQwYVsl_to-zH9lNyyyNJJyuoyKg&s",
      position: "Content Writing ",
      department: ".",
      period: "Nov, 2023",
      type: "Internship",
      location: "online",
      mode: ".",
    },
    {
      id: 3,
      company: "Earth 5R",
      logo: "data:image/png;base64,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",
      position: "Content Writing ",
      department: ".",
      period: "Nov, 2023",
      type: "Internship",
      location: "remote",
      mode: ".",
    },
    {
      id: 4,
      company: "Insternshala",
      logo: "data:image/png;base64,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",
      position: "Insternshala Student Partener",
      department: "Campus Ambassador",
      period: "Jun, 2024 - Aug, 2024",
      type: "Part-time",
      location: ".",
      mode: "Remote",
    },
  ]

  const handleDownloadResume = () => {
    // Replace with your Google Drive link
    const resumeUrl = "https://drive.google.com/file/d/1dSs2lv0cPrguWWaP_ae__Vd5TxEstPxt/view?usp=sharing"
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

