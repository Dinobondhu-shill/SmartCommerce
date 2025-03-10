"use client"

import { useState } from "react"
import { FaWallet, FaPlus, FaMinus } from "react-icons/fa"
import { BackToOptionsButton } from "./BackToOptions"

const CustomerWallet = () => {
  const [balance, setBalance] = useState(5000) // Example balance in cents
  const [showAddFunds, setShowAddFunds] = useState(false)
  const [showWithdraw, setShowWithdraw] = useState(false)
  const [amount, setAmount] = useState("")
  const [transactions, setTransactions] = useState([
    { id: 1, type: "credit", amount: 2000, description: "Added funds", date: "2023-06-15" },
    { id: 2, type: "debit", amount: 1500, description: "Purchase from Vendor A", date: "2023-06-14" },
    { id: 3, type: "credit", amount: 500, description: "Refund from Vendor B", date: "2023-06-13" },
    { id: 4, type: "debit", amount: 3000, description: "Purchase from Vendor C", date: "2023-06-12" },
  ])

  const handleAddFunds = (e) => {
    e.preventDefault()
    if (amount && !isNaN(amount)) {
      const newAmount = Number.parseInt(amount * 100) // Convert to cents
      setBalance(balance + newAmount)
      setTransactions([
        {
          id: Date.now(),
          type: "credit",
          amount: newAmount,
          description: "Added funds",
          date: new Date().toISOString().split("T")[0],
        },
        ...transactions,
      ])
      setAmount("")
      setShowAddFunds(false)
    }
  }

  const handleWithdraw = (e) => {
    e.preventDefault()
    if (amount && !isNaN(amount)) {
      const withdrawAmount = Number.parseInt(amount * 100) // Convert to cents
      if (withdrawAmount <= balance) {
        setBalance(balance - withdrawAmount)
        setTransactions([
          {
            id: Date.now(),
            type: "debit",
            amount: withdrawAmount,
            description: "Withdrawn funds",
            date: new Date().toISOString().split("T")[0],
          },
          ...transactions,
        ])
        setAmount("")
        setShowWithdraw(false)
      } else {
        alert("Insufficient balance")
      }
    }
  }

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <BackToOptionsButton />
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Wallet Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-8 sm:p-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaWallet className="text-white text-3xl mr-4" />
                <div>
                  <h1 className="text-2xl font-bold text-white">My Wallet</h1>
                  <p className="text-purple-200">Manage your funds</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-purple-200">Available Balance</p>
                <p className="text-3xl font-bold text-white">${(balance / 100).toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowAddFunds(!showAddFunds)}
                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <FaPlus className="mr-2" /> Add Funds
              </button>
              <button
                onClick={() => setShowWithdraw(!showWithdraw)}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <FaMinus className="mr-2" /> Withdraw
              </button>
            </div>
          </div>

          {/* Add Funds Form */}
          {showAddFunds && (
            <div className="px-6 py-4 border-b border-gray-200">
              <form onSubmit={handleAddFunds} className="flex items-center space-x-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  min="0"
                  step="0.01"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add
                </button>
              </form>
            </div>
          )}

          {/* Withdraw Form */}
          {showWithdraw && (
            <div className="px-6 py-4 border-b border-gray-200">
              <form onSubmit={handleWithdraw} className="flex items-center space-x-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  min="0"
                  step="0.01"
                  max={balance / 100}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Withdraw
                </button>
              </form>
            </div>
          )}

          {/* Transaction History */}
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Transaction History</h2>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full mr-4 ${transaction.type === "credit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                    >
                      {transaction.type === "credit" ? <FaPlus /> : <FaMinus />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className={`font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                    {transaction.type === "credit" ? "+" : "-"} ${(transaction.amount / 100).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerWallet

