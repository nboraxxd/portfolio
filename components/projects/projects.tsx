'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { projectsData } from '@/lib/data'
import { useActiveSectionStore } from '@/stores/active-section-store'
import { Project } from '@/components/projects'
import { SectionHeading } from '@/components/section-heading'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const { setActiveSection } = useActiveSectionStore()

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection])

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
