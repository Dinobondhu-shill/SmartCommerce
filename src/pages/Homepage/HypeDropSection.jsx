"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import {
  Clock,
  Flame,
  TrendingUp,
  Share2,
  ShoppingBag,
  Sparkles,
  Zap,
  Gift,
  Lock,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react"

// Custom confetti component using CSS
const Confetti = ({ active }) => {
  if (!active) return null

  return (
    <div className="confetti-container">
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 10 + 5
        const left = Math.random() * 100
        const animDuration = Math.random() * 3 + 2
        const delay = Math.random() * 0.5
        const color = [
          "#8B5CF6", // Purple
          "#EC4899", // Pink
          "#3B82F6", // Blue
          "#10B981", // Green
          "#F59E0B", // Yellow
        ][Math.floor(Math.random() * 5)]

        return (
          <div
            key={i}
            className="confetti-piece absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${left}%`,
              top: "-20px",
              opacity: 0,
              animation: `fall ${animDuration}s ease-in ${delay}s forwards`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        )
      })}
    </div>
  )
}

// Add this CSS style block after the imports
const confettiStyles = `
  @keyframes fall {
    0% {
      opacity: 1;
      top: -20px;
      transform: translateX(0) rotate(0deg);
    }
    100% {
      opacity: 0;
      top: 100%;
      transform: translateX(${Math.random() > 0.5 ? "-" : ""}${Math.random() * 100}px) rotate(${Math.random() * 360}deg);
    }
  }
  
  .confetti-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
    overflow: hidden;
  }
  
  .confetti-piece {
    position: absolute;
    border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
  }
`

// Sample drop data
const drops = [
  {
    id: "current",
    name: "Neon Dreams Collection",
    tagline: "Limited Edition Streetwear",
    description: "Exclusive drop featuring glow-in-the-dark designs and futuristic patterns.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=600&q=80",
    releaseDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    totalStock: 100,
    remainingStock: 37,
    basePrice: 89.99,
    maxDiscount: 40,
    socialCount: {
      likes: 12453,
      shares: 3782,
      comments: 1893,
    },
    influencers: [
      {
        name: "Alex Wave",
        handle: "@alexwave",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&q=80",
      },
      {
        name: "Mia Style",
        handle: "@miastyle",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&q=80",
      },
      {
        name: "Tyler Trend",
        handle: "@tylertrend",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&q=80",
      },
    ],
    variants: [
      { name: "Neon Hoodie", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&h=300&q=80" },
      { name: "Glow Tee", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&q=80" },
      { name: "Cyber Jacket", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&q=80" },
    ],
  },
  {
    id: "upcoming1",
    name: "Retro Gaming Capsule",
    tagline: "Nostalgia Reimagined",
    description: "Pixel art meets streetwear in this gaming-inspired collection.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&q=80",
    releaseDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    totalStock: 150,
    remainingStock: 150,
    basePrice: 79.99,
    maxDiscount: 35,
    socialCount: {
      likes: 8721,
      shares: 2134,
      comments: 943,
    },
    locked: true,
  },
  {
    id: "upcoming2",
    name: "Holographic Dreams",
    tagline: "Future Fashion Now",
    description: "Iridescent materials and futuristic designs that change with light and movement.",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=600&h=600&q=80",
    releaseDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    totalStock: 200,
    remainingStock: 200,
    basePrice: 99.99,
    maxDiscount: 30,
    socialCount: {
      likes: 6543,
      shares: 1432,
      comments: 721,
    },
    locked: true,
  },
]

// Social proof comments
const socialComments = [
  { user: "hype_beast98", comment: "These are straight fire! 🔥", time: "2m ago" },
  { user: "fashion_forward", comment: "Already copped mine! Can't wait!", time: "5m ago" },
  { user: "trend_setter", comment: "The glow effect is insane in person", time: "12m ago" },
  { user: "style_icon", comment: "Best drop of the season no cap", time: "18m ago" },
  { user: "urban_ninja", comment: "These will sell out in minutes", time: "25m ago" },
  { user: "future_nostalgia", comment: "The quality is next level", time: "32m ago" },
]

export default function HypeDropSection() {
  // Add this line at the top of the component
  const [showConfetti, setShowConfetti] = useState(false)

  const [activeTab, setActiveTab] = useState("current")
  const [timeLeft, setTimeLeft] = useState({})
  const [isSpinning, setIsSpinning] = useState(false)
  const [discount, setDiscount] = useState(null)
  const [claimed, setClaimed] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const spinWheelRef = useRef(null)
  const isMobile = useIsMobile()

  // Current drop data
  const currentDrop = drops.find((drop) => drop.id === "current")

  // Calculate time left
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = currentDrop.releaseDate - now

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentDrop])

  // Format time with leading zeros
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  // Calculate stock percentage
  const stockPercentage = (currentDrop.remainingStock / currentDrop.totalStock) * 100

  // Spin the wheel for discount
  const spinWheel = () => {
    if (isSpinning || claimed) return

    setIsSpinning(true)

    // Random rotation between 2 and 10 full spins plus a random angle
    const spins = 2 + Math.random() * 8
    const randomAngle = Math.random() * 360
    const totalRotation = spins * 360 + randomAngle

    // Calculate the final discount based on the random angle
    const calculatedDiscount = Math.floor((randomAngle / 360) * currentDrop.maxDiscount) + 5

    // Animate the wheel
    if (spinWheelRef.current) {
      spinWheelRef.current.style.transition = "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)"
      spinWheelRef.current.style.transform = `rotate(${totalRotation}deg)`
    }

    // Set the discount after animation
    setTimeout(() => {
      setDiscount(calculatedDiscount)
      setIsSpinning(false)
      setClaimed(true)

      // Replace the confetti call with:
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 4000)
    }, 4000)
  }

  // Add to cart with discount
  const addToCart = () => {
    const finalPrice = discount ? (currentDrop.basePrice * (100 - discount)) / 100 : currentDrop.basePrice
    alert(`Added ${currentDrop.name} to cart for $${finalPrice.toFixed(2)}!`)
  }

  // Share functionality
  const handleShare = (platform) => {
    alert(`Shared to ${platform}! (In a real app, this would open the ${platform} sharing dialog)`)
    setShowShareDialog(false)
  }

  return (
    <section className="py-5 px-4 md:px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900 text-black overflow-hidden relative">
      <style>{confettiStyles}</style>
      <Confetti active={showConfetti} />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
        

          <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="bg-white/10 p-1 w-full md:w-auto grid grid-cols-2 gap-1">
              <TabsTrigger value="current" className="data-[state=active]:bg-purple-600 text-white data-[state=active]:text-black">
                Live Now
              </TabsTrigger>
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-black text-white"
              >
                Upcoming
              </TabsTrigger>
             
            </TabsList>


            <TabsContent value="current" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <Card className="border-0 bg-gradient-to-r from-purple-700/50 to-fuchsia-700/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-3 lg:gap-6">
                {/* Product showcase */}
                <div className="relative p-1 md:p-4 flex flex-col">
                <Badge className="bg-gradient-to-r mb-3 from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-black px-3 py-1 text-xs font-semibold flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        HOT DROP
                      </Badge>

                  <div className="relative  rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-purple-900 to-black">
                    <img
                      src={currentDrop.image || "/placeholder.svg"}
                      alt={currentDrop.name}
                      className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex flex-col justify-end p-4">
                      <p className="text-black/90 font-medium text-sm md:text-base">{currentDrop.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {currentDrop.variants.map((variant, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-md overflow-hidden border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer"
                      >
                        <img
                          src={variant.image || "/placeholder.svg"}
                          alt={variant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                
                </div>

                {/* Interactive elements */}
                <div className="bg-gradient-to-br from-purple-800/50 to-fuchsia-800/50 p-3 md:p-6 flex flex-col">
                  <div className="mb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                   
                      <h3 className="text-2xl md:text-3xl font-bold mt-3">{currentDrop.name}</h3>
                      <p className="text-purple-200">{currentDrop.tagline}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-purple-200">Starting at</div>
                      <div className="text-2xl font-bold">${currentDrop.basePrice}</div>
                    </div>
                  </div>

                    
                    
                  </div>

                  {/* Discount wheel */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                      Spin for Discount
                    </h4>

                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <div
                        ref={spinWheelRef}
                        className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-400"
                        style={{
                          backgroundImage:
                            "conic-gradient(from 0deg, #ec4899 0deg, #8b5cf6 90deg, #3b82f6 180deg, #10b981 270deg, #ec4899 360deg)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-purple-900 flex items-center justify-center shadow-lg">
                          {discount !== null ? (
                            <div className="text-center">
                              <div className="text-3xl font-bold text-black">{discount}%</div>
                              <div className="text-xs text-purple-300">OFF</div>
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="text-sm text-purple-300">UP TO</div>
                              <div className="text-2xl font-bold text-black">{currentDrop.maxDiscount}%</div>
                              <div className="text-xs text-purple-300">OFF</div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
                    </div>

                    <div className="text-center mb-6">
                      {!claimed ? (
                        <Button
                          className={cn(
                            "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-black px-8",
                            isSpinning && "opacity-50 cursor-not-allowed",
                          )}
                          disabled={isSpinning}
                          onClick={spinWheel}
                        >
                          {isSpinning ? "Spinning..." : "Spin to Win"}
                        </Button>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-green-300 font-semibold">Congrats! You got {discount}% off this drop!</p>
                          <p className="text-sm text-purple-300">
                            New price: ${((currentDrop.basePrice * (100 - discount)) / 100).toFixed(2)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-black"
                        onClick={addToCart}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="border-purple-400 text-black hover:bg-purple-700">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Drop
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-purple-900 border-purple-700 text-black">
                          <DialogHeader>
                            <DialogTitle>Share this drop</DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-3 gap-4 py-4">
                            <Button
                              variant="outline"
                              className="flex flex-col items-center gap-2 h-auto py-4 border-purple-600 hover:bg-purple-800"
                              onClick={() => handleShare("Instagram")}
                            >
                              <Instagram className="w-6 h-6" />
                              <span>Instagram</span>
                            </Button>
                            <Button
                              variant="outline"
                              className="flex flex-col items-center gap-2 h-auto py-4 border-purple-600 hover:bg-purple-800"
                              onClick={() => handleShare("Twitter")}
                            >
                              <Twitter className="w-6 h-6" />
                              <span>Twitter</span>
                            </Button>
                            <Button
                              variant="outline"
                              className="flex flex-col items-center gap-2 h-auto py-4 border-purple-600 hover:bg-purple-800"
                              onClick={() => handleShare("TikTok")}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                              </svg>
                              <span>TikTok</span>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div className="mt-auto space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span className="text-sm">Ends in:</span>
                      </div>
                      <div className="flex gap-1 text-xl font-mono font-bold">
                        <span className="bg-purple-800/50 px-2 py-1 rounded">{formatTime(timeLeft.hours)}</span>:
                        <span className="bg-purple-800/50 px-2 py-1 rounded">{formatTime(timeLeft.minutes)}</span>:
                        <span className="bg-purple-800/50 px-2 py-1 rounded">{formatTime(timeLeft.seconds)}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Remaining stock</span>
                        <span className="text-sm font-semibold">
                          {currentDrop.remainingStock}/{currentDrop.totalStock}
                        </span>
                      </div>
                      <Progress
                        value={stockPercentage}
                        className="h-2 bg-purple-900"
                        indicatorClassName={cn(
                          "bg-gradient-to-r",
                          stockPercentage > 50
                            ? "from-green-500 to-green-400"
                            : stockPercentage > 20
                              ? "from-yellow-500 to-yellow-400"
                              : "from-red-500 to-red-400",
                        )}
                      />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <div className="grid md:grid-cols-2 gap-6">
            {drops
              .filter((drop) => drop.id !== "current")
              .map((drop) => (
                <Card
                  key={drop.id}
                  className="border-0 bg-gradient-to-r from-purple-700/50 to-fuchsia-700/50 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={drop.image || "/placeholder.svg"}
                          alt={drop.name}
                          className={cn("w-full h-full object-cover", drop.locked ? "blur-sm filter grayscale" : "")}
                        />
                        {drop.locked && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/60 p-4 rounded-full">
                              <Lock className="w-8 h-8" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex flex-col justify-end p-6">
                        <Badge className="self-start mb-2 bg-purple-600 hover:bg-purple-700">Coming Soon</Badge>
                        <h3 className="text-xl font-bold">{drop.name}</h3>
                        <p className="text-purple-200">{drop.tagline}</p>

                        <div className="mt-4 flex justify-between items-center">
                          <div className="text-sm">
                            <div className="text-purple-300">Dropping in</div>
                            <div className="font-semibold">
                              {Math.ceil((drop.releaseDate - new Date()) / (1000 * 60 * 60 * 24))} days
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="border-purple-400 text-black hover:bg-purple-700"
                            onClick={() => alert("Reminder set! We'll notify you when this drop goes live.")}
                          >
                            Get Notified
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

      


          </Tabs>
        </div>

      </div>
    </section>
  )
}
