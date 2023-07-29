import React from "react";
import Link from "next/link";
import {FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-sky-50 lg:px-[120px] mt-10">
      <footer className="container p-10 gap-7 text-base-content">
        <div className="grid md:grid-cols-5 grid-cols-1 ">
        <div className="col-span-2 max-w-[350px]" >
          <h2 className="text-lg uppercase font-semibold text-gray-600">GDSC Community</h2>
          <p className="text-normal ">
            Helping students to bridge the gap between theory and practice. By
            joining a GDSC, students grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and
            their community.
          </p>
        </div>
        <div>
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
        <div>
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
        <div className="pl-10">
          <span className="text-lg uppercase font-semibold text-gray-600">Social</span>
          <div className="flex flex-row">
            <a className="p-2">
              <FaInstagram size={25}/>
            </a>
            <a className="p-2">
              <FaYoutube size={25}/>
            </a>
            <a className="p-2">
              <FaTwitter size={25}/>
            </a>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;