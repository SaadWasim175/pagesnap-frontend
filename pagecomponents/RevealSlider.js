'use client'
import React, { useRef, useEffect } from 'react'

export default function RevealSlider() {
  const inputRef = useRef()
  const containerRef = useRef()

  useEffect(() => {
    const input = inputRef.current
    const container = containerRef.current

    function handleInput(e) {
      container.style.setProperty('--position', `${e.target.value}%`)
    }

    input.addEventListener('input', handleInput)
    return () => input.removeEventListener('input', handleInput)
  }, [])

  return (
    <div className="reveal-container">
      <h1 className="heading2">Extract HTML code of any website</h1>
      <div className="reveal-inner" ref={containerRef}>
        <div className="reveal-image before">
          <img src="/mockups/websitedemo.png" alt="Website" />
        </div>
        <div className="reveal-image after">
          <img src="/mockups/websitecode.png" alt="HTML Code" />
        </div>
        <input
          type="range"
          className="reveal-range"
          ref={inputRef}
          min="0"
          max="100"
          defaultValue="50"
          aria-label="Reveal slider"
        />
        <div className="reveal-handle"></div>
      </div>
    </div>
  )
}
