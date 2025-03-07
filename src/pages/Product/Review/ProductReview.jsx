"use client"

import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown, Filter, Search, Check, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

export default function Review() {
  const [selectedRating, setSelectedRating] = useState(0)
  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    title: "",
    review: "",
    name: "",
    email: "",
    recommend: null,
    images: [],
  })
  const [activeFilters, setActiveFilters] = useState([])
  const [sortBy, setSortBy] = useState("newest")

  // Sample review data
  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2 months ago",
      rating: 5,
      title: "Absolutely perfect fit and style",
      content:
        "I've been looking for a strapback like this for ages. The Eclipse Zenith is everything I hoped for - stylish, comfortable, and adjustable. The material quality is exceptional and it looks even better in person than in the photos. Highly recommend!",
      helpful: 24,
      notHelpful: 2,
      verified: true,
      images: ["/placeholder.svg?height=80&width=80", "/placeholder.svg?height=80&width=80"],
      recommend: true,
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "1 month ago",
      rating: 4,
      title: "Great quality but slightly large",
      content:
        "The quality of this strapback is outstanding. The materials feel premium and the stitching is perfect. My only issue is that it runs slightly larger than expected, even with the adjustable strap. Otherwise, it's a fantastic product that I wear almost daily.",
      helpful: 18,
      notHelpful: 3,
      verified: true,
      images: [],
      recommend: true,
    },
    {
      id: 3,
      author: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "3 weeks ago",
      rating: 3,
      title: "Good but not great",
      content:
        "The strapback looks nice and the adjustable feature works well, but I expected better quality materials for this price point. It's comfortable enough but doesn't feel as premium as other caps I own in this price range. The color is exactly as shown though.",
      helpful: 7,
      notHelpful: 1,
      verified: true,
      images: ["/placeholder.svg?height=80&width=80"],
      recommend: false,
    },
    {
      id: 4,
      author: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2 weeks ago",
      rating: 5,
      title: "Perfect everyday cap",
      content:
        "This has become my go-to cap for everyday wear. The adjustable strap makes it easy to get the perfect fit, and the material is breathable even on hot days. I've received many compliments on it already. Worth every penny!",
      helpful: 12,
      notHelpful: 0,
      verified: true,
      images: [],
      recommend: true,
    },
    {
      id: 5,
      author: "David Park",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "1 week ago",
      rating: 2,
      title: "Disappointed with durability",
      content:
        "While the cap looked great initially, after just a few weeks of regular wear, the stitching started to come loose in several places. For this price, I expected much better durability. The style is nice but the quality control seems lacking.",
      helpful: 15,
      notHelpful: 4,
      verified: true,
      images: ["/placeholder.svg?height=80&width=80", "/placeholder.svg?height=80&width=80"],
      recommend: false,
    },
  ]

  // Calculate review statistics
  const totalReviews = reviews.length
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews
  const ratingCounts = [0, 0, 0, 0, 0]
  reviews.forEach((review) => {
    ratingCounts[review.rating - 1]++
  })
  const ratingPercentages = ratingCounts.map((count) => (count / totalReviews) * 100)
  const recommendPercentage = Math.round((reviews.filter((r) => r.recommend).length / totalReviews) * 100)

  const handleRatingClick = (rating) => {
    setSelectedRating(rating === selectedRating ? 0 : rating)
    setReviewForm({ ...reviewForm, rating })
  }

  const handleReviewFormChange = (e) => {
    const { name, value } = e.target
    setReviewForm({ ...reviewForm, [name]: value })
  }

  const handleRecommendChange = (value) => {
    setReviewForm({ ...reviewForm, recommend: value === "yes" })
  }

  const handleImageUpload = (e) => {
    // In a real app, you would handle file uploads here
    console.log("Image upload:", e.target.files)
    setReviewForm({ ...reviewForm, images: [...reviewForm.images, URL.createObjectURL(e.target.files[0])] })
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    console.log("Review submitted:", reviewForm)
    // Reset form after submission
    setReviewForm({
      rating: 0,
      title: "",
      review: "",
      name: "",
      email: "",
      recommend: null,
      images: [],
    })
    setSelectedRating(0)
    // In a real app, you would send this data to your backend
  }

  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="all-reviews" className="space-y-8">
        <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 space-x-8">
          <TabsTrigger
            value="all-reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            All Reviews
          </TabsTrigger>
          <TabsTrigger
          id="write-review"
            value="write-review"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
          >
            Write a Review
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all-reviews" className="space-y-8">
          {/* Review Summary */}
          <div className="grid md:grid-cols-3 gap-8 p-6 bg-gray-50 rounded-lg">
            <div className="text-center md:text-left space-y-2">
              <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center md:justify-start">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">{totalReviews} reviews</div>
              <div className="text-sm font-medium mt-2">{recommendPercentage}% of customers recommend this product</div>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="text-sm font-medium w-2">{rating}</div>
                  <Star className="w-4 h-4 text-gray-400" />
                  <Progress value={ratingPercentages[4 - index]} className="h-2 flex-1" />
                  <div className="text-sm text-gray-500 w-8">{ratingCounts[4 - index]}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Review this product</h4>
              <p className="text-sm text-gray-600">Share your thoughts with other customers</p>
              <Button
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => document.getElementById("write-review").click()}
              >
                Write a review
              </Button>
            </div>
          </div>

          {/* Review Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "border-gray-200",
                  activeFilters.includes("with-photos") && "bg-purple-50 border-purple-600 text-purple-600",
                )}
                onClick={() => toggleFilter("with-photos")}
              >
                <Filter className="w-4 h-4 mr-2" />
                With Photos
              </Button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <Button
                  key={rating}
                  variant="outline"
                  size="sm"
                  className={cn(
                    "border-gray-200",
                    activeFilters.includes(`${rating}-star`) && "bg-purple-50 border-purple-600 text-purple-600",
                  )}
                  onClick={() => toggleFilter(`${rating}-star`)}
                >
                  {rating} <Star className="w-3 h-3 ml-1 fill-yellow-400 text-yellow-400" />
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="highest">Highest Rating</SelectItem>
                  <SelectItem value="lowest">Lowest Rating</SelectItem>
                  <SelectItem value="helpful">Most Helpful</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Reviews */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search reviews" className="pl-10" />
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <div className="hidden md:block">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={`${review.author}'s avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="font-medium">{review.author}</div>
                      {review.verified && (
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          <Check className="w-3 h-3 mr-1" /> Verified Purchase
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <h4 className="font-medium">{review.title}</h4>
                    </div>

                    <div className="text-sm text-gray-500">Reviewed {review.date}</div>

                    {review.recommend !== undefined && (
                      <div className="text-sm">
                        {review.recommend ? (
                          <span className="text-green-600">✓ I recommend this product</span>
                        ) : (
                          <span className="text-red-600">✗ I don't recommend this product</span>
                        )}
                      </div>
                    )}

                    <p className="text-gray-700">{review.content}</p>

                    {review.images.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {review.images.map((img, idx) => (
                          <div key={idx} className="w-20 h-20 rounded-md overflow-hidden border">
                            <img
                              src={img || "/placeholder.svg"}
                              alt={`Review image ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-6 pt-2">
                      <div className="text-sm text-gray-500">Was this review helpful?</div>
                      <Button variant="ghost" size="sm" className="h-8 text-gray-600">
                        <ThumbsUp className="w-4 h-4 mr-1" /> {review.helpful}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-gray-600">
                        <ThumbsDown className="w-4 h-4 mr-1" /> {review.notHelpful}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-gray-600">
                        Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-1 pt-4">
            <Button variant="outline" size="sm" className="w-9 h-9 p-0">
              1
            </Button>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0">
              2
            </Button>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0">
              3
            </Button>
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
              ...
            </Button>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0">
              10
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="write-review" id="write-review-tab" className="space-y-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Write a Review</h3>
              <p className="text-gray-600">Share your experience with this product</p>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-6">
              {/* Overall Rating */}
              <div className="space-y-2">
                <Label className="text-base font-medium">
                  Overall Rating <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button key={rating} type="button" onClick={() => handleRatingClick(rating)} className="p-1">
                      <Star
                        className={`w-8 h-8 ${
                          rating <= selectedRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-medium">
                  Review Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={reviewForm.title}
                  onChange={handleReviewFormChange}
                  placeholder="Summarize your experience"
                  required
                />
              </div>

              {/* Review Content */}
              <div className="space-y-2">
                <Label htmlFor="review" className="text-base font-medium">
                  Review <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="review"
                  name="review"
                  value={reviewForm.review}
                  onChange={handleReviewFormChange}
                  placeholder="What did you like or dislike about this product? How was the quality? Fit? Durability?"
                  className="min-h-[150px]"
                  required
                />
              </div>

              {/* Would Recommend */}
              <div className="space-y-2">
                <Label className="text-base font-medium">
                  Would you recommend this product? <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={handleRecommendChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, I recommend this product</SelectItem>
                    <SelectItem value="no">No, I don't recommend this product</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label className="text-base font-medium">Add Photos</Label>
                <div className="flex flex-wrap gap-2">
                  {reviewForm.images.map((img, idx) => (
                    <div key={idx} className="w-20 h-20 rounded-md overflow-hidden border">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Uploaded image ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <label className="w-20 h-20 border-2 border-dashed rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50">
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    <Plus className="w-6 h-6 text-gray-400" />
                  </label>
                </div>
                <p className="text-xs text-gray-500">You can upload up to 5 images (optional)</p>
              </div>

              {/* Personal Info */}
              <div className="space-y-4 pt-4">
                <h4 className="font-medium">About You</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={reviewForm.name}
                      onChange={handleReviewFormChange}
                      placeholder="Your name or nickname"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={reviewForm.email}
                      onChange={handleReviewFormChange}
                      placeholder="Your email (not published)"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Submit Review
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  By submitting, you agree to our review guidelines and terms of service
                </p>
              </div>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

