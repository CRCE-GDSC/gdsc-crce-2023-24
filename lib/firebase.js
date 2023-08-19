import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, 
}

console.log('Firebase Public API Key:', process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY)
console.log('Firebase Auth Domain:', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN)
console.log('Firebase Project ID:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)
console.log('Firebase App ID:', process.env.NEXT_PUBLIC_FIREBASE_APP_ID)
console.log('Firebase Measurement ID:', process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID)
console.log('Firebase Storage Bucket:', process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET)
console.log('Firebase Messaging Sender ID:', process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID)

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)


