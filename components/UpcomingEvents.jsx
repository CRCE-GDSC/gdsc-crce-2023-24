import React from 'react'
import Image from 'next/image'

const UpcomingEvents = () => {
  return (
    <div>
        <div className="flex justify-center">
            <h3 className="text-gray-700 text-5xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl mb-6 py-3 px-4 font-poppins x-shadow-blue text-center w-auto items-center justify-center max-sm:mt-0">
                Upcoming Event
            </h3>

        </div>
        <div className='x-shadow-green text-center w-auto items-center justify-center mx-10 pb-10 mb-5 max-sm:mx-6'>
            <h3 className="text-gray-700 pt-8 text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl mb-6 py-3 px-4 font-poppins font-semibold max-sm:mt-0 max-lg:font-semibold max-md:font-semibold max-sm:font-bold">
                    Postman Playbook
            </h3>
            <div className='flex w-auto items-center justify-center'>
                <Image 
                className='rounded-lg border max-md:w-96 max-sm:w-64'
                src = '/assets/postman_event_poster.jpg'
                alt="Background Image"
                width={500}
                height={500}
                >
                </Image>
            </div>
            <div className='flex mt-5 w-auto items-center justify-center flex-wrap'>
            <button
                className="transform cursor-pointer rounded-full bg-blue-500 btn-lg px-6 py-2 mr-4 text-center text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:text-left flex items-center max-sm:text-xs max-sm:mt-2 max-md:mt-2 max-sm:ml-3 max-lg:mt-2 max-md:btn-md max-sm:btn-sm"
              >
                <img
                    src="/assets/rsvp2.png"
                    alt="Google Docs Icon"
                    className="w-8 h-8 max-sm:w-4 max-sm:h-4 inline-block mr-2"
                />
                <span><a href="https://gdsc.community.dev/e/mg8avw/" target='_blank'>RSVP NOW !!!</a></span>
              </button>
            </div>
        </div>
    </div>
  )
}

export default UpcomingEvents