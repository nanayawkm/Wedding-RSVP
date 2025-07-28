'use client'

import Link from 'next/link'
import { Heart, Camera, Mail, Church } from 'lucide-react'
import { FloralCorner, SectionDivider, CurvedDivider, LacePattern, WeddingRingIcon, ChampagneIcon, DoveIcon } from '@/components/WeddingDecorations'
import { lazy, Suspense } from 'react'
import Countdown from '@/components/Countdown'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-300 via-blue-300 to-teal-300">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        <div className="container-custom section-padding relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Cream card with your flower background image */}
            <div className="bg-amber-50/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl border border-amber-100/60 relative bg-[url('/vecteezy_beautiful-purple-floral-background-with-hand-drawn-leaves_24348917-1.jpg')] bg-cover bg-no-repeat bg-center">
              {/* Subtle white overlay to ensure text readability */}
              <div className="absolute inset-0 bg-white/60 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-amber-200/60 relative">
                    {/* Decorative corners */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-amber-400 rounded-tl-lg"></div>
                    <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-amber-400 rounded-tr-lg"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-amber-400 rounded-bl-lg"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-amber-400 rounded-br-lg"></div>
                    
                    {/* Decorative flourishes */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                      <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4 Q10 1, 15 4 T25 4 Q30 1, 35 4" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.7"/>
                        <circle cx="20" cy="4" r="1.5" fill="#d97706" opacity="0.8"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4 Q10 7, 15 4 T25 4 Q30 7, 35 4" stroke="#d97706" strokeWidth="1.5" fill="none" opacity="0.7"/>
                        <circle cx="20" cy="4" r="1.5" fill="#d97706" opacity="0.8"/>
                      </svg>
                    </div>
                    
                    <p className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-great-vibes relative z-10 text-center leading-relaxed">
                      You are invited to witness the union of
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-great-vibes text-gray-900 leading-tight font-bold drop-shadow-sm">
                    Phillip Dogbe
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-great-vibes text-gray-900 my-2 drop-shadow-sm">
                    &
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-great-vibes text-gray-900 leading-tight font-bold drop-shadow-sm">
                    Nicole Sarfo
                  </div>
                </div>
                
                {/* Decorative swirl */}
                <div className="flex justify-center mb-6">
                  <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10 Q30 5, 50 10 T90 10 Q110 5, 110 10" stroke="#374151" strokeWidth="2.5" fill="none" opacity="0.8"/>
                    <circle cx="60" cy="10" r="2.5" fill="#374151" opacity="0.9"/>
                  </svg>
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-gray-600 rounded-full shadow-sm"></div>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-semibold">
                    Tuesday, August 5th, 2025
                  </p>
                  <div className="w-3 h-3 bg-gray-600 rounded-full shadow-sm"></div>
                </div>
                
                <div className="mb-6">
                  <Countdown />
                </div>
                
                {/* RSVP Button */}
                <div className="flex justify-center mb-6">
                  <Link href="/rsvp" className="bg-lilac-500 hover:bg-lilac-600 text-white px-12 py-4 rounded-xl text-xl md:text-2xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105">
                    RSVP NOW
                  </Link>
                </div>
                
                {/* Closing message in decorative box */}
                <div className="flex justify-center">
                  <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-amber-200/60 relative">
                    {/* Decorative corners */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-amber-400 rounded-tl-lg"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 border-r-2 border-t-2 border-amber-400 rounded-tr-lg"></div>
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-l-2 border-b-2 border-amber-400 rounded-bl-lg"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-amber-400 rounded-br-lg"></div>
                    
                    {/* Decorative flourishes */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                      <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3 Q8 1, 13 3 T23 3 Q28 1, 33 3" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.7"/>
                        <circle cx="15" cy="3" r="1" fill="#d97706" opacity="0.8"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3 Q8 5, 13 3 T23 3 Q28 5, 33 3" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.7"/>
                        <circle cx="15" cy="3" r="1" fill="#d97706" opacity="0.8"/>
                      </svg>
                    </div>
                    
                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-great-vibes relative z-10 text-center leading-relaxed">
                      We can't wait to celebrate with you!
                    </p>
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Quick Links Section - Updated to show only Our Story and Gallery */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-4xl font-headline text-center text-white mb-12">
            Wedding Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center romantic-hover bg-amber-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-100/60 relative">
              <div className="relative z-10">
                <div className="bg-teal-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-headline text-gray-900 mb-2 font-semibold">Our Story</h3>
                <p className="text-gray-800 font-body mb-4 font-medium">
                  Learn about our journey together
                </p>
                <Link href="/our-story" className="text-teal-700 hover:text-teal-800 font-body-medium font-semibold">
                  Read More →
                </Link>
              </div>
            </div>
            
            <div className="text-center romantic-hover bg-amber-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-100/60 relative">
              <div className="relative z-10">
                <div className="bg-lilac-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-10 h-10 text-lilac-600" />
                </div>
                <h3 className="text-xl font-headline text-gray-900 mb-2 font-semibold">Gallery</h3>
                <p className="text-gray-800 font-body mb-4 font-medium">
                  View our memories together
                </p>
                <Link href="/gallery" className="text-lilac-700 hover:text-lilac-800 font-body-medium font-semibold">
                  View Photos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Ceremony & Reception Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-headline text-center text-white mb-12">
            Ceremony & Reception
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center bg-amber-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-100/60 relative romantic-hover">
              <div className="relative z-10">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Church className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-headline text-gray-900 mb-4 font-semibold">Ceremony</h3>
                <p className="text-gray-800 font-body mb-2 font-medium">
                  <strong>Christ Apostolic Christ Int'l</strong>
                </p>
                <p className="text-gray-800 font-body mb-4 font-medium">
                  Third Save, Tema
                </p>
                <p className="text-gray-800 font-body font-medium">
                  Join us as we exchange vows in the presence of God and our loved ones.
                </p>
              </div>
            </div>
            
            <div className="text-center bg-amber-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-100/60 relative romantic-hover">
              <div className="relative z-10">
                <div className="bg-lilac-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ChampagneIcon className="w-8 h-8 text-lilac-600" />
                </div>
                <h3 className="text-2xl font-headline text-gray-900 mb-4 font-semibold">Reception</h3>
                <p className="text-gray-800 font-body mb-2 font-medium">
                  <strong>Canwin Hotel</strong>
                </p>
                <p className="text-gray-800 font-body mb-4 font-medium">
                  Oceanview Estate, 18 Junction
                </p>
                <p className="text-gray-800 font-body font-medium">
                  Celebrate with us as we dance the night away and create new memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 