import { cn } from '@/utils'
import Link from 'next/link'

interface Props extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode
}

export default function CTALink({ children, className, ...rest }: Props) {
  return (
    <Link
      className={cn(
        'focus-primary flex items-center rounded-full border border-black/10 bg-white transition hover:scale-105 hover:bg-gray-50 active:scale-[1.03]',
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
