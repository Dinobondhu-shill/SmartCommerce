"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Share2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export default function ProductCard({
  product = {
    id: 1,
    name: "iPhone 11 64GB Space Gray",
    image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
    price: 3599.0,
    originalPrice: 4299.0,
    specs: ["64GB Storage", "5.5 inch HD Retina"],
    warranty: "1 year Apple Malaysia Warranty",
    shipping: "1 Day Shipping",
    category: "gadget",
    tags: ["apple", "iphone", "smartphone"],
    likes: 128,
    inStock: true,
  },
}) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(product.likes)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1)
    } else {
      setLikeCount((prev) => prev + 1)
    }
    setIsLiked(!isLiked)
  }

  const handleAddToCart = () => {
    setIsAddedToCart(true)
    // Add to cart logic here
    setTimeout(() => setIsAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    // Buy now logic here
    console.log("Buy now clicked")
  }

  const handleShare = () => {
    // Share logic here
    console.log("Share clicked")
  }

  return (
    <Link to="/product-details" className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden max-w-sm">
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <Badge className="absolute top-4 left-4 z-10 bg-red-500 text-white">-{discountPercentage}% OFF</Badge>
      )}

      {/* More Options Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" /> Share
          </DropdownMenuItem>
          <DropdownMenuItem>Report Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">{product.name}</h3>

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-purple-600">RM {product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">RM {product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {product.specs.map((spec, index) => (
              <Badge key={index} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                {spec}
              </Badge>
            ))}
          </div>

          <p className="text-sm text-gray-600">{product.warranty}</p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              {product.shipping}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {product.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-gray-600 hover:bg-gray-50">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className={cn(
              "border-2",
              isAddedToCart
                ? "border-green-500 text-green-600 bg-green-50"
                : "border-purple-200 text-purple-600 hover:bg-purple-50",
            )}
            onClick={handleAddToCart}
          >
            <ShoppingCart className={cn("mr-2 h-4 w-4", isAddedToCart ? "text-green-600" : "text-purple-600")} />
            {isAddedToCart ? "Added!" : "Add to Cart"}
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>

        {/* Like Button */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors"
          >
            <Heart className={cn("h-5 w-5 transition-all", isLiked && "fill-purple-600 text-purple-600 scale-110")} />
            <span className="text-sm font-medium">
              {likeCount} {likeCount === 1 ? "like" : "likes"}
            </span>
          </button>

          {!product.inStock && (
            <Badge variant="outline" className="text-red-600 border-red-200">
              Out of Stock
            </Badge>
          )}
        </div>
      </div>
    </Link>
  )
}

