"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, CreditCard } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export default function ComboSection() {
  // Sample data - replace with your actual data
  const comboPackage = {
    id: "combo-1",
    name: "Ultimate Wellness Package",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Get all three premium products at a special discounted price. Perfect for your wellness journey.",
    products: [
      {
        id: 1,
        name: "Vitamin Complex",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=300&h=300&auto=format&fit=crop",
        description: "Complete daily vitamin supplement for optimal health.",
      },
      {
        id: 2,
        name: "Protein Powder",
        price: 49.99,
        image: "https://i.ibb.co.com/jkHL3xXr/square.jpg",
        description: "High-quality protein for muscle recovery and growth.",
      },
      {
        id: 3,
        name: "Fitness Tracker",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=300&h=300&auto=format&fit=crop",
        description: "Track your activity, sleep, and wellness metrics.",
      },
    ],
  }

  // State to track the selected product
  const [selectedProduct, setSelectedProduct] = useState(null)
  const isMobile = useIsMobile()

  // Get the current product based on selection
  const currentProduct = selectedProduct !== null ? comboPackage.products.find((p) => p.id === selectedProduct) : null

  // Get the current main image based on selection
  const mainImage = currentProduct ? currentProduct.image : comboPackage.image

  // Handle add to cart
  const handleAddToCart = () => {
    alert(`Added ${currentProduct ? currentProduct.name : comboPackage.name} to cart!`)
  }

  // Handle buy now
  const handleBuyNow = () => {
    alert(`Proceeding to checkout for ${currentProduct ? currentProduct.name : comboPackage.name}!`)
  }

  return (
    <section className="py-12 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Our Special Combo Package</h2>
          <p className="text-muted-foreground mt-2">Get all these amazing products at a special price</p>
        </div>

        <div className={cn("grid gap-6", isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2")}>
          {/* Main product display */}
          <div className="space-y-4">
            <Card className="overflow-hidden border-2 border-primary/10 shadow-lg rounded-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={mainImage || "/placeholder.svg"}
                  alt={currentProduct ? currentProduct.name : comboPackage.name}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />

                {/* Always visible badge to return to combo view */}
                {selectedProduct !== null && (
                  <Badge
                    className="absolute top-4 left-4 bg-white/90 hover:bg-white text-primary cursor-pointer px-3 py-1.5 text-sm shadow-md"
                    onClick={() => setSelectedProduct(null)}
                  >
                    View Full Combo
                  </Badge>
                )}
              </div>
            </Card>

          
          </div>

          {/* Product selection */}
          <div className="space-y-4">

            <div className="grid grid-cols-3 gap-4">
              {comboPackage.products.map((product) => (
                <Card
                  key={product.id}
                  className={cn(
                    "cursor-pointer transition-all overflow-hidden",
                    selectedProduct === product.id
                      ? "ring-2 ring-primary shadow-lg transform scale-[1.02]"
                      : "hover:shadow-md hover:border-primary/30",
                  )}
                  onClick={() => setSelectedProduct(product.id === selectedProduct ? null : product.id)}
                >
                  <CardContent className="p-3">
                    <div className="relative aspect-square mb-3 overflow-hidden rounded-md">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-center">{product.name}</h4>
                      <p className="text-sm text-center text-primary font-semibold">${product.price.toFixed(2)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/50 border-dashed border-2">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Complete Package Value</h4>
                    <p className="text-sm text-muted-foreground">
                      Individual items total: $
                      {comboPackage.products.reduce((sum, product) => sum + product.price, 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">You save:</p>
                    <p className="font-bold text-purple-600">
                      $
                      {(
                        comboPackage.products.reduce((sum, product) => sum + product.price, 0) - comboPackage.price
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
          {/* Product info card - always visible */}
          <Card className="border-2 border-primary/10 my-5">
              <CardContent className="p-3 px-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{currentProduct ? currentProduct.name : comboPackage.name}</h3>
                    <p className="text-muted-foreground mt-1">
                      {currentProduct ? currentProduct.description : comboPackage.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-500">
                      ${currentProduct ? currentProduct.price.toFixed(2) : comboPackage.price.toFixed(2)}
                    </div>
                    {!currentProduct && (
                      <Badge className="bg-green-100 text-purple-800 hover:bg-purple-100">Save 25%</Badge>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-2">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button className="flex items-center justify-center gap-2" onClick={handleBuyNow}>
                    <CreditCard className="h-4 w-4" />
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
      </div>
    </section>
  )
}
