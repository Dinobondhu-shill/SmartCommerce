"use client"

import { useState } from "react"
import { Minus, Plus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

export default function Checkout() {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("36")
  const [promoCode, setPromoCode] = useState("")

  const originalPrice = 150
  const salePrice = 75
  const subtotal = salePrice * quantity

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1)
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handlePromoCodeSubmit = (e) => {
    e.preventDefault()
    console.log("Applying promo code:", promoCode)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-3xl mx-auto px-4 py-6">
        {/* Mobile View */}
        <div className="md:hidden">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-[#1a1a1a] text-lg font-medium">Subtotal: ${subtotal}</h2>
              <span className="text-sm text-gray-600">{quantity} item in the basket</span>
            </div>
            <div className="flex gap-2 mb-6">
              <Link className="flex-1 bg-white text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-gray-100">
                Sign in & checkout
              </Link>
              <Link to={"/guest-checkout"} className="flex-1 bg-[#1a1a1a] text-white hover:bg-[#333]">Guest checkout</Link>
            </div>
          </div>

          <Card className="border-none shadow-none mb-6">
            <CardContent className="p-0">
              <div className="relative mb-4">
                <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-0.5">SALE</span>
                <img
                  src="https://i.ibb.co.com/dGb1pww/smar-watch.jpg"
                  alt="Huarache Flyknit"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">Huarache Flyknit</h3>
                <div className="flex items-center gap-2">
                  <span className="font-medium">${salePrice}</span>
                  <span className="text-gray-500 line-through">${originalPrice}</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 3 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="size">Size</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger id="size" className="border-[1.5px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[35, 36, 37, 38, 39, 40].map((size) => (
                        <SelectItem key={size} value={size.toString()}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Amount</Label>
                  <div className="flex items-center border-[1.5px] rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-none"
                      onClick={() => handleQuantityChange("decrement")}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 text-center">{quantity}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-none"
                      onClick={() => handleQuantityChange("increment")}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h4 className="font-medium">Promo code</h4>
            <form onSubmit={handlePromoCodeSubmit} className="flex gap-2">
              <Input
                placeholder="Enter code here"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border-[1.5px]"
              />
              <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 min-w-[80px]">
                Apply
              </Button>
            </form>
            <Button variant="link" className="p-0 h-auto text-blue-500 hover:text-blue-600">
              Check codes
            </Button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-none mb-6">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="relative w-48">
                    <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-0.5">SALE</span>
                    <img
                      src="https://i.ibb.co.com/dGb1pww/smar-watch.jpg"
                      alt="Huarache Flyknit"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-medium">Huarache Flyknit</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-medium">${salePrice}</span>
                      <span className="text-gray-500 line-through">${originalPrice}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < 3 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="size-desktop">Size</Label>
                        <Select value={size} onValueChange={setSize}>
                          <SelectTrigger id="size-desktop" className="border-[1.5px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[35, 36, 37, 38, 39, 40].map((size) => (
                              <SelectItem key={size} value={size.toString()}>
                                {size}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Quantity</Label>
                        <div className="flex items-center border-[1.5px] rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-none"
                            onClick={() => handleQuantityChange("decrement")}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <div className="flex-1 text-center">{quantity}</div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-none"
                            onClick={() => handleQuantityChange("increment")}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 p-6">
              <h4 className="font-medium">Promo code</h4>
              <form onSubmit={handlePromoCodeSubmit} className="flex gap-2 max-w-md">
                <Input
                  placeholder="Enter code here"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="border-[1.5px]"
                />
                <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 min-w-[80px]">
                  Apply
                </Button>
              </form>
              <Button variant="link" className="p-0 h-auto text-blue-500 hover:text-blue-600">
                Check codes
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-none shadow-none sticky top-6">
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-[#1a1a1a] text-xl font-medium">Subtotal: ${subtotal}</h2>
                    <span className="text-sm text-gray-600">{quantity} item in the basket</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex flex-col gap-3">
                   <Link> <Button className="w-full bg-white text-[#1a1a1a] border-[1.5px] border-[#1a1a1a] hover:bg-gray-100">
                      Sign in & checkout
                    </Button> </Link>
                    <Link to={'/guest-checkout'}><Button className="w-full bg-[#1a1a1a] text-white hover:bg-[#333]">Guest checkout</Button></Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

