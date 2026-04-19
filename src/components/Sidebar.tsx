import portfolioData from '../portfolio_data.json';
import { getSocialIcon } from '../utils/icons';

export default function Sidebar() {
  const { name, roles, photos } = portfolioData.personal_info;
  const { social_links } = portfolioData;

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-6 w-64 animate-fadeIn hidden lg:block z-50 border border-gray-100">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <img
            src={photos[0]}
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto object-cover object-center border-4 border-white shadow-md"
          />
          <div className="absolute bottom-1 right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm"></div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-0.5">{name}</h3>
        <p className="text-xs font-medium text-gray-500 mb-4 px-2">
          {roles.slice(0, 2).join(' • ')}
        </p>

        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2.5 text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
            <span className="text-base">📍</span>
            <span className="text-[11px] font-semibold leading-tight">{portfolioData.contact_info.location}</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-2 border-t border-gray-50">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">Socials</p>
            {social_links
              .filter(link => !['Email', 'X'].includes(link.name))
              .slice(0, 4)
              .map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-1.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all group"
              >
                <div className="p-1 bg-white rounded shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {getSocialIcon(link.name, "w-3.5 h-3.5")}
                </div>
                <span className="text-xs font-bold">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
