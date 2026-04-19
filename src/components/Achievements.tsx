import portfolioData from '../portfolio_data.json';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section className="py-20 border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Achievements</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">Recognition and milestones in my professional journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((item, idx) => (
          <div 
            key={idx} 
            className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="inline-block px-3 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-bold mb-4 border border-gray-100 group-hover:bg-gray-100 transition-colors">
              {item.year}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
