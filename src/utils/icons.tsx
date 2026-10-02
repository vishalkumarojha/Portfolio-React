import {
  BookOpen,
  Code,
  Code2,
  ExternalLink,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Trophy,
  Twitter,
  Youtube,
} from 'lucide-react'

export const getSocialIcon = (name: string, className = 'h-4 w-4') => {
  const n = name.toLowerCase()
  if (n.includes('github')) return <Github className={className} />
  if (n.includes('linkedin')) return <Linkedin className={className} />
  if (n === 'x') return <Twitter className={className} />
  if (n.includes('instagram')) return <Instagram className={className} />
  if (n.includes('email')) return <Mail className={className} />
  if (n.includes('youtube')) return <Youtube className={className} />
  if (n.includes('leetcode')) return <Code2 className={className} />
  if (n.includes('geekforgeek')) return <Code className={className} />
  if (n.includes('microsoft learn')) return <BookOpen className={className} />
  if (n.includes('unstop')) return <Trophy className={className} />
  if (n.includes('topmate')) return <ExternalLink className={className} />
  if (n.includes('hashnode')) return <Globe className={className} />
  return <ExternalLink className={className} />
}
