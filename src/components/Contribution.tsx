import type React from "react"

interface Contribution {
  id: number
  title: string
  description: string
  stars: number | null
  forks: number | null
  link: string
}

const Contribution: React.FC = () => {
  const contributions: Contribution[] = [
    {
      id: 1,
      title: "Notion Community Website",
      description: "A community-driven website for sharing Notion Events and members of the Notion community.",
      stars: 13,
      forks: 5,
      link: "https://github.com/notion-vit",
    },
    {
      id: 2,
      title: "Scramble Labs",
      description: "A collection of tools and utilities for developers for the notion templates to improve their productivity.",
      stars: 18,
      forks: 8,
      link: "http://scramblelabs.com/",
    },
    {
      id: 3,
      title: "E-Cell Website",
      description: "A Website for the E-Cell of VIT Bhopal, to showcase the events and activities of the club.",
      stars: 12,
      forks: 6,
      link: "https://www.ecellvitbhopal.in/",
    },
    {
      id: 4,
      title: "Community Jeopardy",
      description: "A community-driven website for playing Jeopardy during the club events and meetups.",
      stars: 13,
      forks: 5,
      link: "https://github.com/facebook/react/pulls?q=author%3Ausername",
    },
  ]

  return (
    <section id="contribution" className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Projects Contributions</h2>
        <p className="text-gray-500 mb-8">Projects and contributions to the developer community</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {contributions.map((contribution) => (
            <div
              key={contribution.id}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3">
                <a
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  {contribution.title}
                </a>
              </h3>
              <p className="text-gray-600 text-sm mb-4">{contribution.description}</p>
              {contribution.stars !== null && (
                <div className="flex gap-6">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <span>{contribution.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    <span>{contribution.forks}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="https://github.com/vishalkumarojha" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contribution

