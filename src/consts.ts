import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'pankaj',
  description:
    'I\'m a graduate of IIT Kharagpur curious about the world and grounded in purpose',
  href: 'https://pankajiitkgp.github.io',
  author: 'Pankaj Sarkar',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/tags',
    label: 'tags',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/pankajiitkgp',
    label: 'GitHub',
  },
  {
    href: 'https://in.linkedin.com/in/sarkarpankaj',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:pankajmkd@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
