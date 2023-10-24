import React from 'react'
import Image from 'next/image'

const WeeklyThon = () => {
  return (
    <div>
        <div className="flex justify-center mt-24">
            <h3 className="text-gray-700 text-5xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl mb-6 py-3 px-4 font-poppins x-shadow-red text-center w-auto items-center justify-center max-sm:mt-0 max-sm:mx-8">
                Thank you for participating in WeeklyThon
                <span>
                  <h4 className='text-4xl mt-5 max-lg:text-3xl max-md:text-3xl max-sm:text-2xl'>
                    Phase-1 Completed
                  </h4>
                </span>
            </h3>
        </div>
        {/* <div className='x-shadow-red text-center w-auto items-center justify-center mr-10 ml-10 pb-10 mb-5'>
            <h3 className="text-gray-700 pt-8 text-7xl max-lg:text-2xl max-md:text-2xl max-sm:text-2xl mb-6 py-3 px-4 font-poppins max-sm:mt-0">
                    Problem of the Week
            </h3>
            <div className='flex w-auto items-center justify-center'>
                <Image 
                className='rounded-lg border max-md:w-96 max-sm:w-64'
                src = '/assets/WeeklyThonPosters/week2.png'
                alt="Background Image"
                width={500}
                height={500}
                >
                </Image>
            </div>
            <div className='flex mt-5 w-auto items-center justify-center flex-wrap'>
            <button
                className="transform cursor-pointer rounded-full bg-blue-500 px-6 py-2 mr-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left flex items-center max-sm:text-xs max-sm:mt-2 max-md:mt-2 max-sm:ml-3 max-lg:mt-2"
              >
                <img
                    src="/assets/rsvp2.png"
                    alt="Google Docs Icon"
                    className="w-8 h-8 max-sm:w-4 max-sm:h-4 inline-block mr-2"
                />
                <span><a href="https://gdsc.community.dev/e/mg8avw/" target='_blank'>RSVP</a></span>
              </button>
            <button
                className="transform cursor-pointer rounded-full bg-yellow-300 px-6 py-2 mr-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left flex items-center max-sm:text-xs max-sm:mt-2 max-md:mt-2 max-lg:mt-2"
                >
                <img
                    src="/assets/gdoc.png"
                    alt="Google Docs Icon"
                    className="w-8 h-8 inline-block mr-2 max-sm:w-4 max-sm:h-4"
                />
                <span><a href="https://docs.google.com/document/d/1BjlDhhBH8ws3B_jKV0OXJef6jHbF2KJOxQAKObhZu6A/edit?usp=sharing" target='_blank'>Instructions</a></span>
                </button>
            <button
                className="transform cursor-pointer rounded-full bg-green-500 px-6 py-2 mr-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left flex items-center max-sm:text-xs max-sm:mt-2 max-md:mt-2 max-lg:mt-2"
              >
                <img
                    src="/assets/forms.png"
                    alt="Google Docs Icon"
                    className="w-8 h-8 inline-block mr-2 max-sm:w-4 max-sm:h-4"
                />
                <span><a href="https://docs.google.com/forms/d/e/1FAIpQLSeAW73awfJD3pNDJ_lI2HNexotFHBVWmzTGxN0SGKpr2j3SJA/viewform?usp=sf_link" target='_blank'>Submission Link</a></span>
              </button><button
                className="transform cursor-pointer rounded-full bg-black px-6 py-2 mr-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left flex items-center max-sm:text-xs max-sm:mt-2 max-md:mt-2 max-lg:mt-2"
              >
                <img
                    src="/assets/github1.png"
                    alt="Google Docs Icon"
                    className="w-8 h-8 max-sm:w-4 max-sm:h-4 inline-block mr-2"
                />
                <span><a href="https://github.com/CRCE-GDSC/Weekly-thon" target='_blank'>Github</a></span>
              </button>
            </div>
        </div> */}
    </div>
  )
}

export default WeeklyThon