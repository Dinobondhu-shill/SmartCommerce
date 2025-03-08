"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function FeaturedProducts() {
  const [weeklyPage, setWeeklyPage] = useState(0)
  const [featuredPage, setFeaturedPage] = useState(0)
  
  const weeklyProducts = [
    {
      id: 1,
      name: "Incididunt Cowlabore",
      price: 74.0,
      originalPrice: 122.0,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg?height=100&width=100",
    },
    {
      id: 2,
      name: "Elit Sunt Occaeca",
      price: 98.0,
      originalPrice: 122.0,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg?height=100&width=100",
    },
    {
      id: 3,
      name: "Hazen Dimapolan",
      price: 98.0,
      originalPrice: 122.0,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg?height=100&width=100",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Deserunt Molitia",
      price: 122.0,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg?height=100&width=100",
    },
    {
      id: 2,
      name: "Leona Sumerlis",
      price: 122.0,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg?height=100&width=100",
    },
    {
      id: 3,
      name: "Dail Mirentukan",
      price: 242.0,
      image: "https://i.ibb.co.com/dGb1pww/smar-watch.jpg?height=100&width=100",
    },
  ]

  const formatPrice = (price) => `$${price.toFixed(2)}`

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Weekly Products Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">WEEKLY PRODUCTS</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setWeeklyPage((p) => Math.max(0, p - 1))}
                disabled={weeklyPage === 0}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setWeeklyPage((p) => p + 1)}
                disabled={weeklyPage >= 2}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

         <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border border-gray-300 p-3">
         <div className="relative rounded-b-full col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-t from-purple-300 to-transparent text-center">
            <img
              src="https://i.ibb.co.com/dGb1pww/smar-watch.jpg?height=full&width=600"
              alt="Destination Dresses"
              fill
              className="object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6  text-white">
              <h3 className="text-2xl font-bold mb-2 text-purple-600">DESTINATION DRESSES</h3>
              <Link href="#" className="text-blue-700 hover:text-blue-800 inline-flex items-center">
                See More
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="space-y-2 col-span-1 md:col-span-2 lg:col-span-3">
            {weeklyProducts.map((product) => (
              <Card key={product.id} className="flex items-center p-4 gap-2">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">{formatPrice(product.price)}</span>
                    <span className="text-gray-400 line-through text-sm">{formatPrice(product.originalPrice)}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
         </div>
        </div>

        {/* Featured Products Section */}
      
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">FEATURED PRODUCTS</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setFeaturedPage((p) => Math.max(0, p - 1))}
                disabled={featuredPage === 0}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setFeaturedPage((p) => p + 1)}
                disabled={featuredPage >= 2}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border border-gray-300 p-3">
          <div className="relative rounded-b-full col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-t from-purple-300 to-transparent text-center">
            <img
              src="https://i.ibb.co.com/dGb1pww/smar-watch.jpg?height=400&width=600"
              alt="Sale & Service of Apple"
              fill
              className="object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">SALE & SERVICE OF APPLE</h3>
              <Link href="#" className="text-blue-700 hover:text-blue-800inline-flex items-center">
                See More
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="space-y-2 col-span-1 md:col-span-2 lg:col-span-3">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="flex items-center p-4 gap-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <span className="text-purple-600 font-bold">{formatPrice(product.price)}</span>
                </div>
              </Card>
            ))}
          </div>
            </div>
        
        </div>
      </div>
    </div>
  )
}

