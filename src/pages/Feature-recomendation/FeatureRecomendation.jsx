"use client"

import { useState } from "react"
import { Lightbulb, ThumbsUp, Send, ChevronDown, ChevronUp, Search } from "lucide-react"

const FeatureRecommendationPage = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFeature, setExpandedFeature] = useState(null)
  const [activeTab, setActiveTab] = useState("popular")
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Feature recommendation submitted! Thank you for your feedback.")
    setTitle("")
    setDescription("")
    setCategory("")
  }

  const toggleFeature = (id) => {
    setExpandedFeature(expandedFeature === id ? null : id)
  }

  const handleVote = (id) => {
    // In a real app, this would call an API to update the vote count
    alert(`Voted for feature #${id}`)
  }

  const categories = [
    "Shopping Experience",
    "Checkout Process",
    "Product Discovery",
    "Mobile App",
    "Vendor Features",
    "Account Management",
    "Other",
  ]

  const featuresData = [
    {
      id: 1,
      title: "Wishlist Sharing",
      description: "Allow users to share their wishlists with friends and family via social media or email.",
      category: "Shopping Experience",
      status: "under review",
      votes: 342,
      date: "2023-11-15",
    },
    {
      id: 2,
      title: "AR Product Visualization",
      description: "Implement augmented reality feature to visualize products in your own space before purchasing.",
      category: "Product Discovery",
      status: "planned",
      votes: 567,
      date: "2023-10-22",
    },
    {
      id: 3,
      title: "One-Click Reorder",
      description: "Add ability to reorder previously purchased items with a single click.",
      category: "Shopping Experience",
      status: "in progress",
      votes: 289,
      date: "2023-12-01",
    },
    {
      id: 4,
      title: "Dark Mode",
      description: "Add a dark mode option for the website and mobile app to reduce eye strain during night browsing.",
      category: "Mobile App",
      status: "implemented",
      votes: 721,
      date: "2023-09-10",
    },
    {
      id: 5,
      title: "Price Drop Alerts",
      description: "Notify users when items in their wishlist or cart drop in price.",
      category: "Shopping Experience",
      status: "under review",
      votes: 412,
      date: "2023-11-28",
    },
    {
      id: 6,
      title: "Bundle Discounts",
      description: "Automatically suggest bundle discounts when related items are added to cart.",
      category: "Checkout Process",
      status: "planned",
      votes: 356,
      date: "2023-10-15",
    },
  ]

  // Filter features based on search query and active tab
  const filteredFeatures = featuresData
    .filter(
      (feature) =>
        feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (activeTab === "popular") {
        return b.votes - a.votes
      } else if (activeTab === "recent") {
        return new Date(b.date) - new Date(a.date)
      }
      return 0
    })

  const getStatusColor = (status) => {
    switch (status) {
      case "under review":
        return "bg-yellow-100 text-yellow-800"
      case "planned":
        return "bg-blue-100 text-blue-800"
      case "in progress":
        return "bg-purple-100 text-purple-800"
      case "implemented":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Shape Our Future</h1>
            <p className="text-purple-100 mb-6">
              Suggest new features or vote on existing ideas to help us improve the Whatever shopping experience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#suggest"
                className="bg-white text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-sm"
              >
                Suggest Feature
              </a>
              <a
                href="#browse"
                className="bg-purple-700 text-white border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors"
              >
                Browse Ideas
              </a>
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

      {/* How It Works */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Suggest a Feature</h3>
            <p className="text-gray-600">
              Share your ideas for new features or improvements that would enhance your shopping experience.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Vote on Ideas</h3>
            <p className="text-gray-600">
              Browse existing suggestions and vote for the ones you'd like to see implemented.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. See It Implemented</h3>
            <p className="text-gray-600">
              Our team reviews popular suggestions and implements the most valuable features to improve the platform.
            </p>
          </div>
        </div>
      </div>

      {/* Browse Features Section */}
      <div id="browse" className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Browse Feature Ideas</h2>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search feature ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-5 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("popular")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "popular" ? "bg-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Most Popular
              </button>
              <button
                onClick={() => setActiveTab("recent")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "recent" ? "bg-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Recently Added
              </button>
            </div>
          </div>

          {/* Feature List */}
          <div className="max-w-4xl mx-auto">
            {filteredFeatures.length > 0 ? (
              <div className="space-y-4">
                {filteredFeatures.map((feature) => (
                  <div key={feature.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{feature.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                              {feature.category}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(feature.status)}`}>
                              {feature.status.replace(/-/g, " ")}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleVote(feature.id)}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full"
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span>{feature.votes}</span>
                          </button>
                          <button
                            onClick={() => toggleFeature(feature.id)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            {expandedFeature === feature.id ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {expandedFeature === feature.id && (
                        <div className="mt-2 pt-4 border-t border-gray-100">
                          <p className="text-gray-700 mb-3">{feature.description}</p>
                          <div className="text-sm text-gray-500">
                            Suggested on {new Date(feature.date).toLocaleDateString()}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <Lightbulb className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No feature ideas found matching your search.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Suggest Feature Form */}
      <div id="suggest" className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Suggest a New Feature</h2>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Feature Title*
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter a concise title for your feature idea"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 flex justify-between items-center"
                  >
                    {category || "Select a category"}
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </button>

                  {showCategoryDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 border border-gray-200 max-h-60 overflow-auto">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          className="w-full text-left px-4 py-2 hover:bg-purple-50"
                          onClick={() => {
                            setCategory(cat)
                            setShowCategoryDropdown(false)
                          }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description*
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Describe your feature idea in detail. What problem does it solve? How would it work?"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Submit Suggestion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">From Idea to Reality</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Here are some features that started as community suggestions and are now part of the Whatever platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dark Mode</h3>
              <p className="text-gray-600 mb-3">
                Suggested by our community and implemented within 3 months. Now over 40% of our users prefer browsing in
                dark mode.
              </p>
              <div className="text-sm text-gray-500">Implemented in 2023</div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Price Drop Alerts</h3>
              <p className="text-gray-600 mb-3">
                One of our most requested features. Users now save an average of 15% on items they've waitlisted for
                price drops.
              </p>
              <div className="text-sm text-gray-500">Implemented in 2022</div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">One-Click Reorder</h3>
              <p className="text-gray-600 mb-3">
                Suggested by a customer who frequently reordered the same items. Now our most used feature for repeat
                purchases.
              </p>
              <div className="text-sm text-gray-500">Implemented in 2023</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have an Idea to Share?</h2>
          <p className="text-gray-600 mb-8">
            Your feedback helps us build a better shopping experience for everyone. Share your ideas or vote on existing
            suggestions today.
          </p>
          <a
            href="#suggest"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-sm inline-block"
          >
            Suggest a Feature
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeatureRecommendationPage

