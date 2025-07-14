'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { BarChart3 } from 'lucide-react'

function AdminContent() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const urlPasscode = searchParams.get('pass')
    if (urlPasscode === 'wedding2025') {
      setIsAuthorized(true)
    }
  }, [searchParams])

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode === 'wedding2025') {
      setIsAuthorized(true)
      setError('')
    } else {
      setError('Incorrect passcode. Please try again.')
    }
  }

  if (!isAuthorized) {
    return (
      <main className="min-h-screen">
        
        <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-lilac-50">
          <div className="container-custom section-padding">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-6 text-center">
                  Admin Access
                </h1>
                <form onSubmit={handlePasscodeSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="passcode" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Passcode
                    </label>
                    <input
                      type="password"
                      id="passcode"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter passcode"
                      required
                    />
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Access Admin Panel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-lilac-50">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-6 text-center">
                Admin Panel
              </h1>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <BarChart3 className="w-12 h-12 text-teal-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    RSVP Responses
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Click the link below to view all RSVP responses in the Google Sheet.
                  </p>
                  
                  <a
                    href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    View RSVP List
                  </a>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-teal-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-teal-600">0</div>
                      <div className="text-sm text-gray-600">Total Responses</div>
                    </div>
                    <div className="bg-lilac-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-lilac-600">0</div>
                      <div className="text-sm text-gray-600">Attending</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <p className="text-sm text-gray-500">
                    Note: Stats will update automatically as responses come in through the Google Form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function Admin() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <div className="min-h-screen bg-gradient-to-br from-teal-400 via-purple-500 to-pink-400 flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/50 max-w-md w-full text-center">
            <div className="text-xl font-headline mb-4">Loading...</div>
          </div>
        </div>
      </main>
    }>
      <AdminContent />
    </Suspense>
  )
} 