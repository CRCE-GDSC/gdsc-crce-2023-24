import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-blue-500 lg:px-[20px]">
      <footer className="p-10 gap-2 text-base-content">
        <div className="grid md:grid-cols-4 grid-cols-1 ">
          <div className="max-w-[350px] py-3 mr-2">
            <h2 className="text-lg uppercase font-semibold text-white">
              GDSC Community
            </h2>
            <p className="text-normal text-gray-100">
              Helping students to bridge the gap between theory and practice. By
              joining a GDSC, students grow their knowledge in a peer-to-peer
              learning environment and build solutions for local businesses and
              their community.
            </p>
          </div>
          <div className="py-3 lg:ml-10 ">
            <span className="text-lg uppercase font-semibold text-white">
              Useful Links
            </span>
            
            <div className="grid">
            <Link href="/" className="text-slate-100 hover:underline">
              Home
            </Link>
            
            <Link href="#events" className="text-slate-100 hover:underline">
              Events
            </Link>
            
            <Link href="#team" className="text-slate-100 hover:underline">
              Our Team
            </Link>
            
            <Link
              href="https://developers.google.com/community-guidelines"
              className="text-slate-100 hover:underline"
            >
              Community Guidelines
            </Link>
            </div>
            
          </div>
          <div className="py-3">
            <span className="text-lg uppercase font-semibold text-white">
              Contact Us
            </span>
            <p className="mb-2 text-gray-100">
              Fr. Conceicao Rodrigues College Of Engineering 
              Bandra (W), Mumbai-400051 Maharashtra, India
            </p>
            <div className="grid grid-cols-1 px-2">
              <span className="text-gray-100">
                <strong className="text-white">Phone : </strong>+91 9769406063
              </span>
              
              <span className="text-gray-100">
                <strong className="text-white">Email : </strong>crcegdsc@gmail.com
              </span>
            </div>
          </div>
          <div className="md:pl-10 py-3">
            <span className="text-lg uppercase font-semibold text-white ">
              Social
            </span>
            <div className="flex flex-row" id="foot">
              <a className="p-3" href='https://www.instagram.com/gdsc_crce/' target='_blank'>
                <FaInstagram
                  size={35}
                  className="text-violet-500 hover:text-white hover:bg-blue-400 rounded-xl"
                />
              </a>
              <a className="p-3">
                <FaYoutube
                  size={35}
                  className="text-red-600 hover:text-white hover:bg-blue-400 rounded-xl"
                />
              </a>
              <a className="p-3">
                <FaTwitter
                  size={35}
                  className="text-sky-500 hover:text-white hover:bg-blue-400 rounded-xl"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
