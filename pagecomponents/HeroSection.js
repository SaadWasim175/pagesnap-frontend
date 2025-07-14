'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSection() {

  const router = useRouter()

  return (
    <div className="header">
      <div className="snow"></div>
      <div className="header-content">
        <div className="text">
          <h1>PageSnap</h1>
          <h4 className="desktop-text">
            Get HTML of any page and gain inspiration for your own designs.
          </h4>
          <h4 className="mobile-text">Extract website code in 1 click.</h4>
        </div>
        <div className="hero-button-container">
          <button className="cta-btn" onClick={()=>{router.push('/dashboard')}} >Try It in beta</button>
        </div>
      </div>
    </div>
  )
}
