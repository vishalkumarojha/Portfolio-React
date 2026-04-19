import portfolioData from '../portfolio_data.json';
import { getSocialIcon } from '../utils/icons';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 mt-20 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {portfolioData.social_links
            .filter(link => ['LinkedIn', 'GitHub', 'Topmate', 'Email'].includes(link.name))
            .map((link, idx) => (
             <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2.5 text-gray-500 hover:text-gray-900 transition-all group px-3 py-1.5 rounded-lg hover:bg-gray-50"
             >
                {getSocialIcon(link.name, "w-5 h-5 transition-transform group-hover:scale-110")}
                <span className="text-sm font-semibold tracking-tight">{link.name}</span>
             </a>
          ))}
        </div>
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {portfolioData.personal_info.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
