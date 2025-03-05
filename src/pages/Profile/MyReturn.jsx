"use client"

import { useState } from "react"
import { FaBox, FaSearch, FaChevronDown, FaChevronUp, FaTruck, FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const MyReturn = () => {
  const [returns, setReturns] = useState([
    {
      id: 1,
      orderNumber: "ORD-001",
      product: "Wireless Headphones",
      reason: "Defective",
      status: "Approved",
      date: "2023-06-10",
    },
    {
      id: 2,
      orderNumber: "ORD-002",
      product: "Smart Watch",
      reason: "Wrong Item",
      status: "In Transit",
      date: "2023-06-08",
    },
    {
      id: 3,
      orderNumber: "ORD-003",
      product: "Laptop Stand",
      reason: "Not as Described",
      status: "Pending",
      date: "2023-06-05",
    },
    {
      id: 4,
      orderNumber: "ORD-004",
      product: "Bluetooth Speaker",
      reason: "Changed Mind",
      status: "Rejected",
      date: "2023-06-01",
    },
  ])

  const [expandedReturn, setExpandedReturn] = useState(null)

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <FaCheckCircle className="text-green-500" />
      case "In Transit":
        return <FaTruck className="text-blue-500" />
      case "Pending":
        return <FaChevronDown className="text-yellow-500" />
      case "Rejected":
        return <FaTimesCircle className="text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaBox className="text-white text-3xl mr-4" />
              <h1 className="text-2xl font-bold text-white">My Returns</h1>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search returns..."
                className="pl-10 pr-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-200" />
            </div>
          </div>

          {/* Returns List */}
          <div className="divide-y divide-gray-200">
            {returns.map((returnItem) => (
              <div key={returnItem.id} className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedReturn(expandedReturn === returnItem.id ? null : returnItem.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{getStatusIcon(returnItem.status)}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{returnItem.product}</p>
                      <p className="text-sm text-gray-500">Order: {returnItem.orderNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        returnItem.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : returnItem.status === "In Transit"
                            ? "bg-blue-100 text-blue-800"
                            : returnItem.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {returnItem.status}
                    </span>
                    {expandedReturn === returnItem.id ? (
                      <FaChevronUp className="ml-2 text-gray-500" />
                    ) : (
                      <FaChevronDown className="ml-2 text-gray-500" />
                    )}
                  </div>
                </div>
                {expandedReturn === returnItem.id && (
                  <div className="mt-4 pl-10">
                    <p className="text-sm text-gray-600">
                      <strong>Reason:</strong> {returnItem.reason}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Date Requested:</strong> {returnItem.date}
                    </p>
                    <div className="mt-2">
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">View Details</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyReturn

