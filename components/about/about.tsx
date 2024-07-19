'use client'

import { motion } from 'framer-motion'

import { useSectionInView } from '@/hooks/useSectionInView'
import { SectionHeading } from '@/components/section-heading'

export default function About() {
  const { ref } = useSectionInView<HTMLElement>({ sectionName: 'About', amount: 0.75 })

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I worked as a <span className="font-medium">sales associate</span> for a few years. I decided to learn
        JavaScript to become a web developer. I took courses in frontend and backend development. My core stack is
        React, Next.js, and TypeScript. I am also familiar with Express.js, MongoDB and Prisma.
      </p>
      <p>
        Currently, I am trying to dedicate time to complete projects and learn more about JavaScript, Angular, NestJS
        and English. I am looking for a <span className="font-medium">full-time frontend development</span> position.
      </p>
    </motion.section>
  )
}
