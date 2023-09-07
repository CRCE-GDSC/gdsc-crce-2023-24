'use client'
import Profile from '@components/Profile'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@lib/firebase'

export default function Page({ params }) {
  const [user, loading, error] = useAuthState(auth)

  return (
    <div className="pt-20">
      <Profile
        userDisplayName={user.displayName}
        userProfilePic={user.photoURL}
        userEmail={user.email}
        userUID={user.uid}
      />
    </div>
  )
}
