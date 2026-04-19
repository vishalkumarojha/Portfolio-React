import portfolioData from '../portfolio_data.json';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
      <p className="text-gray-600 mb-12">Academic background and qualifications</p>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div key={idx} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gray-900 mt-2"></div>
              {idx < education.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-2"></div>}
            </div>
            <div className="pb-8">
              <p className="text-sm font-medium text-gray-500 mb-2">{edu.period}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
              <p className="text-sm text-gray-600 mb-3">{edu.institution} {edu.location}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
