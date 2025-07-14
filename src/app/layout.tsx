import type { Metadata } from 'next'
import { Dancing_Script, Great_Vibes } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: 'Phillip Dogbe & Nicole Sarfo - Wedding RSVP',
  description: 'Join us for our special day - August 17th, 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${greatVibes.variable} font-dancing-script`}>
        {children}
      </body>
    </html>
  )
} 