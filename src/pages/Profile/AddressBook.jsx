"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { useState } from "react"
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa"
import { BackToOptionsButton } from "./BackToOptions"


const AddressBook = () => {
  const isMobile = useIsMobile()
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: "Choncol Biswas",
      addressType: "OFFICE",
      address: "Rangpur Polytechnic Institute, Tisla Hall",
      division: "Rangpur",
      city: "Rangpur",
      area: "Jummapara",
      postcode: "5400",
      phoneNumber: "1937392767",
      isDefault: true,
      additionalInfo: "",
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    fullName: "",
    addressType: "HOME",
    address: "",
    division: "",
    city: "",
    area: "",
    postcode: "",
    phoneNumber: "",
    isDefault: false,
    additionalInfo: "",
  })

  // Sample data for divisions and cities
  const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Rangpur", "Sylhet", "Barisal", "Mymensingh"]
  const cities = {
    Rangpur: ["Rangpur", "Dinajpur", "Kurigram", "Gaibandha", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
    Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail", "Narsingdi"],
    // Add more cities for other divisions
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleDivisionChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      division: e.target.value,
      city: "", // Reset city when division changes
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      setAddresses(addresses.map((addr) => (addr.id === editingId ? { ...formData, id: editingId } : addr)))
      setEditingId(null)
    } else {
      setAddresses([...addresses, { ...formData, id: Date.now() }])
    }
    setShowAddForm(false)
    setFormData({
      fullName: "",
      addressType: "HOME",
      address: "",
      division: "",
      city: "",
      area: "",
      postcode: "",
      phoneNumber: "",
      isDefault: false,
      additionalInfo: "",
    })
  }

  const handleEdit = (address) => {
    setFormData(address)
    setEditingId(address.id)
    setShowAddForm(true)
  }

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id))
  }

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      })),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Header */}
          <div className="px-4 py-4 sm:px-6 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <BackToOptionsButton />
            <h1 className="text-xl font-semibold text-gray-800 mb-4 sm:mb-0">Address Book</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Add New Address
            </button>
          </div>

          {/* Address List or Empty State */}
          <div className="p-4 sm:p-6">
            {addresses.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No addresses found</div>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  + Add your first address
                </button>
              </div>
            ) : isMobile ? (
              // Mobile Card View
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <FaUser className="text-gray-400 mr-2" />
                          <span className="font-medium">{address.fullName}</span>
                        </div>
                        <div className="flex items-center">
                          {address.isDefault && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center mr-2">
                              <FaCheck className="mr-1" /> Default
                            </span>
                          )}
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                            {address.addressType}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="text-gray-800">{address.address}</p>
                          <p className="text-gray-600 text-sm">
                            {address.area}, {address.city}, {address.division} - {address.postcode}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <FaPhone className="text-purple-500 mr-2 flex-shrink-0" />
                        <p className="text-gray-800">{address.phoneNumber}</p>
                      </div>
                    </div>

                    <div className="px-4 py-3 bg-gray-50 flex justify-between">
                      {!address.isDefault && (
                        <button
                          onClick={() => handleSetDefault(address.id)}
                          className="text-purple-600 flex items-center text-sm"
                        >
                          <FaCheck className="mr-1" /> Set Default
                        </button>
                      )}
                      {address.isDefault && <div className="w-24"></div>}

                      <div className="flex space-x-4">
                        <button onClick={() => handleEdit(address)} className="text-blue-600 flex items-center text-sm">
                          <FaEdit className="mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(address.id)}
                          className="text-red-600 flex items-center text-sm"
                        >
                          <FaTrash className="mr-1" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop Table View
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Full Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {addresses.map((address) => (
                      <tr key={address.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{address.fullName}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                              {address.addressType}
                            </span>
                            <span className="ml-2 text-sm text-gray-900">{address.address}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {`${address.division} - ${address.city} - ${address.area}`}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{address.phoneNumber}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleSetDefault(address.id)}
                              className={`${
                                address.isDefault
                                  ? "text-green-600 hover:text-green-700"
                                  : "text-gray-400 hover:text-gray-500"
                              }`}
                              title={address.isDefault ? "Default Address" : "Set as Default"}
                            >
                              <FaCheck />
                            </button>
                            <button onClick={() => handleEdit(address)} className="text-blue-600 hover:text-blue-700">
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(address.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Add/Edit Address Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingId ? "Edit Address" : "Add New Address"}
                </h2>
                <button
                  onClick={() => {
                    setShowAddForm(false)
                    setEditingId(null)
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  {/* Address Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address Type *</label>
                    <select
                      name="addressType"
                      required
                      value={formData.addressType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="HOME">Home</option>
                      <option value="OFFICE">Office</option>
                    </select>
                  </div>

                  {/* Division */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Division *</label>
                    <select
                      name="division"
                      required
                      value={formData.division}
                      onChange={handleDivisionChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select Division</option>
                      {divisions.map((division) => (
                        <option key={division} value={division}>
                          {division}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <select
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select City</option>
                      {formData.division &&
                        cities[formData.division]?.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Area */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area *</label>
                    <input
                      type="text"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  {/* Postcode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postcode *</label>
                    <input
                      type="text"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  {/* Detailed Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Address *</label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    ></textarea>
                  </div>

                  {/* Additional Information */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows="2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Landmark, delivery instructions, etc."
                    ></textarea>
                  </div>

                  {/* Default Address Checkbox */}
                  <div className="md:col-span-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="isDefault"
                        checked={formData.isDefault}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">Set as default shipping address</span>
                    </label>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row sm:justify-end my-3 gap-2 space-y-3 sm:space-y-1 sm:space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddForm(false)
                      setEditingId(null)
                      setFormData({
                        fullName: "",
                        addressType: "HOME",
                        address: "",
                        division: "",
                        city: "",
                        area: "",
                        postcode: "",
                        phoneNumber: "",
                        isDefault: false,
                        additionalInfo: "",
                      })
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 order-2 sm:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 order-1 sm:order-2"
                  >
                    {editingId ? "Save Changes" : "Add Address"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddressBook

