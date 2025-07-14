import React from 'react'

// Floral corner decoration SVG
export const FloralCorner = ({ className = "", position = "top-left" }: { className?: string, position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top-right":
        return "top-0 right-0 rotate-90"
      case "bottom-left":
        return "bottom-0 left-0 -rotate-90"
      case "bottom-right":
        return "bottom-0 right-0 rotate-180"
      default:
        return "top-0 left-0"
    }
  }

  return (
    <div className={`absolute ${getPositionClasses()} ${className}`}>
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-10"
      >
        <path 
          d="M20 20C25 15 35 10 45 15C55 20 60 30 55 40C50 50 40 55 30 50C20 45 15 35 20 20Z" 
          fill="currentColor"
        />
        <path 
          d="M40 5C45 0 55 -5 65 0C75 5 80 15 75 25C70 35 60 40 50 35C40 30 35 20 40 5Z" 
          fill="currentColor"
        />
        <path 
          d="M5 40C10 35 20 30 30 35C40 40 45 50 40 60C35 70 25 75 15 70C5 65 0 55 5 40Z" 
          fill="currentColor"
        />
        <circle cx="25" cy="25" r="3" fill="currentColor" />
        <circle cx="45" cy="15" r="2" fill="currentColor" />
        <circle cx="15" cy="45" r="2" fill="currentColor" />
      </svg>
    </div>
  )
}

// Elegant section divider
export const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center items-center my-8 ${className}`}>
    <svg 
      width="200" 
      height="20" 
      viewBox="0 0 200 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-15"
    >
      <path 
        d="M10 10C30 5 50 15 70 10C90 5 110 15 130 10C150 5 170 15 190 10" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      <circle cx="100" cy="10" r="4" fill="currentColor" />
      <circle cx="80" cy="10" r="2" fill="currentColor" />
      <circle cx="120" cy="10" r="2" fill="currentColor" />
    </svg>
  </div>
)

// Curved section transition
export const CurvedDivider = ({ flip = false, className = "" }: { flip?: boolean, className?: string }) => (
  <div className={`w-full ${className}`}>
    <svg 
      width="100%" 
      height="60" 
      viewBox="0 0 1200 60" 
      preserveAspectRatio="none"
      className={flip ? "rotate-180" : ""}
    >
      <path 
        d="M0,60 C300,20 600,20 900,40 C1050,50 1150,30 1200,20 L1200,60 Z" 
        fill="currentColor" 
        className="opacity-5"
      />
    </svg>
  </div>
)

// Subtle lace pattern background
export const LacePattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 ${className}`}>
    <svg 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-5"
    >
      <defs>
        <pattern id="lace" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="45" cy="15" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="15" cy="45" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="45" cy="45" r="2" fill="currentColor" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lace)" />
    </svg>
  </div>
)

// Wedding ring icon
export const WeddingRingIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="8" r="1.5" fill="currentColor" />
  </svg>
)

// Champagne glass icon
export const ChampagneIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M8 2L16 2L14 10C14 12 12.5 14 10.5 14L13.5 14C11.5 14 10 12 10 10L8 2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <path d="M10 14L10 20" stroke="currentColor" strokeWidth="2" />
    <path d="M14 14L14 20" stroke="currentColor" strokeWidth="2" />
    <path d="M8 20L16 20" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.6" />
  </svg>
)

// Dove icon
export const DoveIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M2 12C2 10 4 8 6 8C8 8 10 6 14 6C18 6 20 8 20 10C20 12 18 14 16 14C14 14 12 16 8 16C4 16 2 14 2 12Z" 
      fill="currentColor"
    />
    <circle cx="16" cy="10" r="1" fill="white" />
    <path d="M14 6L18 2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 4L20 1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
) 