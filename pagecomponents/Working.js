'use client'
import React from 'react'

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step-card">
          <span className="step-icon">📸</span>
          <p>Capture any webpage</p>
        </div>
        <div className="step-card">
          <span className="step-icon">🧠</span>
          <p>AI extracts the code</p>
        </div>
        <div className="step-card">
          <span className="step-icon">📂</span>
          <p>Download instantly</p>
        </div>
      </div>
      {/* <hr className='hrline' /> */}
    </section>
  )
}
