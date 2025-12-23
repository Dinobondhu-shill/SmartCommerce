"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { LogOutIcon } from "lucide-react"
import { useState } from "react"
import {
  FaUser,
  FaCheckCircle,
  FaAddressBook,
  FaCreditCard,
  FaWallet,
  FaUndo,
  FaBan,
  FaStar,
  FaHeart,
  FaStore,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const ProfileSidebar = () => {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }))
  }

  const menuSections = [
    {
      title: "Manage My Account",
      items: [
        {
          name: "My Profile",
          icon: <FaUser className="w-4 h-4" />,
          link: "/profile",
        },
        {
          name: "Address Book",
          icon: <FaAddressBook className="w-4 h-4" />,
          link: "/profile/address-book",
        },
        {
          name: "My Payment Options",
          icon: <FaCreditCard className="w-4 h-4" />,
          link: "/profile/my-payment",
        },
        {
          name: "Whatever Wallet",
          icon: <FaWallet className="w-4 h-4" />,
          link: "/profile/wallet",
        },
      ],
    },
    {
      title: "My Orders",
      items: [
        {
          name: "My Returns",
          icon: <FaUndo className="w-4 h-4" />,
          link: "/profile/my-return",
        },
        {
          name: "My Cancellations",
          icon: <FaBan className="w-4 h-4" />,
          link: "/profile/my-cancellation",
        },
      ],
    },
  ]

  const singleItems = [
    {
      name: "My Reviews",
      icon: <FaStar className="w-4 h-4" />,
      link: "/reviews",
    },
    {
      name: "My Wallet",
      icon: <FaWallet className="w-4 h-4" />,
      link: "/profile/wallet",
    },
    {
      name: "Sell On Whatever",
      icon: <FaStore className="w-4 h-4" />,
      link: "/sell",
    },
  ]

  // Get all items for mobile bottom navigation (just take first 4 most important)
  const mobileNavItems = [
    menuSections[0].items[0], // My Profile
    menuSections[0].items[1], // Address Book
    singleItems[1], // My Wishlist
    { name: "Menu", icon: <FaBars className="w-4 h-4" />, action: () => setIsMenuOpen(true) },
  ]

  // Desktop sidebar
  if (!isMobile) {
    return (
      <div className="w-64 bg-gray-50 min-h-screen p-4 border-r border-gray-200">
        {/* User Header */}
        <div className="mb-6">
          <div className="text-gray-700 mb-1">Hello, Choncol Biswas</div>
          <div className="flex items-center text-sm text-green-600">
            <FaCheckCircle className="w-4 h-4 mr-1" />
            <span>Verified Account</span>
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `flex items-center text-sm py-2 px-3 rounded-md transition-colors duration-150 
                      ${
                        isActive
                          ? "bg-purple-50 text-purple-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                      }`
                    }
                  >
                    <span className="text-purple-600">{item.icon}</span>
                    <span className="ml-3">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            
          </div>
        ))}

        {/* Single Items */}
        <div className="space-y-2">
          {singleItems.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center text-sm py-2 px-3 rounded-md transition-colors duration-150 
                  ${
                    isActive
                      ? "bg-purple-50 text-purple-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                  }`
                }
              >
                <span className="text-purple-600">{item.icon}</span>
                <span className="ml-3">{item.name}</span>
              </NavLink>
            </div>
          ))}
          <div className="border-b flex items-center gap-3 border-gray-200 mt "> <LogOutIcon /> 
            <h5>Logout</h5>
            </div>
        </div>
      </div>
    )
  }

  // Mobile view
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 z-[999] left-0 right-0 bg-white border-purple-300 border-t rounded-tl-3xl rounded-tr-3xl">
        <div className="flex justify-around items-center h-14">
          {mobileNavItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-1/4">
              {item.action ? (
                <button
                  onClick={item.action}
                  className="flex flex-col items-center justify-center w-full h-full text-purple-600"
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.name}</span>
                </button>
              ) : (
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center w-full h-full
                    ${isActive ? "text-purple-700" : "text-gray-600"}`
                  }
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.name}</span>
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div>
              <div className="text-gray-700 font-medium">Choncol Biswas</div>
              <div className="flex items-center text-xs text-green-600">
                <FaCheckCircle className="w-3 h-3 mr-1" />
                <span>Verified Account</span>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
              <FaTimes className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Menu Content - Scrollable */}
          <div className="overflow-y-auto h-[calc(100%-64px)] pb-16">
            {/* Menu Sections */}
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full p-4 text-left"
                  onClick={() => toggleSection(sectionIndex)}
                >
                  <h3 className="text-sm font-medium text-gray-900">{section.title}</h3>
                  {expandedSections[sectionIndex] ? (
                    <FaChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>

                {(expandedSections[sectionIndex] || expandedSections[sectionIndex] === undefined) && (
                  <ul className="px-4 pb-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            `flex items-center py-3 text-sm transition-colors duration-150 
                            ${isActive ? "text-purple-700 font-medium" : "text-gray-600"}`
                          }
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-purple-600 mr-3">{item.icon}</span>
                          <span>{item.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Single Items */}
            <div className="p-4">
              {singleItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center py-3 text-sm transition-colors duration-150 
                    ${isActive ? "text-purple-700 font-medium" : "text-gray-600"}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-purple-600 mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileSidebar

