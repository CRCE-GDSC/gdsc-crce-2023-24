'use client'
import Image from 'next/image'
import { Icons } from '../../components/icons'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import OurTeam from '../../components/OurTeam'
import Whatwedo from '../../components/Whatwedo'
import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Events from '../../components/Events'
import Contact from '../../components/Contact'
import HeroSection from '../../components/HeroSection'
import WeeklyThon from '@components/WeeklyThon'
import UpcomingEvents from '@components/UpcomingEvents'
import Projects from '@components/Projects'

export default function Home() {
  const [ref1, inView1] = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const [ref4, inView4] = useInView({
    threshold: 0,
    triggerOnce: false,
  })
  const [ref5, inView5] = useInView({
    threshold: 0,
    triggerOnce: false,
  })
  const [refx, inViewx] = useInView({
    threshold: 0,
    triggerOnce: false,
  })
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  }

  return (
    <main className="relative flex max-h-screen w-full flex-col items-center justify-between bg-[fdfdfd]">
      {/* Absolute positioning for the Events component */}
      <div className="w-full">
        <div className="min-h-screen">
          <HeroSection />
        </div>
        <motion.div
          animate={inViewx ? 'visible' : 'hidden'}
          variants={variants}
          exit="hidden"
          transition={{ duration: 0.5 }}
          ref={refx}
        >
          {' '}
          <AboutUs />
        </motion.div>

        <Whatwedo />

        <Events />

        <motion.div
          animate={inView4 ? 'visible' : 'hidden'}
          variants={variants}
          exit="hidden"
          transition={{ duration: 0.5 }}
          ref={ref4}
        >
          <OurTeam />
        </motion.div>
        <motion.div
          animate={inView5 ? 'visible' : 'hidden'}
          variants={variants}
          exit="hidden"
          transition={{ duration: 0.5 }}
          ref={ref5}
        >
          <Contact />
        </motion.div>
        <Footer />
      </div>
    </main>
  )
}
