'use client'
import Image from 'next/image'
import { Icons } from '../../components/icons'
import { auth } from '../../lib/firebase'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Link from 'next/link'

import OurTeam from '../../components/OurTeam'
import Whatwedo from '../../components/Whatwedo'
import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Events from '../../components/Events'
import Contact from '../../components/Contact'
import HeroSection from '../../components/HeroSection'

export default function Home() {
  const [user, loading, error] = useAuthState(auth)
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  return (
    <main className="relative flex max-h-screen flex-col items-center justify-between w-full bg-[fdfdfd]">
      
      

      {/* Absolute positioning for the Events component */}
      <div className="w-full ">
        <HeroSection />
        <AboutUs />
        <Whatwedo />
        <Events />
        <OurTeam />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
