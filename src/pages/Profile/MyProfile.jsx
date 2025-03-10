"use client"

import { useState } from "react"
import { BackToOptionsButton } from "./BackToOptions"
import { EditProfileModal } from "./EditProfile"
import { PasswordModal } from "./PasswordModal"
import { useIsMobile } from "@/hooks/use-mobile"

const MyProfile = () => {
  const isMobile = useIsMobile()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [profile, setProfile] = useState({
    fullName: "Choncol Biswas",
    email: "ch**********@gmail.com",
    mobile: "+880 173*****79",
    birthday: "",
    gender: "male",
    receiveEmails: false,
    receiveSMS: false,
    profileImage: "https://via.placeholder.com/200",
  })

  const handleEdit = () => {
    setIsEditModalOpen(true)
  }

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile)
  }

  const handlePasswordChange = () => {
    setIsPasswordModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 md:py-8 md:px-4">
      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />

      {/* Password Change Modal */}
      <PasswordModal isOpen={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)} />

      {isMobile ? (
        // Mobile View - Enhanced Design
        <div className="flex flex-col h-full">
          {/* Header with Back Button */}
          <div className="bg-white px-4 py-3 flex items-center sticky top-0 z-10 shadow-sm">
            <BackToOptionsButton />
            <h1 className="text-lg font-semibold text-center flex-1 mr-8">Profile</h1>
          </div>

          {/* Profile Header Section */}
          <div className="relative">
            {/* Cover Photo */}
            <div className="h-32 bg-gradient-to-r from-purple-500 to-purple-300 relative">
              <div className="absolute bottom-0 right-4 p-2 bg-white rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
                  <img
                    src={profile.profileImage || "/placeholder.svg"}
                    alt={profile.fullName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Name Section */}
          <div className="mt-20 text-center px-4">
            <h2 className="text-2xl font-bold">{profile.fullName}</h2>
            <p className="text-gray-500 text-sm mt-1 capitalize">{profile.gender}</p>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleEdit}
              className="rounded-full border border-purple-200 text-purple-700 px-4 py-2 flex items-center gap-2 bg-white hover:bg-purple-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
              Edit
            </button>
            <button
              onClick={handlePasswordChange}
              className="rounded-full border border-purple-200 text-purple-700 px-4 py-2 flex items-center gap-2 bg-white hover:bg-purple-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Password
            </button>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* Profile Details */}
          <div className="px-4 space-y-6 pb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>

              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Mobile</p>
                  <p className="font-medium">{profile.mobile}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>

              <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Birthday</p>
                  <p className="font-medium">{profile.birthday || "Not specified"}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Gender</p>
                  <p className="font-medium capitalize">{profile.gender}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Marketing Preferences</h3>

              <div className="bg-white rounded-lg shadow-sm p-4 space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.receiveEmails}
                    readOnly
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700">Receive marketing emails</span>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={profile.receiveSMS}
                    readOnly
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700">Receive marketing SMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop View - Keep Original Layout
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow rounded-lg">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center">
              <BackToOptionsButton />
              <h1 className="text-xl font-semibold text-gray-800 ml-4">My Profile</h1>
            </div>

            {/* Profile Form */}
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="h-20 w-20 rounded-full bg-purple-100 overflow-hidden mr-4 border-2 border-purple-200">
                  <img
                    src={profile.profileImage || "/placeholder.svg"}
                    alt={profile.fullName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{profile.fullName}</h2>
                  <p className="text-gray-500 capitalize">{profile.gender}</p>
                </div>
              </div>

              <div className="grid gap-6">
                {/* Full Name */}
                <div className="grid grid-cols-3 items-center">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <div className="col-span-2">
                    <div className="text-gray-900">{profile.fullName}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="grid grid-cols-3 items-center">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="col-span-2 flex items-center">
                    <div className="text-gray-900 mr-2">{profile.email}</div>
                    <button className="text-purple-600 text-sm hover:text-purple-700">Change</button>
                  </div>
                </div>

                {/* Mobile */}
                <div className="grid grid-cols-3 items-center">
                  <label className="text-sm font-medium text-gray-700">Mobile</label>
                  <div className="col-span-2 flex items-center">
                    <div className="text-gray-900 mr-2">{profile.mobile}</div>
                    <button className="text-purple-600 text-sm hover:text-purple-700">Change</button>
                  </div>
                </div>

                {/* Marketing Preferences */}
                <div className="grid grid-cols-3 items-start">
                  <label className="text-sm font-medium text-gray-700">Marketing Preferences</label>
                  <div className="col-span-2 space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={profile.receiveEmails}
                        readOnly
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">Receive marketing emails</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={profile.receiveSMS}
                        readOnly
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">Receive marketing SMS</span>
                    </div>
                  </div>
                </div>

                {/* Birthday */}
                <div className="grid grid-cols-3 items-center">
                  <label className="text-sm font-medium text-gray-700">Birthday</label>
                  <div className="col-span-2">
                    <div className="text-gray-500 italic">{profile.birthday || "Please enter your birthday"}</div>
                  </div>
                </div>

                {/* Gender */}
                <div className="grid grid-cols-3 items-center">
                  <label className="text-sm font-medium text-gray-700">Gender</label>
                  <div className="col-span-2">
                    <div className="text-gray-900 capitalize">{profile.gender}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={handleEdit}
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  EDIT PROFILE
                </button>
                <button
                  onClick={handlePasswordChange}
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  CHANGE PASSWORD
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyProfile

