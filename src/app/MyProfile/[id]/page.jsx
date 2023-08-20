'use client'
import Profile from '@components/Profile'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@lib/firebase'
import { useState, useEffect } from 'react'

export default function Page({ params }) {
  const [user, loading, error] = useAuthState(auth)
  const [userName, setUserName] = useState(null)

  useEffect(() => {
    if (user) {
      setUserName(user.displayName)
    }
  }, [user])

  return (
    <div className="pt-24">
      My name:{user.displayName} {params.userName}
      <Profile />
    </div>
  )
}
