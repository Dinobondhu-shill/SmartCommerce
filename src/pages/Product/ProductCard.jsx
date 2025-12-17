"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Eye, Star, Shield, CheckCircle, X, Minus, Plus, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [previewQuantity, setPreviewQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")

  // Sample product data
  const product = {
    id: "prod-001",
    name: "Premium Wireless Noise-Cancelling Headphones",
    slug: "premium-wireless-headphones",
    price: 199.99,
    originalPrice: 249.99,
    discountPercentage: 20,
    images: ["https://i.ibb.co.com/MGvVR6g/headphone.jpg", "https://i.ibb.co.com/dGb1pww/smar-watch.jpg"],
    description:
      "Experience unparalleled sound quality with our Premium Wireless Headphones. Featuring advanced noise-cancellation technology, these headphones block out ambient noise so you can focus on your music.",
    rating: 4.7,
    reviewCount: 128,
    isNew: false,
    isFeatured: true,
    isOnSale: true,
    isBestSeller: true,
    inStock: true,
    stockQuantity: 8,
    vendor: {
      id: "v1",
      name: "AudioTech Pro",
      slug: "audiotech-pro",
      isVerified: true,
      rating: 4.8,
    },
    category: "Electronics",
    variants: {
      colors: [
        { id: "black", name: "Black", hex: "#000000", inStock: true },
        { id: "silver", name: "Silver", hex: "#C0C0C0", inStock: true },
        { id: "blue", name: "Navy Blue", hex: "#000080", inStock: false },
      ],
    },
  }

  // Toggle between primary and secondary image on hover
  const handleMouseEnter = () => {
    setIsHovered(true)
    if (product.images.length > 1) {
      setCurrentImage(1)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCurrentImage(0)
  }

  const toggleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const addToCart = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    alert(`Added ${product.name} to cart`)
  }

  const buyNow = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    alert(`Proceeding to checkout with ${product.name}`)
  }

  const openQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowModal(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeQuickView = () => {
    setShowModal(false)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  const increaseQuantity = () => {
    if (previewQuantity < product.stockQuantity) {
      setPreviewQuantity(previewQuantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (previewQuantity > 1) {
      setPreviewQuantity(previewQuantity - 1)
    }
  }

  return (
    <>
      <div
        className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-xs mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Product badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1.5">
          {product.isOnSale && (
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">
              {product.discountPercentage ? `-${product.discountPercentage}%` : "SALE"}
            </span>
          )}
          {product.isNew && (
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">NEW</span>
          )}
          {product.isFeatured && (
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-purple-500 rounded">
              FEATURED
            </span>
          )}
          {product.isBestSeller && (
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-amber-500 rounded">
              BEST SELLER
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={toggleWishlist}
          className={`absolute top-2 right-2 z-10 p-1.5 rounded-full transition-all duration-300 ${
            isWishlisted ? "bg-red-50 text-red-500" : "bg-white/80 text-gray-500 hover:bg-white hover:text-red-500"
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500" : ""}`} />
        </button>

        {/* Product image */}
        <Link to={`/products/${product.slug}`} className="block relative pt-[100%]">
          <img
            src={product.images[currentImage] || "/placeholder.svg?height=300&width=300"}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          />

          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-black/80 text-white px-3 py-1.5 text-sm font-medium rounded">OUT OF STOCK</span>
            </div>
          )}

          {/* Quick action buttons - only show on hover */}
          <div
            className={`absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-3 bg-gradient-to-t from-black/50 to-transparent transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              className="h-8 w-8 rounded-full bg-white text-gray-700 hover:text-purple-600 hover:bg-white flex items-center justify-center"
              onClick={openQuickView}
              disabled={!product.inStock}
              title="Quick view"
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
            <button
              className="h-8 w-8 rounded-full bg-white text-gray-700 hover:text-purple-600 hover:bg-white flex items-center justify-center"
              onClick={addToCart}
              disabled={!product.inStock}
              title="Add to cart"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
            </button>
          </div>
        </Link>

        {/* Product info */}
        <div className="p-3 space-y-2">
          {/* Vendor info */}
          <div className="flex items-center gap-1.5">
            <Link
              to={`/vendors/${product.vendor.slug}`}
              className="text-xs text-purple-600 hover:text-purple-700 hover:underline transition-colors font-medium truncate max-w-[70%]"
            >
              {product.vendor.name}
            </Link>
            {product.vendor.isVerified && (
              <span title="Verified Seller">
                <CheckCircle className="h-3 w-3 text-blue-500" />
              </span>
            )}
            <span className="text-xs text-gray-400 ml-auto">{product.category}</span>
          </div>

          {/* Product name */}
          <Link to={`/product-details`} className="block">
            <h3 className="font-medium text-sm line-clamp-2 group-hover:text-purple-600 transition-colors min-h-[2.5rem]">
              {product.name}
            </h3>
          </Link>

          {/* Ratings */}
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-purple-600">${product.price.toFixed(2)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Stock indicator */}
            {product.inStock ? (
              product.stockQuantity && product.stockQuantity < 10 ? (
                <span className="text-xs text-amber-600">Only {product.stockQuantity} left</span>
              ) : (
                <span className="text-xs text-green-600 flex items-center gap-0.5">
                  <Shield className="h-3 w-3" /> In Stock
                </span>
              )
            ) : (
              <span className="text-xs text-red-500">Out of Stock</span>
            )}
          </div>

          {/* Action buttons - side by side */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button
              className="flex items-center justify-center gap-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md py-1.5 px-2 text-xs font-medium transition-colors"
              onClick={addToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-3 w-3" />
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="sm:hidden">Add</span>
            </button>
            <button
              className="flex items-center justify-center gap-1 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-md py-1.5 px-2 text-xs font-medium transition-colors"
              onClick={buyNow}
              disabled={!product.inStock}
            >
              <span className="hidden sm:inline">Buy Now</span>
              <span className="sm:hidden">Buy</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 md:p-6">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto relative">
            <button
              className="absolute top-3 right-3 z-10 p-1 rounded-full bg-white/80 hover:bg-gray-100 transition-colors"
              onClick={closeQuickView}
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="relative w-full md:w-1/2">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 md:h-full object-cover"
                />
                {product.isOnSale && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-6 w-full md:w-1/2 flex flex-col gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm text-purple-600 font-medium">{product.vendor.name}</span>
                  {product.vendor.isVerified && <CheckCircle className="w-3.5 h-3.5 text-blue-500" />}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{product.name}</h3>

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-base text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                <p className="text-sm text-gray-600">{product.description}</p>

                {/* Color Selection */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700">Colors:</span>
                  <div className="flex gap-2">
                    {product.variants.colors.map((color) => (
                      <button
                        key={color.id}
                        className={`w-8 h-8 rounded-full relative ${
                          !color.inStock ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                        } ${selectedColor === color.id ? "ring-2 ring-purple-600 ring-offset-2" : ""}`}
                        style={{ backgroundColor: color.hex }}
                        disabled={!color.inStock}
                        title={color.name}
                        onClick={() => color.inStock && setSelectedColor(color.id)}
                      >
                        {!color.inStock && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-0.5 bg-gray-400 rotate-45"></div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-purple-600 disabled:text-gray-300"
                        onClick={decreaseQuantity}
                        disabled={previewQuantity <= 1}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">{previewQuantity}</span>
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-purple-600 disabled:text-gray-300"
                        onClick={increaseQuantity}
                        disabled={previewQuantity >= product.stockQuantity}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {product.stockQuantity < 10 && (
                      <span className="ml-3 text-xs text-amber-600">Only {product.stockQuantity} left</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <button
                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2.5 px-4 text-sm font-medium transition-colors"
                    onClick={() => {
                      addToCart()
                      closeQuickView()
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-md py-2.5 px-4 text-sm font-medium transition-colors"
                    onClick={() => {
                      buyNow()
                      closeQuickView()
                    }}
                  >
                    Buy Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <Link to={`/products/${product.slug}`}
                  className="text-center text-sm text-gray-500 hover:text-purple-600 hover:underline mt-2"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCard

