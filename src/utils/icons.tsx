import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Youtube, 
  ExternalLink, 
  Code2, 
  Code, 
  BookOpen, 
  Trophy, 
  Globe
} from 'lucide-react';

export const getSocialIcon = (name: string, className: string = "w-5 h-5") => {
  const n = name.toLowerCase();
  if (n.includes('github')) return <Github className={className} />;
  if (n.includes('linkedin')) return <Linkedin className={`${className} text-blue-600`} />;
  if (n === 'x') return <Twitter className={className} />;
  if (n.includes('instagram')) return <Instagram className={`${className} text-pink-500`} />;
  if (n.includes('email')) return <Mail className={`${className} text-red-500`} />;
  if (n.includes('youtube')) return <Youtube className={`${className} text-red-600`} />;
  if (n.includes('leetcode')) return <Code2 className={`${className} text-yellow-600`} />;
  if (n.includes('geekforgeek')) return <Code className={`${className} text-green-600`} />;
  if (n.includes('microsoft learn')) return <BookOpen className={`${className} text-blue-500`} />;
  if (n.includes('unstop')) return <Trophy className={`${className} text-yellow-500`} />;
  if (n.includes('topmate')) return <ExternalLink className={`${className} text-blue-400`} />;
  if (n.includes('hashnode')) return <Globe className={`${className} text-blue-700`} />;
  return <ExternalLink className={`${className} text-gray-400`} />;
};
