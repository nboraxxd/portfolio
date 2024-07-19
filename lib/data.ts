import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

import gamehubImg from '@/public/game-hub.png'
import shopperImg from '@/public/shopper.png'
import shopeeImg from '@/public/shopee.png'
import smallerImg from '@/public/smaller.png'
import sproutscribbleImage from '@/public/sproutscribble.png'
import sellCoursesImg from '@/public/sell-courses.png'
import devflowImg from '@/public/devflow.png'
import mogoImg from '@/public/mogo.jpg'
import besnikImg from '@/public/besnik.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Ton Duc Thang University',
    location: 'Ho Chi Minh City',
    description: 'I study business administration. I studied here for 3 years.',
    icon: React.createElement(LuGraduationCap),
    date: '2014-2017',
  },
  {
    title: 'Sales Associate',
    location: 'Ho Chi Minh City',
    description:
      'I worked as a sales associate for 3A Nutrition company. I learned a lot of things about sales and communication. I also learned how to work in a team.',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2022',
  },
  {
    title: 'I self-studied front-end development.',
    location: 'Binh Thuan',
    description:
      "I've been learning front-end development for a year. I've built some projects and learned a lot of things. I'm still learning and improving my skills.",
    icon: React.createElement(FaReact),
    date: '2022 - present',
  },
] as const

export const projectsData = [
  {
    id: uuidv4(),
    title: 'Gamehub',
    description:
      'A social media platform for gamers. It has features like user authentication, posting, commenting, liking and following. I was the front-end developer.',
    tags: ['React', 'TypeScript', 'Chakra UI', 'TanStack Query'],
    imageUrl: gamehubImg,
    github: 'https://github.com/nboraxxd/game-hub',
    url: 'https://supergamehub.vercel.app',
  },
  {
    id: uuidv4(),
    title: 'Shopper',
    description:
      'A shopping website. It has features like user authentication, product listing, product searching and product purchasing. I was the front-end developer.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
    imageUrl: shopperImg,
    github: 'https://github.com/nboraxxd/shopper',
    url: 'https://shopper-black.vercel.app/products',
  },
  {
    id: uuidv4(),
    title: 'Shopee',
    description:
      'A clone of the Shopee website. It has features like user authentication, product listing, product searching and product purchasing. I was the front-end developer.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    imageUrl: shopeeImg,
    github: 'https://github.com/nboraxxd/shopee-site',
    url: 'https://shopee-site-xi.vercel.app',
  },
  {
    id: uuidv4(),
    title: 'Smaller',
    description:
      'Similar to the Shopper project, but it uses Next.js for server-side rendering. I was the front-end developer.',
    tags: ['Next.js', 'TypeScript', 'shadcn/ui', 'Server-side Rendering'],
    imageUrl: smallerImg,
    github: 'https://github.com/nboraxxd/smaller',
    url: 'https://smaller-red.vercel.app',
  },
  {
    id: uuidv4(),
    title: 'sprout & scribble',
    description:
      'E-commerce platform with features like user authentication, admin dashboard, product listing and product purchasing.',
    tags: ['Next.js', 'Auth.js', 'Mailgun', 'Drizzle ORM', 'PostgreSQL'],
    imageUrl: sproutscribbleImage,
    github: 'https://github.com/nboraxxd/sprout-scribble',
    url: 'https://sproutscribble.online',
  },
  {
    id: uuidv4(),
    title: 'Sell Courses',
    description:
      'A platform for selling courses. It has features like user authentication, course creation, course purchasing and course rating. I was the front-end developer.',
    tags: ['React', 'Javascript', 'Redux', 'Bootstrap'],
    imageUrl: sellCoursesImg,
    github: 'https://github.com/nboraxxd/sell-courses',
    url: 'https://sell-courses.vercel.app',
  },
  {
    id: uuidv4(),
    title: 'Devflow',
    description:
      'DevOverflow is a complex Q&A platform for developers to ask questions, share knowledge, and learn from each other.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Clerk', 'MongoDB'],
    imageUrl: devflowImg,
    github: 'https://github.com/nboraxxd/devflow',
    url: 'https://devflow-red.vercel.app',
  },
  {
    id: uuidv4(),
    title: 'Mogo',
    description: 'A landing page for a fictional company called Mogo. I was the front-end developer.',
    tags: ['HTML', 'CSS', 'SCSS', 'Pug', 'JavaScript'],
    imageUrl: mogoImg,
    github: 'https://github.com/nboraxxd/MoGo',
    url: 'https://mogo-pink.vercel.app',
  },
  {
    id: uuidv4(),
    title: 'Besnik',
    description: 'A landing page for a fictional company called Besnik. I was the front-end developer.',
    tags: ['HTML', 'CSS'],
    imageUrl: besnikImg,
    github: 'https://github.com/nboraxxd/besnik',
    url: 'https://nboraxxd.github.io/besnik/',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'Tailwind',
  'TanStack Query',
  'Framer Motion',
] as const
