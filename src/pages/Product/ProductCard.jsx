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
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    setIsLiked(!isLiked)
  }

  const handleAddToCart = () => {
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)
  }

  return (
    <Link to="/product-details" className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden w-full sm:max-w-sm">
      {discountPercentage > 0 && (
        <Badge className="absolute top-3 left-3 bg-red-500 text-white text-xs md:text-sm px-2 py-1 rounded-md">
          -{discountPercentage}% OFF
        </Badge>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronDown className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Share2 className="mr-2 h-4 w-4" /> Share
          </DropdownMenuItem>
          <DropdownMenuItem>Report Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="bg-gray-100 flex justify-center items-center">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 sm:h-56 object-cover" />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-sm sm:text-base font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-purple-600">RM {product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">RM {product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {product.specs.map((spec, index) => (
            <Badge key={index} className="text-xs sm:text-sm bg-purple-50 text-purple-700 px-2 py-1">
              {spec}
            </Badge>
          ))}
        </div>

        <div className="pt-3 grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className={cn(
              "text-xs sm:text-sm border-2",
              isAddedToCart ? "border-green-500 text-green-600 bg-green-50" : "border-purple-200 text-purple-600 hover:bg-purple-50"
            )}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {isAddedToCart ? "Added!" : "Add to Cart"}
          </Button>
          <Button className="text-xs sm:text-sm bg-purple-600 hover:bg-purple-700 text-white" onClick={() => console.log("Buy now clicked")}>
            Buy Now
          </Button>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors text-xs sm:text-sm"
          >
            <Heart className={cn("h-4 w-4 transition-all", isLiked && "fill-purple-600 text-purple-600 scale-110")} />
            <span>{likeCount} {likeCount === 1 ? "like" : "likes"}</span>
          </button>

          {!product.inStock && (
            <Badge className="text-xs sm:text-sm text-red-600 border-red-200 px-2 py-1">Out of Stock</Badge>
          )}
        </div>
      </div>
    </Link>
  )
}
