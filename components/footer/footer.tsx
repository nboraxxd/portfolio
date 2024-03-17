import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-16 px-4 text-center text-gray-500 dark:text-gray-400">
      <small className="mb-2 block text-xs">
        The portfolio is developed under the guidance of{' '}
        <Link href="https://bytegrad.com" target="_blank" className="focus-primary underline">
          ByteGrad
        </Link>
        . Here is the instructional{' '}
        <Link href="https://www.youtube.com/watch?v=sUKptmUVIBM" target="_blank" className="focus-primary underline">
          video link
        </Link>
        .
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with React & Next.js (App Router & Server
        Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}
