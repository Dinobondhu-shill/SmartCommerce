import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-10 pb-6 px-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-between">
          {/* Company Logo and Contact */}
          <div className="space-y-4">
            <div className="mb-4">
              <img src="/placeholder.svg?height=60&width=160" alt="Whatever's Logo" className="h-10" />
            </div>
            <p className="text-sm">Got Question? Call us 9 AM- 10 PM</p>
            <p className="text-lg font-bold">09613-800800</p>
            <div className="space-y-2">
              <p className="text-sm">Follow Us</p>
              <div className="flex space-x-2">
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
                  <Facebook size={16} />
                </a>
                <a href="#" className="bg-sky-500 text-white p-2 rounded-full">
                  <Twitter size={16} />
                </a>
                <a href="#" className="bg-blue-800 text-white p-2 rounded-full">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded-full">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">See our reviews on</span>
              <img src="/placeholder.svg?height=20&width=80" alt="Trustpilot" className="h-5" />
            </div>
          </div>

          {/* COMPANY */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Othoba Certified
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Next/Same day delivery TC
                </a>
              </li>
            </ul>
          </div>

          {/* MY ACCOUNT */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase">My Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Addresses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  My Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Track My Order
                </a>
              </li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  How To Shop On Othoba
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Featured Recommendation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Cancellation, Return & Refund
                </a>
              </li>
            </ul>
          </div>

          {/* VENDOR - Added as requested */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase">Vendor</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Become a Vendor
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Vendor Login
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Vendor Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Seller Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Commission Structure
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Vendor Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-end mt-8 mr-4">
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  )
}

export default Footer

