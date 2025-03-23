import type React from "react"

interface Webslog {
  id: number
  title: string
  date: string
  link: string
}

const Webslogs: React.FC = () => {
  const webslogs: Webslog[] = [
    {
      id: 1,
      title: "The Importance of Web Accessibility",
      date: "March 10, 2025",
      link: "#",
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      date: "February 25, 2025",
      link: "#",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Each",
      date: "February 12, 2025",
      link: "#",
    },
    {
      id: 4,
      title: "Getting Started with React Hooks",
      date: "January 30, 2025",
      link: "#",
    },
    {
      id: 5,
      title: "Building Responsive Layouts with Tailwind CSS",
      date: "January 15, 2025",
      link: "#",
    },
  ]

  return (
    <section id="webslogs" className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Webslogs</h2>
        <p className="text-gray-500 mb-8 text-center">Recent articles and tutorials</p>

        <div className="max-w-3xl mx-auto mb-10">
          {webslogs.map((log) => (
            <div
              key={log.id}
              className="flex flex-col md:flex-row md:items-center py-5 border-b border-gray-100 last:border-0"
            >
              <div className="text-sm text-gray-500 w-32 mb-2 md:mb-0">{log.date}</div>
              <h3 className="flex-1 text-lg font-semibold mb-2 md:mb-0">
                <a href={log.link} className="hover:text-gray-600 transition-colors">
                  {log.title}
                </a>
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="https://vishalojha628.hashnode.dev/" className="btn btn-secondary">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}

export default Webslogs

