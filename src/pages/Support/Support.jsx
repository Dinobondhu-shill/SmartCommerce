"use client"

import { useState } from "react"
import { Search, Phone, Mail, MessageSquare, HelpCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

const SupportCenterPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaqs, setExpandedFaqs] = useState({})

  const toggleFaq = (id) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "orders", name: "Orders" },
    { id: "shipping", name: "Shipping" },
    { id: "returns", name: "Returns" },
    { id: "payments", name: "Payments" },
    { id: "account", name: "Account" },
  ]

  const faqs = [
    {
      id: 1,
      category: "orders",
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account and navigating to 'My Orders'. Click on the specific order you want to track and you'll see the current status and tracking information if available.",
    },
    {
      id: 2,
      category: "shipping",
      question: "What are the shipping options?",
      answer:
        "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and same-day delivery in select areas. Shipping costs vary based on your location and the option you choose at checkout.",
    },
    {
      id: 3,
      category: "returns",
      question: "How do I return an item?",
      answer:
        "To return an item, go to 'My Orders' in your account, select the order containing the item you wish to return, and click 'Return Item'. Follow the instructions to complete your return request. You have 30 days from delivery to initiate a return.",
    },
    {
      id: 4,
      category: "payments",
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. Some vendors may offer additional payment options at checkout.",
    },
    {
      id: 5,
      category: "account",
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on 'Forgot Password' on the login page. Enter your email address, and we'll send you a link to reset your password. The link is valid for 24 hours.",
    },
    {
      id: 6,
      category: "orders",
      question: "Can I modify or cancel my order?",
      answer:
        "You can modify or cancel your order within 1 hour of placing it. Go to 'My Orders' in your account, select the order you wish to modify or cancel, and follow the instructions. After 1 hour, please contact customer support for assistance.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      (activeCategory === "all" || faq.category === activeCategory) &&
      (searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
            <p className="text-purple-100 mb-8">Find answers, get support, or contact our team</p>

            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Contact Options */}
      <div className="container mx-auto px-4 -mt-8 md:-mt-16 mb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Available 24/7 for urgent issues</p>
            <a href="tel:+18001234567" className="text-purple-600 font-medium hover:text-purple-700">
              +1 800 123 4567
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
            <a href="mailto:support@whatever.com" className="text-purple-600 font-medium hover:text-purple-700">
              support@whatever.com
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team</p>
            <button className="text-purple-600 font-medium hover:text-purple-700">Start Chat</button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaqs[faq.id] ? (
                      <ChevronUp className="h-5 w-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-purple-600" />
                    )}
                  </button>

                  {expandedFaqs[faq.id] && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No FAQs found matching your criteria.</p>
                <button
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchQuery("")
                  }}
                  className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Topics */}
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Help Topics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="/how-to-shop"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">How to Shop</h3>
                <p className="text-gray-600 mb-2">Learn how to navigate and shop on our platform</p>
                <div className="text-purple-600 flex items-center text-sm">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </a>

            <a
              href="/payment-methods"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Payment Methods</h3>
                <p className="text-gray-600 mb-2">View all available payment options</p>
                <div className="text-purple-600 flex items-center text-sm">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </a>

            <a
              href="/shipping-info"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Shipping Information</h3>
                <p className="text-gray-600 mb-2">Learn about shipping options and delivery times</p>
                <div className="text-purple-600 flex items-center text-sm">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </a>

            <a
              href="/returns-refunds"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Returns & Refunds</h3>
                <p className="text-gray-600 mb-2">Understand our return policy and refund process</p>
                <div className="text-purple-600 flex items-center text-sm">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </a>

            <a
              href="/account-security"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Account & Security</h3>
                <p className="text-gray-600 mb-2">Manage your account and keep it secure</p>
                <div className="text-purple-600 flex items-center text-sm">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </a>

            <a
              href="/feature-recommendation"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Feature Recommendations</h3>
                <p className="text-gray-600 mb-2">Suggest new features to improve our platform</p>
                <div className="text-purple-600 flex items-center text-sm">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Still Need Help */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-8">Our support team is here to assist you with any questions or concerns</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
            >
              Contact Support
            </a>
            <a
              href="/chat"
              className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportCenterPage

