"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  MessageCircle,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  ArrowRight,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import Review from "./Review/ProductReview"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("xl")
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [showColorTooltip, setShowColorTooltip] = useState(false)
  const [showSizeTooltip, setShowSizeTooltip] = useState(false)
  const colorTooltipRef = useRef(null)
  const sizeTooltipRef = useRef(null)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial checks
    checkIfMobile()

    // Add event listeners
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Hide tooltips after a delay
  useEffect(() => {
    if (showColorTooltip) {
      const timer = setTimeout(() => {
        setShowColorTooltip(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showColorTooltip])

  useEffect(() => {
    if (showSizeTooltip) {
      const timer = setTimeout(() => {
        setShowSizeTooltip(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showSizeTooltip])

  const images = [
    "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
    "https://i.ibb.co.com/MGvVR6g/headphone.jpg",
    "https://i.ibb.co.com/h2BqX5r/camera.jpg",
    "https://i.ibb.co.com/CBG11pM/speaker.jpg",
  ]

  const colors = [
    { id: "black", name: "Black", class: "bg-black" },
    { id: "turquoise", name: "Turquoise", class: "bg-[#40E0D0]" },
    { id: "orange", name: "Orange", class: "bg-orange-400" },
  ]

  const sizes = ["xs", "s", "m", "l", "xl", "xxl"]

  const features = [
    { icon: "✓", text: "Microfiber Woven Fabric" },
    { icon: "✓", text: "Regular fit" },
    { icon: "✓", text: "Peak Lapels" },
    { icon: "✓", text: "Drop Shoulders" },
    { icon: "✓", text: "Button Cuffs" },
    { icon: "✓", text: "Front illusion welt pocket" },
    { icon: "✓", text: "98% polyester 2% elastane" },
    { icon: "✓", text: "Dry clean" },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1)
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (!selectedColor) {
      setShowColorTooltip(true)
      colorTooltipRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }
    if (!selectedSize) {
      setShowSizeTooltip(true)
      sizeTooltipRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }
    // Add to cart logic here
    alert(`Added to cart: ${quantity} item(s) in ${selectedColor} color, size ${selectedSize.toUpperCase()}`)
  }

  const handleBuyNow = () => {
    if (!selectedColor) {
      setShowColorTooltip(true)
      colorTooltipRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }
    if (!selectedSize) {
      setShowSizeTooltip(true)
      sizeTooltipRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }
    // Buy now logic here
    alert(`Proceeding to checkout: ${quantity} item(s) in ${selectedColor} color, size ${selectedSize.toUpperCase()}`)
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-24 md:pb-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12 px-0 md:px-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[currentImage] || "/placeholder.svg"}
              alt="Product image"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow-md"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow-md"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Mobile image indicator dots */}
            {isMobile && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full ${currentImage === idx ? "bg-purple-600" : "bg-white/70"}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnails - Desktop */}
          {!isMobile && (
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={cn(
                    "aspect-square rounded-lg overflow-hidden",
                    currentImage === idx ? "ring-2 ring-purple-600" : "ring-1 ring-gray-200",
                  )}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Product thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Thumbnails - Mobile */}
          {isMobile && (
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={cn(
                      "w-16 h-16 rounded-md overflow-hidden flex-shrink-0",
                      currentImage === idx ? "ring-2 ring-purple-600" : "ring-1 ring-gray-200",
                    )}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Product thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-5 md:space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Eclipse Zenith Strapback</h1>

              {/* Mobile wishlist button */}
              {isMobile && (
                <button className="p-2 rounded-full bg-gray-100">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4 mb-3 md:mb-4">
              <div className="flex items-center">
                <span className="text-xl md:text-2xl font-bold text-purple-600">$499.00</span>
                <span className="text-gray-500 line-through ml-2 text-sm md:text-base">$626.00</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(1)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-gray-300" />
                ))}
                <span className="text-xs md:text-sm text-gray-500 ml-1 md:ml-2">288 reviews</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Crafted with precision and style, this cap offers a sleek, structured silhouette, ensuring both style and
              comfort. Its adjustable strap back closure guarantees a perfect fit for all-day wear.
            </p>
          </div>

          {/* Color Selection */}
          <div className="space-y-3 md:space-y-4" ref={colorTooltipRef}>
            <div className="flex items-center justify-between">
              <span className="font-medium">Color:</span>
              <span className="text-gray-600 capitalize">{selectedColor}</span>
            </div>
            <div className="flex gap-3 relative">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={cn(
                    "w-8 h-8 rounded-full",
                    color.class,
                    selectedColor === color.id ? "ring-2 ring-purple-600 ring-offset-2" : "",
                  )}
                  title={color.name}
                />
              ))}

              {showColorTooltip && (
                <div className="absolute -top-12 left-0 right-0 bg-red-50 text-red-600 text-xs p-2 rounded-md border border-red-200 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Please select a color before proceeding
                </div>
              )}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-3 md:space-y-4" ref={sizeTooltipRef}>
            <div className="flex items-center justify-between">
              <span className="font-medium">Size:</span>
              <span className="text-gray-600 uppercase">{selectedSize}</span>
            </div>
            <div className="grid grid-cols-6 gap-2 relative">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "h-9 md:h-10 text-xs md:text-sm font-medium rounded-md border",
                    selectedSize === size
                      ? "border-purple-600 bg-purple-50 text-purple-600"
                      : "border-gray-200 hover:border-purple-600",
                  )}
                >
                  {size.toUpperCase()}
                </button>
              ))}

              {showSizeTooltip && (
                <div className="absolute -top-12 left-0 right-0 bg-red-50 text-red-600 text-xs p-2 rounded-md border border-red-200 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Please select a size before proceeding
                </div>
              )}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-2 md:space-y-4 w-1/3 md:w-1/4">
            <Label className="text-sm md:text-base">Quantity</Label>
            <div className="flex items-center border-[1.5px] rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 md:h-9 w-8 md:w-9 rounded-none"
                onClick={() => handleQuantityChange("decrement")}
              >
                <Minus className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
              <div className="flex-1 text-center text-sm md:text-base">{quantity}</div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 md:h-9 w-8 md:w-9 rounded-none"
                onClick={() => handleQuantityChange("increment")}
              >
                <Plus className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons - Desktop Only */}
          {!isMobile && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handleAddToCart}>
                        Add to cart
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add this item to your shopping cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                        onClick={handleBuyNow}
                      >
                        Buy Now
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Proceed directly to checkout</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex justify-between">
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}

          {/* Mobile Action Buttons - Secondary */}
          {isMobile && (
            <div className="flex justify-between pt-2">
              <Button variant="ghost" size="sm" className="text-gray-600 p-0">
                <MessageCircle className="w-4 h-4 mr-1.5" />
                <span className="text-xs">Chat</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 p-0">
                <Heart className="w-4 h-4 mr-1.5" />
                <span className="text-xs">Wishlist</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 p-0">
                <Share2 className="w-4 h-4 mr-1.5" />
                <span className="text-xs">Share</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="space-y-6 md:space-y-8">
        <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 space-x-5 bg-transparent overflow-x-auto">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 text-sm md:text-base"
          >
            Product Description
          </TabsTrigger>

          <TabsTrigger
            value="feedback"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 text-sm md:text-base"
          >
            Feedbacks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-6 md:space-y-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Product Details</h3>
              <ul className="grid gap-2 md:gap-3 text-sm md:text-base">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-600">{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Size & Fit</h3>
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                <table className="w-full text-sm md:text-base">
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2">Shoulder</td>
                      <td className="py-2 text-right">55cm/21.65in</td>
                    </tr>
                    <tr>
                      <td className="py-2">Bust</td>
                      <td className="py-2 text-right">150cm/59.05in</td>
                    </tr>
                    <tr>
                      <td className="py-2">Length</td>
                      <td className="py-2 text-right">85cm/46.85in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="feedback">
          <Review />
        </TabsContent>
      </Tabs>

      {/* Mobile Fixed Bottom Buttons */}
      {isMobile && (
        <div className="fixed bottom-14 left-0 right-0 px-4 z-50">
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md border border-gray-300 shadow-md rounded-lg p-2 flex items-center gap-2">
            <Button
              className="flex-1 bg-white border border-purple-500 text-purple-600 hover:bg-purple-100 hover:border-purple-700 shadow-sm rounded-md h-10 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>

            <Button
              className="flex-1 bg-purple-600 text-white hover:bg-purple-700 shadow-sm rounded-md h-10 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
              onClick={handleBuyNow}
            >
              Buy Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

