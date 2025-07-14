'use client'

import Link from 'next/link'
import { Heart, Camera, Mail, Church } from 'lucide-react'
import { FloralCorner, SectionDivider, CurvedDivider, LacePattern, WeddingRingIcon, ChampagneIcon, DoveIcon } from '@/components/WeddingDecorations'
import { lazy, Suspense } from 'react'
import Countdown from '@/components/Countdown'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center elegant-hero-bg relative overflow-hidden">
        <LacePattern className="elegant-hero-text-ivory opacity-30" />
        <FloralCorner position="top-left" className="elegant-hero-text-ivory opacity-25" />
        <FloralCorner position="top-right" className="elegant-hero-text-ivory opacity-25" />
        <FloralCorner position="bottom-left" className="elegant-hero-text-ivory opacity-25" />
        <FloralCorner position="bottom-right" className="elegant-hero-text-ivory opacity-25" />
        
        <div className="container-custom section-padding relative z-10 w-full">
          <div className="text-center max-w-7xl mx-auto">
            {/* Boxed Content */}
            <div className="bg-white/35 backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-white/45 relative elegant-text-container">
              <p className="text-xl md:text-2xl lg:text-3xl elegant-hero-text-ivory mb-6 font-body">
                You are invited to witness the union of
              </p>
              
              <div className="relative mb-10">
                {/* Wedding-themed floral badge with names */}
                <div className="relative flex justify-center items-center wedding-badge-container">
                  {/* Optimized SVG Floral Badge Background - Taller for 3-line layout */}
                  <svg 
                    className="wedding-badge-svg" 
                    viewBox="0 0 600 350" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Main oval frame - taller */}
                    <ellipse 
                      cx="300" 
                      cy="175" 
                      rx="280" 
                      ry="140" 
                      fill="rgba(255, 255, 255, 0.12)" 
                      stroke="rgba(255, 255, 255, 0.7)" 
                      strokeWidth="2"
                    />
                    
                    {/* Simplified decorative elements - Top */}
                    <path 
                      d="M300 35 C285 30, 270 40, 275 55 C280 70, 295 75, 300 60 C305 75, 320 70, 325 55 C330 40, 315 30, 300 35 Z" 
                      fill="rgba(255, 255, 255, 0.6)"
                    />
                    
                    {/* Simplified decorative elements - Bottom */}
                    <path 
                      d="M300 315 C315 320, 330 310, 325 295 C320 280, 305 275, 300 290 C295 275, 280 280, 275 295 C270 310, 285 320, 300 315 Z" 
                      fill="rgba(255, 255, 255, 0.6)"
                    />
                    
                    {/* Side flourishes - adjusted for taller badge */}
                    <path 
                      d="M80 175 C70 165, 60 175, 65 185 C70 195, 80 200, 85 190 C90 200, 100 195, 105 185 C110 175, 100 165, 80 175 Z" 
                      fill="rgba(255, 255, 255, 0.5)"
                    />
                    <path 
                      d="M520 175 C530 165, 540 175, 535 185 C530 195, 520 200, 515 190 C510 200, 500 195, 495 185 C490 175, 500 165, 520 175 Z" 
                      fill="rgba(255, 255, 255, 0.5)"
                    />
                    
                    {/* Corner accents - adjusted positions */}
                    <circle cx="150" cy="90" r="8" fill="rgba(255, 255, 255, 0.4)" />
                    <circle cx="450" cy="90" r="8" fill="rgba(255, 255, 255, 0.4)" />
                    <circle cx="150" cy="260" r="8" fill="rgba(255, 255, 255, 0.4)" />
                    <circle cx="450" cy="260" r="8" fill="rgba(255, 255, 255, 0.4)" />
                    
                    {/* Inner decorative lines - adjusted for taller badge */}
                    <line x1="200" y1="175" x2="400" y2="175" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                    <line x1="300" y1="90" x2="300" y2="260" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                  </svg>
                  
                  {/* Names positioned absolutely within the badge - 3-line layout */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="wedding-names text-center">
                      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-great-vibes elegant-hero-names leading-tight font-bold">
                        Phillip Dogbe
                      </div>
                      <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-great-vibes elegant-hero-names my-3">
                        &
                      </div>
                      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-great-vibes elegant-hero-names leading-tight font-bold">
                        Nicole Sarfo
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative flourish below names */}
                <div className="flex justify-center mt-6">
                  <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15 Q50 5, 80 15 T140 15 Q170 5, 180 15" stroke="#4a5568" strokeWidth="2" fill="none" opacity="0.7"/>
                    <circle cx="100" cy="15" r="3" fill="#4a5568" opacity="0.8"/>
                    <circle cx="60" cy="15" r="2" fill="#4a5568" opacity="0.6"/>
                    <circle cx="140" cy="15" r="2" fill="#4a5568" opacity="0.6"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-8">
                <WeddingRingIcon className="elegant-hero-text-ivory w-7 h-7 heart-beat" />
                <p className="text-xl md:text-2xl lg:text-3xl elegant-hero-text-ivory font-body">
                  Tuesday, August 5th, 2025
                </p>
                <WeddingRingIcon className="elegant-hero-text-ivory w-7 h-7 heart-beat" />
              </div>
              
              <div className="mb-10">
                <Countdown />
              </div>
              
              {/* Large RSVP Button */}
              <div className="flex justify-center mb-8">
                <Link href="/rsvp" className="bg-white/90 backdrop-blur-md hover:bg-white text-teal-600 hover:text-teal-700 px-12 py-6 rounded-2xl text-2xl md:text-3xl font-headline font-bold shadow-xl border border-white/50 transition-all duration-300 transform hover:scale-105 romantic-hover romantic-pulse">
                  RSVP NOW
                </Link>
              </div>
              
                              <p className="text-lg md:text-xl lg:text-2xl elegant-hero-text-ivory opacity-90 font-body text-center">
                  We can't wait to celebrate with you!
                </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Quick Links Section - Updated to show only Our Story and Gallery */}
      <section className="section-padding bg-white relative">
        <CurvedDivider className="text-lilac-100 absolute top-0 left-0 right-0" />
        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-4xl font-headline text-center text-gray-800 mb-12">
            Wedding Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center romantic-hover">
              <div className="bg-teal-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-headline text-gray-800 mb-2">Our Story</h3>
              <p className="text-gray-600 font-body mb-4">
                Learn about our journey together
              </p>
              <Link href="/our-story" className="text-teal-600 hover:text-teal-700 font-body-medium">
                Read More →
              </Link>
            </div>
            
            <div className="text-center romantic-hover">
              <div className="bg-lilac-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-10 h-10 text-lilac-600" />
              </div>
              <h3 className="text-xl font-headline text-gray-800 mb-2">Gallery</h3>
              <p className="text-gray-600 font-body mb-4">
                View our memories together
              </p>
              <Link href="/gallery" className="text-lilac-600 hover:text-lilac-700 font-body-medium">
                View Photos →
              </Link>
            </div>
          </div>
        </div>
        <CurvedDivider flip className="text-lilac-100 absolute bottom-0 left-0 right-0" />
      </section>

      <SectionDivider />

      {/* Ceremony & Reception Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 to-lilac-50 relative">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-headline text-center text-gray-800 mb-12">
            Ceremony & Reception
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg romantic-hover">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Church className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-headline text-gray-800 mb-4">Ceremony</h3>
              <p className="text-gray-600 font-body mb-2">
                <strong>Christ Apostolic Christ Int'l</strong>
              </p>
              <p className="text-gray-600 font-body mb-4">
                Third Save, Tema
              </p>
              <p className="text-gray-600 font-body">
                Join us as we exchange vows in the presence of God and our loved ones.
              </p>
            </div>
            
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg romantic-hover">
              <div className="bg-lilac-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChampagneIcon className="w-8 h-8 text-lilac-600" />
              </div>
              <h3 className="text-2xl font-headline text-gray-800 mb-4">Reception</h3>
              <p className="text-gray-600 font-body mb-2">
                <strong>Canwin Hotel</strong>
              </p>
              <p className="text-gray-600 font-body mb-4">
                Oceanview Estate, 18 Junction
              </p>
              <p className="text-gray-600 font-body">
                Celebrate with us as we dance the night away and create new memories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 