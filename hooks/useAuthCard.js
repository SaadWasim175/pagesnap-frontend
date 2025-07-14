'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function useAuthGuard() {
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const run = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession()

      if (!session) {
        router.replace('/login')
      } else {
        setSession(session)
      }

      setLoading(false)
    }

    run()
  }, [router, supabase])

  return { loading, session }
}
