"use client"

import { useState } from "react"

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    fullName: "Choncol Biswas",
    email: "ch**********@gmail.com",
    mobile: "+880 173*****79",
    birthday: "",
    gender: "male",
    receiveEmails: false,
    receiveSMS: false,
  })

  const [tempProfile, setTempProfile] = useState({ ...profile })

  const handleEdit = () => {
    setIsEditing(true)
    setTempProfile({ ...profile })
  }

  const handleSave = () => {
    setProfile({ ...tempProfile })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempProfile({ ...profile })
    setIsEditing(false)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setTempProfile((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-800">My Profile</h1>
          </div>

          {/* Profile Form */}
          <div className="p-6">
            <div className="grid gap-6">
              {/* Full Name */}
              <div className="grid grid-cols-3 items-center">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <div className="col-span-2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={tempProfile.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  ) : (
                    <div className="text-gray-900">{profile.fullName}</div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="grid grid-cols-3 items-center">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <div className="col-span-2 flex items-center">
                  <div className="text-gray-900 mr-2">{profile.email}</div>
                  <button className="text-teal-600 text-sm hover:text-teal-700">Change</button>
                </div>
              </div>

              {/* Mobile */}
              <div className="grid grid-cols-3 items-center">
                <label className="text-sm font-medium text-gray-700">Mobile</label>
                <div className="col-span-2 flex items-center">
                  <div className="text-gray-900 mr-2">{profile.mobile}</div>
                  <button className="text-teal-600 text-sm hover:text-teal-700">Change</button>
                </div>
              </div>

              {/* Marketing Preferences */}
              <div className="grid grid-cols-3 items-start">
                <label className="text-sm font-medium text-gray-700">Marketing Preferences</label>
                <div className="col-span-2 space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="receiveEmails"
                      checked={isEditing ? tempProfile.receiveEmails : profile.receiveEmails}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">Receive marketing emails</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="receiveSMS"
                      checked={isEditing ? tempProfile.receiveSMS : profile.receiveSMS}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">Receive marketing SMS</span>
                  </label>
                </div>
              </div>

              {/* Birthday */}
              <div className="grid grid-cols-3 items-center">
                <label className="text-sm font-medium text-gray-700">Birthday</label>
                <div className="col-span-2">
                  {isEditing ? (
                    <input
                      type="date"
                      name="birthday"
                      value={tempProfile.birthday}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  ) : (
                    <div className="text-gray-500 italic">{profile.birthday || "Please enter your birthday"}</div>
                  )}
                </div>
              </div>

              {/* Gender */}
              <div className="grid grid-cols-3 items-center">
                <label className="text-sm font-medium text-gray-700">Gender</label>
                <div className="col-span-2">
                  {isEditing ? (
                    <select
                      name="gender"
                      value={tempProfile.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  ) : (
                    <div className="text-gray-900 capitalize">{profile.gender}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              {isEditing ? (
                <div className="flex space-x-3">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={handleEdit}
                    className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    EDIT PROFILE
                  </button>
                  <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                    CHANGE PASSWORD
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile

