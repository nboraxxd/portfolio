'use client'

import { motion } from 'framer-motion'

import { useSectionInView } from '@/hooks/useSectionInView'
import { SectionHeading } from '@/components/section-heading'
import { skillsData } from '@/lib/data'

export default function Skills() {
  const ref = useSectionInView<HTMLElement>({ sectionName: 'Skills', amount: 0.75 })

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>

      <motion.ul
        variants={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } }}
            className="rounded-xl border border-black/[0.1] bg-white px-5 py-3"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
