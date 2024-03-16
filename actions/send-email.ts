'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(email: string, message: string) {
  console.log('running on the server!')

  const { data } = await resend.emails.send({
    from: email,
    to: 'nhatbaoxxd@gmail.com',
    subject: 'New message from your portfolio',
    text: message,
  })

  return data
}
