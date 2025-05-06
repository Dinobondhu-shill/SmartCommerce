"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import {
  TrendingUp,
  Users,
  Globe,
  Zap,
  ShoppingBag,
  Star,
  Heart,
  Clock,
  Eye,
  ChevronRight,
  MapPin,
  Sparkles,
  Timer,
} from "lucide-react"

// Sample data for trending products
const trendingProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&q=80",
    heatLevel: 95,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&q=80",
    heatLevel: 87,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Designer Handbag",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&q=80",
    heatLevel: 82,
    category: "Fashion",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&q=80",
    heatLevel: 78,
    category: "Fashion",
  },
  {
    id: 5,
    name: "Ceramic Planter",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&q=80",
    heatLevel: 72,
    category: "Home",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&q=80",
    heatLevel: 68,
    category: "Electronics",
  },
]

// Sample data for community challenges
const communityChallenges = [
  {
    id: 1,
    title: "1,000 Orders Today",
    description: "When we reach 1,000 orders today, everyone gets 15% off their next purchase!",
    currentValue: 768,
    targetValue: 1000,
    reward: "15% OFF",
    icon: <ShoppingBag className="w-5 h-5" />,
    timeLeft: "5 hours",
  },
  {
    id: 2,
    title: "500 Reviews This Week",
    description: "Help us reach 500 reviews this week for a chance to win a $100 gift card!",
    currentValue: 342,
    targetValue: 500,
    reward: "$100 GIFT CARD",
    icon: <Star className="w-5 h-5" />,
    timeLeft: "3 days",
  },
  {
    id: 3,
    title: "2,000 Wishlist Adds",
    description: "When 2,000 items are added to wishlists, we'll release an exclusive collection!",
    currentValue: 1567,
    targetValue: 2000,
    reward: "EXCLUSIVE DROP",
    icon: <Heart className="w-5 h-5" />,
    timeLeft: "2 days",
  },
]

// Sample data for flash drops
const flashDrops = [
  {
    id: 1,
    name: "Limited Edition Sneakers",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=300&h=300&q=80",
    totalStock: 50,
    remainingStock: 12,
    endTime: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&q=80",
    totalStock: 30,
    remainingStock: 5,
    endTime: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5 hours from now
  },
  {
    id: 3,
    name: "Upcoming: Mystery Box",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1607166452427-5238056bae3f?w=300&h=300&q=80",
    totalStock: 100,
    remainingStock: 100,
    releaseTime: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours from now
  },
]

// Sample data for live activity
const generateRandomActivity = () => {
  const activities = [
    {
      type: "purchase",
      message: "just purchased",
      icon: <ShoppingBag className="w-4 h-4" />,
      iconColor: "text-green-500",
    },
    {
      type: "review",
      message: "left a 5-star review on",
      icon: <Star className="w-4 h-4" />,
      iconColor: "text-yellow-500",
    },
    {
      type: "wishlist",
      message: "added to wishlist",
      icon: <Heart className="w-4 h-4" />,
      iconColor: "text-red-500",
    },
    {
      type: "view",
      message: "is viewing",
      icon: <Eye className="w-4 h-4" />,
      iconColor: "text-blue-500",
    },
  ]

  const products = trendingProducts.concat([
    { id: 7, name: "Leather Wallet", price: 49.99 },
    { id: 8, name: "Fitness Tracker", price: 59.99 },
    { id: 9, name: "Portable Speaker", price: 39.99 },
    { id: 10, name: "Scented Candle Set", price: 29.99 },
  ])

  const locations = [
    "New York",
    "Los Angeles",
    "London",
    "Tokyo",
    "Paris",
    "Sydney",
    "Berlin",
    "Toronto",
    "Singapore",
    "Dubai",
  ]

  const randomActivity = activities[Math.floor(Math.random() * activities.length)]
  const randomProduct = products[Math.floor(Math.random() * products.length)]
  const randomLocation = locations[Math.floor(Math.random() * locations.length)]
  const randomTime = Math.floor(Math.random() * 10) + 1

  // Generate a random initial for the avatar
  const initials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const randomInitial = initials.charAt(Math.floor(Math.random() * initials.length))

  return {
    id: Date.now(),
    user: randomInitial,
    activity: randomActivity,
    product: randomProduct,
    location: randomLocation,
    timeAgo: `${randomTime}m ago`,
  }
}

// World map coordinates for major regions
const worldRegions = [
  { id: 1, name: "North America", x: 25, y: 30, size: 8, active: true },
  { id: 2, name: "South America", x: 30, y: 60, size: 6, active: true },
  { id: 3, name: "Europe", x: 48, y: 28, size: 7, active: true },
  { id: 4, name: "Africa", x: 48, y: 50, size: 7, active: false },
  { id: 5, name: "Asia", x: 68, y: 35, size: 9, active: true },
  { id: 6, name: "Australia", x: 80, y: 65, size: 5, active: false },
]

export default function SocialShoppingPulse() {
  const [activeTab, setActiveTab] = useState("trending")
  const [liveActivity, setLiveActivity] = useState([])
  const [timeLeft, setTimeLeft] = useState({})
  const [activeRegions, setActiveRegions] = useState(worldRegions)
  const activityRef = useRef(null)
  const isMobile = useIsMobile()

  // Generate initial live activity
  useEffect(() => {
    const initialActivities = Array(5)
      .fill(null)
      .map(() => generateRandomActivity())
    setLiveActivity(initialActivities)

    // Add new activity periodically
    const interval = setInterval(() => {
      setLiveActivity((prev) => {
        const newActivity = generateRandomActivity()
        const updated = [newActivity, ...prev]
        return updated.slice(0, 10) // Keep only the latest 10 activities
      })

      // Randomly update active regions
      setActiveRegions((prev) =>
        prev.map((region) => ({
          ...region,
          active: Math.random() > 0.3, // 70% chance of being active
        })),
      )
    }, 5000) // Add new activity every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Auto-scroll the activity feed
  useEffect(() => {
    if (activityRef.current && liveActivity.length > 0) {
      activityRef.current.scrollTop = 0
    }
  }, [liveActivity])

  // Calculate time left for flash drops
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const timeLeftObj = {}

      flashDrops.forEach((drop) => {
        if (drop.endTime) {
          const difference = drop.endTime - now
          if (difference <= 0) {
            timeLeftObj[drop.id] = { hours: 0, minutes: 0, seconds: 0 }
            return
          }

          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
          const minutes = Math.floor((difference / (1000 * 60)) % 60)
          const seconds = Math.floor((difference / 1000) % 60)

          timeLeftObj[drop.id] = { hours, minutes, seconds }
        } else if (drop.releaseTime) {
          const difference = drop.releaseTime - now
          if (difference <= 0) {
            timeLeftObj[drop.id] = { hours: 0, minutes: 0, seconds: 0 }
            return
          }

          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
          const minutes = Math.floor((difference / (1000 * 60)) % 60)
          const seconds = Math.floor((difference / 1000) % 60)

          timeLeftObj[drop.id] = { hours, minutes, seconds }
        }
      })

      setTimeLeft(timeLeftObj)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time with leading zeros
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  // Calculate progress percentage
  const calculateProgress = (current, target) => {
    return (current / target) * 100
  }

  // Get heat level color
  const getHeatColor = (level) => {
    if (level >= 90) return "from-red-500 to-orange-500"
    if (level >= 80) return "from-orange-500 to-yellow-500"
    if (level >= 70) return "from-yellow-500 to-green-500"
    return "from-green-500 to-blue-500"
  }

  return (
    <section className="py-12 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Zap className="w-6 h-6 text-purple-600" />
              Social Shopping Pulse
            </h2>
            <p className="text-muted-foreground mt-2">See what's happening in our shop right now</p>
          </div>

          <Tabs defaultValue="trending" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="trending" className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 md:mr-1" />
                <span className="hidden md:inline">Trending</span>
              </TabsTrigger>
              <TabsTrigger value="challenges" className="flex items-center gap-1">
                <Users className="w-4 h-4 md:mr-1" />
                <span className="hidden md:inline">Challenges</span>
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-1">
                <Globe className="w-4 h-4 md:mr-1" />
                <span className="hidden md:inline">Live Map</span>
              </TabsTrigger>
              <TabsTrigger value="drops" className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 md:mr-1" />
                <span className="hidden md:inline">Flash Drops</span>
              </TabsTrigger>
            </TabsList>
              {/* Main content area - Changes based on selected tab */}
          <div className="md:col-span-2">
            <TabsContent value="trending" className="mt-0 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {trendingProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="relative">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={cn(
                          "absolute top-2 right-2 text-xs font-semibold bg-gradient-to-r text-white px-2 py-1 rounded-full flex items-center gap-1",
                          getHeatColor(product.heatLevel),
                        )}
                      >
                        <TrendingUp className="w-3 h-3" />
                        {product.heatLevel}%
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h4 className="font-medium text-sm truncate">{product.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm font-semibold">${product.price}</span>
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" className="gap-1">
                  View All Trending Products
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-0 space-y-4">
              {communityChallenges.map((challenge) => (
                <Card key={challenge.id} className="overflow-hidden border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 text-purple-700 p-3 rounded-full">{challenge.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold">{challenge.title}</h4>
                          <Badge className="bg-purple-600">{challenge.reward}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
                        <div className="mt-3 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>
                              Progress: {challenge.currentValue} / {challenge.targetValue}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {challenge.timeLeft} left
                            </span>
                          </div>
                          <Progress
                            value={calculateProgress(challenge.currentValue, challenge.targetValue)}
                            className="h-2"
                          />
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Button variant="outline" size="sm">
                            Participate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="map" className="mt-0">
              <Card className="overflow-hidden border border-gray-200">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-600" />
                    Global Shopping Activity
                  </h3>
                  <div className="relative aspect-[2/1] bg-gray-100 rounded-lg overflow-hidden">
                    {/* Simple world map outline */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Simplified world map paths */}
                      <path
                        d="M25,30 Q30,20 35,25 Q40,30 45,28 Q50,26 55,28 Q60,30 65,35 Q70,40 75,35 Q80,30 85,35 L85,50 Q80,55 75,50 Q70,45 65,50 Q60,55 55,50 Q50,45 45,50 Q40,55 35,50 Q30,45 25,50 Z"
                        fill="none"
                        stroke="#CBD5E1"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M30,60 Q35,55 40,60 Q45,65 50,60 Q55,55 60,60 Q65,65 70,60 L70,70 Q65,75 60,70 Q55,65 50,70 Q45,75 40,70 Q35,65 30,70 Z"
                        fill="none"
                        stroke="#CBD5E1"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M80,65 Q85,60 90,65 L90,75 Q85,80 80,75 Z"
                        fill="none"
                        stroke="#CBD5E1"
                        strokeWidth="0.5"
                      />

                      {/* Active regions */}
                      {activeRegions.map((region) => (
                        <g key={region.id}>
                          <circle
                            cx={region.x}
                            cy={region.y}
                            r={region.size / 2}
                            fill={region.active ? "rgba(147, 51, 234, 0.2)" : "rgba(203, 213, 225, 0.2)"}
                          />
                          {region.active && (
                            <circle
                              cx={region.x}
                              cy={region.y}
                              r={region.size / 4}
                              fill="#9333EA"
                              className="animate-ping"
                            />
                          )}
                          <circle cx={region.x} cy={region.y} r={1} fill={region.active ? "#9333EA" : "#94A3B8"} />
                        </g>
                      ))}
                    </svg>

                    {/* Region tooltips */}
                    <TooltipProvider>
                      {activeRegions.map((region) => (
                        <div
                          key={region.id}
                          className="absolute"
                          style={{ left: `${region.x}%`, top: `${region.y}%`, transform: "translate(-50%, -50%)" }}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={cn(
                                  "w-4 h-4 rounded-full cursor-pointer",
                                  region.active ? "bg-purple-600" : "bg-gray-400",
                                )}
                              ></div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{region.name}</p>
                              {region.active ? (
                                <p className="text-xs text-green-500">Active now</p>
                              ) : (
                                <p className="text-xs text-gray-500">Inactive</p>
                              )}
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      ))}
                    </TooltipProvider>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-lg">24</div>
                      <div className="text-muted-foreground">Countries Active</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-lg">1,248</div>
                      <div className="text-muted-foreground">Orders Today</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-lg">86</div>
                      <div className="text-muted-foreground">Live Shoppers</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="drops" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flashDrops.map((drop) => (
                  <Card key={drop.id} className="overflow-hidden border border-gray-200">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={drop.image || "/placeholder.svg"}
                        alt={drop.name}
                        className="w-full h-full object-cover"
                      />
                      {drop.endTime && (
                        <div className="absolute top-0 left-0 right-0 bg-black/60 text-white p-2 flex justify-center items-center gap-2">
                          <Timer className="w-4 h-4" />
                          <div className="flex gap-1 text-sm font-mono">
                            <span>{formatTime(timeLeft[drop.id]?.hours || 0)}</span>:
                            <span>{formatTime(timeLeft[drop.id]?.minutes || 0)}</span>:
                            <span>{formatTime(timeLeft[drop.id]?.seconds || 0)}</span>
                          </div>
                        </div>
                      )}
                      {drop.releaseTime && (
                        <div className="absolute top-0 left-0 right-0 bg-purple-600/90 text-white p-2 flex justify-center items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          <div className="text-sm">
                            Dropping in {timeLeft[drop.id]?.hours || 0}h {timeLeft[drop.id]?.minutes || 0}m
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{drop.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-bold text-lg">${drop.price.toFixed(2)}</span>
                        {drop.endTime && (
                          <Badge variant="outline" className="text-xs">
                            {drop.remainingStock} left
                          </Badge>
                        )}
                      </div>
                      {drop.endTime && (
                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>Selling fast</span>
                            <span>
                              {drop.remainingStock}/{drop.totalStock}
                            </span>
                          </div>
                          <Progress
                            value={(drop.remainingStock / drop.totalStock) * 100}
                            className="h-1"
                            indicatorClassName={
                              drop.remainingStock < drop.totalStock * 0.2 ? "bg-red-500" : "bg-purple-600"
                            }
                          />
                        </div>
                      )}
                      <div className="mt-3">
                        {drop.endTime ? (
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">Add to Cart</Button>
                        ) : (
                          <Button variant="outline" className="w-full">
                            Notify Me
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </div>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Live Activity Feed - Always visible */}
          <Card className="md:row-span-2 border border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  Live Activity
                </h3>
                <Badge variant="outline" className="text-xs">
                  Real-time
                </Badge>
              </div>

              <div
                ref={activityRef}
                className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300"
              >
                <AnimatePresence initial={false}>
                  {liveActivity.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <Avatar className="h-8 w-8 border border-gray-200">
                        <AvatarFallback className="bg-purple-100 text-purple-700">{item.user}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-sm">
                          <span className={cn("flex-shrink-0", item.activity.iconColor)}>{item.activity.icon}</span>
                          <span className="truncate">
                            Someone {item.activity.message} <span className="font-medium">{item.product.name}</span>
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3 mr-1" />
                            {item.location}
                          </div>
                          <span className="text-xs text-muted-foreground">{item.timeAgo}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>

        
        </div>
      </div>
    </section>
  )
}
