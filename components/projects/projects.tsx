'use client'

import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/hooks/useSectionInView'
import { Project } from '@/components/projects'
import { SectionHeading } from '@/components/section-heading'

export default function Projects() {
  const ref = useSectionInView<HTMLElement>({ sectionName: 'Projects', amount: 0.5 })

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
