import portfolioData from '../portfolio_data.json';
import { Building2 } from 'lucide-react';

export default function Experience() {
  const { experiences, personal_info } = portfolioData;

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiences</h2>
      <p className="text-gray-600 mb-12">Current and previous collaborations with leading companies.</p>

      <div className="space-y-8 mb-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex gap-6 group">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              {exp.logo ? (
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="w-10 h-10 object-contain p-0.5" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add('bg-gray-50');
                    const icon = document.createElement('div');
                    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-gray-400"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M15 22v-4a3 3 0 0 0-6 0v4"/></svg>`;
                    (e.target as HTMLImageElement).parentElement!.appendChild(icon.firstChild!);
                  }}
                />
              ) : (
                <Building2 className="w-6 h-6 text-gray-400" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tight">{exp.position}</h3>
                  <p className="text-sm font-semibold text-gray-600">
                    {exp.company} • <span className="font-medium text-gray-500">{exp.department}</span>
                  </p>
                </div>
                <p className="text-sm font-bold text-gray-400 mt-1 sm:mt-0 sm:text-right uppercase tracking-wider">{exp.period}</p>
              </div>
              {exp.description && <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-3xl">{exp.description}</p>}
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-gray-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded text-[10px] font-bold uppercase tracking-wider transition-colors">
                  {exp.type}
                </span>
                <span className="px-2 py-0.5 bg-gray-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded text-[10px] font-bold uppercase tracking-wider transition-colors">
                  {exp.mode}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a href={personal_info.resume_url} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors inline-block text-center">
          View Resume
        </a>
      </div>
    </section>
  )
}
