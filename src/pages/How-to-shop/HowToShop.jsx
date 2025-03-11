"use client"

import { useState } from "react"
import { Search, ShoppingBag, CreditCard, Truck, Package, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

const HowToShopPage = () => {
  const [expandedStep, setExpandedStep] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState({})

  const toggleStep = (id) => {
    setExpandedStep(expandedStep === id ? null : id)
  }

  const toggleFaq = (id) => {
    setExpandedFaq((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const shoppingSteps = [
    {
      id: 1,
      title: "Create an Account",
      description: "Sign up for a Whatever account to enjoy personalized shopping, order tracking, and more.",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      steps: [
        "Visit the Whatever website or download our mobile app",
        "Click on 'Sign Up' in the top right corner",
        "Enter your email address and create a password",
        "Fill in your personal information",
        "Verify your email address by clicking the link sent to your inbox",
      ],
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "Browse Products",
      description: "Explore our vast selection of products from thousands of vendors across multiple categories.",
      icon: <Search className="h-6 w-6 text-purple-600" />,
      steps: [
        "Use the search bar to find specific products",
        "Browse categories using the navigation menu",
        "Filter results by price, rating, shipping options, and more",
        "Sort products by relevance, popularity, price, or newest arrivals",
        "View product details, images, specifications, and customer reviews",
      ],
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 3,
      title: "Add to Cart",
      description: "Select your desired items and add them to your shopping cart for checkout.",
      icon: <ShoppingBag className="h-6 w-6 text-purple-600" />,
      steps: [
        "Select product variations (size, color, quantity, etc.)",
        "Click 'Add to Cart' button on the product page",
        "Continue shopping or proceed to checkout",
        "Review items in your cart before finalizing your purchase",
        "Save items for later if you're not ready to buy",
      ],
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 4,
      title: "Checkout",
      description: "Complete your purchase securely with our streamlined checkout process.",
      icon: <CreditCard className="h-6 w-6 text-purple-600" />,
      steps: [
        "Review your cart and make any final adjustments",
        "Enter or select your shipping address",
        "Choose your preferred shipping method",
        "Select your payment method",
        "Review your order summary and place your order",
      ],
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 5,
      title: "Track Your Order",
      description: "Stay updated on your order status from processing to delivery.",
      icon: <Truck className="h-6 w-6 text-purple-600" />,
      steps: [
        "Receive order confirmation via email",
        "Log in to your account and go to 'My Orders'",
        "View real-time order status updates",
        "Track your package with the provided tracking number",
        "Receive delivery notifications",
      ],
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 6,
      title: "Receive & Return",
      description: "Enjoy your purchase or initiate a return if needed with our hassle-free return policy.",
      icon: <Package className="h-6 w-6 text-purple-600" />,
      steps: [
        "Receive and inspect your package",
        "If you need to return an item, go to 'My Orders' in your account",
        "Select the order and item you wish to return",
        "Choose your reason for return and preferred refund method",
        "Print the return label and ship the item back",
      ],
      image: "https://via.placeholder.com/600x400",
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the 'Sign Up' button in the top right corner of our website or app. Enter your email address, create a password, and fill in your personal information. You'll receive a verification email to complete the process.",
    },
    {
      id: 2,
      question: "Can I shop without creating an account?",
      answer:
        "Yes, you can browse products and add items to your cart without an account. However, you'll need to create an account or check out as a guest to complete your purchase.",
    },
    {
      id: 3,
      question: "How do I find products from a specific vendor?",
      answer:
        "You can search for a vendor by name using the search bar, or browse vendor stores by clicking on the vendor's name on any product page. You can also filter search results by vendor.",
    },
    {
      id: 4,
      question: "Can I save items for later?",
      answer:
        "Yes, you can add items to your wishlist by clicking the heart icon on product pages. You can also move items from your cart to 'Save for Later' during checkout.",
    },
    {
      id: 5,
      question: "How do I apply a coupon code?",
      answer:
        "You can apply a coupon code during checkout. After adding items to your cart, proceed to checkout and enter your coupon code in the designated field on the payment page.",
    },
    {
      id: 6,
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. Some vendors may offer additional payment options at checkout.",
    },
  ]

  const tips = [
    {
      title: "Create a Wishlist",
      description: "Save items you're interested in to your wishlist for easy access later.",
    },
    {
      title: "Read Customer Reviews",
      description: "Check ratings and reviews from other shoppers before making a purchase.",
    },
    {
      title: "Compare Products",
      description: "Use our comparison tool to evaluate similar products side by side.",
    },
    {
      title: "Check Vendor Ratings",
      description: "Look at vendor ratings and reviews to ensure you're buying from reputable sellers.",
    },
    {
      title: "Set Price Alerts",
      description: "Get notified when items in your wishlist go on sale or drop in price.",
    },
    {
      title: "Use Filters",
      description: "Narrow down search results with filters to find exactly what you're looking for.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How to Shop on Whatever</h1>
            <p className="text-purple-100 mb-6">
              Your complete guide to navigating our multivendor marketplace with ease
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full py-3 px-5 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-600" />
            </div>
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

      {/* Shopping Steps */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Shopping Made Simple</h2>

        <div className="max-w-4xl mx-auto">
          {shoppingSteps.map((step, index) => (
            <div
              key={step.id}
              className={`mb-6 ${
                expandedStep === step.id
                  ? "bg-white rounded-lg shadow-md"
                  : "bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              }`}
            >
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-purple-600 font-semibold">{index + 1}</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    {!expandedStep === step.id && <p className="text-gray-600 text-sm mt-1">{step.description}</p>}
                  </div>
                </div>
                {expandedStep === step.id ? (
                  <ChevronUp className="h-5 w-5 text-purple-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600" />
                )}
              </button>

              {expandedStep === step.id && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">How to:</h4>
                      <ol className="space-y-2">
                        {step.steps.map((substep, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <span className="text-purple-600 text-sm font-medium">{idx + 1}</span>
                            </span>
                            <span className="text-gray-700">{substep}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={step.image || "/placeholder.svg"}
                        alt={`How to ${step.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Tips */}
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Pro Shopping Tips</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Make the most of your shopping experience with these helpful tips
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-semibold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

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

      {/* Need More Help */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-purple-100 mb-8">
              Our support team is here to assist you with any questions about shopping on Whatever
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/support-center"
                className="bg-white text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-sm"
              >
                Visit Support Center
              </a>
              <a
                href="/contact"
                className="bg-purple-700 text-white border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Start Shopping CTA */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-gray-600 mb-8">
            Explore thousands of products from our trusted vendors and find exactly what you're looking for
          </p>
          <a
            href="/"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-sm inline-flex items-center"
          >
            Start Shopping Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HowToShopPage

```jsx file="components/payment-methods/PaymentMethodsPage.jsx"
"use client"

import { useState } from "react"
import { CreditCard, CheckCircle, HelpCircle, ChevronDown, ChevronUp, Shield, Lock, AlertCircle } from 'lucide-react'

const PaymentMethodsPage = () => {
  const [expandedFaq, setExpandedFaq] = useState({})

  const toggleFaq = (id) => {
    setExpandedFaq(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const paymentMethods = [
    {
      id: "credit-cards",
      title: "Credit & Debit Cards",
      description: "Pay securely with your credit or debit card.",
      icon: <CreditCard className="h-6 w-6 text-purple-600" />,
      brands: [
        { name: "Visa", image: "https://via.placeholder.com/80x40" },
        { name: "Mastercard", image: "https://via.placeholder.com/80x40" },
        { name: "American Express", image: "https://via.placeholder.com/80x40" },
        { name: "Discover", image: "https://via.placeholder.com/80x40" }
      ],
      details: "We accept all major credit and debit cards. Your card information is securely encrypted and never stored on our servers."
    },
    {
      id: "digital-wallets",
      title: "Digital Wallets",
      description: "Quick and secure checkout with digital wallets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      brands: [
        { name: "PayPal", image: "https://via.placeholder.com/80x40" },
        { name: "Apple Pay", image: "https://via.placeholder.com/80x40" },
        { name: "Google Pay", image: "https://via.placeholder.com/80x40" },
        { name: "Samsung Pay", image: "https://via.placeholder.com/80x40" }
      ],
      details: "Digital wallets offer a convenient and secure way to pay without entering your card details for each purchase. Simply select your preferred wallet at checkout."
    },
    {
      id: "bank-transfers",
      title: "Bank Transfers",
      description: "Direct payment from your bank account.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      brands: [
        { name: "ACH Transfer", image: "https://via.placeholder.com/80x40" },
        { name: "Wire Transfer", image: "https://via.placeholder.com/80x40" },
        { name: "Direct Debit", image: "https://via.placeholder.com/80x40" }
      ],
      details: "Bank transfers allow you to pay directly from your bank account. This method may take 1-3 business days to process depending on your bank."
    },
    {
      id: "buy-now-pay-later",
      title: "Buy Now, Pay Later",
      description: "Split your payment into installments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      brands: [
        { name: "Klarna", image: "https://via.placeholder.com/80x40" },
        { name: "Afterpay", image: "https://via.placeholder.com/80x40" },
        { name: "Affirm", image: "https://via.placeholder.com/80x40" },
        { name: "Zip", image: "https://via.placeholder.com/80x40" }
      ],
      details: "Buy Now, Pay Later services allow you to split your payment into installments, typically interest-free. Eligibility is determined at checkout."
    },
    {
      id: "gift-cards",
      title: "Gift Cards & Store Credit",
      description: "Redeem gift cards or use store credit.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      brands: [
        { name: "Whatever Gift Card", image: "https://via.placeholder.com/80x40" },
        { name: "Store Credit", image: "https://via.placeholder.com/80x40" }
      ],
      details: "Gift cards and store credit can be applied at checkout. Enter your gift card number or use available store credit from your account balance."
    }
  ]

  const faqs = [
    {
      id: 1,
      question: "How secure are my payment details?",
      answer: "Your payment details are protected with industry-standard encryption and security protocols. We use SSL/TLS encryption for all transactions and comply with PCI DSS standards. We never store your full credit card information on our servers."
    },
    {
      id: 2,
      question: "When will my card be charged?",
      answer: "For most orders, your card will be authorized at the time of purchase and charged when your order ships. For digital products or services, your card will be charged immediately upon purchase."
    },
    {
      id: 3,
      question: "Can I use multiple payment methods for one order?",
      answer: "Yes, you can split your payment between a gift card/store credit and another payment method. However, you cannot split payment between multiple credit cards or digital wallets."
    },
    {
      id: 4,
      question: "What currencies do you accept?",
      answer: "We accept payments in USD, EUR, GBP, CAD, AUD, and JPY. The currency will be displayed during checkout based on your location, but you can change it if needed."
    },
    {
      id: 5,
      question: "Do you offer international payment options?",
      answer: "Yes, we accept international credit cards and digital wallets. Some payment methods may not be available in all countries. The available payment options will be displayed during checkout based on your location."
    },
    {
      id: 6,
      question: "How do refunds work?",
      answer: "Refunds are processed back to the original payment method used for the purchase. Processing times vary depending on your payment method and financial institution, typically 3-10 business days."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Payment Methods</h1>
            <p className="text-purple-100 mb-6">
              Secure, flexible payment options for your shopping convenience
            </p>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="h-16 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 transform translate-y-[-100%]">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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

      {/* Payment Methods */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Available Payment Options</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How It Works</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-semibold">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Choose Your Items</h3>
                <p className="text-gray-600">
                  Browse our marketplace and add products to your cart from any of our trusted vendors.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-semibold">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Proceed to Checkout</h3>
                <p className="text-gray-600">
                  Review your cart, enter shipping information, and select your preferred payment method.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-semibold">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Complete Payment</h3>
                <p className="text-gray-600">
                  Enter your payment details securely and confirm your order with just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Payment FAQs</h2>
          
          <div className="space-y-4">
            {faqs.map(faq => (
              <div 
                key={faq.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
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

      {/* Vendor-Specific Payment Methods */}
      <div className="bg-gray-50 py-12">
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
                When browsing vendor stores, look for the "Additional Payment Options" badge to see if they offer methods beyond our standard options.
              </p>
              <p className="text-gray-700">
                These may include vendor-specific financing, loyalty points, or specialized payment services. Available options will be displayed during checkout.
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
            <a 
              href="/support-center" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
            >
              Contact Support
            </a>
            <a 
              href="/faqs" 
              className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodsPage

