import { X } from 'lucide-react';
import portfolioData from '../portfolio_data.json';
import { getSocialIcon } from '../utils/icons';

interface SocialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SocialModal({ isOpen, onClose }: SocialModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Connect With Me</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-2 gap-4">
          {portfolioData.social_links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all group"
            >
              <div className="transition-transform group-hover:scale-110">
                {getSocialIcon(link.name)}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Background click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}
