"use client"

import { useState, useEffect, useRef } from "react"
import { format } from "date-fns"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Phone,
  Video,
  Paperclip,
  Smile,
  Send,
  ImageIcon,
  Check,
  CheckCheck,
  Clock,
  Info,
  Menu,
  Users,
  MessageSquare,
  X,
  ChevronRight,
  Plus,
  Home,
} from "lucide-react"
import EmptyState from "./EmptyState"
import NewMessageModal from "./NewMessageModal"
import { useIsMobile } from "@/hooks/use-mobile"
import { Link } from "react-router-dom"

const MessagingPage = () => {
  const isMobile = useIsMobile()
  const [selectedContact, setSelectedContact] = useState(null)
  const [message, setMessage] = useState("")
  const [filter, setFilter] = useState("all")
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [vendors, setVendors] = useState([
    { id: 1, name: "TechGadgets", image: "/placeholder.svg?height=40&width=40", isOnline: true },
    { id: 2, name: "FashionHub", image: "/placeholder.svg?height=40&width=40", isOnline: true },
    { id: 3, name: "HomeDecor", image: "/placeholder.svg?height=40&width=40", isOnline: false },
    { id: 4, name: "SportsMaster", image: "/placeholder.svg?height=40&width=40", isOnline: true },
    { id: 5, name: "BeautyStore", image: "/placeholder.svg?height=40&width=40", isOnline: false },
    { id: 6, name: "PetSupplies", image: "/placeholder.svg?height=40&width=40", isOnline: true },
    { id: 7, name: "BookCorner", image: "/placeholder.svg?height=40&width=40", isOnline: false },
  ])
  const [conversations, setConversations] = useState([
    {
      id: 1,
      vendorId: 1,
      vendorName: "TechGadgets",
      vendorImage: "/placeholder.svg?height=40&width=40",
      isOnline: true,
      lastMessage: "Your order #1234 has been shipped!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      unread: 1,
      messages: [
        {
          id: 1,
          sender: "vendor",
          content: "Hello! How can I assist you with your recent purchase?",
          timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
          status: "read",
        },
        {
          id: 2,
          sender: "user",
          content: "Hi, I have a question about the warranty for the laptop I bought.",
          timestamp: new Date(Date.now() - 1000 * 60 * 55), // 55 minutes ago
          status: "read",
        },
        {
          id: 3,
          sender: "vendor",
          content:
            "Of course! Our laptops come with a standard 1-year warranty. What specific information do you need?",
          timestamp: new Date(Date.now() - 1000 * 60 * 50), // 50 minutes ago
          status: "read",
        },
        {
          id: 4,
          sender: "user",
          content: "I was wondering if it covers accidental damage?",
          timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
          status: "read",
        },
        {
          id: 5,
          sender: "vendor",
          content:
            "The standard warranty doesn't cover accidental damage, but we do offer an extended warranty that includes it. Would you like more details on that?",
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
          status: "read",
        },
      ],
    },
    {
      id: 2,
      vendorId: 2,
      vendorName: "FashionHub",
      vendorImage: "/placeholder.svg?height=40&width=40",
      isOnline: false,
      lastMessage: "New collection is now available!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
      unread: 0,
      messages: [
        {
          id: 1,
          sender: "vendor",
          content: "Hello! We just launched our new summer collection!",
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
          status: "read",
        },
        {
          id: 2,
          sender: "user",
          content: "That's great! Do you have any discounts for loyal customers?",
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
          status: "read",
        },
        {
          id: 3,
          sender: "vendor",
          content: "Yes, we're offering 15% off for our loyal customers like you! Use code SUMMER15 at checkout.",
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
          status: "read",
        },
      ],
    },
    {
      id: 3,
      isAdmin: true,
      vendorName: "Admin Support",
      vendorImage: "/placeholder.svg?height=40&width=40",
      isOnline: true,
      lastMessage: "How can we assist you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      unread: 0,
      messages: [
        {
          id: 1,
          sender: "vendor",
          content: "Hello! Welcome to our platform. How can we assist you today?",
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
          status: "read",
        },
      ],
    },
  ])
  const [activeConversation, setActiveConversation] = useState(null)
  const [isNewMessageModalOpen, setIsNewMessageModalOpen] = useState(false)
  const [selectedVendor, setSelectedVendor] = useState(null)
  const messagesEndRef = useRef(null)
  const messagesContainerRef = useRef(null)

  // Find the active conversation
  const currentConversation = conversations.find((conv) => conv.id === activeConversation)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [currentConversation?.messages])

  useEffect(() => {
    // Function to update vendor online status (mock)
    const updateVendorStatus = () => {
      setVendors((prevVendors) =>
        prevVendors.map((vendor) => ({
          ...vendor,
          isOnline: Math.random() < 0.7, // 70% chance of being online
        })),
      )
    }

    // Update vendor status every 15 seconds
    const intervalId = setInterval(updateVendorStatus, 15000)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    // Set sidebar state based on mobile/desktop view
    setSidebarOpen(!isMobile)
  }, [isMobile])

  const handleSelectConversation = (conversationId) => {
    setActiveConversation(conversationId)
    if (isMobile) {
      setSidebarOpen(false)
    }

    // Mark messages as read
    setConversations((prevConversations) =>
      prevConversations.map((conv) => (conv.id === conversationId ? { ...conv, unread: 0 } : conv)),
    )
  }

  const handleStartNewConversation = (vendor = null) => {
    setSelectedVendor(vendor)
    setIsNewMessageModalOpen(true)
  }

  const handleNewMessageSubmit = ({ subject, message }) => {
    // Logic to create a new conversation
    const vendorId = selectedVendor?.id
    const newConversation = {
      id: Date.now(), // Generate a unique ID
      vendorId: vendorId,
      vendorName: selectedVendor?.name || "Admin Support",
      vendorImage: selectedVendor?.image || "/placeholder.svg?height=40&width=40",
      isOnline: selectedVendor?.isOnline || true,
      lastMessage: message,
      timestamp: new Date(),
      unread: 0,
      messages: [
        {
          id: Date.now(),
          sender: "user",
          content: message,
          timestamp: new Date(),
          status: "delivered",
        },
      ],
      isAdmin: !selectedVendor,
    }

    setConversations([newConversation, ...conversations])
    setActiveConversation(newConversation.id)
    setIsNewMessageModalOpen(false)

    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const handleMessageSend = (e) => {
    e.preventDefault()
    if (!message.trim() || !currentConversation) return

    const newMessage = {
      id: Date.now(),
      sender: "user",
      content: message,
      timestamp: new Date(),
      status: "pending", // "pending", "sent", "delivered", "read"
    }

    // Optimistically update the UI
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === currentConversation.id
          ? {
              ...conv,
              messages: [...conv.messages, newMessage],
              lastMessage: message,
              timestamp: new Date(),
            }
          : conv,
      ),
    )

    setMessage("")
    scrollToBottom()

    // Simulate message status updates after delays
    setTimeout(() => {
      updateMessageStatus(currentConversation.id, newMessage.id, "sent")
    }, 1000)

    setTimeout(() => {
      updateMessageStatus(currentConversation.id, newMessage.id, "delivered")
    }, 2500)

    setTimeout(() => {
      updateMessageStatus(currentConversation.id, newMessage.id, "read")
    }, 4000)
  }

  const updateMessageStatus = (conversationId, messageId, status) => {
    setConversations((prevConversations) =>
      prevConversations.map((conv) => {
        if (conv.id === conversationId) {
          const updatedMessages = conv.messages.map((msg) => (msg.id === messageId ? { ...msg, status } : msg))
          return { ...conv, messages: updatedMessages }
        }
        return conv
      }),
    )
  }

  const formatMessageTime = (timestamp) => {
    return format(new Date(timestamp), "h:mm a")
  }

  const formatConversationTime = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()

    if (date.toDateString() === now.toDateString()) {
      return format(date, "h:mm a") // Today: 7:30 PM
    } else if (date.getFullYear() === now.getFullYear()) {
      return format(date, "MMM d") // This year: Oct 12
    } else {
      return format(date, "MMM d, yyyy") // Older: Oct 12, 2022
    }
  }

  const renderMessageStatus = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-gray-400" />
      case "sent":
        return <Check className="h-4 w-4 text-gray-400" />
      case "delivered":
        return <CheckCheck className="h-4 w-4 text-gray-400" />
      case "read":
        return <CheckCheck className="h-4 w-4 text-purple-500" />
      default:
        return null
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleVendorProfileClick = (vendorId) => {
    // Implement navigation to vendor profile page
    console.log("Navigating to vendor profile:", vendorId)
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col overflow-hidden mb-14">
      {/* New Message Modal */}
      <NewMessageModal
        isOpen={isNewMessageModalOpen}
        onClose={() => setIsNewMessageModalOpen(false)}
        onSubmit={handleNewMessageSubmit}
        selectedVendor={selectedVendor}
      />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Toggle Button (Mobile) */}
        {isMobile && !sidebarOpen && activeConversation && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 z-20 bg-white p-2 rounded-full shadow-md text-purple-600 hover:bg-purple-50"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        {/* Conversation List Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={isMobile ? { x: -300, opacity: 0 } : false}
              animate={{ x: 0, opacity: 1 }}
              exit={isMobile ? { x: -300, opacity: 0 } : false}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`${
                isMobile ? "absolute z-10 h-full" : "relative"
              } w-full sm:w-80 md:w-96 bg-white border-r border-gray-200 flex flex-col shadow-lg`}
            >
              {/* Header */}
              <div className="p-4 border-b sticky top-0 border-gray-200 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Messages</h1>
                  <div className="flex items-center gap-3">
                    <Link to={'/'}>
                    <Home className="h-5 w-5" />
                    </Link>
                  <div className="flex items-center gap-2">
                    {isMobile && activeConversation && (
                      <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-white/10">
                        <X className="h-5 w-5" />
                      </button>
                    )}
                    <button onClick={() => handleStartNewConversation()} className="p-2 rounded-full hover:bg-white/10">
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full pl-10 pr-4 py-2 bg-white/10 text-white placeholder-white/70 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20"
                  />
                  <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                </div>
              </div>

              {/* Filters */}
              <div className="p-3 border-b border-gray-200 flex space-x-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter === "all" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("vendors")}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter === "vendors"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Vendors
                </button>
                <button
                  onClick={() => setFilter("admin")}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter === "admin" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Admin
                </button>
              </div>

              {/* Vendors Horizontal Scroll */}
              <div className="p-3 border-b border-gray-200 overflow-x-auto">
                <div className="flex gap-4 min-w-max">
                  {/* Admin Chat Button */}
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => handleStartNewConversation(null)}
                      className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-1 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Users className="h-7 w-7 text-white" />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </button>
                    <span className="text-xs text-center truncate w-14 font-medium">Admin</span>
                  </div>

                  {/* Vendor Buttons */}
                  {vendors.map((vendor) => (
                    <div key={vendor.id} className="flex flex-col items-center">
                      <button
                        onClick={() => handleStartNewConversation(vendor)}
                        className="relative w-14 h-14 rounded-full bg-gray-200 overflow-hidden mb-1 shadow-md hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={vendor.image || "/placeholder.svg"}
                          alt={vendor.name}
                          className="w-full h-full object-cover"
                        />
                        {vendor.isOnline && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </button>
                      <span className="text-xs text-center truncate w-14 font-medium">{vendor.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversations List */}
              <div className="flex-1 overflow-y-auto">
                {conversations.length === 0 ? (
                  <EmptyState onNewMessage={() => handleStartNewConversation()} />
                ) : (
                  <div>
                    {conversations
                      .filter((conv) => {
                        if (filter === "all") return true
                        if (filter === "vendors") return !conv.isAdmin
                        if (filter === "admin") return conv.isAdmin
                        return true
                      })
                      .map((conversation) => (
                        <motion.div
                          key={conversation.id}
                          whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.7)" }}
                          className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                            activeConversation === conversation.id ? "bg-purple-50 border-l-4 border-l-purple-500" : ""
                          }`}
                          onClick={() => handleSelectConversation(conversation.id)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative flex-shrink-0">
                              <div
                                className={`w-12 h-12 rounded-full overflow-hidden ${conversation.isAdmin ? "bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center" : "bg-gray-200"}`}
                              >
                                {conversation.isAdmin ? (
                                  <Users className="h-6 w-6 text-white" />
                                ) : (
                                  <img
                                    src={conversation.vendorImage || "/placeholder.svg"}
                                    alt={conversation.vendorName}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              {conversation.isOnline && (
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-baseline">
                                <h3
                                  className={`font-medium ${conversation.unread ? "text-gray-900" : "text-gray-700"}`}
                                >
                                  {conversation.vendorName}
                                  {conversation.isAdmin && (
                                    <span className="ml-1 text-xs bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded-full">
                                      Admin
                                    </span>
                                  )}
                                </h3>
                                <span className="text-xs text-gray-500">
                                  {formatConversationTime(conversation.timestamp)}
                                </span>
                              </div>
                              <p
                                className={`text-sm truncate mt-0.5 ${
                                  conversation.unread ? "font-medium text-gray-900" : "text-gray-500"
                                }`}
                              >
                                {conversation.lastMessage}
                              </p>
                            </div>
                          </div>
                          {conversation.unread > 0 && (
                            <div className="mt-1 flex justify-end">
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-purple-600 text-xs font-medium text-white">
                                {conversation.unread}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message Area */}
        <div className={`flex-1 flex flex-col ${isMobile && sidebarOpen ? "hidden" : ""}`}>
          {!currentConversation ? (
            <div className="flex-1 flex items-center justify-center p-4 bg-gray-50">
              <div className="text-center max-w-md">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <MessageSquare className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Messages</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Chat with vendors about products or contact admin support for any questions about your orders.
                </p>
                <button
                  onClick={() => {
                    if (isMobile) setSidebarOpen(true)
                    handleStartNewConversation()
                  }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                >
                  Start a New Conversation
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Conversation Header */}
              <div className="p-4 border-b border-gray-200 bg-white flex items-center shadow-sm">
                {isMobile && (
                  <button onClick={toggleSidebar} className="mr-3 p-1.5 rounded-full hover:bg-gray-100">
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                )}
                <div
                  className="flex items-center flex-1 cursor-pointer"
                  onClick={() => !currentConversation.isAdmin && handleVendorProfileClick(currentConversation.vendorId)}
                >
                  <div className="relative mr-3">
                    <div
                      className={`w-10 h-10 rounded-full overflow-hidden ${currentConversation.isAdmin ? "bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center" : "bg-gray-200"}`}
                    >
                      {currentConversation.isAdmin ? (
                        <Users className="h-5 w-5 text-white" />
                      ) : (
                        <img
                          src={currentConversation.vendorImage || "/placeholder.svg"}
                          alt={currentConversation.vendorName}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    {currentConversation.isOnline && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-800 flex items-center">
                      {currentConversation.vendorName}
                      {currentConversation.isAdmin && (
                        <span className="ml-1 text-xs bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded-full">
                          Admin
                        </span>
                      )}
                    </h2>
                    <p className="text-xs text-green-600">{currentConversation.isOnline ? "Active now" : "Offline"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-purple-600">
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-purple-600">
                    <Video className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-purple-600">
                    <Info className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6-60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-34 58c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-59-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm89-34c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM20 31c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%239C92AC' fillOpacity='0.05' fillRule='evenodd'/%3E%3C/svg%3E\")",
                  backgroundSize: "100px 100px",
                }}
              >
                <div className="space-y-3">
                  {currentConversation.messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.sender !== "user" && (
                        <div
                          className={`w-8 h-8 rounded-full overflow-hidden ${currentConversation.isAdmin ? "bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center" : "bg-gray-200"} mr-2 flex-shrink-0 self-end`}
                        >
                          {currentConversation.isAdmin ? (
                            <Users className="h-4 w-4 text-white" />
                          ) : (
                            <img
                              src={currentConversation.vendorImage || "/placeholder.svg"}
                              alt={currentConversation.vendorName}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl p-3 shadow-sm ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                            : "bg-white text-gray-800"
                        }`}
                      >
                        <div className="text-sm">{msg.content}</div>
                        <div className="mt-1 flex items-center justify-end gap-1">
                          <span className={`text-xs ${msg.sender === "user" ? "text-purple-200" : "text-gray-500"}`}>
                            {formatMessageTime(msg.timestamp)}
                          </span>
                          {msg.sender === "user" && renderMessageStatus(msg.status)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Message Input */}
              <div className="p-3 border-t border-gray-200 bg-white">
                <form onSubmit={handleMessageSend} className="flex items-end gap-2">
                  <div className="flex-1 bg-gray-100 rounded-full p-1 px-3 focus-within:ring-2 focus-within:ring-purple-500 focus-within:bg-white transition-all flex items-center">
                    <button type="button" className="p-1.5 text-gray-500 hover:text-purple-600">
                      <Smile className="h-5 w-5" />
                    </button>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 border-0 p-1 focus:ring-0 text-sm text-gray-900 bg-transparent"
                    />
                    <button type="button" className="p-1.5 text-gray-500 hover:text-purple-600">
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <button type="button" className="p-1.5 text-gray-500 hover:text-purple-600">
                      <ImageIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={!message.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full ${
                      message.trim()
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-md text-white"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    } transition-all`}
                  >
                    <Send className="h-5 w-5" />
                  </motion.button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessagingPage

