'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '@lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { setDoc } from 'firebase/firestore'
import { auth } from '@lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { useDocument } from 'react-firebase-hooks/firestore'

const Question = () => {
  const completed = 50

  const [user, loading, error] = useAuthState(auth)
  const [userDoc, userDocLoading, userDocError] = useDocument(
    doc(db, 'users', auth.currentUser.uid)
  )
  const [userData, setUserData] = useState(null)
  const [dataFetched, setDataFetched] = useState(false) // Add a state variable to track whether the data has been fetched
  const [showForm, setShowForm] = useState(false)
  const [showFull, setShowFull] = useState(true)
  const [isLoading, setIsLoading] = useState(true) // Add a loading state
  const router = useRouter()

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        setIsLoading(true) // Set loading state to true before fetching data
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const userData = docSnap.data()
          setUserData(userData)
          // Update showForm based on whether userData is complete
          setShowFull(
            !userData.userClass || !userData.collegeName || !userData.phoneNo
          )
        } else {
          console.log('No such document!')
        }
        setIsLoading(false) // Set loading state to false after fetching data
      }

      fetchUserData()
    }
  }, [user])

  const [formData, setFormData] = useState({
    selectedClass: '', // Dropdown value
    college: '', // College input value
    mobileNo: '', // Mobile No. input value
  })

  const [errorMessage, setErrorMessage] = useState('') // Add this line at the beginning of your component

  const handleButtonClick = () => {
    setShowForm((prevShowForm) => !prevShowForm) // Toggle the showForm state
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      if (
        formData.selectedClass === '' ||
        formData.college === '' ||
        formData.selectedClass === '---' ||
        formData.college === '---'
      ) {
        throw new Error('Please select a valid class and college.')
      }

      // Validate the mobile number length
      if (!/^\d{10}$/.test(formData.mobileNo)) {
        // Use a regex to validate the mobile number
        throw new Error('Please enter a 10-digit mobile number.')
      }

      // Save the form data to Firestore
      const docRef = doc(db, 'users', user.uid)
      await setDoc(
        docRef,
        {
          userClass: formData.selectedClass,
          collegeName: formData.college,
          phoneNo: formData.mobileNo,
          tags: 0,
        },
        { merge: true }
      )

      setShowForm(false)
      // Access the form data in formData object
      // Reset the form fields to their initial state
      setFormData({
        selectedClass: '', // Reset dropdown value
        college: '', // Reset college input
        mobileNo: '', // Reset mobile no. input
      })

      setErrorMessage('')
      setShowFull(false)
      // Clear the error message upon successful submission
      router.push('/')
    } catch (error) {
      setErrorMessage(error.message) // Set the error message state
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div>
      {!userDocLoading &&
      !userDocError &&
      (!userDoc.data().userClass || !userDoc.data().collegeName || !userDoc.data().phoneNo) ? (
        <div className="m-10">
          <h2 className="mb-2 text-lg font-semibold">Profile Status</h2>

          <div className="mx-auto h-6 w-4/5 rounded-full bg-gray-300">
            <div className="flex h-full w-1/2 items-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-right">
              <span className="ml-auto mr-2 inline-block p-1 font-bold text-white">{`${completed}%`}</span>
            </div>
          </div>

          <button
            className="mx-auto mb-2 mt-4 block rounded-full bg-blue-500 px-4 py-2 text-white"
            onClick={handleButtonClick}
          >
            {showForm ? 'Hide Form' : 'Complete Profile'}
          </button>

          {showForm && (
            <form onSubmit={handleFormSubmit}>
              <label>
                Class:
                <br />
                <select
                  type="text"
                  name="selectedClass"
                  value={formData.selectedClass}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                >
                  <option value="---">---</option>
                  <option value="FE COMPS A">FE COMPS A</option>
                  <option value="FE COMPS B">FE COMPS B</option>
                  <option value="FE AI/DS">FE AI/DS</option>
                  <option value="FE ECS">FE ECS</option>
                  <option value="FE MECH">FE MECH</option>
                  <option value="SE COMPS A">SE COMPS A</option>
                  <option value="SE COMPS B">SE COMPS B</option>
                  <option value="SE AI/DS">SE AI/DS</option>
                  <option value="SE ECS">SE ECS</option>
                  <option value="SE MECH">SE MECH</option>
                  <option value="TE COMPS A">TE COMPS A</option>
                  <option value="TE COMPS B">TE COMPS B</option>
                  <option value="TE AI/DS">TE AI/DS</option>
                  <option value="TE ECS">TE ECS</option>
                  <option value="TE MECH">TE MECH</option>
                  <option value="BE COMPS A">BE COMPS A</option>
                  <option value="BE COMPS B">BE COMPS B</option>
                  <option value="BE AI/DS">BE AI/DS</option>
                  <option value="BE ECS">BE ECS</option>
                  <option value="BE MECH">BE MECH</option>
                </select>
              </label>

              <br />
              <hr />
              <label className="profile_form_label">
                College:
                <br />
                <select
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                >
                  <option value="---">---</option>
                  <option value="Fr. CRCE">Fr. CRCE</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <br />
              <hr />
              <label className="profile_form_label">
                Mobile No:
                <br />
                <input
                  type="text"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </label>
              {errorMessage && <p className="text-red-700">{errorMessage}</p>}

              <button
                className="mx-auto block rounded-full bg-blue-500 px-4 py-2 text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Question
