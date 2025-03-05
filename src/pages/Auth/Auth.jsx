

import { useState } from "react"
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa"

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    remember: false,
  })
  const [errors, setErrors] = useState({})
  const [showVendorForm, setShowVendorForm] = useState(false)
  const [vendorData, setVendorData] = useState({
    shopName: "",
    businessEmail: "",
    phoneNumber: "",
    address: "",
    businessType: "",
    taxId: "",
  })
  const [vendorErrors, setVendorErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleVendorInputChange = (e) => {
    const { name, value } = e.target
    setVendorData({
      ...vendorData,
      [name]: value,
    })

    // Clear error when user types
    if (vendorErrors[name]) {
      setVendorErrors({
        ...vendorErrors,
        [name]: "",
      })
    }
  }

  const validateLoginForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateRegisterForm = () => {
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = "Name is required"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateVendorForm = () => {
    const newErrors = {}

    if (!vendorData.shopName) {
      newErrors.shopName = "Business name is required"
    }

    if (!vendorData.businessEmail) {
      newErrors.businessEmail = "Business email is required"
    } else if (!/\S+@\S+\.\S+/.test(vendorData.businessEmail)) {
      newErrors.businessEmail = "Email is invalid"
    }

    if (!vendorData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required"
    }

    if (!vendorData.address) {
      newErrors.address = "Address is required"
    }

    if (!vendorData.businessType) {
      newErrors.businessType = "Business type is required"
    }

    if (!vendorData.taxId) {
      newErrors.taxId = "Tax ID is required"
    }

    setVendorErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (validateLoginForm()) {
      // Handle login logic here
      console.log("Login form submitted:", formData)
      alert("Login successful!")
    }
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    if (validateRegisterForm()) {
      // Handle registration logic here
      console.log("Registration form submitted:", formData)
      alert("Registration successful!")
    }
  }

  const handleVendorSubmit = (e) => {
    e.preventDefault()
    if (validateVendorForm()) {
      // Handle vendor registration logic here
      console.log("Vendor registration submitted:", vendorData)
      alert("Vendor registration successful!")
      setShowVendorForm(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left side - Colorful background with text */}
        <div className="w-full md:w-5/12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 animate-gradient-xy">
            <div className="absolute inset-0 opacity-70">
              {/* Wavy lines effect */}
              <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>
          </div>

          <div className="relative h-full p-8 flex flex-col justify-between text-white z-10">
            <div>
              <p className="text-md tracking-wider capitalize font-semibold">Quality products, exceptional service—because you deserve the best.</p>
            </div>
            <div>  
                <h1 className="text-5xl font-bold mb-6">Get Everything You Want.</h1>
            </div>
            
              <p className="text-lg opacity-90 mb-24">
                You can get everything you want if you work hard, trust the process, and stick to the plan.
              </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-7/12 bg-white p-8">
          {!showVendorForm ? (
            <>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-3xl font-bold">Welcome Back</h2>
                <div className="text-sm text-gray-500">Whatever</div>
              </div>

              <p className="text-gray-600 mb-4">Enter your email and password to access your account</p>

              {/* Tabs */}
              <div className="flex border-b mb-4">
                <button
                  className={`pb-2 px-4 text-sm font-medium ${
                    activeTab === "login" ? "text-black border-b-2 border-black" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  className={`pb-2 px-4 text-sm font-medium ${
                    activeTab === "register" ? "text-black border-b-2 border-black" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </button>
              </div>

              {/* Login Form */}
              {activeTab === "login" && (
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg bg-gray-50 border ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg bg-gray-50 border ${
                          errors.password ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-gray-600 hover:text-purple-500">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
                  >
                    Sign In
                  </button>

                  <div className="mt-6 text-center">
                    <div className="relative flex items-center justify-center">
                      <div className="border-t border-gray-200 w-full"></div>
                      <div className="bg-white px-4 text-sm text-gray-500">or</div>
                      <div className="border-t border-gray-200 w-full"></div>
                    </div>

                    <button
                      type="button"
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300"
                    >
                      <FaGoogle className="text-red-500" />
                      Sign In with Google
                    </button>
                  </div>
                </form>
              )}

              {/* Register Form */}
              {activeTab === "register" && (
                <form onSubmit={handleRegisterSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg bg-gray-50 border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="register-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg bg-gray-50 border ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="register-password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg bg-gray-50 border ${
                          errors.password ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm-password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg bg-gray-50 border ${
                          errors.confirmPassword ? "border-red-500" : "border-gray-200"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
                  >
                    Create Account
                  </button>

                  <div className="mt-6 text-center">
                    <div className="relative flex items-center justify-center">
                      <div className="border-t border-gray-200 w-full"></div>
                      <div className="bg-white px-4 text-sm text-gray-500">or</div>
                      <div className="border-t border-gray-200 w-full"></div>
                    </div>

                    <button
                      type="button"
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300"
                    >
                      <FaGoogle className="text-red-500" />
                      Sign Up with Google
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8 text-center">
                {activeTab === "login" ? (
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <button
                      className="text-purple-600 font-medium hover:underline"
                      onClick={() => setActiveTab("register")}
                    >
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <button
                      className="text-purple-600 font-medium hover:underline"
                      onClick={() => setActiveTab("login")}
                    >
                      Sign In
                    </button>
                  </p>
                )}
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Are you a vendor?{" "}
                  <button
                    className="text-purple-600 font-medium hover:underline"
                    onClick={() => setShowVendorForm(true)}
                  >
                    Register as Vendor
                  </button>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Vendor Registration</h2>
                <button className="text-sm text-gray-500 hover:text-black" onClick={() => setShowVendorForm(false)}>
                  Back to Login
                </button>
              </div>

              <p className="text-gray-600 mb-4">Complete the form below to register as a vendor</p>

              <form onSubmit={handleVendorSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="shopName"
                      name="shopName"
                      value={vendorData.shopName}
                      onChange={handleVendorInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                        vendorErrors.shopName ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter business name"
                    />
                    {vendorErrors.shopName && (
                      <p className="mt-1 text-sm text-red-500">{vendorErrors.shopName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={vendorData.businessEmail}
                      onChange={handleVendorInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                        vendorErrors.businessEmail ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter business email"
                    />
                    {vendorErrors.businessEmail && (
                      <p className="mt-1 text-sm text-red-500">{vendorErrors.businessEmail}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={vendorData.phoneNumber}
                      onChange={handleVendorInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                        vendorErrors.phoneNumber ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter phone number"
                    />
                    {vendorErrors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-500">{vendorErrors.phoneNumber}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={vendorData.businessType}
                      onChange={handleVendorInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                        vendorErrors.businessType ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    >
                      <option value="">Select business type</option>
                      <option value="retail">Retail</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="service">Service Provider</option>
                      <option value="other">Other</option>
                    </select>
                    {vendorErrors.businessType && (
                      <p className="mt-1 text-sm text-red-500">{vendorErrors.businessType}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 mb-2">
                      Tax ID / Business Registration Number
                    </label>
                    <input
                      type="text"
                      id="taxId"
                      name="taxId"
                      value={vendorData.taxId}
                      onChange={handleVendorInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                        vendorErrors.taxId ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter tax ID"
                    />
                    {vendorErrors.taxId && <p className="mt-1 text-sm text-red-500">{vendorErrors.taxId}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={vendorData.address}
                      onChange={handleVendorInputChange}
                      rows="3"
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                        vendorErrors.address ? "border-red-500" : "border-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter business address"
                    ></textarea>
                    {vendorErrors.address && <p className="mt-1 text-sm text-red-500">{vendorErrors.address}</p>}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
                  >
                    Register as Vendor
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage

