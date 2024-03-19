/* eslint-disable tailwindcss/no-custom-classname */
'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/hooks/useSectionInView'
import { SectionHeading } from '@/components/section-heading'
import 'react-vertical-timeline-component/style.min.css'

export default function Experience() {
  const { ref } = useSectionInView<HTMLElement>({ sectionName: 'Experience', amount: 0.75 })

  const timelineRef = useRef<HTMLDivElement>(null)
  const isTimelineInView = useInView(timelineRef, { once: true })

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <div key={index} ref={timelineRef} className="vertical-timeline-element overflow-x-hidden">
              <VerticalTimelineElement
                visible={isTimelineInView}
                contentStyle={{
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{}}
                date={item.date}
                icon={item.icon}
                iconStyle={{ fontSize: '1.5rem' }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-0 font-normal">{item.location}</p>
                <p className="!mt-1 line-clamp-5 !font-normal text-gray-700 dark:text-gray-500">{item.description}</p>
              </VerticalTimelineElement>
            </div>
          )
        })}
      </VerticalTimeline>
    </section>
  )
}
