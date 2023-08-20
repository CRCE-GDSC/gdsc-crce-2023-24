import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-sky-50 lg:px-[20px]">
      <footer className="p-5 gap-2 text-base-content">
        <div className="grid md:grid-cols-4 grid-cols-1 ">
          <div className="max-w-[350px] py-3 mr-5">
            <h2 className="text-lg uppercase font-semibold text-gray-600">
              GDSC Community
            </h2>
            <p className="text-normal">
              Helping students to bridge the gap between theory and practice. By
              joining a GDSC, students grow their knowledge in a peer-to-peer
              learning environment and build solutions for local businesses and
              their community.
            </p>
          </div>
          <div className="py-3">
            <span className="text-lg uppercase font-semibold text-gray-600">
              Useful Links
            </span>
            
            <div className="grid">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
            
            <Link href="#events" className="hover:text-blue-700">
              Events
            </Link>
            
            <Link href="#team" className="hover:text-blue-700">
              Our Team
            </Link>
            
            <Link
              href="https://developers.google.com/community-guidelines"
              className="hover:text-blue-700"
            >
              Community Guidelines
            </Link>
            </div>
            
          </div>
          <div className="py-3">
            <span className="text-lg uppercase font-semibold text-gray-600">
              Contact Us
            </span>
            <p className="mb-2">
              Fr. Conceicao Rodrigues College Of Engineering 
              Bandra (W), Mumbai-400051 Maharashtra, India
            </p>
            <div className="grid grid-cols-1">
              <span>
                <strong>Phone : </strong>+91 9769406063
              </span>
              
              <span>
                <strong>Email : </strong>crcegdsc@gmail.com
              </span>
            </div>
          </div>
          <div className="md:pl-10 py-3">
            <span className="text-lg uppercase font-semibold text-gray-600 ">
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
