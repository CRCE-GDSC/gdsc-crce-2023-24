'use client'
import React, { useState } from 'react'

const UserLogin = () => {
  const [collegeName, setCollegeName] = useState('')
  const [year, setYear] = useState('')
  const [className, setClassName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value
    // Only allow numerical characters
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value)
    }
  }

  return (
    <div className="flex flex-col justify-start items-start w-full min-h-screen pt-24">
      <span className="text-2xl font-semibold text-left py-5">
        Welcome User
      </span>
      <div className="w-72 py-5">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="collegeName"
        >
          College Name
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="collegeName"
          value={collegeName}
          onChange={(event) => setCollegeName(event.target.value)}
        >
          <option>Fr. Conceicao Rodrigues College of Engieering</option>
          <option>Other</option>
        </select>
      </div>
      <div className="w-72 py-5">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="year"
        >
          Select Year
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        >
          <option>FE</option>
          <option>SE</option>
          <option>TE</option>
          <option>BE</option>
        </select>
      </div>
      <div className="w-72 py-5">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="className"
        >
          Select Class
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="className"
          value={className}
          onChange={(event) => setClassName(event.target.value)}
        >
          <option>COMPS A</option>
          <option>COMPS B</option>
          <option>AIDS</option>
          <option>ECS</option>
          <option>MECHANICAL</option>
          <option>OTHER</option>
        </select>
      </div>
      <div className="w-72 py-5">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phoneNumber"
        >
          Phone no.
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <button className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left">
        Submit
      </button>
    </div>
  )
}

export default UserLogin
