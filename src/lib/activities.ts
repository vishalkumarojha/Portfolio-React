/* Activities & Leadership, modelled the way a grouped professional profile
   reads: one entry per organisation, each holding the positions held there.

   Provenance. Every organisation below already existed in this project, either
   in the previous activities list or in portfolio_data.json achievements and
   projects. Nothing is invented, and no date has been added that the project
   did not already record:

     Notion Community VIT Bhopal  previous activities list, dated leadership roles
     AdVITya                      achievements: Technical Lead AdVITya '26 and '25
     Health Hackathon             achievements: Lead Event Coordinator, Health Hack '25
     VIT Bhopal AI Innovators Hub previous activities list, Project Collaborator
     VIT Bhopal University        previous activities list, Event Coordinator
     buildspace                   previous activities list, Member
     E-Cell VIT Bhopal            previous activities list, Technical Team Co-Lead

   Durations are never stored. They are derived from the periods by
   src/lib/duration.ts, so a header cannot drift away from its positions.

   The professional Community Manager role at Notion stays in Professional
   Experience and is deliberately not repeated here. */

import { recencyOf } from './duration'

export interface ActivityPosition {
  title: string
  /** "Apr 2025 - Dec 2025", or a bare year when that is all the data records. */
  period?: string
  /**
   * Only for periods that cannot yield one themselves, such as a single named
   * month or an open-ended "Present". Anything with two month-precise endpoints
   * is derived instead, so an override can never contradict its own period.
   */
  duration?: string
  location?: string
  mode?: string
  skills?: string[]
  description?: string
}

export interface ActivityOrganization {
  organization: string
  /** Engagement type shown on the organisation header, e.g. "Part-time". */
  type?: string
  /** Parent body or event series, e.g. "VIT Bhopal University". */
  context?: string
  logo?: string
  /** Public site only. Private or edit-form URLs are never stored. */
  link?: string
  positions: ActivityPosition[]
}

const NOTION_LOGO = 'https://logo.clearbit.com/notion.so'
const BUILDSPACE_LOGO = 'https://logo.clearbit.com/buildspace.so'
const VIT_SEAL = 'https://upload.wikimedia.org/wikipedia/en/c/cf/Vellore_Institute_of_Technology_seal_2017.svg'

const Bhopal = 'Bhopal, Madhya Pradesh, India'

const rawOrganizations: ActivityOrganization[] = [
  {
    organization: 'AdVITya',
    type: 'Leadership',
    context: 'VIT Bhopal University',
    logo: VIT_SEAL,
    link: 'https://vitbhopal.ac.in/advitya2025/',
    positions: [
      {
        title: 'Technical Lead — AdVITya’26',
        period: '2026',
        location: 'VIT Bhopal University',
        description:
          'Leading the technical infrastructure and web development for the annual techno-cultural fest of VIT Bhopal University.',
      },
      {
        title: 'Technical Lead — AdVITya’25',
        period: '2025',
        location: 'VIT Bhopal University',
        description:
          'Managed the flagship Annual Techno-Cultural and sports fest website, handling 600K+ requests and 550GB of bandwidth.',
      },
    ],
  },
  {
    organization: 'Notion Community VIT Bhopal',
    type: 'Part-time',
    logo: NOTION_LOGO,
    positions: [
      {
        title: 'Board Advisor',
        period: 'Apr 2025 - Dec 2025',
        mode: 'Hybrid',
      },
      {
        title: 'Executive Manager',
        period: 'Nov 2024 - Apr 2025',
        mode: 'On-site',
      },
      {
        title: 'Tech Team Lead',
        period: 'Aug 2024 - Nov 2024',
        location: Bhopal,
        mode: 'Hybrid',
        skills: ['Team Building', 'Team Leadership'],
      },
      {
        title: 'Operations Team Lead',
        period: 'May 2024 - Aug 2024',
        location: Bhopal,
        mode: 'Hybrid',
        skills: ['Duty Management', 'Operations Management'],
      },
      {
        title: 'Event Management Team Lead',
        period: 'Jan 2024 - May 2024',
        location: Bhopal,
        mode: 'Hybrid',
        skills: ['Team Leadership', 'Team Building'],
      },
      {
        title: 'Creative Team Lead',
        period: 'Nov 2023 - Jan 2024',
        location: Bhopal,
        mode: 'Hybrid',
        skills: ['Design Leadership', 'Canva'],
      },
    ],
  },
  {
    organization: 'VIT Bhopal AI Innovators Hub',
    type: 'Collaboration',
    context: 'VIT Bhopal University',
    logo: VIT_SEAL,
    positions: [
      {
        title: 'Project Collaborator',
        period: 'Jul 2025 - Sep 2025',
        location: 'VIT Bhopal University',
        description:
          'Collaborated on technology-focused projects and initiatives involving AI, software development and student innovation.',
      },
    ],
  },
  {
    organization: 'VIT Bhopal University',
    type: 'Campus',
    logo: VIT_SEAL,
    positions: [
      {
        title: 'Event Coordinator',
        period: 'Jan 2025 - Feb 2025',
        location: 'VIT Bhopal University',
        description:
          'Coordinated university events and student activities, working across teams to support planning, communication and execution.',
      },
    ],
  },
  {
    organization: 'Health Hackathon',
    type: 'Leadership',
    context: 'VIT Bhopal University × Johns Hopkins University',
    logo: VIT_SEAL,
    positions: [
      {
        title: 'Lead Event Coordinator',
        period: '2025',
        location: 'VIT Bhopal University × Johns Hopkins University',
        description:
          'Organized by VIT Bhopal University in collaboration with Johns Hopkins University. Led the Venue and Crowd management team.',
      },
    ],
  },
  {
    organization: 'Arno Labs',
    type: 'Part-time',
    logo: '/arno-labs-logo.jpg',
    positions: [
      {
        title: 'Founding Team',
        period: 'Aug 2025 - Present',
        mode: 'Remote',
        description:
          'Served as a founding team member at ArnoLabs, contributing to the development and execution of product and technology strategies.\n\nWorked on building and deploying software solutions, collaborating closely with development, product, and operations teams to deliver scalable features and improvements.\n\nSupported startup growth through project management, community engagement, and cross-functional collaboration.',
      },
    ],
  },
  {
    organization: 'Hacktoberfest',
    type: 'Freelance',
    logo: '/hacktoberfest-logo.jpg',
    positions: [
      {
        title: '2X Contributor',
        period: 'Oct 2024',
        duration: '1 mo',
        mode: 'Remote',
        skills: ['Git', 'GitHub'],
      },
    ],
  },
  {
    organization: 'Arno codes',
    type: 'Self-employed',
    positions: [
      {
        title: 'Software Engineer Intern',
        period: 'Feb 2025 - Nov 2025',
        location: Bhopal,
        mode: 'Remote',
        description:
          'Served as Software Engineering Lead, architecting and developing the official ArnoCodes website from concept to deployment.\n\nImplemented responsive frontend components, optimized website performance, and ensured seamless user experience across devices and platforms.\n\nLed technical decision-making, code reviews, deployment workflows, and feature enhancements while mentoring contributors throughout the development process.',
      },
    ],
  },
  {
    organization: 'Internshala',
    type: 'Freelance',
    logo: '/internshala-logo.jpg',
    positions: [
      {
        title: 'Internshala Student Partner',
        period: 'Jun 2024 - Aug 2024',
        mode: 'Remote',
      },
    ],
  },
  {
    organization: 'buildspace',
    type: 'Community',
    context: 'Open source',
    logo: BUILDSPACE_LOGO,
    positions: [
      {
        title: 'Member',
        period: 'Jun 2024 - Aug 2024',
        mode: 'Virtual',
        description:
          'Participated in the buildspace community and explored collaborative, technology-focused projects and initiatives.',
      },
    ],
  },
  {
    organization: 'E-Cell VIT Bhopal',
    type: 'Leadership',
    context: 'VIT Bhopal University',
    link: 'https://www.ecellvitbhopal.in/',
    positions: [
      {
        title: 'Technical Team Co-Lead',
        location: 'VIT Bhopal University',
        description:
          'Contributed to technical initiatives, startup-focused events and digital projects while collaborating with student teams.',
      },
    ],
  },
]

/* Ordering is derived rather than hand-maintained.

   Groups sort by their most recent involvement, so a new position moves its
   organisation to the top on its own. Positions inside a group sort newest
   first. Organisations whose positions carry no usable date, such as E-Cell,
   sort last instead of being treated as current. */
const latestOf = (organization: ActivityOrganization) =>
  recencyOf(organization.positions.map((position) => position.period ?? ''))

export const activityOrganizations: ActivityOrganization[] = [...rawOrganizations]
  .sort((a, b) => latestOf(b) - latestOf(a))
  .map((organization) => ({
    ...organization,
    positions: [...organization.positions].sort((a, b) => {
      const left = recencyOf([a.period ?? ''])
      const right = recencyOf([b.period ?? ''])
      return right - left
    }),
  }))
