"use client"

import { useState } from "react"
import { CreditCard, CheckCircle, ChevronDown, ChevronUp, Shield, Lock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const PaymentMethodsPage = () => {
  const [expandedFaq, setExpandedFaq] = useState({})
  const [activeTab, setActiveTab] = useState("payment-options")

  const toggleFaq = (id) => {
    setExpandedFaq((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const paymentMethods = [
    {
      id: "credit-cards",
      title: "Credit & Debit Cards",
      description: "Pay securely with your credit or debit card.",
      icon: <CreditCard className="h-6 w-6 text-purple-600" />,
      brands: [
        { name: "Visa", image: "/placeholder.svg?height=40&width=60" },
        { name: "Mastercard", image: "/placeholder.svg?height=40&width=60" },
        { name: "American Express", image: "/placeholder.svg?height=40&width=60" },
        { name: "Discover", image: "/placeholder.svg?height=40&width=60" },
      ],
      details:
        "We accept all major credit and debit cards. Your card information is securely encrypted and never stored on our servers.",
    },
    {
      id: "digital-wallets",
      title: "Digital Wallets",
      description: "Quick and secure checkout with digital wallets.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      brands: [
        { name: "PayPal", image: "/placeholder.svg?height=40&width=60" },
        { name: "Apple Pay", image: "/placeholder.svg?height=40&width=60" },
        { name: "Google Pay", image: "/placeholder.svg?height=40&width=60" },
        { name: "Samsung Pay", image: "/placeholder.svg?height=40&width=60" },
      ],
      details:
        "Digital wallets offer a convenient and secure way to pay without entering your card details for each purchase. Simply select your preferred wallet at checkout.",
    },
    {
      id: "bank-transfers",
      title: "Bank Transfers",
      description: "Direct payment from your bank account.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
      brands: [
        { name: "ACH Transfer", image: "/placeholder.svg?height=40&width=60" },
        { name: "Wire Transfer", image: "/placeholder.svg?height=40&width=60" },
        { name: "Direct Debit", image: "/placeholder.svg?height=40&width=60" },
      ],
      details:
        "Bank transfers allow you to pay directly from your bank account. This method may take 1-3 business days to process depending on your bank.",
    },
    {
      id: "buy-now-pay-later",
      title: "Buy Now, Pay Later",
      description: "Split your payment into installments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      brands: [
        { name: "Klarna", image: "/placeholder.svg?height=40&width=60" },
        { name: "Afterpay", image: "/placeholder.svg?height=40&width=60" },
        { name: "Affirm", image: "/placeholder.svg?height=40&width=60" },
        { name: "Zip", image: "/placeholder.svg?height=40&width=60" },
      ],
      details:
        "Buy Now, Pay Later services allow you to split your payment into installments, typically interest-free. Eligibility is determined at checkout.",
    },
    {
      id: "gift-cards",
      title: "Gift Cards & Store Credit",
      description: "Redeem gift cards or use store credit.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      brands: [
        { name: "Whatever Gift Card", image: "/placeholder.svg?height=40&width=60" },
        { name: "Store Credit", image: "/placeholder.svg?height=40&width=60" },
      ],
      details:
        "Gift cards and store credit can be applied at checkout. Enter your gift card number or use available store credit from your account balance.",
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "How secure are my payment details?",
      answer:
        "Your payment details are protected with industry-standard encryption and security protocols. We use SSL/TLS encryption for all transactions and comply with PCI DSS standards. We never store your full credit card information on our servers.",
    },
    {
      id: 2,
      question: "When will my card be charged?",
      answer:
        "For most orders, your card will be authorized at the time of purchase and charged when your order ships. For digital products or services, your card will be charged immediately upon purchase.",
    },
    {
      id: 3,
      question: "Can I use multiple payment methods for one order?",
      answer:
        "Yes, you can split your payment between a gift card/store credit and another payment method. However, you cannot split payment between multiple credit cards or digital wallets.",
    },
    {
      id: 4,
      question: "What currencies do you accept?",
      answer:
        "We accept payments in USD, EUR, GBP, CAD, AUD, and JPY. The currency will be displayed during checkout based on your location, but you can change it if needed.",
    },
    {
      id: 5,
      question: "Do you offer international payment options?",
      answer:
        "Yes, we accept international credit cards and digital wallets. Some payment methods may not be available in all countries. The available payment options will be displayed during checkout based on your location.",
    },
    {
      id: 6,
      question: "How do refunds work?",
      answer:
        "Refunds are processed back to the original payment method used for the purchase. Processing times vary depending on your payment method and financial institution, typically 3-10 business days.",
    },
  ]

  const securityFeatures = [
    {
      title: "Encrypted Transactions",
      description: "All payment data is encrypted with industry-standard protocols",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: "Secure Payment Processing",
      description: "We use trusted payment processors to handle all transactions",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Fraud Protection",
      description: "Advanced fraud detection systems to protect your account",
      icon: <AlertCircle className="h-6 w-6" />,
    },
  ]

  const userPaymentMethods = [
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Payment Methods</h1>
            <p className="text-purple-100 mb-6">Secure, flexible payment options for your shopping convenience</p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="h-16 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-16 transform translate-y-[-100%]"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Security Banner */}
      <div className="container mx-auto px-4 -mt-8 md:-mt-16 mb-12 relative z-10">
        <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <Shield className="h-10 w-10 text-purple-600 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Secure Payments</h3>
                <p className="text-gray-600">All transactions are encrypted and secure</p>
              </div>
            </div>
            <div className="flex items-center">
              <Lock className="h-10 w-10 text-purple-600 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">PCI Compliant</h3>
                <p className="text-gray-600">We adhere to strict security standards</p>
              </div>
            </div>
            <div className="flex items-center">
              <AlertCircle className="h-10 w-10 text-purple-600 mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Fraud Protection</h3>
                <p className="text-gray-600">Advanced fraud detection systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="payment-options" className="mb-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="payment-options" onClick={() => setActiveTab("payment-options")} className="flex-1">
                Payment Options
              </TabsTrigger>
              <TabsTrigger
                value="my-payment-methods"
                onClick={() => setActiveTab("my-payment-methods")}
                className="flex-1"
              >
                My Payment Methods
              </TabsTrigger>
              <TabsTrigger value="security" onClick={() => setActiveTab("security")} className="flex-1">
                Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="payment-options" className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Available Payment Options</h2>

              {paymentMethods.map((method) => (
                <Card key={method.id} className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                        <p className="text-gray-600 mb-4">{method.description}</p>

                        <div className="flex flex-wrap gap-4 mb-4">
                          {method.brands.map((brand, index) => (
                            <div key={index} className="bg-gray-50 rounded-md p-2 flex items-center justify-center">
                              <img
                                src={brand.image || "/placeholder.svg"}
                                alt={brand.name}
                                className="h-8 object-contain"
                              />
                            </div>
                          ))}
                        </div>

                        <p className="text-gray-700">{method.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* How It Works */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                  <CardDescription>Our payment process is simple and secure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-purple-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-purple-600 font-semibold">1</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Choose Your Items</h3>
                      <p className="text-gray-600">
                        Browse our marketplace and add products to your cart from any of our trusted vendors.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-purple-600 font-semibold">2</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Proceed to Checkout</h3>
                      <p className="text-gray-600">
                        Review your cart, enter shipping information, and select your preferred payment method.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-purple-600 font-semibold">3</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Complete Payment</h3>
                      <p className="text-gray-600">
                        Enter your payment details securely and confirm your order with just a few clicks.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="my-payment-methods">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Your Payment Methods</CardTitle>
                  <CardDescription>Manage the payment methods associated with your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userPaymentMethods.map((method) => (
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
                      <div className="flex items-center">
                        {!method.isDefault && (
                          <Button variant="ghost" size="sm" className="mr-2 text-gray-500 hover:text-gray-700">
                            Set as Default
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}

                  {userPaymentMethods.length === 0 && (
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
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Add Credit/Debit Card
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Add Bank Account
                  </Button>
                </CardFooter>
              </Card>

              {/* Payment History */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>View your recent payment history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium">Order #12345</h4>
                        <p className="text-sm text-gray-500">May 15, 2023</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$129.99</p>
                        <p className="text-xs text-green-600">Completed</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium">Order #12344</h4>
                        <p className="text-sm text-gray-500">May 10, 2023</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$79.50</p>
                        <p className="text-xs text-green-600">Completed</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium">Order #12343</h4>
                        <p className="text-sm text-gray-500">April 28, 2023</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$249.99</p>
                        <p className="text-xs text-green-600">Completed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Payment Security</CardTitle>
                  <CardDescription>How we protect your payment information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    {securityFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6 hover:border-purple-200 hover:shadow-sm transition-all"
                      >
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold mb-4">Our Security Commitment</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <p>We use industry-standard SSL encryption to protect your data during transmission.</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <p>We comply with PCI DSS (Payment Card Industry Data Security Standard) requirements.</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <p>We never store complete credit card numbers on our servers.</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <p>We monitor transactions 24/7 for suspicious activity.</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <p>We partner with trusted payment processors with proven security records.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secure Shopping Tips</CardTitle>
                  <CardDescription>Recommendations for keeping your payment information safe</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Keep your account password strong and unique</h3>
                      <p className="text-sm text-gray-600">
                        Use a combination of letters, numbers, and special characters. Never reuse passwords across
                        different sites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Enable two-factor authentication</h3>
                      <p className="text-sm text-gray-600">
                        Add an extra layer of security to your account by enabling 2FA in your account settings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Regularly monitor your transactions</h3>
                      <p className="text-sm text-gray-600">
                        Check your order history and bank statements regularly to ensure all charges are legitimate.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Be cautious of phishing attempts</h3>
                      <p className="text-sm text-gray-600">
                        Whatever will never ask for your password or full card details via email. Always access your
                        account directly through our website or app.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-blue-600">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Update your devices and browsers</h3>
                      <p className="text-sm text-gray-600">
                        Keep your devices, browsers, and apps updated with the latest security patches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* FAQs */}
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Payment FAQs</h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaq[faq.id] ? (
                      <ChevronUp className="h-5 w-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-purple-600" />
                    )}
                  </button>

                  {expandedFaq[faq.id] && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vendor-Specific Payment Methods */}
      <div className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Vendor-Specific Payment Options</h2>
            <p className="text-gray-600 mb-8">
              Some vendors may offer additional payment methods specific to their store
            </p>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold">Look for the Payment Options Badge</h3>
              </div>
              <p className="text-gray-700 mb-4">
                When browsing vendor stores, look for the "Additional Payment Options" badge to see if they offer
                methods beyond our standard options.
              </p>
              <p className="text-gray-700">
                These may include vendor-specific financing, loyalty points, or specialized payment services. Available
                options will be displayed during checkout.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Need Help */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Payments?</h2>
          <p className="text-gray-600 mb-8">
            Our support team is here to assist you with any payment-related questions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              View All FAQs
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodsPage

