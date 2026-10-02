export interface SectionMeta {
  id: string
  label: string
}

export const SECTIONS: SectionMeta[] = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'activities', label: 'Activities' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
]

export const CONTACT_ID = 'contact'
export const NAV_OFFSET = 96
