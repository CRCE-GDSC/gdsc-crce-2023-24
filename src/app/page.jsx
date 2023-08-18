import Image from 'next/image'
import { Icons } from '../../components/icons'
import { auth } from '../../lib/firebase'
import OurTeam from '../../components/OurTeam'
import Whatwedo from '../../components/Whatwedo'
import Link from 'next/link'
import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Events from '../../components/Events'
import Contact from '../../components/Contact'

export default function Home() {
  return (
    <main className="relative flex max-h-screen flex-col items-center justify-between w-full bg-[fdfdfd]">
      {/* Background Image */}
      <div className="container z-shadow-yellow mt-36 px-4 py-1 max-md:hidden">
        <div className="w-full relative max-sm:hidden min-h-fit">
          <Image
            src="/assets/DSC3.gif"
            alt="Background Image"
            width={10000}
            height={1}
          />
        </div>
      </div>

      <div className="min-h-[350px] w-[100%] relative mx-10 justify-center md:hidden">
        <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNuMDZvZHhvaTJ3dDI4MmZkMDdoeTdyaDhpNmF5aDNzNjZzdWlzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X328DXRD2BGbFOmLe1/giphy.gif"
          alt="Background Image"
          width={700}
          height={600}
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 sm:pt-32 ">
        {/* Your content goes here */}
        <div className="container mx-auto p-8 text-white text-center relative xl:top-[-250px] max-xl:top-[-300px] max-lg:top-[-130px] max-sm:top-[-250px] mt-48 pt-40 xl:pl-20">
          <h1 className="text-7xl font-bold blue_gradient max-sm:text-6xl max-sm:pt-56 max-sm:text-center mt-20 text-center lg:text-left">
            Welcome to GDSC
          </h1>
          <p className="text-4xl max-sm:text-3xl font-poppins font-semibold orange_gradient pt-12 text-center lg:text-left max-w-xl max-lg:text-center max-lg:justify-center">
            Get ready to delve into the World of Developers
          </p>
          {/* Add your other components here */}
          <div className="flex-row">
            <div className="container">
              <div className="flex rounded-md shadow-md bg-black text-white"></div>
            </div>
          </div>
          <div className="flex pt-10 max-sm:items-center max-lg:justify-center">
            <Link href="https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai/">
              <div className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left">
                Join Us
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Absolute positioning for the Events component */}
      <div className="w-full sm:pt-52">
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
