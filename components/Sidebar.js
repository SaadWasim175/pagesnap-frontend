'use client'

import { Home, Archive, LogOut, User, Globe } from 'lucide-react'
import '@/styles/Sidebar.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const navItems = [
  { label: 'Profile', icon: <User size={20} />, href: '/dashboard/profile' },
  { label: 'Home', icon: <Home size={20} />, href: '/dashboard' },
  { label: 'Saved', icon: <Archive size={20} />, href: '/dashboard/saved' },
  { label: 'Main', icon: <Globe size={20} />, href: '/' }
]

export default function Sidebar() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <aside className="sidebar-glass">
      <div className="sidebar-header">❄ PageSnap</div>
      <nav className="sidebar-nav">
        {navItems.map((item, i) => (
          <Link href={item.href} key={i} className="sidebar-link">
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className="sidebar-link logout-btn text-red-300 hover:bg-red-400/10 border border-red-300/30 backdrop-blur-md"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  )
}
