"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import "./Events.css"
import Img1 from "../public/assets/Events/ideation.jpg"
import Img2 from "../public/assets/Events/HackOver3.0.jpg"
import Img3 from "../public/assets/Events/mathday.jpeg"
import Img4 from "../public/assets/Events/webdev.png"
import Img5 from "../public/assets/Events/seo.png"
import Img6 from "../public/assets/Events/Bit-N-Build.jpg"

const Events = () => {
    const eventsData = [
        {
            imgSrc: Img6,
            title: 'Bit n Built',
            subtitle: 'Offline Hackathon - Domains: Web/App Dev, AI/ML , Blockchain & Open Innovation',
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
          subtitle: 'Virtual Hackathon - Domains: Web/App Dev, Blockchain & Game Dev',
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
        
      ];

    
      return (
        <motion.section 
        id='services' 
        className='section-bg w-full py-14'
        initial={{ opacity: 0, y: 50 }} // Initial animation values
        animate={{ opacity: 1, y: 0 }} // Animate to these values
        transition={{ duration: 0.5 }} // Animation duration
        >
            <motion.header 
                className='section-header'
                initial={{ opacity: 0, y: -80 }} // Initial animation values
                animate={{ opacity: 2, y: 0 }} // Animate to these values
                transition={{ duration: 2, delay: 0.5, ease: "linear" }} // Animation duration with a slight delay
                
            >
                <h3 className='font-bold text-lg py-10 text-center'>Events</h3>
                <p className='text-center text-gray-600 font-semibold'>
                    We conduct regular events including tech talks and workshops to make
                    students familiar with the latest tech advancements and programs.
                </p>
            </motion.header>
            <div className='flex items-center justify-center'>
                <div className='max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center'>
                    {eventsData.map((event, index) => (
                        <motion.div
                            key={index}
                            className='box card max-w-md rounded overflow-hidden shadow-lg flex items-center justify-center mx-10 cursor-pointer sm:mx-2'
                            //initial={{ opacity: 0, y: 100 }} 
                            animate={{ scale: 1.1}} 
                            transition={{ duration: 2, delay: index*0.1, type: "spring", damping: 2 }} // Animation duration with a delay based on the card's index
                            whileHover={{ y: -10 }} // Apply the upwards movement on hover
                        >
                            <div className='img'>
                                <Image
                                    src={event.imgSrc}
                                    alt={event.title}
                                    className='object-cover'
                                    quality={100}
                                    width={500}
                                    height={500}
                                    object-fit='cover'
                                />
                            </div>
                            <div className='px-3 lg:m-2 scroll-mt-96' id="events">
                                <a
                                    href={event.link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    target='_blank'
                                >
                                    <h4 className='title font-bold text-xl text-gray-700'>
                                        {event.title}
                                    </h4>
                                    <p className='description font-medium'>
                                        <b className='text-gray-600'>{event.subtitle}</b>
                                    </p>
                                    {/* Conditionally display the speaker */}
                                        {event.speaker ? (
                                            <p className='description font-semibold'>
                                            <b>Speaker: </b>
                                            {event.speaker}
                                            </p>
                                        ) : null}
                                    <p className='description'>
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
    );
};


export default Events