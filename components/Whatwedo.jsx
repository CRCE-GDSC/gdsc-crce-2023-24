'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Whatwedo = () => {
  const [ref2, inView2] = useInView({
    threshold: 0,
    triggerOnce: false,
  })
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  }

  return (
    <div className="w-full scroll-mt-96 bg-sky-50 px-12 py-10" id="what">
      <motion.div
        animate={inView2 ? 'visible' : 'hidden'}
        variants={variants}
        exit="hidden"
        transition={{ duration: 0.5 }}
        ref={ref2}
      >
        <div className="flex justify-center">
          <h3 className="x-shadow-green mb-9 w-auto items-center justify-center px-4 py-3 text-center font-poppins text-5xl text-gray-700 max-lg:text-4xl max-md:text-4xl max-sm:pl-6 max-sm:text-3xl ">
            What We Do
          </h3>
        </div>

        <div className="flex justify-center">
          <p className="mb-10 max-w-3xl text-center text-[16px] text-xl text-gray-600">
            GDSC CRCE boasts of a multifaceted community with members from
            various disciplines working together. By joining GDSC CRCE students
            get to work with an exceptionally skilled group of developers,
            connect with developers around the world, make projects,organized
            workshops and many more.
          </p>
        </div>
        <h6 className="text-center font-poppins text-3xl xl:text-4xl">
          We work on:
        </h6>
        <div className="mx-auto mb-2 mt-10 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center ">
            <div className="... box-border h-32 w-32 items-center justify-center border-0 p-2">
              <figure className="hover:translate-y-0.5">
                <img
                  className="mx-auto items-center justify-center text-center"
                  src="https://media0.giphy.com/media/sIfiAGLJ8jmSf6xUK9/giphy.gif"
                />
              </figure>
            </div>
            <p className="flex justify-center">
              <b>Blockchain</b>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="... box-border h-28 w-28 border-0 p-2">
              <figure className="hover:translate-y-0.5">
                <img src="https://miro.medium.com/v2/resize:fit:866/1*h1dUrjhkHzMU46jW1cQjAg.gif" />
              </figure>
            </div>
            <p className="mt-4 flex justify-center">
              <b>Machine Learning</b>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="... box-border h-32 w-32 border-0 p-2">
              <figure className="hover:translate-y-0.5">
                <img src="https://www.123code.org/images/fields/GIF/cyber-security.gif" />
              </figure>
            </div>
            <p className="flex justify-center text-center">
              <b>Cyber Security</b>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="... box-border h-32 w-32 border-0 p-2">
              <figure className="hover:translate-y-0.5">
                <img src="https://www.synycs.com/images/Cloud%20Computing/Cloud%20Avatar.gif" />
              </figure>
            </div>
            <p className="flex justify-center text-center">
              <b>Cloud Computing</b>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="... box-border h-32 w-32 border-0 p-2">
              <figure className="hover:translate-y-0.5">
                <img src="https://www.sataware.com/wp-content/uploads/2021/01/IOT-3.1.1-sataware.gif" />
              </figure>
            </div>
            <p className="flex justify-center text-center">
              <b>Internet of Things</b>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="box-border h-32 w-32 border-0 p-0 ">
              <figure className="hover:translate-y-0.5">
                <img src="https://i1.wp.com/china.wherefor.org/wp-content/uploads/2018/07/mobile-development2-2.gif?fit=800%2C600&ssl=1" />
              </figure>
            </div>
            <p className="flex justify-center text-center">
              <b>App Development</b>
            </p>
          </div>

          <div className="..."></div>

          <div className="flex flex-col items-center justify-center md:hidden">
            <div className="... box-border h-32 w-32 border-0 p-2">
              <figure className="hover:translate-y-0.5">
                <img src="https://i.pinimg.com/originals/bb/37/5c/bb375cdd655184ca2715ac5059e73651.gif" />
              </figure>
            </div>
            <p className="flex justify-center text-center">
              <b>Web Development</b>
            </p>
          </div>

          <div className="..."></div>
        </div>
        <div className="flex flex-col items-center justify-center max-md:hidden">
          <div className="... box-border h-32 w-32 border-0 p-2">
            <figure className="hover:translate-y-0.5">
              <img src="https://i.pinimg.com/originals/bb/37/5c/bb375cdd655184ca2715ac5059e73651.gif" />
            </figure>
          </div>
          <p className="flex justify-center text-center">
            <b>Web Development</b>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Whatwedo
