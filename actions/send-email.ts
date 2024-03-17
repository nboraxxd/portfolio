'use server'

import { Resend } from 'resend'
import { getErrorMessage } from '@/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(email: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Contact form <${process.env.RESEND_SENDER_EMAIL as string}>`,
      to: 'nhatbaoxxd@gmail.com',
      subject: 'New message from your portfolio',
      reply_to: email,
      text: message,
    })

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    return getErrorMessage(error)
  }
}
