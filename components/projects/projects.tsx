import { Project } from '@/components/projects'
import { SectionHeading } from '@/components/section-heading'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
