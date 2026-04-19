"use client"

import { useState } from "react"
import portfolioData from '../portfolio_data.json';

export default function Skills() {
  // Extract unique categories and group them
  const skillCategories = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  const categories = Object.keys(skillCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  const getIconUrl = (name: string) => {
    const n = name.toLowerCase();
    const mapping: Record<string, string> = {
      'c': 'c',
      'c++': 'cpp',
      'java': 'java',
      'python': 'py',
      'javascript': 'js',
      'typescript': 'ts',
      'html5': 'html',
      'css': 'css',
      'tailwind css': 'tailwind',
      'react.js': 'react',
      'react native': 'react',
      'next.js': 'nextjs',
      'node.js': 'nodejs',
      'express.js': 'express',
      'django': 'django',
      'flask': 'flask',
      'mongodb': 'mongodb',
      'mysql': 'mysql',
      'postgresql': 'postgres',
      'git': 'git',
      'github': 'github',
      'vercel': 'vercel',
      'flutter': 'flutter',
      'firebase': 'firebase',
      'appwrite': 'appwrite',
      'tensorflow': 'tensorflow',
      'opencv': 'opencv',
      'pandas': 'pandas',
      'numpy': 'numpy',
      'notion': 'notion',
      'canva': 'canva',
      'adobe premiere pro': 'pr',
      'vs code': 'vscode',
      'figma': 'figma'
    };
    
    const slug = mapping[n];
    return slug ? `https://skillicons.dev/icons?i=${slug}` : null;
  };

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools and Stack</h2>
      <p className="text-gray-600 mb-8">Frequently used technologies and platforms.</p>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      {activeCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].map((skill) => {
            const iconUrl = getIconUrl(skill);
            return (
              <div
                key={skill}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden">
                  {iconUrl ? (
                    <img 
                      src={iconUrl} 
                      alt={skill} 
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-lg font-semibold text-gray-600">${skill.charAt(0)}</span>`;
                      }}
                    />
                  ) : (
                    <span className="text-lg font-semibold text-gray-600">{skill.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{skill}</p>
                  <p className="text-xs text-gray-500">{activeCategory}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  )
}
