"use client"

import { MessageSquare, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const EmptyState = ({ onNewMessage }) => {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-800">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 5 + 1 + "px",
              height: Math.random() * 5 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full p-6 text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
        >
          <MessageSquare className="h-12 w-12 text-white" />
        </motion.div>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Start Your Conversation
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-purple-100 mb-8 max-w-md"
        >
          Connect with vendors about products or reach out to our admin support for any questions about your orders.
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNewMessage}
          className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center shadow-lg"
        >
          <Sparkles className="h-5 w-5 mr-2" />
          New Message
        </motion.button>
      </div>
    </div>
  )
}

export default EmptyState

