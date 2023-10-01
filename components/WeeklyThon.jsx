import React from 'react'
import Image from 'next/image'

const WeeklyThon = () => {
  return (
    <div>
        <div className="flex justify-center">
            <h3 className="text-gray-700 text-5xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl mb-6 py-3 px-4 font-poppins x-shadow-red text-center w-auto items-center justify-center max-sm:mt-0">
                WeeklyThon
            </h3>
        </div>
        <div className='x-shadow-red text-center w-auto items-center justify-center mr-10 ml-10 pb-10 mb-5'>
            <h3 className="text-gray-700 pt-8 text-7xl max-lg:text-2xl max-md:text-2xl max-sm:text-2xl mb-6 py-3 px-4 font-poppins max-sm:mt-0">
                    Problem of the Week
            </h3>
            <div className='flex w-auto items-center justify-center'>
                <Image 
                className='rounded-lg border max-md:w-96 max-sm:w-64'
                src = '/assets/WeeklyThonPosters/week1.jpg'
                alt="Background Image"
                width={500}
                height={500}
                >
                </Image>
            </div>
            <div className='flex mt-5 w-auto items-center justify-center flex-wrap'>
            <button
                className="transform cursor-pointer rounded-full bg-blue-500 px-6 py-2 mr-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left flex items-center max-sm:text-xs max-sm:mt-2 max-md:mt-2 max-sm:ml-3"
                >
                <img
                    src="/assets/gdoc.png"
                    alt="Google Docs Icon"
                    className="w-8 h-8 inline-block mr-2 max-sm:w-4 max-sm:h-4"
                />
                <span><a href="https://docs.google.com/document/d/1fC1h2ULkmBdyu-rpqdQgViI3CzSUbcnBEsvnydREjWU/edit" target='_blank'>Instructions</a></span>
                </button>
            <button
                className="transform cursor-pointer rounded-full bg-green-500 px-6 py-2 mr-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left flex items-center max-sm:text-xs max-sm:mt-2 max-md:mt-2"
              >
                <img
                    src="/assets/forms.png"
                    alt="Google Docs Icon"
                    className="w-8 h-8 inline-block mr-2 max-sm:w-4 max-sm:h-4"
                />
                <span><a href="https://docs.google.com/forms/d/e/1FAIpQLSe0-0Vt8naguTC8gGy94zKLehSCV8iLkg3KHQ12kauLAgt9RQ/viewform" target='_blank'>Submission Link</a></span>
              </button><button
                className="transform cursor-pointer rounded-full bg-black px-6 py-2 mr-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left flex items-center max-sm:text-xs max-sm:mt-2 max-md:mt-2"
              >
                <img
                    src="/assets/github1.png"
                    alt="Google Docs Icon"
                    className="w-8 h-8 max-sm:w-4 max-sm:h-4 inline-block mr-2"
                />
                <span><a href="https://github.com/CRCE-GDSC/Weekly-thon" target='_blank'>Github</a></span>
              </button>
            </div>
        </div>
    </div>
  )
}

export default WeeklyThon