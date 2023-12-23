'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

const Projects = () => {
  const [current, setCurrent] = useState(0)
  const projects = [
    { text: 'Project 1', link: '/', image_url: '/assets/Inventory.png' },
    { text: 'Project 2', link: '/', image_url: '/assets/Inventory.png' },
    { text: 'Project 3', link: '/', image_url: '/assets/Inventory.png' },
    { text: 'Project 4', link: '/', image_url: '/assets/Inventory.png' },
    { text: 'Project 5', link: '/', image_url: '/assets/Inventory.png' },
  ]
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <div className="d-shadow-blue m-4 flex flex-col items-center justify-center rounded-lg p-4 md:flex-row">
      <div className="flex justify-center max-md:hidden">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() =>
            setCurrent(current > 0 ? current - 1 : projects.length - 1)
          }
        >
          <FaArrowLeft />
        </button>
      </div>
      {projects
        .slice(current, current + (windowWidth >= 768 ? 3 : 1))
        .map((project, index) => (
          <a href={project.link} key={index}>
            <div className="flex-row px-3">
              <div className="d-shadow-red container flex h-72 flex-col items-center justify-stretch bg-blue-50 px-0.5  text-center">
                <Image
                  alt={project.text}
                  src={project.image_url}
                  height={3000}
                  width={3000}
                  className="rounded-md object-contain"
                />
                <p className=" text-2xl font-semibold">{project.text}</p>
              </div>
            </div>
          </a>
        ))}
      <div className="flex justify-center max-md:hidden">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 "
          onClick={() =>
            setCurrent(current < projects.length - 1 ? current + 1 : 0)
          }
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="flex flex-row justify-center space-x-4 pt-12 md:hidden">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() =>
            setCurrent(current > 0 ? current - 1 : projects.length - 1)
          }
        >
          <FaArrowLeft />
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() =>
            setCurrent(current < projects.length - 1 ? current + 1 : 0)
          }
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Projects
