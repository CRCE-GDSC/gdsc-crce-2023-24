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
    <div className="pt-20">
      <Profile
        userDisplayName={user.displayName}
        paramsUserName={params.userName}
        userProfilePic={user.photoURL}
        userEmail={user.email}
      />
    </div>
  )
}
