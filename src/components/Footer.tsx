import type React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-8 pt-10 pb-4 overflow-hidden">
      {/* Doodle Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-32"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20,50 Q40,20 60,50 Q80,80 100,50 Q120,20 140,50 Q160,80 180,50 Q200,20 220,50"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-6">
          <div className="text-xl font-bold">Vishal Kumar Ojha</div>
          <p className="text-gray-400 text-sm">Student | Developer</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center pt-4 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs flex items-center">
          &copy; {currentYear} Vishal Kumar Ojha. 28&more
        </p>
      </div>
    </footer>
  );
};

export default Footer;
