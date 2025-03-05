"use client"

import { useState } from "react"
import { FaBan, FaSearch, FaChevronDown, FaChevronUp, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa"

const MyCancellations = () => {
  const [cancellations, setCancellations] = useState([
    {
      id: 1,
      orderNumber: "ORD-005",
      product: "Gaming Mouse",
      reason: "Found Better Deal",
      status: "Approved",
      date: "2023-06-12",
    },
    {
      id: 2,
      orderNumber: "ORD-006",
      product: "Desk Chair",
      reason: "Delayed Shipping",
      status: "Pending",
      date: "2023-06-11",
    },
    {
      id: 3,
      orderNumber: "ORD-007",
      product: "Fitness Tracker",
      reason: "Changed Mind",
      status: "Rejected",
      date: "2023-06-09",
    },
    {
      id: 4,
      orderNumber: "ORD-008",
      product: "Coffee Maker",
      reason: "Accidental Order",
      status: "Approved",
      date: "2023-06-07",
    },
  ])

  const [expandedCancellation, setExpandedCancellation] = useState(null)

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <FaCheckCircle className="text-green-500" />
      case "Pending":
        return <FaClock className="text-yellow-500" />
      case "Rejected":
        return <FaTimesCircle className="text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-orange-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <FaBan className="text-white text-3xl mr-4" />
              <h1 className="text-2xl font-bold text-white">My Cancellations</h1>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search cancellations..."
                className="pl-10 pr-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-200" />
            </div>
          </div>

          {/* Cancellations List */}
          <div className="divide-y divide-gray-200">
            {cancellations.map((cancellation) => (
              <div key={cancellation.id} className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setExpandedCancellation(expandedCancellation === cancellation.id ? null : cancellation.id)
                  }
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{getStatusIcon(cancellation.status)}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{cancellation.product}</p>
                      <p className="text-sm text-gray-500">Order: {cancellation.orderNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        cancellation.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : cancellation.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {cancellation.status}
                    </span>
                    {expandedCancellation === cancellation.id ? (
                      <FaChevronUp className="ml-2 text-gray-500" />
                    ) : (
                      <FaChevronDown className="ml-2 text-gray-500" />
                    )}
                  </div>
                </div>
                {expandedCancellation === cancellation.id && (
                  <div className="mt-4 pl-10">
                    <p className="text-sm text-gray-600">
                      <strong>Reason:</strong> {cancellation.reason}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Date Requested:</strong> {cancellation.date}
                    </p>
                    <div className="mt-2">
                      <button className="text-sm text-red-600 hover:text-red-800">View Details</button>
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

export default MyCancellations

