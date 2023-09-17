'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import { LogOut, UserIcon } from 'lucide-react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { db } from '../lib/firebase'
import { increment } from 'firebase/firestore'
import {
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  query,
  updateDoc,
  collection,
} from 'firebase/firestore'
import { auth } from '../lib/firebase'
import { getFirestore } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth)
  const [nav, setNav] = useState(false)

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const userRef = doc(db, 'users', user.uid)
        setDoc(
          userRef,
          { userName: user.displayName, userImage: user.photoURL },
          { merge: true }
        )
      }
    }

    fetchData()
  }, [user])

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="flex-between fixed left-0 top-0 z-50 w-full gap-x-1 bg-white max-md:px-0 max-sm:justify-center max-sm:px-0 md:px-0">
      <div className="fixed left-0 top-0 z-50 w-full bg-white md:hidden">
        <div className="flex shadow-lg">
          <div className="m-3 flex md:hidden lg:flex-1">
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
            className="absolute right-4 top-4 z-[99] cursor-pointer md:hidden"
          />
          {user && (
            <div className="absolute right-11 top-2 z-[99] flex cursor-pointer items-center justify-center rounded-full md:hidden">
              <a href="/MyProfile">
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
        {nav ? (
          <div className="fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-white">
            <Link
              href="/"
              onClick={handleNav}
              className="m-3 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={handleNav}
              className="m-3 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105"
            >
              About Us
            </Link>

            <Link
              href="#what"
              onClick={handleNav}
              className="m-3 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105"
            >
              What we do
            </Link>

            <Link
              href="#events"
              onClick={handleNav}
              className="m-3 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105"
            >
              Events
            </Link>

            <Link
              href="#team"
              onClick={handleNav}
              className="m-3 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105"
            >
              Our Team
            </Link>

            <Link
              href="#foot"
              onClick={handleNav}
              className="m-3 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="sticky top-0 hidden w-full md:block">
        <div className="sticky top-0 z-10 mx-auto bg-white shadow-lg lg:px-[100px]">
          <div className="flex w-full">
            <div className="flex lg:flex-1">
              <span className="sr-only">GDSC CRCE</span>
              <Link
                href="/"
                className="flex-center flex gap-2 pl-1 max-sm:hidden max-sm:gap-0"
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
                <Link href="/" className="blue_link py-6">
                  Home
                </Link>
                <Link href="#about" className="blue_link py-6">
                  About Us
                </Link>
                <Link href="#what" className="blue_link py-6">
                  What We Do
                </Link>
                <Link href="#events" className="blue_link py-6">
                  Events
                </Link>
                <Link href="#team" className="blue_link py-6">
                  Our Team
                </Link>
                <Link href="#foot" className="blue_link py-6">
                  Contact Us
                </Link>
                {user && (
                  <div className="flex items-center justify-center rounded-full">
                    <a href="/MyProfile">
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
