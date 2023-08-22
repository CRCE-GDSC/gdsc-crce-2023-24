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
    <div className="flex items-center justify-center px-6">
      <div className="z-shadow-yellow container mt-28 px-1 py-1 max-sm:mb-0 max-sm:hidden sm:mb-20">
        <div className="min-h-[640px] w-full bg-[url('/assets/DSC3.gif')] bg-cover bg-right max-sm:hidden max-sm:bg-[url('/assets/DSC3.gif')] ">
          <div className=" z-10 flex flex-col">
            {/* Your content goes here */}
            <div className="mx-24 p-8 text-left text-white">
              <h1 className="blue_gradient mt-20 text-left text-7xl font-bold max-sm:pt-56 max-sm:text-center max-sm:text-6xl">
                Welcome to GDSC
              </h1>
              <p className="orange_gradient max-w-xl pt-12 text-center font-poppins text-4xl font-semibold max-lg:justify-center max-lg:text-center max-sm:text-3xl lg:text-left">
                Get ready to delve into the World of Developers
              </p>
              {/* Add your other components here */}

              <div className="flex pt-10 max-lg:justify-center max-sm:items-center">
                <Link
                  target="_blank"
                  href="https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai/"
                  className="pr-4"
                >
                  <div className="transform cursor-pointer rounded-full bg-blue-500 px-6 py-2 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left">
                    Join Us
                  </div>
                </Link>
                {(loading || !user) && (
                  <button
                    className="transform cursor-pointer rounded-full bg-blue-500 px-6 py-2 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left"
                    onClick={() => signInWithGoogle()}
                  >
                    Sign in
                  </button>
                )}
                {user && (
                  <button
                    className="transform cursor-pointer rounded-full bg-blue-500 px-6 py-2 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left"
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center sm:hidden sm:pt-32">
        {/* Your content goes here */}
        <div className="container relative mx-auto mt-48 p-8 pt-40 text-center text-white max-sm:top-[-250px] xl:pl-20">
          <h1 className="blue_gradient mt-20 text-center text-7xl font-bold max-sm:pt-56 max-sm:text-center max-sm:text-6xl lg:text-left">
            Welcome to GDSC
          </h1>
          <p className="orange_gradient max-w-xl pt-12 text-center font-poppins text-4xl font-semibold max-lg:justify-center max-lg:text-center max-sm:text-3xl lg:text-left">
            Get ready to delve into the World of Developers
          </p>
          {/* Add your other components here */}
          <div className="flex-row">
            <div className="container">
              <div className="flex rounded-md bg-black text-white shadow-md"></div>
            </div>
          </div>
          <div className="flex pt-10 max-lg:justify-center max-sm:items-center">
            <Link
              href="https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai/"
              className="pr-4"
            >
              <div className="transform cursor-pointer rounded-full bg-blue-500 px-6 py-2 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left">
                Join Us
              </div>
            </Link>
            {(loading || !user) && (
              <button
                className="transform cursor-pointer rounded-full bg-blue-500 px-6 py-2 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left"
                onClick={() => signInWithGoogle()}
              >
                Sign in
              </button>
            )}
            {user && (
              <button
                className="transform cursor-pointer rounded-full bg-blue-500 px-6 py-2 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left"
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
