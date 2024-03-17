import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

interface ContactFormProps {
  message: string
  senderEmail: string
}

export default function ContactForm({ message, senderEmail }: ContactFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio website</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="my-10 rounded-md border border-black/10 bg-white px-10 py-4">
              <Heading className="leading-tight text-gray-900">
                You received the following message from the contact form
              </Heading>
              <Text className="text-gray-900">{message}</Text>
              <Hr />
              <Text className="text-gray-900">The message was sent by {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
