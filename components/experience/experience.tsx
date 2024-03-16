'use client'

import { useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/hooks/useSectionInView'
import { SectionHeading } from '@/components/section-heading'
import 'react-vertical-timeline-component/style.min.css'

export default function Experience() {
  const { ref, isInView } = useSectionInView<HTMLElement>({ sectionName: 'Experience', amount: 0.5, once: true })

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <div key={index} className="vertical-timeline-element">
              <VerticalTimelineElement
                visible={isInView}
                contentStyle={{
                  background: '#f3f4f6',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{ borderRight: '0.5rem solid #e8e8e8' }}
                date={item.date}
                icon={item.icon}
                iconStyle={{ background: '#fff', fontSize: '1.5rem' }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-0 font-normal">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
              </VerticalTimelineElement>
            </div>
          )
        })}
      </VerticalTimeline>
    </section>
  )
}
