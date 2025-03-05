import { FaHome, FaSearch, FaRedo } from "react-icons/fa"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
          <p className="text-2xl text-gray-600 mb-8">Something went wrong on our end.</p>

          <div className="relative mb-12">
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-red-100 rounded-full animate-pulse"></div>
            </div> */}
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVqeWtiMDV0ZWF6NW14eGRkaWFhbHlqdzVwbTBjMGNuMWszdXBqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qxkf4LQ1xIbXpH8z0I/giphy.gif"
              alt="Error Illustration"
              className="relative z-10 mx-auto max-h-28"
            />
          </div>

          <p className="text-gray-600 mb-8">
            Don't worry, it's not you - it's us. We're working on fixing the problem. In the meantime, you can try one
            of these options:
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to={'/'} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105">
              <FaHome className="mr-2" />
              Go Home
            </Link>
            <Link to={'/'} className="flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105">
              <FaSearch className="mr-2" />
              Search Products
            </Link>
            <button className="flex items-center px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105">
              <FaRedo className="mr-2" />
              Try Again
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-gray-600">
            If the problem persists, please contact our support team at{" "}
            <a href="mailto:support@whatever.com" className="text-purple-600 hover:underline">
              support@whatever.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

