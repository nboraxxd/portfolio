import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeSwitch } from '@/components/theme-switch'
import { ThemeProvider } from '@/components/theme-provider'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal portfolio | nbora',
  description: 'Personal portfolio of nbora, a frontend developer based in Vietnam.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="relative !scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50/90 sm:pt-36`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="absolute right-[11rem] top-[-6rem] -z-10 size-[31.25rem] rounded-full bg-[#FBE2E3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
          <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#DBD7FB] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          {children}
          <Toaster position="top-right" />
          <Footer />
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  )
}
