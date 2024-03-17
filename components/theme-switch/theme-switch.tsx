'use client'

import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="fixed bottom-5 right-5 flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-2xl backdrop-blur-[0.5rem] transition-transform hover:scale-[1.15] active:scale-105"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      <BsSun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <BsMoon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
