"use client"

import { useState } from "react"
import { ArrowRight, Phone, Mail, MapPin, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "react-router-dom"

export default function GuestCheckout() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    area: "",
    paymentMethod: "cash",
  })
  const [errors, setErrors] = useState({})
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const [showVerification, setShowVerification] = useState(false)

  const validatePhone = (phone) => {
    const bdPhoneRegex = /^\+?(880|0)1[3-9][0-9]{8}$/
    return bdPhoneRegex.test(phone)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleVerificationCodeChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode]
      newCode[index] = value
      setVerificationCode(newCode)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        if (nextInput) nextInput.focus()
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate required fields
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
 
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid Bangladeshi phone number"
    }
    if (!formData.address) newErrors.address = "Address is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.area) newErrors.area = "Area is required"

    if (Object.keys(newErrors).length === 0) {
      // If no errors, show verification modal
      setShowVerification(true)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-8">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-none shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold">Guest Checkout</CardTitle>
            <CardDescription>Complete your order without creating an account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="space-y-4">

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                        placeholder="+8801XXXXXXXXX"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    <p className="text-sm text-gray-500">Format: +8801XXXXXXXXX</p>
                  </div>
                </div>
              </div>

              {/* Delivery Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Delivery Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">
                      Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`pl-10 ${errors.address ? "border-red-500" : ""}`}
                        placeholder="House/Road/Area"
                      />
                    </div>
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) => handleChange({ target: { name: "city", value } })}
                      >
                        <SelectTrigger className={errors.city ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dhaka">Dhaka</SelectItem>
                          <SelectItem value="chittagong">Chittagong</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                          <SelectItem value="khulna">Khulna</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="area">
                        Area <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.area}
                        onValueChange={(value) => handleChange({ target: { name: "area", value } })}
                      >
                        <SelectTrigger className={errors.area ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select Area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mirpur">Mirpur</SelectItem>
                          <SelectItem value="dhanmondi">Dhanmondi</SelectItem>
                          <SelectItem value="gulshan">Gulshan</SelectItem>
                          <SelectItem value="banani">Banani</SelectItem>
                          <SelectItem value="uttara">Uttara</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.area && <p className="text-red-500 text-sm">{errors.area}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Payment Method</h3>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleChange({ target: { name: "paymentMethod", value } })}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem value="bkash" id="bkash" />
                    <Label htmlFor="bkash">bKash</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <RadioGroupItem value="nagad" id="nagad" />
                    <Label htmlFor="nagad">Nagad</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Continue to Verification
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Verification Modal */}
        {showVerification && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="flex items-center space-x-2 border rounded-lg p-4">
                    <Link to={'/'}>Home</Link>
                  </div>
            <Card className="w-full max-w-md border-none">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="bg-gray-900 w-12 h-12 rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">N</span>
                  </div>
                  <h2 className="text-xl font-semibold">Your Signup verification Code</h2>

                  <div className="flex justify-center gap-2">
                    {verificationCode.map((digit, index) => (
                      <Input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
                        className="w-12 h-12 text-center text-2xl font-bold"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-500">Don't share this code to anyone!</p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2" />
                      <div className="text-sm text-yellow-800">
                        <p className="font-medium">Was this request made by you?</p>
                        <p className="mt-1">
                          This code was generated from a request made using Chrome browser on macOS. If you did not
                          initiate this request, you can safely ignore this email.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">This is an automated message. Please do not reply.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

