import portfolioData from '../portfolio_data.json';

export default function About() {
  const { about_texts, photos } = portfolioData.personal_info;
  const researchInterests = portfolioData.skills.slice(0, 5).map(s => s.name);

  return (
    <section className="py-16 border-t border-gray-200">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display uppercase tracking-tight">About</h2>
          <div className="relative group">
            <img 
              src="/about-collage.png" 
              alt="Experience Collage" 
              className="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 scale-100 group-hover:scale-[1.02] cursor-pointer" 
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        </div>
        <div>
          {about_texts.map((text, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-4">
              {text}
            </p>
          ))}
          <div className="mb-6 mt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span key={interest} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
