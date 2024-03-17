'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

import { projectsData } from '@/lib/data'

interface Props {
  project: (typeof projectsData)[number]
}

export default function Project({ project }: Props) {
  const { description, imageUrl, tags, title, github, url } = project

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-5 last:mb-0 sm:mb-8"
    >
      <section className="relative flex w-full max-w-[42rem] overflow-hidden rounded-md border border-black/5 bg-gray-100 transition hover:bg-gray-200/80 dark:bg-white/10 dark:hover:bg-white/[0.125] sm:h-[20rem]">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-auto sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-7 group-even:sm:pl-2 group-even:sm:pr-10">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-medium transition-opacity">
              <Link href={url} target="_blank" className="focus-primary hover:opacity-80">
                {title}
              </Link>
            </h3>
            <Link href={url} target="_blank" className="focus-primary p-1 transition-opacity hover:opacity-80">
              <FiExternalLink className="text-lg font-medium opacity-90" />
            </Link>
            <Link href={github} target="_blank" className="focus-primary p-1 transition-opacity hover:opacity-80">
              <FaGithub className="text-lg font-medium opacity-80" />
            </Link>
          </div>
          <p className="mb-4 mt-2 leading-relaxed text-gray-700 dark:text-gray-300 sm:line-clamp-5">{description}</p>
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-black/30"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Link href={url} target="_blank">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            priority
            className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg object-cover shadow-2xl transition hover:-translate-x-3 hover:translate-y-3 hover:-rotate-2 hover:scale-[1.04] group-even:-left-40 group-even:right-[initial] group-even:hover:translate-x-3 group-even:hover:rotate-2 max-sm:hidden"
          />
        </Link>
      </section>
    </motion.div>
  )
}
