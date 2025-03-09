"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const products = [
  {
    
    id: 1,
    name: 'LG 29UC97-S 29" FHD IPS LED Monitor',
    image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
    description:
      "Professional monitor with stunning color accuracy and ultra-wide viewing angles. Perfect for content creators and professionals.",
    price: 98.0,
    originalPrice: 123.2,
    discount: 21,
    rating: 4.5,
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  },
  {
    id: 2,
    name: "Totam Rem Aperian Wireless Headphones",
    image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
    description: "Premium wireless headphones with active noise cancellation and exceptional sound quality.",
    price: 149.99,
    originalPrice: 299.99,
    discount: 50,
    rating: 4.8,
    endTime: new Date(Date.now() + 48 * 60 * 60 * 1000),
  },
  {
    id: 3,
    name: "Samsung 23UC97-S Ultra HD Display",
    image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
    description: "Immersive 4K display with quantum dot technology for vibrant colors and deep blacks.",
    price: 399.99,
    originalPrice: 899.99,
    discount: 55,
    rating: 4.7,
    endTime: new Date(Date.now() + 72 * 60 * 60 * 1000),
  },
  // Add more products as needed
]

function CountdownTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = new Date(endTime).getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [endTime])

  return (
    <div className="flex gap-4 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col">
          <div className="bg-gray-100 rounded-lg p-3 min-w-[70px]">
            <span className="text-2xl font-bold text-purple-600">{value.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-xs text-gray-500 mt-1 uppercase">{key}</span>
        </div>
      ))}
    </div>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-5 h-5",
            star <= Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : star - rating <= 0.5
                ? "fill-yellow-400/50 text-yellow-400"
                : "text-gray-300",
          )}
        />
      ))}
      <span className="text-sm text-gray-600 ml-2">{rating}</span>
    </div>
  )
}

export default function TodaysDeals() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef(null)

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + products.length) % products.length)
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      paginate(1)
    }, 10000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  const currentProduct = products[currentIndex]

  return (
    <div className="bg-gradient-to-br overflow-hidden from-purple-100 to-white py-8 relative">
      <div className="container px-2 md:px-4">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">Today's Deals</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="w-full h-[700px] md:h-[600px] border border-gray-400 overflow-hidden rounded-2xl bg-white shadow-lg">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full h-full"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative p-4 flex ">
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white text-lg py-1 px-3">
                    -{currentProduct.discount}%
                  </Badge>
                  <img
                    src={currentProduct.image || "/placeholder.svg"}
                    alt={currentProduct.name}
                    className="w-[280px] md:w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <div className="py-2 md:py-4 px-3 flex flex-col max-w-10/12 ">
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{currentProduct.name}</h3>
                    <StarRating rating={currentProduct.rating} />
                    <p className="text-gray-600 max-w-md">{currentProduct.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-purple-600">${currentProduct.price.toFixed(2)}</span>
                      <span className="text-lg text-gray-500 line-through">
                        ${currentProduct.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Hurry! Offer ends in:</h4>
                      <CountdownTimer endTime={currentProduct.endTime} />
                    </div>

                    <div className="flex gap-3">
                      <Button className=" bg-purple-600 hover:bg-purple-700 text-white">Buy Now</Button>
                      <Button
                        variant="outline"
                        className=" border-2 border-purple-200 text-purple-600 hover:bg-purple-50"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Product Thumbnails */}
        <div className="absolute bottom-10 left-6 z-50 mt-5 md:mt-0 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-4">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={cn(
                "relative rounded-lg overflow-hidden transition-all duration-200",
                index === currentIndex ? "ring-2 ring-purple-600 shadow-md" : "hover:ring-2 hover:ring-purple-200",
              )}
            >
              <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs">-{product.discount}%</Badge>
              <div className="aspect-square bg-white">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">View Deal</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

