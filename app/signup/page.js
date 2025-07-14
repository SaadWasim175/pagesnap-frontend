'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase-browser'
import "@/styles/Auth.css"
import Link from 'next/link'

const generateSnowflakes = (count = 50) => {
  const flakes = []
  for (let i = 0; i < count; i++) {
    flakes.push({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      size: Math.random() * 8 + 4
    })
  }
  return flakes
}

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [snowflakes, setSnowflakes] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setSnowflakes(generateSnowflakes(40))
  }, [])

  const handleSignup = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password, options:{
        emailRedirectTo:"/login"
    } })
    if (error) setError(error.message)
    else setShowAlert(true)
  }

  return (
    <>
      <div className="bkg__spotlight" />

      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          ❄
        </div>
      ))}

      <div className="flex-container">
        <div className="glass-box">
          <h2>Create Account</h2>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            {showAlert && <h3 className='alert'>Check your email inbox</h3>}
            <p><Link href="/login">Already have an account? Go to login</Link></p>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  )
}
