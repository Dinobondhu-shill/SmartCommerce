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
  } from "react-icons/fa"
import { Link } from "react-router-dom"
  
  const ProfileSidebar = () => {
    const menuSections = [
      {
        title: "Manage My Account",
        items: [
          { name: "My Profile", icon: <FaUser className="w-4 h-4" />, link: "/profile" },
          { name: "Address Book", icon: <FaAddressBook className="w-4 h-4" />, link: "/address" },
          { name: "My Payment Options", icon: <FaCreditCard className="w-4 h-4" />, link: "/payment" },
          { name: "Daraz Wallet", icon: <FaWallet className="w-4 h-4" />, link: "/wallet" },
        ],
      },
      {
        title: "My Orders",
        items: [
          { name: "My Returns", icon: <FaUndo className="w-4 h-4" />, link: "/returns" },
          { name: "My Cancellations", icon: <FaBan className="w-4 h-4" />, link: "/cancellations" },
        ],
      },
    ]
  
    const singleItems = [
      { name: "My Reviews", icon: <FaStar className="w-4 h-4" />, link: "/reviews" },
      { name: "My Wishlist & Followed Stores", icon: <FaHeart className="w-4 h-4" />, link: "/wishlist" },
      { name: "Sell On Daraz", icon: <FaStore className="w-4 h-4" />, link: "/sell" },
    ]
  
    return (
      <div className="w-64 bg-gray-50 min-h-screen p-4">
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
                  <Link
                    to={item.link}
                    className="flex items-center text-sm text-gray-600 hover:text-blue-500 transition-colors duration-150"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
  
        {/* Single Items */}
        <div className="space-y-2">
          {singleItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.link}
                className="flex items-center text-sm text-gray-600 hover:text-blue-500 transition-colors duration-150"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default ProfileSidebar
  
  