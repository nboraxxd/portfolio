'use client'

import Link from 'next/link'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { cn } from '@/utils'
import { ServiceStatus } from '@/constants/enums'
import { contactSchema } from '@/lib/validation'
import { useSectionInView } from '@/hooks/useSectionInView'
import { sendEmail } from '@/actions/send-email'
import { SectionHeading } from '@/components/section-heading'

export default function Contact() {
  const { ref } = useSectionInView<HTMLElement>({ sectionName: 'Contact', amount: 0.75 })

  const [status, setStatus] = useState<ServiceStatus>(ServiceStatus.idle)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  })

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setStatus(ServiceStatus.pending)
      await sendEmail(data.email, data.message)

      reset()
      setStatus(ServiceStatus.successful)
      toast.success('Message sent successfully.')
    } catch (error) {
      setStatus(ServiceStatus.rejected)
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('An error occurred while sending the email.')
      }
    }
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 sm:mb-28"
    >
      <SectionHeading className="mb-2">Contact me</SectionHeading>
      <p className="text-balance text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <Link href="mailto:nhatbaoxxd@gmail.com" target="_blank" className="focus-primary underline">
          nhatbaoxxd@gmail.com
        </Link>{' '}
        or through this form.
      </p>

      <form className="mt-10" noValidate onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Your email"
          {...register('email')}
          className="focus-primary h-14 w-full rounded-lg border border-black/10 p-4 dark:border-white/10 dark:bg-white/10 dark:text-white/80"
        />
        <p className="mt-1.5 text-xs text-red-600">{errors.email?.message}</p>
        <textarea
          placeholder="Your message"
          {...register('message')}
          className="focus-primary mt-4 block h-52 w-full rounded-lg border border-black/10 p-4 dark:border-white/10 dark:bg-white/10 dark:text-white/80"
        />
        <p className="mt-1.5 text-xs text-red-600">{errors.message?.message}</p>
        <button
          type="submit"
          disabled={status === ServiceStatus.pending}
          className={cn(
            'focus-primary group mt-4 flex w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-3 text-gray-100 transition disabled:cursor-auto disabled:opacity-60 dark:bg-white/10',
            {
              'hover:scale-105 hover:bg-gray-950 active:scale-[1.03] dark:hover:bg-white/15':
                status !== ServiceStatus.pending,
            }
          )}
        >
          {status === ServiceStatus.pending ? (
            <div className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              Send
              <FaPaperPlane className="text-xs text-white opacity-90 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  )
}
