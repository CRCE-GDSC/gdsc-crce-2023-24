import React from "react";
import Link from "next/link";
import {FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-sky-50 lg:px-[120px]">
      <footer className="container p-10 gap-7 text-base-content">
        <div className="grid md:grid-cols-5 grid-cols-1 ">
        <div className="md:col-span-2 max-w-[350px] py-3" >
          <h2 className="text-lg uppercase font-semibold text-gray-600">GDSC Community</h2>
          <p className="text-normal ">
            Helping students to bridge the gap between theory and practice. By
            joining a GDSC, students grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and
            their community.
          </p>
        </div>
        <div className="py-3">
          <span className="text-lg uppercase font-semibold text-gray-600">Useful Links</span>
          <br/>
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
          <br/>
          <Link href="/" className="hover:text-blue-700">
            Events
          </Link>
          <br/>
          <Link href="/" className="hover:text-blue-700">
            Our Team
          </Link>
          <br/>
          <Link href="/" className="hover:text-blue-700">
            Community Guidelines
          </Link>
          <br/>
        </div>
        <div className="py-3">
          <span className="text-lg uppercase font-semibold text-gray-600">Contact Us</span>
          <p>
            Fr. Conceicao Rodrigues College Of Engineering <br/>
            Bandra (W),
            Mumbai-400051 Maharashtra, India
          </p>
          <p>
            <span><strong>Phone : </strong>+91 9769406063</span> <br/>
            <span><strong>Email : </strong>crcegdsc@gmail.com</span>
          </p>
        </div>
        <div className="md:pl-10 py-3">
          <span className="text-lg uppercase font-semibold text-gray-600 ml-2">Social</span>
          <div className="flex flex-row" id="foot">
            <a className="p-3">
              <FaInstagram size={35} className="text-violet-500 hover:text-white hover:bg-blue-400 rounded-xl"/>
            </a>
            <a className="p-3">
              <FaYoutube size={35} className="text-red-600 hover:text-white hover:bg-blue-400 rounded-xl"/>
            </a>
            <a className="p-3">
              <FaTwitter size={35} className="text-sky-500 hover:text-white hover:bg-blue-400 rounded-xl"/>
            </a>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;