import type { RoleEntry } from '../components/ui/RoleIndex'

/* Virtual, college and extracurricular activities, presented as their own
   experience-style section alongside the professional Experience section.

   Descriptions are authored copy, not scraped from portfolio_data.json.
   Periods and logos are reused only where the same organisation and role
   already exist in the professional experience data. Roles 01-03 have no
   matching source record, so their period is intentionally left empty rather
   than guessed. */
export const activities: RoleEntry[] = [
  {
    company: 'Notion Community VIT Bhopal',
    logo: 'https://logo.clearbit.com/notion.so',
    position: 'Technical Lead',
    period: '',
    type: 'College',
    mode: 'Leadership',
    location: 'VIT Bhopal University',
    description:
      'Led technical initiatives, supported community projects, and helped organize technology-focused events and workshops for the campus community.',
  },
  {
    company: 'Notion Community VIT Bhopal',
    logo: 'https://logo.clearbit.com/notion.so',
    position: 'Event Management Lead',
    period: '',
    type: 'College',
    mode: 'Leadership',
    location: 'VIT Bhopal University',
    description:
      'Planned and coordinated community events, workshops and campus initiatives while managing event operations, teams and execution.',
  },
  {
    company: 'E-Cell VIT Bhopal',
    position: 'Technical Team Co-Lead',
    period: '',
    type: 'College',
    mode: 'Leadership',
    location: 'VIT Bhopal University',
    description:
      'Contributed to technical initiatives, startup-focused events and digital projects while collaborating with student teams.',
  },
  {
    company: 'Notion',
    logo: 'https://logo.clearbit.com/notion.so',
    position: 'Community Manager',
    period: 'Sep 2025 - Present',
    type: 'Community',
    mode: 'Virtual',
    location: 'Remote',
    description:
      'Worked on community engagement, event initiatives and communication while contributing to the broader Notion community ecosystem.',
  },
  {
    company: 'VIT Bhopal University',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Vellore_Institute_of_Technology_seal_2017.svg',
    position: 'Event Coordinator',
    period: 'Jan 2025 - Feb 2025',
    type: 'College',
    mode: 'Activities',
    location: 'VIT Bhopal University',
    description:
      'Coordinated university events and student activities, working across teams to support planning, communication and execution.',
  },
  {
    company: 'Notion Community VIT Bhopal',
    logo: 'https://logo.clearbit.com/notion.so',
    position: 'Board Advisor',
    period: 'Apr 2025 - Present',
    type: 'College',
    mode: 'Leadership',
    location: 'VIT Bhopal University',
    description:
      'Supported community planning and provided guidance on initiatives, events and technical activities.',
  },
  {
    company: 'VIT Bhopal AI Innovators Hub',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Vellore_Institute_of_Technology_seal_2017.svg',
    position: 'Project Collaborator',
    period: 'Jul 2025 - Sep 2025',
    type: 'College',
    mode: 'Technical',
    location: 'VIT Bhopal University',
    description:
      'Collaborated on technology-focused projects and initiatives involving AI, software development and student innovation.',
  },
  {
    company: 'TheSmartBridge',
    logo: 'https://logo.clearbit.com/thesmartbridge.com',
    position: 'Virtual Internship Trainee',
    period: 'May 2025 - Jul 2025',
    type: 'Virtual Internship',
    location: 'Remote',
    description:
      'Participated in a virtual internship focused on Salesforce development and practical software engineering workflows.',
  },
  {
    company: 'Pawzz Foundation',
    logo: 'https://logo.clearbit.com/pawzz.org',
    position: 'Graphic Designer',
    period: 'May 2025 - Jun 2025',
    type: 'Extracurricular',
    mode: 'Creative',
    location: 'Remote',
    description:
      "Created visual content and design assets supporting the organization's communication and outreach initiatives.",
  },
  {
    company: 'buildspace',
    logo: 'https://logo.clearbit.com/buildspace.so',
    position: 'Member',
    period: 'Jun 2024 - Aug 2024',
    type: 'Community',
    mode: 'Virtual',
    location: 'Virtual',
    description:
      'Participated in the buildspace community and explored collaborative, technology-focused projects and initiatives.',
  },
]