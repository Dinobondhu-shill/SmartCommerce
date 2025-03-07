"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  MessageCircle,
  Star,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Review from "./Review/ProductReview";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("xl");
//   const [selectedMaterial, setSelectedMaterial] = useState("silk");
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
    "https://i.ibb.co.com/MGvVR6g/headphone.jpg",
    "https://i.ibb.co.com/h2BqX5r/camera.jpg",
    "https://i.ibb.co.com/CBG11pM/speaker.jpg",
  ];

  const colors = [
    { id: "black", name: "Black", class: "bg-black" },
    { id: "turquoise", name: "Turquoise", class: "bg-[#40E0D0]" },
    { id: "orange", name: "Orange", class: "bg-orange-400" },
  ];

  const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

//   const materials = ["Cotton", "Silk", "Linen", "Nylon", "Polyester"];

  const features = [
    { icon: "✓", text: "Microfiber Woven Fabric" },
    { icon: "✓", text: "Regular fit" },
    { icon: "✓", text: "Peak Lapels" },
    { icon: "✓", text: "Drop Shoulders" },
    { icon: "✓", text: "Button Cuffs" },
    { icon: "✓", text: "Front illusion welt pocket" },
    { icon: "✓", text: "98% polyester 2% elastane" },
    { icon: "✓", text: "Dry clean" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">


      <div className="grid md:grid-cols-2 gap-10 mb-12 px-5 md:px-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative  bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[currentImage] || "/placeholder.svg"}
              alt="Product image"
              className="w-full h-[450px] object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={cn(
                  "aspect-square rounded-lg overflow-hidden",
                  currentImage === idx
                    ? "ring-2 ring-purple-600"
                    : "ring-1 ring-gray-200"
                )}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Product thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Eclipse Zenith Strapback
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold">$499.00</span>
                <span className="text-gray-500 line-through ml-2">$626.00</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                {[...Array(1)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gray-300" />
                ))}
                <span className="text-sm text-gray-500 ml-2">288 reviews</span>
              </div>
            </div>
            <p className="text-gray-600">
              Crafted with precision and style, this cap offers a sleek,
              structured silhouette, ensuring both style and comfort. Its
              adjustable strapback closure guarantees a perfect fit for all-day
              wear.
            </p>
          </div>

          {/* Color Selection */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Color:</span>
              <span className="text-gray-600 capitalize">{selectedColor}</span>
            </div>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={cn(
                    "w-8 h-8 rounded-full",
                    color.class,
                    selectedColor === color.id
                      ? "ring-2 ring-purple-600 ring-offset-2"
                      : ""
                  )}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Size:</span>
              <span className="text-gray-600 uppercase">{selectedSize}</span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "h-10 text-sm font-medium rounded-md border",
                    selectedSize === size
                      ? "border-purple-600 bg-purple-50 text-purple-600"
                      : "border-gray-200 hover:border-purple-600"
                  )}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Material Selection
          <div className="space-y-4">
            <span className="font-medium">Material:</span>
            <div className="flex flex-wrap gap-2">
              {materials.map((material) => (
                <Badge
                  key={material}
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    selectedMaterial === material.toLowerCase()
                      ? "bg-purple-50 text-purple-600 border-purple-600"
                      : "hover:border-purple-600"
                  )}
                  onClick={() => setSelectedMaterial(material.toLowerCase())}
                >
                  {material}
                </Badge>
              ))}
            </div>
          </div> */}
          <div className="space-y-4 w-1/4">
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

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Add to cart
              </Button>
              <Button variant="outline" className="w-full">
                Buy Now
              </Button>
            </div>
            <div className="flex justify-between">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Heart className="w-4 h-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="space-y-8">
        <TabsList className="border-b  w-full justify-start rounded-full h-auto p-0 space-x-5">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            Product Description
          </TabsTrigger>
     
          <TabsTrigger
            value="feedback"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            FeedBacks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <ul className="grid gap-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-600">{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Size & Fit</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <table className="w-full">
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
          </div>
        </TabsContent>

        <TabsContent value="feedback">
        <Review />
        </TabsContent>
      </Tabs>
    </div>
  );
}
