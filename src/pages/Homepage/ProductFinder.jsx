"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { ShoppingBag, Heart, ArrowRight, Sparkles, RefreshCcw, CheckCircle2, Gift } from "lucide-react"

// Quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "What are you shopping for today?",
    options: [
      { id: "self", text: "Myself", icon: "👤" },
      { id: "gift", text: "A Gift", icon: "🎁" },
      { id: "home", text: "My Home", icon: "🏠" },
      { id: "work", text: "Work", icon: "💼" },
    ],
  },
  {
    id: 2,
    question: "What's your preferred style?",
    options: [
      { id: "minimal", text: "Minimalist", icon: "✨" },
      { id: "classic", text: "Classic", icon: "👔" },
      { id: "trendy", text: "Trendy", icon: "🌟" },
      { id: "unique", text: "Unique", icon: "🎨" },
    ],
  },
  {
    id: 3,
    question: "What's your budget range?",
    options: [
      { id: "budget", text: "Under $50", icon: "💰" },
      { id: "mid", text: "$50-$100", icon: "💰💰" },
      { id: "premium", text: "$100-$200", icon: "💰💰💰" },
      { id: "luxury", text: "$200+", icon: "💎" },
    ],
  },
  {
    id: 4,
    question: "What features matter most to you?",
    options: [
      { id: "quality", text: "Quality", icon: "⭐" },
      { id: "sustainable", text: "Sustainability", icon: "🌱" },
      { id: "innovative", text: "Innovation", icon: "💡" },
      { id: "value", text: "Value", icon: "🏷️" },
    ],
  },
]

// Sample product database
const productDatabase = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&q=80",
    tags: ["self", "minimal", "budget", "sustainable"],
    rating: 4.8,
    reviews: 124,
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
  },
  {
    id: 2,
    name: "Smart Desk Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&q=80",
    tags: ["home", "work", "minimal", "mid", "innovative"],
    rating: 4.6,
    reviews: 89,
    description: "Adjustable desk lamp with wireless charging, color temperature control, and app connectivity.",
  },
  {
    id: 3,
    name: "Artisan Leather Wallet",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&q=80",
    tags: ["self", "gift", "classic", "mid", "quality"],
    rating: 4.9,
    reviews: 215,
    description: "Handcrafted genuine leather wallet with RFID protection and minimalist design.",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&q=80",
    tags: ["self", "gift", "trendy", "premium", "innovative"],
    rating: 4.7,
    reviews: 342,
    description: "True wireless earbuds with active noise cancellation, 30-hour battery life, and water resistance.",
  },
  {
    id: 5,
    name: "Handmade Ceramic Mug Set",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1577918692864-37a916115f8d?w=500&h=500&q=80",
    tags: ["home", "gift", "unique", "budget", "sustainable"],
    rating: 4.5,
    reviews: 67,
    description: "Set of 4 unique handcrafted ceramic mugs, each with distinctive glaze patterns.",
  },
  {
    id: 6,
    name: "Premium Yoga Mat",
    price: 78.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&h=500&q=80",
    tags: ["self", "minimal", "mid", "quality", "sustainable"],
    rating: 4.8,
    reviews: 156,
    description: "Eco-friendly, non-slip yoga mat made from natural rubber with perfect cushioning for joints.",
  },
  {
    id: 7,
    name: "Designer Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&q=80",
    tags: ["self", "gift", "classic", "luxury", "quality"],
    rating: 4.9,
    reviews: 78,
    description: "Elegant timepiece with sapphire crystal, automatic movement, and genuine leather strap.",
  },
  {
    id: 8,
    name: "Smart Plant Pot",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&q=80",
    tags: ["home", "unique", "mid", "innovative"],
    rating: 4.4,
    reviews: 42,
    description: "Self-watering plant pot with soil sensors and app connectivity to monitor your plant's health.",
  },
  {
    id: 9,
    name: "Portable Bluetooth Speaker",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&q=80",
    tags: ["self", "gift", "trendy", "premium", "innovative"],
    rating: 4.6,
    reviews: 203,
    description: "Waterproof, rugged Bluetooth speaker with 360° sound and 20-hour battery life.",
  },
  {
    id: 10,
    name: "Minimalist Desk Organizer",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?w=500&h=500&q=80",
    tags: ["work", "home", "minimal", "budget", "value"],
    rating: 4.5,
    reviews: 89,
    description: "Sleek wooden desk organizer with compartments for stationery, devices, and accessories.",
  },
  {
    id: 11,
    name: "Luxury Scented Candle",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&h=500&q=80",
    tags: ["home", "gift", "unique", "budget", "quality"],
    rating: 4.7,
    reviews: 124,
    description: "Hand-poured soy wax candle with premium essential oils in an elegant glass container.",
  },
  {
    id: 12,
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1618577608401-17ec3e4377a0?w=500&h=500&q=80",
    tags: ["work", "self", "minimal", "budget", "innovative"],
    rating: 4.3,
    reviews: 156,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices, featuring LED indicators.",
  },
]

export default function ProductFinderQuiz() {
  const [quizState, setQuizState] = useState("intro") // intro, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [progress, setProgress] = useState(0)
  const isMobile = useIsMobile()

  // Start the quiz
  const startQuiz = () => {
    setQuizState("quiz")
    setCurrentQuestion(0)
    setAnswers([])
    setProgress(0)
  }

  // Handle answer selection
  const selectAnswer = (optionId) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionId
    setAnswers(newAnswers)

    // Move to next question or show results
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setProgress(((currentQuestion + 1) / quizQuestions.length) * 100)
    } else {
      // Calculate results
      findRecommendations(newAnswers)
      setQuizState("results")
      setProgress(100)
    }
  }

  // Find product recommendations based on answers
  const findRecommendations = (userAnswers) => {
    // Simple recommendation algorithm
    const matchedProducts = productDatabase.filter((product) => {
      // Count how many tags match the user's answers
      const matchCount = userAnswers.filter((answer) => product.tags.includes(answer)).length
      // Return products that match at least 2 criteria
      return matchCount >= 2
    })

    // Sort by match relevance (could be more sophisticated)
    const sortedRecommendations = matchedProducts.sort((a, b) => {
      const aMatches = userAnswers.filter((answer) => a.tags.includes(answer)).length
      const bMatches = userAnswers.filter((answer) => b.tags.includes(answer)).length
      return bMatches - aMatches
    })

    setRecommendations(sortedRecommendations.slice(0, 6)) // Top 6 recommendations
  }

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  // Add to cart
  const addToCart = (product) => {
    alert(`Added ${product.name} to cart!`)
  }

  // Restart quiz
  const restartQuiz = () => {
    setQuizState("intro")
    setCurrentQuestion(0)
    setAnswers([])
    setProgress(0)
  }

  // Render stars for rating
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${star <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        <span className="ml-1 text-xs text-purple-700">{rating}</span>
      </div>
    )
  }

  return (
    <section className="py-12 px-4 md:px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        {quizState === "intro" && (
          <Card className="border-2 border-purple-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=600&q=80"
                    alt="Product Finder"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex flex-col justify-end p-6">
                    <Badge className="mb-2 bg-purple-500 hover:bg-purple-600 self-start">New</Badge>
                    <h3 className="text-white text-xl md:text-2xl font-bold">Discover Your Perfect Match</h3>
                    <p className="text-white/90 text-sm md:text-base">
                      Let us help you find products tailored to your preferences
                    </p>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 flex items-center">
                      <Sparkles className="w-6 h-6 mr-2 text-purple-600" />
                      Product Finder Quiz
                    </h2>
                    <p className="mt-2 text-purple-700">
                      Answer a few quick questions and we'll recommend products that match your preferences perfectly.
                    </p>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3" />
                      <span>Personalized recommendations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3" />
                      <span>Quick and easy (less than 30 seconds)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3" />
                      <span>Discover products you'll love</span>
                    </div>
                  </div>

                  <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white" size="lg" onClick={startQuiz}>
                    Start Quiz
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {quizState === "quiz" && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Find Your Perfect Products</h2>
              <p className="text-purple-700 mt-2">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
              <Progress value={progress} className="mt-4 h-2 bg-purple-100" indicatorClassName="bg-purple-600" />
            </div>

            <Card className="border-2 border-purple-200">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-purple-900 mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {quizQuestions[currentQuestion].options.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      className="h-auto py-6 flex flex-col items-center justify-center border-2 hover:border-purple-500 hover:bg-purple-50 transition-all"
                      onClick={() => selectAnswer(option.id)}
                    >
                      <span className="text-2xl mb-2">{option.icon}</span>
                      <span className="text-base font-medium">{option.text}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {quizState === "results" && (
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Your Personalized Recommendations</h2>
              <p className="text-purple-700 mt-2">Based on your preferences, we think you'll love these products</p>
            </div>

            {recommendations.length > 0 ? (
              <div className="mb-8">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {recommendations.map((product) => (
                      <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <Card className="border border-purple-200 hover:border-purple-300 transition-all duration-300">
                          <div className="relative overflow-hidden aspect-square">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />

                            {/* Quick actions */}
                            <div className="absolute top-2 right-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className={cn(
                                  "rounded-full bg-white/80 hover:bg-white shadow-sm",
                                  wishlist.includes(product.id)
                                    ? "text-red-500 hover:text-red-600"
                                    : "text-gray-500 hover:text-purple-600",
                                )}
                                onClick={() => toggleWishlist(product.id)}
                              >
                                <Heart className={cn("h-4 w-4", wishlist.includes(product.id) && "fill-current")} />
                              </Button>
                            </div>
                          </div>

                          <CardContent className="p-4">
                            {renderStars(product.rating)}
                            <h3 className="font-medium text-purple-900 mt-2 line-clamp-1">{product.name}</h3>
                            <p className="text-sm text-purple-700 line-clamp-2 h-10 mt-1">{product.description}</p>
                            <div className="mt-2">
                              <span className="font-bold text-purple-800">${product.price.toFixed(2)}</span>
                            </div>
                            <Button
                              className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white"
                              onClick={() => addToCart(product)}
                            >
                              <ShoppingBag className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:flex">
                    <CarouselPrevious className="left-0 bg-white/80 hover:bg-white" />
                    <CarouselNext className="right-0 bg-white/80 hover:bg-white" />
                  </div>
                </Carousel>
              </div>
            ) : (
              <div className="text-center py-12">
                <p>No matching products found. Please try again with different preferences.</p>
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <Button
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-100"
                onClick={restartQuiz}
              >
                <RefreshCcw className="mr-2 h-4 w-4" />
                Take Quiz Again
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Gift className="mr-2 h-4 w-4" />
                View All Recommendations
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
