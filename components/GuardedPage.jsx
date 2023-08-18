'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../lib/firebase'

import { LoadingPage } from './loading'

export default function GuardedPage({ children }) {
  const [user, loading, error] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (loading) return
    if (!user) router.push('/')
  }, [user, loading, error, router])

  if (loading) return <LoadingPage />

  return <>{children}</>
}
