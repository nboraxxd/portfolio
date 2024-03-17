'use client'

import { Variants, motion } from 'framer-motion'

import { useSectionInView } from '@/hooks/useSectionInView'
import { SectionHeading } from '@/components/section-heading'
import { skillsData } from '@/lib/data'

const fadeInAnimationVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } }),
}

export default function Skills() {
  const { ref } = useSectionInView<HTMLElement>({ sectionName: 'Skills', amount: 0.75 })

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="rounded-xl border border-black/10 bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
