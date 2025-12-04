import React from 'react'

export const LogoIITminds = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer hexagon frame */}
    <path d="M20 2L36 10.5V27.5L20 36L4 27.5V10.5L20 2Z" 
          stroke="#0D1B2A" strokeWidth="1.5" fill="none"/>
    
    {/* Inner triangle (representing upward momentum/innovation) */}
    <path d="M20 10L28 24H12L20 10Z" 
          fill="#00BFA6"/>
    
    {/* Center dot (precision/focus) */}
    <circle cx="20" cy="18" r="2" fill="#0D1B2A"/>
    
    {/* Top accent */}
    <path d="M20 2L20 8" 
          stroke="#00BFA6" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export default LogoIITminds
