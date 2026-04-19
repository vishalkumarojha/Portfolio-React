import portfolioData from '../portfolio_data.json';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
      <p className="text-gray-600 mb-12">Recent project work and applications.</p>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full md:w-48 h-32 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <a href={project.link} target="_blank" rel="noreferrer">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                  {project.title}
                </h3>
              </a>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 font-medium">Tech: {project.technologies.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
