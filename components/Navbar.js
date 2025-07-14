'use client'
import React, { useEffect, useState } from 'react'
import "@/styles/Navbar.css"
import { supabase } from '@/lib/supabase-browser'

const Navbar = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <div className="logo">
            <h1>PageSnap</h1>
          </div>
          <div className="menu-items">
            <li><a href="/">Home</a></li>

            {!user && (
              <>
                <li><a href="/signup">sign up</a></li>
                <li><a href="/login">log in</a></li>
              </>
            )}

            {user && (
              <li><a href="/dashboard">dashboard</a></li>
            )}

            <li>
              <a href="https://saaddev-omega.vercel.app" target="_blank">portfolio</a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
