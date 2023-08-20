import Image from 'next/image'
import { Icons } from '../../components/icons'
import Link from 'next/link'

import OurTeam from '../../components/OurTeam'
import Whatwedo from '../../components/Whatwedo'
import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Events from '../../components/Events'
import Contact from '../../components/Contact'
import HeroSection from '../../components/HeroSection'

export default function Home() {
  return (
    <main className="relative flex max-h-screen flex-col items-center justify-between w-full bg-[fdfdfd]">
      {/* Absolute positioning for the Events component */}
      <div className="w-full">
        <div className="min-h-screen">
          <HeroSection />
        </div>
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
