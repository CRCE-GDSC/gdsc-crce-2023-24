'use client'
import Image from 'next/image'
import Link from 'next/link'
//import { Icons } from '../../components/icons'
import { auth } from '../lib/firebase'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'

const HeroSection = () => {
  const [user, loading, error] = useAuthState(auth)
  const [signInWithGoogle] = useSignInWithGoogle(auth)
  return (
    <div className="flex justify-center items-center">
      <div className="container z-shadow-yellow mt-36 px-1 py-1 max-sm:hidden sm:mb-20 max-sm:mb-0">
        <div className="w-full max-sm:hidden min-h-[640px] bg-[url('/assets/DSC3.gif')] max-sm:bg-[url('/assets/DSC3.gif')] ">
          <div className=" flex flex-col z-10">
            {/* Your content goes here */}
            <div className="mx-24 p-8 text-white text-left">
              <h1 className="text-7xl font-bold blue_gradient max-sm:text-6xl max-sm:pt-56 text-left max-sm:text-center mt-20">
                Welcome to GDSC
              </h1>
              <p className="text-4xl max-sm:text-3xl font-poppins font-semibold orange_gradient pt-12 text-center lg:text-left max-w-xl max-lg:text-center max-lg:justify-center">
                Get ready to delve into the World of Developers
              </p>
              {/* Add your other components here */}

              <div className="flex pt-10 max-sm:items-center max-lg:justify-center">
                <Link
                  target="_blank"
                  href="https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai/"
                  className="pr-4"
                >
                  <div className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left">
                    Join Us
                  </div>
                </Link>
                {(loading || !user) && (
                  <button
                    className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left"
                    onClick={() => signInWithGoogle()}
                  >
                    Sign in
                  </button>
                )}
                {user && (
                  <button
                    className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left"
                    onClick={() => auth.signOut()}
                  >
                    Sign out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[350px] w-[100%] items-center justify-center sm:hidden">
        <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNuMDZvZHhvaTJ3dDI4MmZkMDdoeTdyaDhpNmF5aDNzNjZzdWlzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X328DXRD2BGbFOmLe1/giphy.gif"
          alt="Background Image"
          width={700}
          height={600}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 sm:pt-32 sm:hidden">
        {/* Your content goes here */}
        <div className="container mx-auto p-8 text-white text-center relative max-sm:top-[-250px] mt-48 pt-40 xl:pl-20">
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
            <Link
              href="https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai/"
              className="pr-4"
            >
              <div className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left">
                Join Us
              </div>
            </Link>
            {(loading || !user) && (
              <button
                className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left"
                onClick={() => signInWithGoogle()}
              >
                Sign in
              </button>
            )}
            {user && (
              <button
                className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left"
                onClick={() => auth.signOut()}
              >
                Sign out
              </button>
            )}
          </div>
        </div>

        {/* Content Container */}
      </div>
    </div>
  )
}

export default HeroSection
