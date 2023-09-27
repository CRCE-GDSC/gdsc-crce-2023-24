'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import getTopUsers from '@src/app/data/data'
import { db } from '@lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { auth } from '@lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

async function getImageFromAPI(apiUrl) {
  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const blob = await response.blob() // Convert the response to a Blob

    const imageURL = URL.createObjectURL(blob) // Create a URL for the Blob

    return imageURL // Return the URL of the image
  } catch (error) {
    console.error('Error fetching image:', error)
    return null
  }
}


const Profile = ({ userDoc }) => {
  const [user, loading, error] = useAuthState(auth)
  const [userData, setUserData] = useState(null)
  const [topUsers, setTopUsers] = useState([])

  useEffect(() => {
    async function fetchTopUsers() {
      const users = await getTopUsers()
      setTopUsers(users)
    }

    fetchTopUsers()
  }, [])

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setUserData(docSnap.data())
        } else {
        }
      }

      fetchUserData()
    }
  }, [user])

  const user2 = [
    {
      userimg: '',
      username: 'Alvin Dsouza',
      userclass: 'SE Comps A',
      useremail: 'alvindsouza2204@gmail.com',
      userranking: '',
      rank: 0,
    },
  ]

  const events = [
    {
      eventname: 'Future Forge',
      eventpreview: '/assets/MyProfile/futureforge.webp',
      eventstatus: 'Not Attended',
      eventTags: '50',
    },
    {
      eventname: 'C Programming Workshop',
      eventpreview: '/assets/MyProfile/codecrafters.webp',
      eventstatus: 'Not Attended',
      eventTags: '25',
    },
  ]

  const totalEventTags = events.reduce(
    (sum, event) => sum + parseInt(event.eventTags),
    0
  )

  const [qrImageURL, setQrImageURL] = useState(''); // State to store the QR image URL

  useEffect(() => {
    // Fetch the QR image URL once when the component mounts
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user.uid}`;

    getImageFromAPI(apiUrl).then((imageURL) => {
      if (imageURL) {
        setQrImageURL(imageURL);
      }
    });
  }, [user]);
  // const LeaderBoardCard = ({ username, userranking, totalEventTags, rank }) => {
  //   return (
  //     <div className="mt-6 grid gap-8 md:grid-cols-1">
  //       <div className="x-shadow-gray feature-card relative overflow-hidden p-5">
  //         <div className="flex items-start justify-between">
  //           <h5 className="font-inter text-3xl font-bold tracking-tight text-black dark:text-white">
  //             Name: {username}
  //           </h5>
  //           <h5 className="font-inter text-3xl font-bold tracking-tight text-black dark:text-white">
  //             Rank: {rank}
  //           </h5>
  //         </div>
  //         <p className="font-inter text-3xl text-black dark:text-gray-400">
  //           Tags: {totalEventTags}
  //         </p>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div>
      <div className="mx-auto w-full rounded-lg bg-white">
        {user2.map((values, index) => (
          <div key={index} className="flex flex-col items-center pb-10">
            <div id="img-cont" className="image-container my-2">
              <Image
                alt="ProfilePic"
                width={1000}
                height={1000}
                priority
                src={userDoc.data().userImage}
                className="img-1"
                id="img-1"
                onClick={() => {
                  const container = document.getElementById('img-cont')
                  const img_1 = document.getElementById('img-1')
                  const img_2 = document.getElementById('img-2')
                  img_1.style.transform = 'scale(0)'
                  img_2.style.transform = 'scale(1)'
                  img_2.style.opacity = '1'
                  img_1.style.opacity = '0'
                  container.style.borderRadius = '0'
                  img_2.style.borderRadius = '0'
                }}
              />
              <Image
                alt="QR"
                width={1000}
                height={1000}
                priority
                src={qrImageURL}
                className="img-2"
                id="img-2"
                
                onClick={() => {
                  const img_1 = document.getElementById('img-1')
                  const img_2 = document.getElementById('img-2')
                  img_2.style.transform = 'scale(0)'
                  img_1.style.transform = 'scale(1)'
                  img_1.style.opacity = '1'
                  img_2.style.opacity = '0'
                }}
              />
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {userDoc.data().userName}
            </h5>
            <span className="text-sm  text-[#F44336] dark:text-gray-400 ">
              {user.email}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {userDoc.data().userClass}
            </span>
          </div>
        ))}
      </div>

      <div className="mx-auto w-[75%]">
        <div className="mt-6 grid justify-center gap-8 md:grid-cols-2">
          <div className="x-shadow-yellow feature-card relative h-[150px] max-w-[18rem] overflow-hidden p-5">
            <h5 className="mb-2 font-inter text-3xl font-bold tracking-tight text-[#FFCA28] dark:text-white">
              YOUR TAGS
            </h5>

            <p className="font-inter text-3xl text-black dark:text-gray-400">
              <strong className="font-bold">{userDoc.data().tags}</strong>
            </p>
            <div>
              <Image
                src="/assets/MyProfile/image_2023-08-01_153529169-removebg-preview 1.png"
                alt="Profile Image"
                className="absolute bottom-1 right-1"
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className="x-shadow-red feature-card relative ml-auto h-[150px] max-w-[18rem] overflow-hidden p-5">
            <h5 className="mb-2 font-inter text-3xl font-bold tracking-tight text-[#F44336] dark:text-white">
              EVENTS ATTENDED
            </h5>
            {user2.map((values, index) => (
              <div
                key={index}
                className="font-inter text-3xl text-black dark:text-gray-400"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{values.userranking}</p>
                  </div>
                </div>
              </div>
            ))}

            <Image
              src="/assets/MyProfile/Maskgroup.png"
              alt="Leader Board Image"
              className="absolute bottom-1 right-1"
              width={75}
              height={75}
            />
          </div>
        </div>
      </div>

      <div className="mx-7 my-10">
        <h1 className="text-2xl font-semibold ">Event Status</h1>
        <div className="x-shadow-blue mt-4 p-2">
          <div className="relative overflow-x-auto rounded-xl">
            <table className="w-full overflow-hidden rounded-xl border-2 text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xl uppercase text-[#FFCA28] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="border-b border-r border-black px-4 py-3 dark:border-gray-700 md:px-6 md:text-lg"
                  >
                    Event name
                  </th>
                  <th
                    scope="col"
                    className="flex items-center justify-center border-b border-r border-black px-4 py-3 dark:border-gray-700 md:px-6 md:text-lg"
                  >
                    Preview
                  </th>
                  <th
                    scope="col"
                    className="border-b border-r border-black px-4 py-3 text-center text-lg md:px-6"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="border-b border-black px-4 py-3 text-center text-lg md:px-6"
                  >
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((values, index) => (
                  <tr
                    key={index}
                    className="border-b border-black bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td
                      scope="row"
                      className="whitespace-nowrap border-r border-black px-4 py-4 font-medium text-[#4285F4] dark:text-white md:px-6 md:text-lg"
                    >
                      {values.eventname}
                    </td>
                    <td className="border-r border-black px-4 py-4 text-lg dark:border-gray-700 md:flex md:items-center md:justify-center md:px-6">
                      <Image
                        src={values.eventpreview}
                        alt=""
                        height={40}
                        width={40}
                        layout="fixed"
                      />
                    </td>
                    <td
                      className={`border-b border-r border-black px-4 py-4 text-center text-lg dark:border-gray-700 md:px-6 ${
                        values.eventstatus === 'Attended'
                          ? 'text-[#35A853]'
                          : 'text-[#F44336]'
                      } dark:text-white`}
                    >
                      {values.eventstatus}
                    </td>
                    <td className="border-b border-black px-4 py-4 text-center text-lg text-[#35A853] dark:border-gray-700 md:px-6">
                      {values.eventTags}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* LeaderBoard */}
      <h1 className="mx-7 text-2xl font-semibold ">Leaderboard</h1>
      <br />
      <div className="mx-auto w-[75%]">
        {/* Top three cards */}
        {topUsers.slice(0, 10).map((user, index) => (
          <div key={index} className="mt-6 grid gap-8 md:grid-cols-1">
            <div
              className={`x-shadow-${
                [
                  'yellow',
                  'blue',
                  'red',
                  'gray',
                  'gray',
                  'gray',
                  'gray',
                  'gray',
                  'gray',
                  'gray',
                  'gray',
                  'gray',
                ][index]
              } feature-card relative overflow-hidden p-5 `}
            >
              <div className="flex items-start justify-between">
                <h5 className="font-inter text-3xl font-bold tracking-tight text-black dark:text-white">
                  Name: {user.userName}
                </h5>
                <h5 className="font-inter text-3xl font-bold tracking-tight text-black dark:text-white">
                  Rank: {index + 1}
                </h5>
              </div>
              <p className="font-inter text-3xl text-black dark:text-gray-400">
                Tags: {user.tags}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Profile
