'use client'
import { auth } from '../lib/firebase'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { doc } from 'firebase/firestore'
import { useDocument, useDocumentOnce } from 'react-firebase-hooks/firestore'

import { db } from '@/lib/firebase'
const UserLogin = () => {
  const [user, loading, error] = useAuthState(auth)
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  return <div></div>
}

export default UserLogin
