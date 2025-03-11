"use client"

import { useState } from "react"
import {
  CreditCard,
  Plus,
  Trash2,
  CheckCircle,
  AlertCircle,
  Download,
  ChevronDown,
  ChevronUp,
  Edit,
  Star,
  Clock,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MyPaymentsPage() {
  const isMobile = useIsMobile()
  const [expandedTransaction, setExpandedTransaction] = useState(null)
  const [showAddCardForm, setShowAddCardForm] = useState(false)
  const [showAddBankForm, setShowAddBankForm] = useState(false)

  const toggleTransaction = (id) => {
    setExpandedTransaction(expandedTransaction === id ? null : id)
  }

  const paymentMethods = [
    {
      id: 1,
      type: "card",
      name: "Visa ending in 4242",
      details: "Expires 12/25",
      isDefault: true,
      icon: "/placeholder.svg?height=40&width=60",
    },
    {
      id: 2,
      type: "card",
      name: "Mastercard ending in 5678",
      details: "Expires 08/24",
      isDefault: false,
      icon: "/placeholder.svg?height=40&width=60",
    },
    {
      id: 3,
      type: "bank",
      name: "Chase Bank Account",
      details: "Account ending in 9012",
      isDefault: false,
      icon: "/placeholder.svg?height=40&width=60",
    },
  ]

  const transactions = [
    {
      id: 1,
      orderId: "ORD-12345",
      date: "May 15, 2023",
      amount: 129.99,
      status: "completed",
      paymentMethod: "Visa ending in 4242",
      items: [
        { name: "Wireless Headphones", price: 89.99, quantity: 1 },
        { name: "Phone Case", price: 19.99, quantity: 2 },
      ],
      vendor: "TechGadgets",
    },
    {
      id: 2,
      orderId: "ORD-12344",
      date: "May 10, 2023",
      amount: 79.5,
      status: "completed",
      paymentMethod: "Mastercard ending in 5678",
      items: [{ name: "Fitness Tracker", price: 79.5, quantity: 1 }],
      vendor: "SportsMaster",
    },
    {
      id: 3,
      orderId: "ORD-12343",
      date: "April 28, 2023",
      amount: 249.99,
      status: "completed",
      paymentMethod: "Chase Bank Account",
      items: [
        { name: "Smart Speaker", price: 149.99, quantity: 1 },
        { name: "Smart Bulb Set", price: 49.99, quantity: 2 },
      ],
      vendor: "HomeDecor",
    },
    {
      id: 4,
      orderId: "ORD-12342",
      date: "April 15, 2023",
      amount: 35.97,
      status: "refunded",
      paymentMethod: "Visa ending in 4242",
      items: [{ name: "T-Shirt", price: 35.97, quantity: 1 }],
      vendor: "FashionHub",
    },
    {
      id: 5,
      orderId: "ORD-12341",
      date: "April 5, 2023",
      amount: 120.0,
      status: "pending",
      paymentMethod: "Mastercard ending in 5678",
      items: [{ name: "Bluetooth Speaker", price: 120.0, quantity: 1 }],
      vendor: "TechGadgets",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Pending</Badge>
      case "refunded":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Refunded</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Failed</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          {isMobile && (
            <Button variant="ghost" size="icon" className="mr-2" asChild>
              <a href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </a>
            </Button>
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Payments</h1>
            <p className="text-gray-600 mt-1">Manage your payment methods and view transaction history</p>
          </div>
        </div>

        <Tabs defaultValue="payment-methods" className="space-y-8">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Payment Methods Tab */}
          <TabsContent value="payment-methods" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Payment Methods</CardTitle>
                <CardDescription>Manage the payment methods associated with your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-8 mr-4 flex-shrink-0">
                        <img
                          src={method.icon || "/placeholder.svg"}
                          alt={method.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium">{method.name}</h3>
                          {method.isDefault && (
                            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{method.details}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {!method.isDefault && (
                        <Button variant="outline" size="sm" className="text-xs">
                          Set Default
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="text-xs">
                        <Edit className="h-3.5 w-3.5 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 text-xs"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}

                {paymentMethods.length === 0 && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <CreditCard className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No payment methods yet</h3>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto">
                      Add a payment method to make checkout faster and easier.
                    </p>
                  </div>
                )}

                {/* Add Card Form */}
                {showAddCardForm && (
                  <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4">Add New Card</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <input
                          id="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <input
                            id="expiryDate"
                            type="text"
                            placeholder="MM/YY"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <input
                            id="cvv"
                            type="text"
                            placeholder="123"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <input
                          id="nameOnCard"
                          type="text"
                          placeholder="John Doe"
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          id="defaultCard"
                          type="checkbox"
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <Label htmlFor="defaultCard" className="ml-2">
                          Set as default payment method
                        </Label>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setShowAddCardForm(false)}>
                          Cancel
                        </Button>
                        <Button>Save Card</Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Add Bank Account Form */}
                {showAddBankForm && (
                  <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4">Add Bank Account</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="accountName">Account Holder Name</Label>
                        <input
                          id="accountName"
                          type="text"
                          placeholder="John Doe"
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="routingNumber">Routing Number</Label>
                        <input
                          id="routingNumber"
                          type="text"
                          placeholder="123456789"
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <input
                          id="accountNumber"
                          type="text"
                          placeholder="987654321"
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          id="defaultBank"
                          type="checkbox"
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <Label htmlFor="defaultBank" className="ml-2">
                          Set as default payment method
                        </Label>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setShowAddBankForm(false)}>
                          Cancel
                        </Button>
                        <Button>Save Bank Account</Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => {
                    setShowAddCardForm(true)
                    setShowAddBankForm(false)
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Credit/Debit Card
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    setShowAddBankForm(true)
                    setShowAddCardForm(false)
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Bank Account
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Wallets</CardTitle>
                <CardDescription>Connect your digital wallets for faster checkout</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">PayPal</h3>
                        <p className="text-sm text-gray-500">Connected as john.doe@example.com</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Disconnect
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.5 12.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-10.4 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5.2-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Apple Pay</h3>
                        <p className="text-sm text-gray-500">Not connected</p>
                      </div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Google Pay</h3>
                        <p className="text-sm text-gray-500">Not connected</p>
                      </div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View your recent payment transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div
                        className="p-4 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleTransaction(transaction.id)}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center">
                            {transaction.status === "completed" && (
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            )}
                            {transaction.status === "pending" && <Clock className="h-5 w-5 text-yellow-500 mr-2" />}
                            {transaction.status === "refunded" && (
                              <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                            )}
                            <span className="font-medium">{transaction.orderId}</span>
                          </div>
                          <div className="text-sm text-gray-500">{transaction.date}</div>
                          <div className="text-sm">{transaction.vendor}</div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end mt-2 sm:mt-0 gap-4">
                          <div className="font-medium">${transaction.amount.toFixed(2)}</div>
                          <div>{getStatusBadge(transaction.status)}</div>
                          <div>
                            {expandedTransaction === transaction.id ? (
                              <ChevronUp className="h-5 w-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </div>

                      {expandedTransaction === transaction.id && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Payment Method</h4>
                              <p>{transaction.paymentMethod}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Items</h4>
                              <ul className="mt-1 space-y-1">
                                {transaction.items.map((item, index) => (
                                  <li key={index} className="flex justify-between text-sm">
                                    <span>
                                      {item.name} × {item.quantity}
                                    </span>
                                    <span>${item.price.toFixed(2)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-gray-200">
                              <span className="font-medium">Total</span>
                              <span className="font-medium">${transaction.amount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm" className="text-xs">
                                <Download className="h-3.5 w-3.5 mr-1" />
                                Receipt
                              </Button>
                              <Button variant="outline" size="sm" className="text-xs">
                                View Order
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {transactions.length === 0 && (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No transactions yet</h3>
                      <p className="text-gray-500 mb-6 max-w-md mx-auto">
                        Your transaction history will appear here once you make a purchase.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subscriptions</CardTitle>
                <CardDescription>Manage your recurring payments and subscriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <Star className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Premium Membership</h3>
                        <p className="text-sm text-gray-500">$9.99/month • Next billing on June 15, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Product Box Subscription</h3>
                        <p className="text-sm text-gray-500">$24.99/month • Next billing on June 22, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Preferences</CardTitle>
                <CardDescription>Customize your payment settings and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Default Payment Method</h3>
                      <p className="text-sm text-gray-500">Choose which payment method to use by default</p>
                    </div>
                    <div className="w-40">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Visa ending in 4242</option>
                        <option>Mastercard ending in 5678</option>
                        <option>Chase Bank Account</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Save Payment Methods</h3>
                      <p className="text-sm text-gray-500">Automatically save new payment methods used at checkout</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="save-payment-methods" />
                      <Label htmlFor="save-payment-methods">Enabled</Label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">One-Click Checkout</h3>
                      <p className="text-sm text-gray-500">Enable faster checkout with your default payment method</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="one-click-checkout" />
                      <Label htmlFor="one-click-checkout">Enabled</Label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Currency Preference</h3>
                      <p className="text-sm text-gray-500">Choose your preferred currency for payments</p>
                    </div>
                    <div className="w-40">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                        <option>CAD ($)</option>
                        <option>AUD ($)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium mb-3">Payment Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Payment Confirmations</h4>
                        <p className="text-xs text-gray-500">Receive notifications when payments are processed</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="payment-confirmations" defaultChecked />
                        <Label htmlFor="payment-confirmations">Enabled</Label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Refund Alerts</h4>
                        <p className="text-xs text-gray-500">Receive notifications when refunds are processed</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="refund-alerts" defaultChecked />
                        <Label htmlFor="refund-alerts">Enabled</Label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Subscription Renewal Reminders</h4>
                        <p className="text-xs text-gray-500">Receive reminders before subscription renewals</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="subscription-reminders" defaultChecked />
                        <Label htmlFor="subscription-reminders">Enabled</Label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Payment Method Expiry Alerts</h4>
                        <p className="text-xs text-gray-500">
                          Receive alerts when your payment methods are about to expire
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="expiry-alerts" defaultChecked />
                        <Label htmlFor="expiry-alerts">Enabled</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save Preferences</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage security options for your payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication for Payments</h3>
                    <p className="text-sm text-gray-500">Require additional verification for high-value transactions</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="two-factor-auth" />
                    <Label htmlFor="two-factor-auth">Disabled</Label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Purchase Verification Threshold</h3>
                    <p className="text-sm text-gray-500">Set amount above which additional verification is required</p>
                  </div>
                  <div className="w-40">
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option>$100</option>
                      <option>$200</option>
                      <option>$500</option>
                      <option>$1000</option>
                      <option>Always verify</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Payment Activity Alerts</h3>
                    <p className="text-sm text-gray-500">Get notified of unusual payment activity</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="activity-alerts" defaultChecked />
                    <Label htmlFor="activity-alerts">Enabled</Label>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Button variant="outline" className="w-full">
                    View Payment Activity Log
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

