import raw from '../portfolio_data.json'

export interface SocialLink {
  name: string
  url: string
}

export interface Stat {
  value: string
  label: string
}

export interface PersonalInfo {
  name: string
  tagline: string
  roles: string[]
  about_texts: string[]
  stats: Stat[]
  resume_url: string
  photos: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  description: string
}

export interface Project {
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link: string
  problem: string
  solution: string
  result: string
  collaboration?: string
}

export interface ExperienceItem {
  company: string
  logo: string
  position: string
  department: string
  period: string
  type: string
  location: string
  mode: string
  description?: string
  certificate?: string
  skills?: string[]
}

export interface Achievement {
  title: string
  year: string
  description: string
  certificate?: string
  icon?: string
}

export interface Publication {
  title: string
  authors: string
  journal: string
  location: string
  date: string
  doi: string
  link: string
  description: string
}

export interface Skill {
  name: string
  category: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Capability {
  title: string
  description: string
}

export interface Contribution {
  title: string
  description: string
  stars: number
  forks: number
  link: string
}

export interface ContactInfo {
  email: string
  location: string
  topmate_link: string
}

export const personal = raw.personal_info as PersonalInfo
export const contact = raw.contact_info as ContactInfo
export const education = raw.education as EducationItem[]
export const projects = raw.projects as Project[]
export const experiences = raw.experiences as ExperienceItem[]
export const achievements = raw.achievements as Achievement[]
export const publications = raw.publications as Publication[]
export const capabilities = raw.what_id_do as Capability[]
export const contributions = raw.contributions as Contribution[]
export const socialLinks = raw.social_links as SocialLink[]
export const skills = raw.skills as Skill[]

export const skillGroups: SkillGroup[] = skills.reduce<SkillGroup[]>((groups, skill) => {
  const existing = groups.find((group) => group.category === skill.category)
  if (existing) existing.items.push(skill.name)
  else groups.push({ category: skill.category, items: [skill.name] })
  return groups
}, [])

export const socialByName = (names: string[]) =>
  names.map((name) => socialLinks.find((link) => link.name === name)).filter(Boolean) as SocialLink[]

export const yearFrom = (period: string) => period.match(/\d{4}/)?.[0] ?? ''

export const shortTitle = (title: string) => title.split(':')[0].trim()

export const isRepoLink = (link: string) => link.includes('github.com')

export const pad = (index: number) => String(index + 1).padStart(2, '0')
