import Link from 'next/link'
import { PartyPopper } from 'lucide-react'

export default function Thanks() {
  return (
    <main className="min-h-screen">
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-lilac-50">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="flex justify-center mb-6">
                <PartyPopper className="w-16 h-16 text-teal-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-headline-bold text-gray-900 mb-6">
                Thank You!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We can't wait to celebrate with you!
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Your RSVP has been received. We're so excited to have you join us on our special day.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-teal-100 to-lilac-100 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Wedding Details</h2>
                  <p className="text-gray-700">
                    <strong>Date:</strong> Saturday, 17th August 2025<br />
                    <strong>Ceremony:</strong> Christ Apostolic Christ Int'l, Third Save, Tema<br />
                    <strong>Reception:</strong> Canwin Hotel, Oceanview Estate, 18 Junction
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/" className="btn-primary">
                    Back to Home
                  </Link>
                  <Link href="/gallery" className="btn-secondary">
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 