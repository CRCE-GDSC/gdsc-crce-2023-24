import React from 'react';
import Link from 'next/link';

const OurTeam = () => {
  return (

    <div className="flex flex-col items-center bg-white mb-7 py-16 max-w-6xl lg:max-w-full shadow-lg">
      <h2 className="text-5xl max-sm:text-3xl text-gray-700 mb-2 font-poppins">Get to know the Team</h2>
      <p className='mt-5 text-slate-500 text-center max-w-xl mx-6 font-poppins'>“Individually, we are one drop. Together, we are an ocean.” — Ryunosuke Satoro</p>
      <div className="flex gap-4 mt-8">
        <div className="text-center px-6">
          <Link href="/Team2" className="rounded-full bg-blue-500 text-white py-2 px-8 transition-all hover:bg-green-500 cursor-pointer text-xl font-bold">
            Team
          </Link>
          <p className="mt-3 text-gray-500">2023-2024</p>
        </div>
        <div className="text-center px-6" id="team">
          <Link href="/Team1" className="rounded-full bg-blue-500 text-white py-2 px-8 transition-all hover:bg-purple-500 cursor-pointer text-xl font-bold">
            Team
          </Link>
          <p className="mt-3 text-gray-500">2022-2023</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
