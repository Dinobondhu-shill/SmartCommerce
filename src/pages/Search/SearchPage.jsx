"use client"

import { useState } from "react"
import {  Search, Sliders, Star, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const SearchPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000])

  // Mock data
  const suggestedSearches = ["Wireless Earbuds", "Smart Home Devices", "Fitness Trackers", "Laptop Accessories"]
  const popularCategories = ["Electronics", "Fashion", "Home & Garden", "Beauty", "Sports"]
  const recentlyViewed = [
    { id: 1, name: "Wireless Mouse", image: "https://i.ibb.co.com/h2BqX5r/camera.jpg", price: 29.99 },
    { id: 2, name: "Bluetooth Speaker", image: "https://i.ibb.co.com/h2BqX5r/camera.jpg", price: 59.99 },
    { id: 3, name: "USB-C Hub", image: "https://i.ibb.co.com/h2BqX5r/camera.jpg", price: 39.99 },
  ]

  const searchResults = [
    {
      id: 1,
      name: "Wireless Earbuds",
      image: "https://i.ibb.co.com/h2BqX5r/camera.jpg",
      price: 79.99,
      rating: 4.5,
      vendor: "TechGadgets",
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "https://i.ibb.co.com/h2BqX5r/camera.jpg",
      price: 199.99,
      rating: 4.2,
      vendor: "WearableTech",
    },
    {
      id: 3,
      name: "Portable Charger",
      image: "https://i.ibb.co.com/h2BqX5r/camera.jpg",
      price: 49.99,
      rating: 4.7,
      vendor: "PowerUp",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      image: "https://i.ibb.co.com/h2BqX5r/camera.jpg",
      price: 89.99,
      rating: 4.3,
      vendor: "SoundMasters",
    },
    {
      id: 5,
      name: "Noise-Cancelling Headphones",
      image: "https://i.ibb.co.com/h2BqX5r/camera.jpg",
      price: 249.99,
      rating: 4.8,
      vendor: "AudioPro",
    },
    {
      id: 6,
      name: "Wireless Mouse",
      image: "https://i.ibb.co.com/h2BqX5r/camera.jpg",
      price: 29.99,
      rating: 4.1,
      vendor: "TechGadgets",
    },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Search Products</h1> 
           <Link to="/"> <X  className="h-6 w-6" /></Link>
            <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsFilterOpen(true)}>
              <Sliders className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-4 relative">
            <Input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters for desktop */}
          <aside className="hidden lg:block w-64 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Price Range</label>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Vendor</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vendor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="techgadgets">TechGadgets</SelectItem>
                    <SelectItem value="wearabletech">WearableTech</SelectItem>
                    <SelectItem value="powerup">PowerUp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>
          </aside>

          {/* Filters for mobile */}
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Refine your search results</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">{/* Add the same filter content as desktop here */}</div>
            </SheetContent>
          </Sheet>

          {/* Search results and extra content */}
          <div className="flex-1 space-y-8">
            {/* Suggested searches */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Suggested Searches</h2>
              <div className="flex flex-wrap gap-2">
                {suggestedSearches.map((search, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Search results */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Search Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.vendor}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pagination */}
            <section className="flex justify-center mt-8">
              <Button variant="outline" className="mr-2">
                Previous
              </Button>
              <Button variant="outline" className="ml-2">
                Next
              </Button>
            </section>

            {/* Popular categories */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Categories</h2>
              <div className="flex flex-wrap gap-4">
                {popularCategories.map((category, index) => (
                  <Button key={index} variant="outline">
                    {category}
                  </Button>
                ))}
              </div>
            </section>

            {/* Recently viewed */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recently Viewed</h2>
              <div className="flex overflow-x-auto gap-4 pb-4">
                {recentlyViewed.map((item) => (
                  <div key={item.id} className="flex-shrink-0 w-40">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h3 className="mt-2 font-medium text-sm text-gray-900">{item.name}</h3>
                    <p className="text-sm text-primary font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SearchPage

