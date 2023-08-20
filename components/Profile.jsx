import React from 'react'
import Image from 'next/image'

const Profile = ({ userDisplayName, paramsUserName, userProfilePic, userEmail }) => {
  const user = [
    {
      userimg: '/assets/team/alvin.jpg',
      username: 'Alvin Dsouza',
      userclass: 'SE Comps A',
      useremail: 'alvindsouza2204@gmail.com',
      userranking: 4,
    },
  ]
  const events = [
    {
      eventname: 'Web Dev Workshop',
      eventpreview: '/assets/team/alvin.jpg',
      eventstatus: 'Attended',
      eventpoints: '50',
    },
    {
      eventname: 'C Programming Workshop',
      eventpreview: '/assets/team/alvin.jpg',
      eventstatus: 'Not Attended',
      eventpoints: '25',
    },
  ]

  const totalEventPoints = events.reduce(
    (sum, event) => sum + parseInt(event.eventpoints),
    0
  )

  return (
    <div>
      <div class="w-full mx-auto bg-white rounded-lg">
        {user.map((values, index) => (
          <div key={index} class="flex flex-col items-center pb-10">
            <Image
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={userProfilePic}
              alt="User image"
              width={60}
              height={60}
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {userDisplayName}
            </h5>
            <span class="text-sm text-[#F44336] dark:text-gray-400 uppercase ">
              {values.userclass}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {userEmail}
            </span>
          </div>
        ))}
      </div>
      <div className='w-[75%] mx-auto'>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="relative overflow-hidden x-shadow-yellow feature-card p-5 h-[150px] max-w-[18rem]">
          <h5 class="font-inter font-bold mb-2 text-3xl tracking-tight text-[#FFCA28] dark:text-white">
            YOUR POINTS
          </h5>

          <p className="font-inter text-3xl text-black dark:text-gray-400">
            <strong className="font-bold">{totalEventPoints}</strong> Points
          </p>
          <div>
            <Image
              src="/assets/MyProfile/image_2023-08-01_153529169-removebg-preview 1.png"
              alt="Profile Image"
              className='absolute bottom-1 right-1'
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className="relative overflow-hidden x-shadow-red feature-card p-5 h-[150px] max-w-[18rem]">
          <h5 class="font-inter font-bold mb-2 text-3xl tracking-tight text-[#F44336] dark:text-white">
            LEADER BOARD
          </h5>
          {user.map((values, index) => (
            <div
              key={index}
              class="font-inter text-3xl text-black dark:text-gray-400"
            >
              <p>Rank: {values.userranking}</p>
              <p>{userDisplayName}</p>
            </div>
          ))}
          
            <Image
              src="/assets/MyProfile/Maskgroup.png"
              alt="Leader Board Image"
              className='absolute bottom-1 right-1'
              width={75}
              height={75}
            />
        </div>
      </div>
      </div>

      <div className="my-8 mx-5">
        <h1 className="text-lg font-semibold ">Event Status</h1>
        <div className="mt-4 x-shadow-blue">
          <div class="relative overflow-x-auto ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-black rounded-xl">
              <thead class="text-xl text-[#FFCA28] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 border-b dark:border-gray-700 text-lg border-r border-black"
                  >
                    Event name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border-b dark:border-gray-700 text-lg flex justify-center items-center border-r border-black"
                  >
                    Preview
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border-b text-center border-r text-lg border-black"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 border-b text-center text-lg border-black"
                  >
                    Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((values, index) => (
                  <tr
                    key={index}
                    class="bg-white border-b border-black dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium border-black text-[#4285F4] whitespace-nowrap dark:text-white text-lg border-r  "
                    >
                      {values.eventname}
                    </th>
                    <td class="px-6 py-4 border-b border-black dark:border-gray-700 text-lg flex justify-center items-center border-r">
                      <Image
                        src={values.eventpreview}
                        alt=""
                        height={40}
                        width={40}
                        layout="fixed"
                      />
                    </td>
                    <td
                      className={`px-6 py-4 border-r text-center text-lg border-b border-black dark:border-gray-700 ${
                        values.eventstatus === 'Attended'
                          ? 'text-[#35A853]'
                          : 'text-[#F44336]'
                      } dark:text-white`}
                    >
                      {values.eventstatus}
                    </td>
                    <td class="px-6 py-4 border-b text-center border-black dark:border-gray-700 text-[#35A853] text-lg">
                      {values.eventpoints}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
