'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Img1 from '../public/assets/Events/ideation.jpg'
import Img2 from '../public/assets/Events/HackOver3.0.jpg'
import Img3 from '../public/assets/Events/mathday.jpeg'
import Img4 from '../public/assets/Events/webdev.png'
import Img5 from '../public/assets/Events/seo.png'
import Img6 from '../public/assets/Events/Bit-N-Build.jpg'

const Events = () => {
  const [ref3, inView3] = useInView({
    threshold: 0,
    triggerOnce: false,
  })
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  }
  const eventsData = [
    {
      imgSrc: Img6,
      title: 'Bit n Build',
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
    <motion.section id="services" className="scroll-mt-96 bg-slate-100 py-16">
      <div className="flex-1 items-center justify-center">
        <motion.div
          animate={inView3 ? 'visible' : 'hidden'}
          variants={variants}
          exit="hidden"
          transition={{ duration: 0.5 }}
          ref={ref3}
        >
          <div className="w-full text-center">
            <div className="flex justify-center">
              <h3 className="x-shadow-red mb-6 w-auto items-center justify-center py-3 text-center font-poppins text-5xl text-gray-700 max-lg:text-4xl max-md:text-4xl max-sm:pl-6 max-sm:text-3xl">
                Events
              </h3>
            </div>

            <p className="mx-2 mb-6  max-w-full items-center justify-center text-center text-gray-600 lg:mx-auto lg:max-w-xl ">
              We conduct regular events including tech talks and workshops to
              make students familiar with the latest tech advancements and
              programs.
            </p>
          </div>

          <div className="mx-2 mt-10 grid grid-cols-1 justify-items-center gap-16 max-lg:pl-2 max-sm:pl-1 md:grid-cols-2 lg:mx-auto lg:max-w-4xl lg:grid-cols-2">
            {eventsData.map((event, index) => (
              <motion.div
                key={index}
                className="box x-shadow-red mx-auto flex max-w-md cursor-pointer items-center justify-center bg-white p-2 lg:ml-0 lg:p-0 "
                animate={{ scale: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.01,
                  type: 'spring',
                  damping: 10,
                }}
                whileHover={{ y: -10 }}
              >
                <div className="left">
                  <div className="mx-auto h-[110px] w-[110px] overflow-hidden rounded-lg lg:h-[150px] lg:w-[150px]">
                    <Image
                      src={event.imgSrc}
                      alt={event.title}
                      className=" ml-2 h-[110px]  w-[110px] rounded-lg lg:ml-0 lg:h-[147px] lg:w-[150px] lg:pl-1 lg:pt-1"
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
                    <div className="p-0.5 lg:p-1.5">
                      <h4 className=" font-bold text-gray-700 lg:text-xl ">
                        {event.title}
                      </h4>
                      <p className="description text-[12px] font-medium lg:text-[14px]">
                        <b>{event.subtitle}</b>
                      </p>
                      {event.speaker && (
                        <p className="description text-[10px] font-semibold lg:text-[14px]">
                          <b className="lg:text-[14px]">Speaker: </b>
                          {event.speaker}
                        </p>
                      )}
                      <p className="description text-[12px] lg:text-[14px]">
                        <b>Date: </b>
                        {event.date}
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Events
