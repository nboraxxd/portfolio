'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

import { CTALink } from '@/components/intro'
import avatar from '@/public/avatar.png'

export default function Intro() {
  const MotionImage = motion(Image)

  return (
    <section className="mx-auto mb-28 max-w-[50rem] text-center sm:mb-0">
      {/* Avatar */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <MotionImage
            src={avatar}
            alt="nbora portrait"
            width={96}
            height={96}
            quality={95}
            priority
            className="size-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          />
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Main intro */}
      <motion.h1
        className="mt-5 text-balance px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I'm Bao.</span> I'm a <span className="font-bold">frontend developer</span>{' '}
        with <span className="font-bold">1 years</span> of experience. I enjoy building{' '}
        <span className="italic">sites & apps</span>. My focus is <span className="underline">React (Next.js)</span>.
      </motion.h1>

      {/* CTA */}
      <motion.div
        className="mt-10 flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <CTALink href="#contact" className="group bg-gray-900 px-7 py-3 text-white hover:bg-gray-950">
          <span className="flex items-center gap-2 transition-transform group-hover:translate-x-1">
            Contact me here <BsArrowRight className="transition-transform group-hover:rotate-90" />
          </span>
        </CTALink>

        <CTALink href="/CV_NhatBao.pdf" download target="_blank" className="gap-2 px-7 py-3">
          Download CV <HiDownload className="opacity-90" />
        </CTALink>

        <CTALink href="https://github.com/nboraxxd" target="_blank" className="p-4 text-gray-700">
          <FaGithub />
        </CTALink>
      </motion.div>
    </section>
  )
}
