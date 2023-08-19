'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Img1 from '../public/assets/Events/ideation.jpg'
import Img2 from '../public/assets/Events/HackOver3.0.jpg'
import Img3 from '../public/assets/Events/mathday.jpeg'
import Img4 from '../public/assets/Events/webdev.png'
import Img5 from '../public/assets/Events/seo.png'
import Img6 from '../public/assets/Events/Bit-N-Build.jpg'

const Events = () => {
  const eventsData = [
    {
      imgSrc: Img6,
      title: 'Bit n Built',
      subtitle:
        'Offline Hackathon - Domains: Web/App Dev, AI/ML , Blockchain & Open Innovation',
      date: '28th January, 2023',
      link: 'https://bitnbuild.netlify.app/',
    },
    {
      imgSrc: Img5,
      title: 'Tech Talk',
      subtitle: 'Getting Started With Elastic Stack for SEO',
      speaker: 'Ashish Tiwari',
      date: '11th January, 2023',
      link: 'https://gdsc.community.dev/e/mg96jj/',
    },
    {
      imgSrc: Img4,
      title: 'Web Development Workshop',
      subtitle: 'Hands On Workshop on HTML5, CSS3, JavaScript',
      speaker: 'Candida Noronha',
      date: '7th January, 2023',
      link: 'https://gdsc.community.dev/e/mgbsdq/',
    },
    {
      imgSrc: Img3,
      title: 'National Mathematics Day',
      subtitle: 'Contests: Just ∫du it & Creat-e-matics',
      date: '22nd December, 2022',
      link: 'https://gdsc.community.dev/e/mbucfv/',
    },
    {
      imgSrc: Img2,
      title: 'HackOver 3.0',
      subtitle:
        'Virtual Hackathon - Domains: Web/App Dev, Blockchain & Game Dev',
      date: '4th & 5th October, 2022',
      link: 'https://hackover.netlify.app/',
    },
    {
      imgSrc: Img1,
      title: 'Tech Talk',
      subtitle: 'Workshop on Problem Solving & Ideation',
      speaker: 'Princeton Baretto',
      date: '30th August, 2022',
      link: 'https://gdsc.community.dev/e/m89s4t/',
    },
  ]

  return (
    <motion.section id="services" className="bg-slate-100 py-16 scroll-mt-96">
      <div className="flex-1 justify-center items-center">
        <div className="text-center w-full">
          <div className="flex justify-center">
            <h3 className="text-gray-700 text-5xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl max-sm:pl-2 mb-6 py-3 font-poppins x-shadow-red text-center w-56 items-center justify-center">
              Events
            </h3>
          </div>

          <p className="mx-2 text-gray-600  text-center justify-center items-center lg:mx-auto max-w-full mb-6 lg:max-w-xl ">
            We conduct regular events including tech talks and workshops to make
            students familiar with the latest tech advancements and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 justify-items-center lg:mx-auto mx-2 mt-10 lg:max-w-4xl max-sm:pl-1 max-lg:pl-2">
          {eventsData.map((event, index) => (
            <motion.div
              key={index}
              className="box max-w-md x-shadow-red flex items-center justify-center mx-auto lg:ml-0 cursor-pointer bg-white p-2 lg:p-0 "
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                type: 'spring',
                damping: 2,
              }}
              whileHover={{ y: -10 }}
            >
              <div className="left">
                <div className="h-[110px] w-[110px] lg:w-[150px] lg:h-[150px] overflow-hidden rounded-lg mx-auto">
                  <Image
                    src={event.imgSrc}
                    alt={event.title}
                    className=" ml-2 lg:ml-0  h-[110px] w-[110px] lg:w-[150px] lg:h-[147px] rounded-lg lg:pt-1 lg:pl-1"
                    quality={100}
                    width={500}
                    height={500}
                    object-fit="cover"
                  />
                </div>
              </div>
              <div className="right ml-4 scroll-mt-96" id="events">
                <a
                  href={event.link}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  target="_blank"
                >
                  <h4 className="title font-bold lg:text-xl text-gray-700 ">
                    {event.title}
                  </h4>
                  <p className="description font-medium">
                    <b>{event.subtitle}</b>
                  </p>
                  {event.speaker && (
                    <p className="description font-semibold">
                      <b>Speaker: </b>
                      {event.speaker}
                    </p>
                  )}
                  <p className="description">
                    <b>Date: </b>
                    {event.date}
                  </p>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Events
