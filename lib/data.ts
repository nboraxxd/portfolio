import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

import gamehubImg from '@/public/game-hub.png'
import sellCoursesImg from '@/public/sell-courses.png'
import shopeeImg from '@/public/shopee.png'

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
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description: 'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
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
    url: 'https://game-hub-seven-phi.vercel.app',
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
    title: 'Shopee',
    description:
      'A clone of the Shopee website. It has features like user authentication, product listing, product searching and product purchasing. I was the front-end developer.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    imageUrl: shopeeImg,
    github: 'https://github.com/nboraxxd/shopee-site',
    url: 'https://shopee-site-xi.vercel.app',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'Framer Motion',
] as const
