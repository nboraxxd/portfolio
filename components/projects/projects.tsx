'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

import { projectsData } from '@/lib/data'
import { useActiveSectionStore } from '@/stores/active-section-store'
import { Project } from '@/components/projects'
import { SectionHeading } from '@/components/section-heading'

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { amount: 0.5 })

  const { setActiveSection, timeOfLastClick } = useActiveSectionStore()

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Projects')
    }
  }, [isInView, setActiveSection, timeOfLastClick])

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
