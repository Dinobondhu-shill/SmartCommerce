import { useAuth } from "@/hooks/useAuth"
import Loader from "@/Loader/Loader"
import { useState } from "react"



export default function Header() {
  const {user, isLoading, refetch} = useAuth()
    const [profile, setProfile] = useState({
      fullName: "Choncol Biswas",
      email: "ch**********@gmail.com",
      mobile: "+880 173*****79",
      birthday: "",
      gender: "male",
      receiveEmails: false,
      receiveSMS: false,
      profileImage: "https://i.ibb.co.com/yyDgqrV/imgg.jpg",
    })

    if(isLoading){
      return <Loader />
    }

  return (
    <header className="bg-white border-r sticky top-14 z-40 bg-gradient-to-r from-purple-500 to-purple-300">
      {/* Profile Header Section */}
      <div>
          <div className="relative">
            {/* Cover Photo */}
            <div className=" w-full bg-gradient-to-r from-purple-500 to-purple-300">
            <img src="https://i.ibb.co.com/VWm95BC9/Whats-App-Image-2025-03-11-at-23-42-49-2ccb2b26-1.jpg" className="h-32 object-cover w-full" alt="" />
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
      </div>
      <div className="mt-20 text-center mb-6 pb-6">
        <h2 className="text-2xl  pb-6 font-semibold text-gray-800">{user? user.name : "Unknown"}</h2>
        <hr />
      </div>  
  <p className="text-gray-600">{user? user.email : "Email is not Provided"}</p>
          

    </header>
  )
}
