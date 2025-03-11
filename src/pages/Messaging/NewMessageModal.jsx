"use client"

import { useState, useEffect } from "react"
import { X, Send, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NewMessageModal = ({ isOpen, onClose, onSubmit, selectedVendor }) => {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!subject.trim() || !message.trim()) return

    onSubmit({ subject, message })
    setSubject("")
    setMessage("")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-purple-400 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-purple-600 to-indigo-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="relative p-3">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {selectedVendor ? `Message to ${selectedVendor.name}` : "Message to Admin Support"}
              </h2>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-purple-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <form onSubmit={handleSubmit} className="space-y-3">
                {selectedVendor ? (
                  <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-3 rounded-lg">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-300">
                      <img
                        src={selectedVendor.image || "/placeholder.svg"}
                        alt={selectedVendor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-white">{selectedVendor.name}</p>
                      <p className="text-sm text-purple-200">{selectedVendor.isOnline ? "Active now" : "Offline"}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-3 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-purple-300 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-purple-800" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-white">Admin Support</p>
                      <p className="text-sm text-purple-200">Always available</p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-purple-100 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-purple-200"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-100 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-purple-200"
                    placeholder={
                      selectedVendor ? "Ask about products, shipping, etc." : "How can admin support help you?"
                    }
                    required
                  />
                </div>

                <div className="flex justify-end space-x-3 pb-5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-white hover:bg-opacity-30 transition-colors"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-4 py-2 bg-white text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex items-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NewMessageModal


