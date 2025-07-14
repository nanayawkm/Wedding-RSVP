'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const calculateTimeLeft = (): TimeLeft => {
      // Wedding date: August 5, 2025
      const weddingDate = new Date('2025-08-05T00:00:00')
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    // Calculate initial time
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [isClient])

  if (!isClient) {
    return (
      <div className="bg-white/50 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/60">
        <h3 className="text-lg font-headline text-center elegant-hero-text-ivory mb-3">
          Counting Down to Our Special Day
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
            <div key={label} className="text-center bg-white/30 rounded-lg p-3 border border-white/40">
              <div className="text-2xl md:text-3xl font-headline-bold text-black">
                --
              </div>
              <div className="text-xs text-black/80 font-body">{label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/50 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/60">
      <h3 className="text-lg font-headline text-center elegant-hero-text-ivory mb-3">
        Counting Down to Our Special Day
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="text-center bg-white/30 rounded-lg p-3 border border-white/40">
          <div className="text-2xl md:text-3xl font-headline-bold text-black">
            {timeLeft.days}
          </div>
          <div className="text-xs text-black/80 font-body">Days</div>
        </div>
        <div className="text-center bg-white/30 rounded-lg p-3 border border-white/40">
          <div className="text-2xl md:text-3xl font-headline-bold text-black">
            {timeLeft.hours}
          </div>
          <div className="text-xs text-black/80 font-body">Hours</div>
        </div>
        <div className="text-center bg-white/30 rounded-lg p-3 border border-white/40">
          <div className="text-2xl md:text-3xl font-headline-bold text-black">
            {timeLeft.minutes}
          </div>
          <div className="text-xs text-black/80 font-body">Minutes</div>
        </div>
        <div className="text-center bg-white/30 rounded-lg p-3 border border-white/40">
          <div className="text-2xl md:text-3xl font-headline-bold text-black">
            {timeLeft.seconds}
          </div>
          <div className="text-xs text-black/80 font-body">Seconds</div>
        </div>
      </div>
    </div>
  )
} 