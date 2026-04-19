import { useState } from 'react';
import portfolioData from '../portfolio_data.json';
import SocialModal from './SocialModal';

export default function Hero() {
  const { name, roles, photos, resume_url } = portfolioData.personal_info;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="text-center py-20 animate-fadeIn">
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <img
            src={photos[0]}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover object-center border-4 border-white shadow-xl"
          />
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
        </div>
      </div>

      <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">{name}</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        {roles.join(" • ")}
      </p>
      
      <div className="flex justify-center gap-4 mb-10">
        <span className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-full text-sm font-medium border border-gray-100">
          <span className="text-lg">📍</span> {portfolioData.contact_info.location}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          href={resume_url} 
          target="_blank" 
          rel="noreferrer"
          className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
        >
          Download Resume
        </a>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          Connect With Me
        </button>
      </div>

      <SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
