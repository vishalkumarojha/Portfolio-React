import type React from "react"

interface Achievement {
  id: number
  title: string
  year: string
  description: string
  icon: string
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "3rd Place At the Coding-Ninjas Hackathon",
      year: "2024",
      description: "learned about DSA, Problem Solving And Web-DEV to solve them into the limited amount of Time",
      icon: "trophy",
    },
    {
      id: 2,
      title: "Finalist In the Project-Expo in Industry Conclave , VITB",
      year: "2024",
      description:
        "Qualified to the final round of the Project-Expo with The project BuildRapo . learned About the AI, M.l., NLPs, LLM",
      icon: "award",
    },
    {
      id: 4,
      title: "3X Hactoberfest Contributer",
      year: "2024",
      description:
        "I proudly received the 3xHacktoberfest goodies, celebrating my contributions to open-source projects during this collaborative initiative.",
      icon: "star",
    },
    {
      id: 3,
      title: "8th Postion in the Buildathon Hackathon in Industry Conclave , VITB",
      year: "2024",
      description:
        "Got the 8th in the Buildathon Hackathon organized by the PreProdCorp during the industry Conclave-24 in the VIT Bhopal. Learned about the Automl, Docker, M.L., Cloud",
      icon: "mic",
    },
  ]

  return (
    <section id="achievements" className="py-16 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Achievements</h2>
        <p className="text-gray-500 mb-8 text-center">Recognition and milestones in my professional journey</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white/90 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">
                {achievement.icon === "trophy" && "🏆"}
                {achievement.icon === "award" && "🥇"}
                {achievement.icon === "star" && "⭐"}
                {achievement.icon === "mic" && "🎤"}
              </div>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded text-sm font-medium mb-3">
                {achievement.year}
              </span>
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

