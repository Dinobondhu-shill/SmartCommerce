"use client"

import { ShoppingCart, Trash2, ArrowRight, Minus, Plus, ShoppingBag } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  // Sample cart data (grouped by vendors)
  const [cart, setCart] = useState([
    {
      vendor: "Tech World",
      items: [
        { id: 1, name: "Wireless Headphones", price: 50, qty: 1, image: "/placeholder.svg?height=200&width=200" },
        { id: 2, name: "Smart Watch", price: 70, qty: 2, image: "/placeholder.svg?height=200&width=200" },
      ],
    },
    {
      vendor: "Fashion Hub",
      items: [{ id: 3, name: "Leather Wallet", price: 30, qty: 1, image: "/placeholder.svg?height=200&width=200" }],
    },
  ])

  // Function to remove item
  const removeItem = (vendorIndex, itemIndex) => {
    const newCart = [...cart]
    newCart[vendorIndex].items.splice(itemIndex, 1)
    if (newCart[vendorIndex].items.length === 0) newCart.splice(vendorIndex, 1)
    setCart(newCart)
  }

  // Function to update quantity
  const updateQuantity = (vendorIndex, itemIndex, newQty) => {
    if (newQty < 1) return

    const newCart = [...cart]
    newCart[vendorIndex].items[itemIndex].qty = newQty
    setCart(newCart)
  }

  // Calculate cart totals
  const cartTotal = cart.reduce((total, vendor) => {
    return (
      total +
      vendor.items.reduce((vendorTotal, item) => {
        return vendorTotal + item.price * item.qty
      }, 0)
    )
  }, 0)

  const itemCount = cart.reduce((count, vendor) => {
    return (
      count +
      vendor.items.reduce((vendorItemCount, item) => {
        return vendorItemCount + item.qty
      }, 0)
    )
  }, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pb-24">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800 flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5 text-primary" />
            Your Cart
          </h1>
          <span className="bg-primary text-white text-sm font-medium px-2.5 py-0.5 rounded-full">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <ShoppingCart className="h-16 w-16 mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Your cart is empty</h3>
            <p className="text-slate-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link
              href="/products"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg font-medium transition-transform hover:scale-105"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Products Column - Takes 2/3 of the space on desktop */}
            <div className="lg:col-span-2 space-y-6">
              {/* Vendor sections */}
              {cart.map((vendor, vendorIndex) => (
                <div
                  key={vendor.vendor}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md"
                >
                  <div className="bg-gradient-to-r from-primary/10 to-transparent px-6 py-3 border-b border-slate-100">
                    <h3 className="font-semibold text-slate-800">{vendor.vendor}</h3>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {vendor.items.map((item, itemIndex) => (
                      <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 mx-auto sm:mx-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>

                        <div className="flex-1 text-center sm:text-left">
                          <h4 className="font-medium text-slate-800">{item.name}</h4>
                          <p className="text-primary font-semibold mt-1">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(vendorIndex, itemIndex, item.qty - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-l-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-10 h-8 flex items-center justify-center bg-slate-50 text-slate-800 font-medium border-y border-slate-100">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQuantity(vendorIndex, itemIndex, item.qty + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-r-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(vendorIndex, itemIndex)}
                            className="text-rose-500 hover:text-rose-600 transition-colors p-2 rounded-full hover:bg-rose-50"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Column - Takes 1/3 of the space on desktop */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 lg:sticky lg:top-24">
                <div className="bg-gradient-to-r from-primary/10 to-transparent px-6 py-3 border-b border-slate-100">
                  <h3 className="font-semibold text-slate-800">Order Summary</h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-600">
                      <span>
                        Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
                      </span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Tax</span>
                      <span>${(cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 mt-4">
                    <div className="flex justify-between font-semibold text-lg text-slate-800">
                      <span>Total</span>
                      <span>${(cartTotal + cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Including VAT</p>
                  </div>

                  <Link
                    href="/checkout"
                    className="mt-6 flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                  </Link>

                  <div className="mt-4 text-center">
                    <Link href="/products" className="text-primary hover:text-primary/80 text-sm font-medium">
                      Continue Shopping
                    </Link>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <h4 className="font-medium text-slate-700 mb-2">We Accept</h4>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-12 bg-slate-100 rounded"></div>
                      <div className="h-8 w-12 bg-slate-100 rounded"></div>
                      <div className="h-8 w-12 bg-slate-100 rounded"></div>
                      <div className="h-8 w-12 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

