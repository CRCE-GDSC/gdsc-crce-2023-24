import React from 'react';
import Link from 'next/link';

const OurTeam = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-5xl font-extrabold text-purple-600">Meet the Team</h2>
      <div className="flex gap-4 mt-6">
        <div className="text-center">
          <Link href="/team-member-1" className="rounded-full bg-blue-500 text-white py-2 px-4 transition-all hover:bg-green-500 cursor-pointer text-xl font-bold">
            Team
          </Link>
          <p className="mt-2 text-gray-500">2023-2024</p>
        </div>
        <div className="text-center" id="team">
          <Link href="/Team1" className="rounded-full bg-blue-500 text-white py-2 px-4 transition-all hover:bg-green-500 cursor-pointer text-xl font-bold">
            Team
          </Link>
          <p className="mt-2 text-gray-500">2022-2023</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;