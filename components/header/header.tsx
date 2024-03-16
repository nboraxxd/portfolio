'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { useActiveSectionStore } from '@/stores/active-section-store'
import { TSectionName } from '@/types/utils.type'
import { links } from '@/lib/data'
import { cn } from '@/utils'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionStore()

  function handleClickSectionLink(sectionName: TSectionName) {
    setTimeOfLastClick(Date.now())
    setActiveSection(sectionName)
  }

  return (
    <div>
      <header className="relative z-50">
        <motion.div
          className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
          initial={{ x: '-50%', y: -100, opacity: 0 }}
          animate={{ x: '-50%', y: 0, opacity: 1 }}
        ></motion.div>
        <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="relative flex h-3/4 items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.hash}
                  className={cn('focus-primary flex w-full items-center justify-center p-3', {
                    'text-gray-950': activeSection === link.name,
                    'transition-colors hover:text-gray-950': activeSection !== link.name,
                  })}
                  onClick={() => handleClickSectionLink(link.name)}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 380,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}
