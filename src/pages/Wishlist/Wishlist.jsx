"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Trash2, Store, Star, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
        
      id: 1,
      name: "Eclipse Zenith Strapback",
      price: 499,
      originalPrice: 626,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
      vendor: {
        name: "Urban Threads",
        rating: 4.8,
        verified: true,
      },
      inStock: true,
      category: "Accessories",
      dateAdded: "2023-12-15",
    },
    {
      id: 2,
      name: "Meridian Leather Jacket",
      price: 1299,
      originalPrice: 1599,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
      vendor: {
        name: "Luxe Apparel",
        rating: 4.9,
        verified: true,
      },
      inStock: true,
      category: "Clothing",
      dateAdded: "2023-12-10",
    },
    {
      id: 3,
      name: "Quantum Wireless Earbuds",
      price: 199,
      originalPrice: 249,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
      vendor: {
        name: "TechElite",
        rating: 4.7,
        verified: true,
      },
      inStock: false,
      category: "Electronics",
      dateAdded: "2023-12-05",
    },
    {
      id: 4,
      name: "Artisan Ceramic Mug Set",
      price: 89,
      originalPrice: 120,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
      vendor: {
        name: "HomeStyle",
        rating: 4.6,
        verified: false,
      },
      inStock: true,
      category: "Home",
      dateAdded: "2023-11-28",
    },
    {
      id: 5,
      name: "Botanical Skincare Collection",
      price: 159,
      originalPrice: 199,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
      vendor: {
        name: "Natural Essence",
        rating: 4.9,
        verified: true,
      },
      inStock: true,
      category: "Beauty",
      dateAdded: "2023-11-20",
    },
  ])

  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    vendor: "all",
    inStock: false,
  })

  const [sortBy, setSortBy] = useState("dateAdded")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItems, setSelectedItems] = useState([])

  const categories = ["All", "Accessories", "Clothing", "Electronics", "Home", "Beauty"]
  const vendors = ["All", "Urban Threads", "Luxe Apparel", "TechElite", "HomeStyle", "Natural Essence"]

  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id))
  }

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleSelectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(filteredItems.map((item) => item.id))
    }
  }

  const handleMoveSelectedToCart = () => {
    console.log("Moving to cart:", selectedItems)
    // In a real app, you would add these items to the cart
    // and then remove them from the wishlist
    setWishlistItems(wishlistItems.filter((item) => !selectedItems.includes(item.id)))
    setSelectedItems([])
  }

  const handleRemoveSelected = () => {
    setWishlistItems(wishlistItems.filter((item) => !selectedItems.includes(item.id)))
    setSelectedItems([])
  }

  const handleFilterChange = (key, value) => {
    setActiveFilters({
      ...activeFilters,
      [key]: value,
    })
  }

  // Filter and sort items
  let filteredItems = [...wishlistItems]

  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filteredItems = filteredItems.filter(
      (item) => item.name.toLowerCase().includes(query) || item.vendor.name.toLowerCase().includes(query),
    )
  }

  // Apply category filter
  if (activeFilters.category !== "all") {
    filteredItems = filteredItems.filter((item) => item.category === activeFilters.category)
  }

  // Apply vendor filter
  if (activeFilters.vendor !== "all") {
    filteredItems = filteredItems.filter((item) => item.vendor.name === activeFilters.vendor)
  }

  // Apply in-stock filter
  if (activeFilters.inStock) {
    filteredItems = filteredItems.filter((item) => item.inStock)
  }

  // Apply sorting
  filteredItems.sort((a, b) => {
    switch (sortBy) {
      case "priceLow":
        return a.price - b.price
      case "priceHigh":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      case "dateAdded":
      default:
        return new Date(b.dateAdded) - new Date(a.dateAdded)
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-1">{wishlistItems.length} items saved for later</p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
              onClick={handleMoveSelectedToCart}
              disabled={selectedItems.length === 0}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Move to Cart
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-red-200 text-red-600 hover:bg-red-50"
              onClick={handleRemoveSelected}
              disabled={selectedItems.length === 0}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Remove
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="hidden md:block lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-medium flex items-center">
                      <Filter className="w-4 h-4 mr-2 text-purple-600" />
                      Filters
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="inStock"
                        checked={activeFilters.inStock}
                        onCheckedChange={(checked) => handleFilterChange("inStock", checked)}
                      />
                      <Label htmlFor="inStock">In Stock Only</Label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={
                              activeFilters.category === category.toLowerCase() ||
                              (activeFilters.category === "all" && category === "All")
                            }
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleFilterChange("category", category === "All" ? "all" : category)
                              }
                            }}
                          />
                          <Label htmlFor={`category-${category}`}>{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium">Vendors</h3>
                    <div className="space-y-2">
                      {vendors.map((vendor) => (
                        <div key={vendor} className="flex items-center space-x-2">
                          <Checkbox
                            id={`vendor-${vendor}`}
                            checked={
                              activeFilters.vendor === vendor || (activeFilters.vendor === "all" && vendor === "All")
                            }
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleFilterChange("vendor", vendor === "All" ? "all" : vendor)
                              }
                            }}
                          />
                          <Label htmlFor={`vendor-${vendor}`}>{vendor}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                    onClick={() => {
                      setActiveFilters({
                        category: "all",
                        vendor: "all",
                        inStock: false,
                      })
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Wishlist Items */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search your wishlist"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dateAdded">Date Added</SelectItem>
                    <SelectItem value="priceLow">Price: Low to High</SelectItem>
                    <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredItems.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="select-all"
                      checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                    <Label htmlFor="select-all">Select All</Label>
                  </div>
                  <div className="text-sm text-gray-500">
                    {selectedItems.length} of {filteredItems.length} selected
                  </div>
                </div>

                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      selectedItems.includes(item.id) ? "border-purple-300 bg-purple-50" : "",
                    )}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative sm:w-48 h-48">
                          <div className="absolute top-0 left-0 p-3 z-10">
                            <Checkbox
                              checked={selectedItems.includes(item.id)}
                              onCheckedChange={() => handleSelectItem(item.id)}
                              className="bg-white border-gray-300"
                            />
                          </div>
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                              <Badge className="bg-red-500 text-white">Out of Stock</Badge>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mr-2">
                                  {item.category}
                                </Badge>
                                {item.inStock ? (
                                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">In Stock</Badge>
                                ) : null}
                              </div>
                              <h3 className="font-medium text-lg">{item.name}</h3>
                              <div className="flex items-center gap-2">
                                <Store className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">{item.vendor.name}</span>
                                {item.vendor.verified && (
                                  <Badge
                                    variant="outline"
                                    className="text-blue-600 border-blue-200 bg-blue-50 h-5 text-xs"
                                  >
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{item.vendor.rating}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-purple-700">${item.price}</div>
                              {item.originalPrice > item.price && (
                                <div className="text-sm text-gray-500 line-through">${item.originalPrice}</div>
                              )}
                              <div className="text-sm text-gray-500 mt-1">
                                Added on {new Date(item.dateAdded).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white" disabled={!item.inStock}>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                            <Button
                              variant="outline"
                              className="border-red-200 text-red-600 hover:bg-red-50"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-dashed">
                <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-600 mb-6">Items you save will appear here. Start exploring our products!</p>
                <Button className="bg-purple-600 hover:bg-purple-700">Browse Products</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

