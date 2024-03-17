'use server'

import { createElement } from 'react'
import { Resend } from 'resend'

import { getErrorMessage } from '@/utils'
import ContactForm from '@/email/contact-form'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(email: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Contact form <${process.env.RESEND_SENDER_EMAIL as string}>`,
      to: 'nhatbaoxxd@gmail.com',
      subject: 'New message from your portfolio',
      reply_to: email,
      react: createElement(ContactForm, { message, senderEmail: email }),
    })

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    throw getErrorMessage(error)
  }
}
