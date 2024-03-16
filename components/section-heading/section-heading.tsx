import { cn } from '@/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({ children, className }: Props) {
  return <h2 className={cn('mb-8 text-center text-3xl font-medium capitalize', className)}>{children}</h2>
}
