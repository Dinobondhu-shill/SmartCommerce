"use client"

import { useState } from "react"
import { FaPlus, FaEdit, FaTrash, FaCheck } from "react-icons/fa"

const AddressBook = () => {
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Address Book</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center"
            >
              <FaPlus className="mr-2" /> Add New Address
            </button>
          </div>

          {/* Address List or Empty State */}
          <div className="p-6">
            {addresses.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No addresses found</div>
                <button onClick={() => setShowAddForm(true)} className="text-teal-600 hover:text-teal-700 font-medium">
                  + Add your first address
                </button>
              </div>
            ) : (
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
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingId ? "Edit Address" : "Add New Address"}
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">Set as default shipping address</span>
                    </label>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-3">
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
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
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

