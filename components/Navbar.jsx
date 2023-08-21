'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import { LogOut, UserIcon } from 'lucide-react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { db } from '../lib/firebase'
import {
  getDocs,
  doc,
  setDoc,
  collection,
  deleteDoc,
  query,
  updateDoc,
} from 'firebase/firestore'
import { auth } from '../lib/firebase'
import { getFirestore } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth)
  const [nav, setNav] = useState(false)

  useEffect(() => {
    if (user) {
      const userRef = doc(db, 'users', user.uid)
      setDoc(
        userRef,
        { userName: user.displayName, userImage: user.photoURL },
        { merge: true }
      )
    }
  }, [user])

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white flex-between gap-x-1 md:px-0 max-sm:px-0 max-sm:justify-center max-md:px-0">
      <div className="md:hidden fixed left-0 bg-white w-full top-0 z-50">
        <div className="flex shadow-lg">
          <div className="flex lg:flex-1 md:hidden m-3">
            <span className="sr-only">GDSC CRCE</span>
            <Link href="/">
              <Image
                src="/assets/GDSC_CRCE.png"
                alt="logo"
                height={400}
                width={200}
                className="object-contain"
              />
            </Link>
          </div>
          <AiOutlineMenu
            size={20}
            onClick={handleNav}
            className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
          />
        </div>
        {nav ? (
          <div className="fixed h-screen w-full bg-white flex flex-col justify-center items-center z-20">
            <Link
              href="/"
              onClick={handleNav}
              className="text-white w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={handleNav}
              className="text-white w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              About Us
            </Link>

            <Link
              href="#what"
              onClick={handleNav}
              className="text-white w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              What we do
            </Link>

            <Link
              href="#events"
              onClick={handleNav}
              className="text-white w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              Events
            </Link>

            <Link
              href="#team"
              onClick={handleNav}
              className="text-white w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              Our Team
            </Link>

            <Link
              href="#foot"
              onClick={handleNav}
              className="text-white w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              Contact Us
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="md:block hidden sticky top-0 w-full">
        <div className="sticky lg:px-[100px] top-0 bg-white z-10 mx-auto shadow-lg">
          <div className="flex w-full">
            <div className="flex lg:flex-1">
              <span className="sr-only">GDSC CRCE</span>
              <Link
                href="/"
                className="flex gap-2 flex-center pl-1 max-sm:gap-0 max-sm:hidden"
              >
                <Image
                  src="/assets/GDSC_CRCE.png"
                  alt="logo"
                  width={300}
                  height={150}
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="hidden md:flex md:gap-x-3">
              <div className="flex max-sm:hidden">
                <Link href="/" className="py-6 blue_link">
                  Home
                </Link>
                <Link href="#about" className="py-6 blue_link">
                  About Us
                </Link>
                <Link href="#what" className="py-6 blue_link">
                  What We Do
                </Link>
                <Link href="#events" className="py-6 blue_link">
                  Events
                </Link>
                <Link href="#team" className="py-6 blue_link">
                  Our Team
                </Link>
                <Link href="#foot" className="py-6 blue_link">
                  Contact Us
                </Link>
                {user && (
                  <div className="rounded-full flex items-center justify-center">
                    <a href={`/MyProfile/${user.displayName}`}>
                      <div>
                        <Image
                          src={user.photoURL}
                          alt="User photo"
                          height={40}
                          width={40}
                          className="rounded-full"
                        />
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
