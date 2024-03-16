'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'

import { useSectionInView } from '@/hooks/useSectionInView'
import { SectionHeading } from '@/components/section-heading'

export default function Contact() {
  const { ref } = useSectionInView<HTMLElement>({ sectionName: 'Contact', amount: 0.75 })

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
    >
      <SectionHeading className="mb-2">Contact me</SectionHeading>
      <p className="text-balance text-gray-700">
        Please contact me directly at{' '}
        <Link href="mailto:nhatbaoxxd@gmail.com" target="_blank" className="focus-primary underline">
          nhatbaoxxd@gmail.com
        </Link>{' '}
        or through this form.
      </p>

      <form className="mt-10">
        <input
          type="text"
          placeholder="Your email"
          className="focus-primary h-14 w-full rounded-lg border border-black/10 p-4"
        />
        <textarea
          placeholder="Your message"
          className="focus-primary mt-4 h-52 w-full rounded-lg border border-black/10 p-4"
        />
        <button
          type="submit"
          className="group mt-4 flex w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-3 text-gray-100 transition hover:scale-105 hover:bg-gray-950 active:scale-[1.03]"
        >
          Send
          <FaPaperPlane className="text-xs text-white opacity-90 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.section>
  )
}
