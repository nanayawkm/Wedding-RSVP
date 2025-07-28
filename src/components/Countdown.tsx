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
      // Wedding date: Tuesday, August 5th, 2025 at 12:00 PM
      const weddingDate = new Date('2025-08-05T12:00:00')
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
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-700 mb-4 elegant-text-shadow">
          Counting Down to Our Special Day
        </h3>
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48 bg-white shadow-lg rounded-full border-4 border-purple-200">
            {/* Digital display in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-gray-800">--:--:--</div>
                <div className="text-sm text-gray-600">DAYS:HRS:MIN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <h3 className="text-lg font-medium text-gray-700 mb-4 elegant-text-shadow">
        Counting Down to Our Special Day
      </h3>
      <div className="flex justify-center mb-6">
        <div className="relative w-48 h-48 bg-white shadow-lg rounded-full border-4 border-purple-200">
          {/* Digital display in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-gray-800">
                {timeLeft.days.toString().padStart(2, '0')}:{timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-600">DAYS:HRS:MIN</div>
            </div>
          </div>
          
          {/* Seconds display */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-400 rounded-full px-3 py-1">
            <div className="text-xs font-mono font-bold text-white">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 