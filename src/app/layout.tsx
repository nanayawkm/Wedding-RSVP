import type { Metadata } from 'next'
import { Montserrat, Great_Vibes } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
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
      <body className={`${montserrat.variable} ${greatVibes.variable} font-montserrat`}>
        {children}
      </body>
    </html>
  )
} 