import portfolioData from '../portfolio_data.json';
import { ArrowRight } from 'lucide-react';

export default function Publications() {
  const { publications } = portfolioData;

  return (
    <section className="py-20 border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Publications</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">Research papers and published work</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {publications.map((pub, idx) => (
          <div key={idx} className="relative group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all bg-white hover:shadow-lg">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                {pub.title}
              </h3>

              <div className="space-y-1 text-sm font-medium text-gray-600">
                <p className="text-gray-900">{pub.authors}</p>
                <p className="italic underline underline-offset-4 decoration-gray-200">
                  {pub.journal}, {pub.location}
                </p>
              </div>

              <p className="text-gray-500 text-base leading-relaxed max-w-3xl">
                {pub.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <span className="text-xs font-bold text-gray-400 tracking-wider">
                  DOI: {pub.doi}
                </span>
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-900 text-sm font-bold rounded-lg border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-95 shadow-sm"
                >
                  Read Paper <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
