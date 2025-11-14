import type React from "react"

interface Publication {
  id: number
  title: string
  authors: string
  journal: string
  location: string
  date: string
  doi: string | null
  link: string
  description: string
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: "A Multimodal Narration System for Enhancing Accessibility for the Visually Impaired",
      authors: "Dr.Swagat samanyantara , Vishal Ojha , Mansi Kaushik , Abhishek Kumar , Rishav Mishra",
      journal: "International Conference on Cognitive, Green and Ubiquitous Computing (IC-CGU)",
      location: "C. V. Raman Global University , Bhubaneswar",
      date: "Nov. 2025",
      doi: "10.1234/ijhtmi.2025.001",
      link: "https://example.com/publication1",
      description:
        "This paper presents Arnox, an AI-driven multi-modal image narration system that improves accessibility for visually impaired individuals by integrating Optical Character Recognition (OCR), image and video captioning, and Text-to-Speech (TTS) synthesis. The framework enables real-time narration of both textual and visual content through a mobile app, allowing users to receive descriptive audio feedback from images and videos, thereby enhancing digital inclusion and autonomy for users with visual impairments.",
    },
    
  ]

  return (
    <section id="publications" className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Publications</h2>
        <p className="text-gray-500 mb-8 text-center">Research papers and published work</p>

        <div className="relative max-w-3xl mx-auto pl-8 border-l-2 border-gray-200">
          {publications.map((pub) => (
            <div className="relative mb-12 last:mb-0" key={pub.id}>
              <div className="absolute -left-[17px] top-1.5 w-8 h-8">
                <div className="w-3 h-3 bg-black rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(0,0,0,1)]"></div>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded text-sm font-medium mb-3">{pub.date}</span>
                <h3 className="text-xl font-semibold mb-1">{pub.title}</h3>
                <div className="text-gray-600 mb-2">
                  <p className="text-sm font-medium">{pub.authors}</p>
                  <p className="text-sm">
                    {pub.journal}, {pub.location}
                  </p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{pub.description}</p>
                <div className="flex flex-wrap gap-3 items-center">
                  {pub.doi && (
                    <span className="text-xs text-gray-500">
                      DOI: <span className="font-mono">{pub.doi}</span>
                    </span>
                  )}
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-black bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                  >
                    Read Paper →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
