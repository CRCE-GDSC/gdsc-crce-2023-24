import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto">
 <h3 className="text-5xl font-bold text-black mb-6 text-center pb-10 bg-[#fdfdfd] max-sm:pt-14">About Us</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

        {/* Card 1 */}
        <div className="rounded overflow-hidden shadow-lg feature-card p-4">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <div className="font-bold text-xl mb-2">
            <h4 className="text-gray-800">Concept of GDSC</h4>
          </div>
          <p className="text-gray-700 text-base">
            The GDSC program is a grassroots channel through which Google provides
            development, mobile & web development skills for students, towards employability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded overflow-hidden shadow-lg feature-card p-4">
          <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="font-bold text-xl mb-2">
            <h4 className="text-gray-800">Why GDSC?</h4>
          </div>
          <p className="text-gray-700 text-base">
            For students to learn development skills, solve problems through technology
            and inspire them to be world class developers and change makers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded overflow-hidden shadow-lg feature-card p-4">
          <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="font-bold text-xl mb-2">
            <h4 className="text-gray-800">Target audience</h4>
          </div>
          <p className="text-gray-700 text-base">
            GDSC activities are targeted at University students and any others
            including faculty members who want to learn development skills &amp; work to solve real-life
            problems.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;