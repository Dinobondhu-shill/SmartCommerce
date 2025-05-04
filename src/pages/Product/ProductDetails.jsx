"use client"

import { useState, useEffect, useRef } from "react"
import { HelmetProvider, Helmet } from "react-helmet-async"
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
  ArrowLeft,
  Check,
  Truck,
  ShieldCheck,
  RefreshCw,
  Store,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import Review from "./Review/ProductReview"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { products } from '../../../public/products.js'
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ProductPage({ params }) {
  const productId = params?.id || "1"
  const product = products.find((p) => p.id === productId) || products[0]

  const [selectedColor, setSelectedColor] = useState(
    product.attributes.find((attr) => attr.name === "Color")?.values[0]?.value || null,
  )
  const [selectedSize, setSelectedSize] = useState(
    product.attributes.find((attr) => attr.name === "Size")?.values[0]?.value || null,
  )
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showColorTooltip, setShowColorTooltip] = useState(false)
  const [showSizeTooltip, setShowSizeTooltip] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const colorTooltipRef = useRef(null)
  const sizeTooltipRef = useRef(null)
  const isMobile = useIsMobile()

  // Get color and size attributes if they exist
  const colorAttribute = product.attributes.find((attr) => attr.name === "Color" && attr.visible)
  const sizeAttribute = product.attributes.find((attr) => attr.name === "Size" && attr.visible)

  const hasColors = colorAttribute && colorAttribute.values.length > 0
  const hasSizes = sizeAttribute && sizeAttribute.values.length > 0

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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      if (product.manageStock && quantity >= product.stockQuantity) {
        return // Don't allow more than available stock
      }
      setQuantity((prev) => prev + 1)
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (hasColors && !selectedColor) {
      setShowColorTooltip(true)
      colorTooltipRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }
    if (hasSizes && !selectedSize) {
      setShowSizeTooltip(true)
      sizeTooltipRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }
    // Add to cart logic here
    alert(
      `Added to cart: ${quantity} item(s) of ${product.name}${selectedColor ? `, color: ${selectedColor}` : ""}${selectedSize ? `, size: ${selectedSize.toUpperCase()}` : ""}`,
    )
  }

  const handleBuyNow = () => {
    if (hasColors && !selectedColor) {
      setShowColorTooltip(true)
      colorTooltipRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }
    if (hasSizes && !selectedSize) {
      setShowSizeTooltip(true)
      sizeTooltipRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }
    // Buy now logic here
    alert(
      `Proceeding to checkout: ${quantity} item(s) of ${product.name}${selectedColor ? `, color: ${selectedColor}` : ""}${selectedSize ? `, size: ${selectedSize.toUpperCase()}` : ""}`,
    )
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  
  // Calculate price display
  const displayPrice = product.hasDiscount ? product.discountedPrice : product.regularPrice

  const regularPrice = product.hasDiscount ? product.regularPrice : null

  // Calculate discount percentage if applicable
  const discountPercentage =
    product.hasDiscount && product.discountType === "percentage"
      ? product.discountValue
      : product.hasDiscount && product.regularPrice && product.discountedPrice
        ? Math.round(((product.regularPrice - product.discountedPrice) / product.regularPrice) * 100)
        : null

  // Stock status
  const inStock = !product.manageStock || product.stockQuantity > 0
  const lowStock = product.manageStock && product.stockQuantity <= product.lowStockThreshold

  // Format stock message
  const getStockMessage = () => {
    if (!inStock) return "Out of Stock"
    if (lowStock) return `Low Stock: Only ${product.stockQuantity} left`
    if (product.manageStock) return `In Stock: ${product.stockQuantity} available`
    return "In Stock"
  }

  // Get stock badge variant
  const getStockBadgeVariant = () => {
    if (!inStock) return "destructive"
    if (lowStock) return "warning"
    return "outline"
  }

  // Get stock badge color classes
  const getStockBadgeClasses = () => {
    if (!inStock) return "bg-red-50 text-red-600 border-red-200"
    if (lowStock) return "bg-amber-50 text-amber-600 border-amber-200"
    return "bg-green-50 text-green-600 border-green-200"
  }

  return (
    <HelmetProvider>
      <div className="container mx-auto px-4 py-4 pb-24 md:pb-8">
        <Helmet>
          <title>{product.metaTitle || product.name}</title>
          <meta name="description" content={product.metaDescription || product.shortDescription} />
          <meta name="keywords" content={product.metaKeywords || product.tags.join(", ")} />
          {/* Open Graph tags */}
          <meta property="og:title" content={product.metaTitle || product.name} />
          <meta property="og:description" content={product.metaDescription || product.shortDescription} />
          <meta property="og:image" content={product.images[0]} />
          <meta property="og:type" content="product" />
          <meta property="og:price:amount" content={displayPrice.toString()} />
          <meta property="og:price:currency" content="USD" />
          <meta property="og:availability" content={inStock ? "instock" : "outofstock"} />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={product.metaTitle || product.name} />
          <meta name="twitter:description" content={product.metaDescription || product.shortDescription} />
          <meta name="twitter:image" content={product.images[0]} />
        </Helmet>

        {/* Back button */}
        <Button
          variant="ghost"
          size="xl"
          className="mb-4  text-gray-600 hover:text-purple-600 hover:bg-purple-50 -ml-2 transition-all duration-300"
          
        >
         <Link className="flex items-center gap-2" to={'/'}>
         <ArrowLeft className="w-4 h-4 mr-1" />
         Back</Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12 px-0 md:px-10">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              {product.hasDiscount && discountPercentage && (
                <Badge className="absolute top-3 left-3 z-10 bg-purple-600 hover:bg-purple-700">
                  {discountPercentage}% OFF
                </Badge>
              )}
              {product.featured && (
                <Badge className="absolute top-3 right-3 z-10 bg-amber-500 hover:bg-amber-600">Featured</Badge>
              )}
              <img
                src={product.images[currentImage] || "/placeholder.svg?height=450&width=450"}
                alt={`${product.name} - Image ${currentImage + 1}`}
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow-md transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow-md transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Mobile image indicator dots */}
              {isMobile && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                  {product.images.map((_, idx) => (
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
            {!isMobile && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={cn(
                      "aspect-square rounded-lg overflow-hidden transition-all duration-300",
                      currentImage === idx ? "ring-2 ring-purple-600" : "ring-1 ring-gray-200 hover:ring-purple-300",
                    )}
                  >
                    <img
                      src={img || "/placeholder.svg?height=100&width=100"}
                      alt={`${product.name} - Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Thumbnails - Mobile */}
            {isMobile && product.images.length > 1 && (
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 min-w-max">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={cn(
                        "w-16 h-16 rounded-md overflow-hidden flex-shrink-0 transition-all duration-300",
                        currentImage === idx ? "ring-2 ring-purple-600" : "ring-1 ring-gray-200 hover:ring-purple-300",
                      )}
                    >
                      <img
                        src={img || "/placeholder.svg?height=64&width=64"}
                        alt={`${product.name} - Thumbnail ${idx + 1}`}
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
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={getStockBadgeVariant()} className={cn("text-xs", getStockBadgeClasses())}>
                      {getStockMessage()}
                    </Badge>
                    <span className="text-xs text-gray-500">SKU: {product.sku}</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                </div>

                {/* Desktop wishlist button */}
                {!isMobile && (
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "rounded-full transition-all duration-300",
                      isWishlisted
                        ? "bg-red-50 text-red-500 border-red-200"
                        : "text-gray-700 hover:text-purple-600 hover:border-purple-300",
                    )}
                    onClick={toggleWishlist}
                  >
                    <Heart className={cn("w-5 h-5", isWishlisted && "fill-red-500")} />
                  </Button>
                )}

                {/* Mobile wishlist button */}
                {isMobile && (
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "h-9 w-9 rounded-full transition-all duration-300",
                      isWishlisted
                        ? "bg-red-50 text-red-500 border-red-200"
                        : "text-gray-700 hover:text-purple-600 hover:border-purple-300",
                    )}
                    onClick={toggleWishlist}
                  >
                    <Heart className={cn("w-4 h-4", isWishlisted && "fill-red-500")} />
                  </Button>
                )}
              </div>

              {/* Price and Ratings */}
              <div className="flex items-center gap-4 mb-3 md:mb-4">
                <div className="flex items-center">
                  <span className="text-xl md:text-2xl font-bold text-purple-600">${displayPrice}</span>
                  {regularPrice && (
                    <span className="text-gray-500 line-through ml-2 text-sm md:text-base">${regularPrice}</span>
                  )}
                </div>
                {product.enableReviews && (
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {[...Array(1)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-gray-300" />
                    ))}
                    <span className="text-xs md:text-sm text-gray-500 ml-1 md:ml-2">288 reviews</span>
                  </div>
                )}
              </div>

              {/* Short Description */}
              <p className="text-gray-600 text-sm md:text-base">{product.shortDescription}</p>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <Tag className="w-4 h-4 text-gray-500" />
                {product.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Vendor Information */}
            {product.vendor && (
              <div className="bg-gray-50 rounded-lg p-3 flex items-start gap-3">
                <Store className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">
                    Sold by: <span className="text-purple-600">{product.vendor}</span>
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">Official Store • 98% Positive Feedback</p>
                </div>
              </div>
            )}

            {/* Shipping & Returns Info */}
            <div className="grid grid-cols-3 gap-3 py-2">
              <div className="flex flex-col items-center text-center p-2 rounded-lg border border-gray-100 bg-gray-50 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                <Truck className="w-5 h-5 text-purple-600 mb-1" />
                <span className="text-xs font-medium">Free Shipping</span>
                <span className="text-xs text-gray-500">Over $100</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg border border-gray-100 bg-gray-50 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                <ShieldCheck className="w-5 h-5 text-purple-600 mb-1" />
                <span className="text-xs font-medium">Secure Payment</span>
                <span className="text-xs text-gray-500">100% Protected</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg border border-gray-100 bg-gray-50 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                <RefreshCw className="w-5 h-5 text-purple-600 mb-1" />
                <span className="text-xs font-medium">Easy Returns</span>
                <span className="text-xs text-gray-500">30 Days</span>
              </div>
            </div>

            {/* Color Selection - Only show if colors exist */}
            {hasColors && (
              <div className="space-y-3 md:space-y-4" ref={colorTooltipRef}>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Color:</span>
                  <span className="text-gray-600 capitalize">{selectedColor}</span>
                </div>
                <div className="flex gap-3 relative">
                  {colorAttribute.values.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.value)}
                      className={cn(
                        "w-8 h-8 rounded-full transition-all duration-300",
                        color.class || `bg-[${color.hex || "#000000"}]`,
                        selectedColor === color.value
                          ? "ring-2 ring-purple-600 ring-offset-2"
                          : "hover:ring-1 hover:ring-purple-300 hover:ring-offset-1",
                      )}
                      title={color.value}
                    >
                      {selectedColor === color.value && <Check className="w-4 h-4 text-white mx-auto" />}
                    </button>
                  ))}

                  {showColorTooltip && (
                    <div className="absolute -top-12 left-0 right-0 bg-red-50 text-red-600 text-xs p-2 rounded-md border border-red-200 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Please select a color before proceeding
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Size Selection - Only show if sizes exist */}
            {hasSizes && (
              <div className="space-y-3 md:space-y-4" ref={sizeTooltipRef}>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Size:</span>
                  <span className="text-gray-600 uppercase">{selectedSize}</span>
                </div>
                <div className="grid grid-cols-6 gap-2 relative">
                  {sizeAttribute.values.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.value)}
                      className={cn(
                        "h-9 md:h-10 text-xs md:text-sm font-medium rounded-md border transition-all duration-300",
                        selectedSize === size.value
                          ? "border-purple-600 bg-purple-50 text-purple-600"
                          : "border-gray-200 hover:border-purple-600",
                      )}
                    >
                      {size.value.toUpperCase()}
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
            )}

            {/* Quantity Selector */}
            <div className="space-y-2 md:space-y-4 w-1/3 md:w-1/4">
              <div className="flex items-center justify-between">
                <Label className="text-sm md:text-base">Quantity</Label>
                {product.manageStock && (
                  <span className="text-xs text-gray-500">{product.stockQuantity} available</span>
                )}
              </div>
              <div className="flex items-center border-[1.5px] rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 md:h-9 w-8 md:w-9 rounded-none transition-all duration-300"
                  onClick={() => handleQuantityChange("decrement")}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
                <div className="flex-1 text-center text-sm md:text-base">{quantity}</div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 md:h-9 w-8 md:w-9 rounded-none transition-all duration-300"
                  onClick={() => handleQuantityChange("increment")}
                  disabled={product.manageStock && quantity >= product.stockQuantity}
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
                        <Button
                          className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                          onClick={handleAddToCart}
                          disabled={!inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
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
                          className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300"
                          onClick={handleBuyNow}
                          disabled={!inStock}
                        >
                          Buy Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Proceed directly to checkout</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "transition-all duration-300",
                      isWishlisted
                        ? "text-red-500 hover:text-red-600 hover:bg-red-50"
                        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50",
                    )}
                    onClick={toggleWishlist}
                  >
                    <Heart className={cn("w-4 h-4 mr-2", isWishlisted && "fill-red-500")} />
                    {isWishlisted ? "Wishlisted" : "Wishlist"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            )}

            {/* Mobile Action Buttons - Secondary */}
            {isMobile && (
              <div className="flex justify-between pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 p-0 hover:text-purple-600 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  <span className="text-xs">Chat</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "p-0 transition-all duration-300",
                    isWishlisted ? "text-red-500" : "text-gray-600 hover:text-purple-600",
                  )}
                  onClick={toggleWishlist}
                >
                  <Heart className={cn("w-4 h-4 mr-1.5", isWishlisted && "fill-red-500")} />
                  <span className="text-xs">{isWishlisted ? "Wishlisted" : "Wishlist"}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 p-0 hover:text-purple-600 transition-all duration-300"
                >
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
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 text-sm md:text-base transition-all duration-300"
            >
              Product Description
            </TabsTrigger>

            {product.enableReviews && (
              <TabsTrigger
                value="feedback"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 text-sm md:text-base transition-all duration-300"
              >
                Feedbacks
              </TabsTrigger>
            )}

            <TabsTrigger
              value="shipping"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 text-sm md:text-base transition-all duration-300"
            >
              Shipping & Returns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-6 md:space-y-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Product Details</h3>
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none text-gray-600">{product.description}</div>

                  {product.attributes.filter((attr) => attr.visible && attr.name !== "Color" && attr.name !== "Size")
                    .length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Specifications</h4>
                      <ul className="space-y-2">
                        {product.attributes
                          .filter((attr) => attr.visible && attr.name !== "Color" && attr.name !== "Size")
                          .map((attr, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              <div>
                                <span className="font-medium">{attr.name}: </span>
                                <span>{attr.values.map((v) => v.value).join(", ")}</span>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {hasSizes && (
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Size & Fit</h3>
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg hover:bg-purple-50 transition-all duration-300">
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
              )}
            </div>
          </TabsContent>

          {product.enableReviews && (
            <TabsContent value="feedback">
              <Review />
            </TabsContent>
          )}

          <TabsContent value="shipping" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-base md:text-lg font-semibold">Shipping Information</h3>
                <div className="space-y-3 text-sm md:text-base">
                  <p>We offer the following shipping options:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <div>
                        <span className="font-medium">Standard Shipping (3-5 business days)</span>
                        <p className="text-gray-600">Free for orders over $100, otherwise $8.99</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <div>
                        <span className="font-medium">Express Shipping (1-2 business days)</span>
                        <p className="text-gray-600">$14.99 for all orders</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base md:text-lg font-semibold">Return Policy</h3>
                <div className="space-y-3 text-sm md:text-base">
                  <p>We want you to be completely satisfied with your purchase:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <div>
                        <span className="font-medium">30-Day Returns</span>
                        <p className="text-gray-600">Return unworn items within 30 days for a full refund</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <div>
                        <span className="font-medium">Exchanges</span>
                        <p className="text-gray-600">Free exchanges for different sizes or colors</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Sticky Bottom Buttons - Both Mobile and Desktop */}
        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg transition-all duration-300",
            isMobile ? "py-3 px-4" : "py-4 px-6",
          )}
        >
          <div className="container mx-auto flex items-center gap-3 max-w-6xl">
            {/* Wishlist button - Desktop only */}
            {!isMobile && (
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "rounded-full h-10 w-10 flex-shrink-0 transition-all duration-300",
                  isWishlisted
                    ? "bg-red-50 text-red-500 border-red-200"
                    : "text-gray-700 hover:text-purple-600 hover:border-purple-300",
                )}
                onClick={toggleWishlist}
              >
                <Heart className={cn("w-5 h-5", isWishlisted && "fill-red-500")} />
              </Button>
            )}

            {/* Product info - Desktop only */}
            {!isMobile && (
              <div className="flex items-center gap-3 flex-1">
                <img
                  src={product.images[0] || "/placeholder.svg?height=40&width=40"}
                  alt={`${product.name} thumbnail`}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-medium text-sm truncate">{product.name}</h3>
                  <p className="text-purple-600 text-sm font-semibold">${displayPrice}</p>
                </div>
              </div>
            )}

            <Button
              variant="outline"
              className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300"
              onClick={handleAddToCart}
              disabled={!inStock}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>

            <Button
              className="flex-1 bg-purple-600 hover:bg-purple-700 transition-all duration-300"
              onClick={handleBuyNow}
              disabled={!inStock}
            >
              Buy Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

