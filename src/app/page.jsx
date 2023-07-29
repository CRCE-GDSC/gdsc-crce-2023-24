import Image from 'next/image';
import Events from '/components/Events';
import OurTeam from '/components/OurTeam';
import Whatwedo from '../../components/Whatwedo';
import Link from 'next/link';
import AboutUs from '../../components/AboutUs';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main className="relative flex max-h-screen flex-col items-center justify-between w-full bg-[fdfdfd] p-24">
      {/* Background Image */}
      <div className="min-h-[400px] w-full relative mx-10 max-sm:hidden">
        <Image
          src="/assets/DSC.gif"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="min-h-[350px] w-[100%] relative mx-10 sm:hidden">
        <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNuMDZvZHhvaTJ3dDI4MmZkMDdoeTdyaDhpNmF5aDNzNjZzdWlzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X328DXRD2BGbFOmLe1/giphy.gif"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 ">
        {/* Your content goes here */}
        <div className="container mx-auto p-8 text-white text-center relative top-[-250px] mt-48 pt-40">
          <h1 className="text-7xl font-bold blue_gradient max-sm:text-5xl max-sm:pt-40 text-left">Welcome to <span className='google_gradient'>GDSC</span></h1>
          <p className="text-3xl font-bold orange_gradient pt-12 text-left">
            Get ready to delve into the World of Developers
          </p>
          {/* Add your other components here */}
          <div className='flex-row'>
            <div className='container'>
              <div className='flex rounded-md shadow-md bg-black text-white'></div>
            </div>
          </div>
          <div className="flex  pt-10">
              <Link href="https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai/">
                <div className="rounded-full text-start bg-blue-500 text-white py-2 px-4 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl">
                  Join Us
                </div>
              </Link>
        </div>
        </div>
      </div>

      {/* Absolute positioning for the Events component */}
      <div className="absolute w-full top-[400px]">
        <AboutUs/>
        <Whatwedo />
        <Events />
        <OurTeam/>
        <Footer/>
      </div>
    </main>
  );
}

