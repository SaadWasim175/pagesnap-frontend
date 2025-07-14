'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase-browser'
import "@/styles/Auth.css"
import { useRouter } from 'next/navigation'

const generateSnowflakes = (count = 40) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
    size: Math.random() * 8 + 4
  }))
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [snowflakes, setSnowflakes] = useState([])
  const router = useRouter()

  useEffect(() => {
    setSnowflakes(generateSnowflakes(40))
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else {
      setError(null)
    //   alert('Logged in successfully!')
      router.push("/dashboard")
    }
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
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
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
            <button type="submit">Sign In</button>
          </form>
          {error && <p>{error}</p>}
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
            Don’t have an account? <a href="/signup" style={{ color: '#aad' }}>Sign up</a>
          </p>
        </div>
      </div>
    </>
  )
}
