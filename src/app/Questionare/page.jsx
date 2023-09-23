'use client'
import Profile from '@components/Profile'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@lib/firebase'
import Question from '@components/Question'

export default function Page({ params }) {
  const [user, loading, error] = useAuthState(auth)

  return (
    <div className="pt-20">
      <Question />
    </div>
  )
}
