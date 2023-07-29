"use client"
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from 'react-icons/ai';
import Image from "next/image";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
      <div className="md:hidden sticky w-full backdrop-blur-3xl top-0 z-10">
        <div className="flex shadow-lg">
          <div className="flex lg:flex-1 md:hidden m-3">
            <span className="sr-only">GDSC CRCE</span>
            <Link
              href="/"
            >
              <Image
                src="/assets/GDSC_CRCE.png"
                alt="logo"
                height={400}
                width={200}
                className="object-contain"
              />
            </Link>
          </div>
          <AiOutlineMenu size={20}
            onClick={handleNav}
            className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
          />
        </div>
        {nav ? (
          <div className="fixed h-screen w-full bg-white flex flex-col justify-center items-center z-20">
            <Link
              href="/"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              Home
            </Link>
            <Link
              href="/"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              About Us
            </Link>

            <Link
              href="/"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              What we do
            </Link>

            <Link
              href="/"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              Events
            </Link>
            
            <Link
              href="/"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              Our Team
            </Link>

            <Link
              href="/"
              onClick={handleNav}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-500 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-105 ease-in duration-200"
            >
              Contact Us
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="md:block hidden sticky w-full">
        <div className="sticky lg:px-[100px] top-0 backdrop-blur-3xl z-10 mx-auto shadow-lg">
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
            <div className='flex max-sm:hidden'>
              <Link href='/' className='py-6 blue_link'>Home</Link>
              <Link href='/' className='py-6 blue_link'>About Us</Link>
              <Link href='/' className='py-6 blue_link'>What We Do</Link>
              <Link href='/' className='py-6 blue_link'>Events</Link>
              <Link href='/' className='py-6 blue_link'>Our Team</Link>
              <Link href='/' className='py-6 blue_link'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
)
}

export default Navbar