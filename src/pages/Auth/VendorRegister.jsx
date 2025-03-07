"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Home, Store, Upload, MapPin, Phone, Mail, Globe, FileText, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import AccountLinking from "../Utilites/AccountLinking"

export default function VendorRegister() {
  const [activeTab, setActiveTab] = useState("business")
  const [formData, setFormData] = useState({
    // Business Information
    businessName: "",
    businessType: "",
    taxId: "",
    yearEstablished: "",
    description: "",
    logo: null,

    // Contact Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",

    // Address Information
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",

    // Account Information
    username: "",
    password: "",
    confirmPassword: "",

    // Terms
    agreeTerms: false,
    agreePrivacy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Vendor registration form submitted:", formData)
    // Handle form submission logic here
  }

  const nextTab = () => {
    if (activeTab === "business") setActiveTab("contact")
    else if (activeTab === "contact") setActiveTab("address")
    else if (activeTab === "address") setActiveTab("account")
  }

  const prevTab = () => {
    if (activeTab === "account") setActiveTab("address")
    else if (activeTab === "address") setActiveTab("contact")
    else if (activeTab === "contact") setActiveTab("business")
  }

  return (
    <div className="min-h-screen flex flex-wrap items-center bg-gradient-to-b from-blue-50 to-indigo-50 px-4 py-8">
      
      <div className="container mx-auto max-w-3xl">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/account">
                ACCOUNT
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>VENDOR REGISTRATION</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="border-none shadow-xl shadow-blue-100/50">
          <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-500 py-4 text-white rounded-t-lg">
            <div className="flex items-center justify-center mb-2">
              <Store className="h-8 w-8 mr-2" />
              <CardTitle className="text-2xl font-bold">Vendor Registration</CardTitle>
            </div>
            <CardDescription className="text-blue-100 text-center">
              Join our marketplace and start selling your products today
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 rounded-none bg-gray-100">
                <TabsTrigger
                  value="business"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600"
                >
                  Business
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600"
                >
                  Contact
                </TabsTrigger>
                <TabsTrigger
                  value="address"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600"
                >
                  Address
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600"
                >
                  Account
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit}>
                <TabsContent value="business" className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-sm font-medium">
                      Business Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="border-2 focus:border-blue-400"
                      placeholder="Your Business Name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-sm font-medium">
                      Business Type <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleSelectChange("businessType", value)}
                    >
                      <SelectTrigger className="border-2 focus:border-blue-400">
                        <SelectValue placeholder="Select Business Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sole_proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="llc">Limited Liability Company (LLC)</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
                        <SelectItem value="nonprofit">Nonprofit Organization</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="taxId" className="text-sm font-medium">
                        Tax ID / VAT Number
                      </Label>
                      <Input
                        id="taxId"
                        name="taxId"
                        value={formData.taxId}
                        onChange={handleChange}
                        className="border-2 focus:border-blue-400"
                        placeholder="Tax ID / VAT Number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="yearEstablished" className="text-sm font-medium">
                        Year Established
                      </Label>
                      <Input
                        id="yearEstablished"
                        name="yearEstablished"
                        value={formData.yearEstablished}
                        onChange={handleChange}
                        className="border-2 focus:border-blue-400"
                        placeholder="e.g. 2010"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium">
                      Business Description <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="border-2 focus:border-blue-400 min-h-[100px]"
                      placeholder="Tell us about your business, products, and services..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="logo" className="text-sm font-medium">
                      Business Logo
                    </Label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="logo"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (Max. 2MB)</p>
                        </div>
                        <Input
                          id="logo"
                          name="logo"
                          type="file"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {formData.logo && <p className="text-sm text-green-600">File selected: {formData.logo.name}</p>}
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button type="button" onClick={nextTab} className="bg-purple-600 hover:bg-purple-700 text-white">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border-2 focus:border-blue-400"
                        placeholder="First Name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border-2 focus:border-blue-400"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 border-2 focus:border-blue-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 border-2 focus:border-blue-400"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-sm font-medium">
                      Website
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="pl-10 border-2 focus:border-blue-400"
                        placeholder="https://www.yourbusiness.com"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={prevTab} className="border-2 border-gray-200">
                      Back
                    </Button>
                    <Button type="button" onClick={nextTab} className="bg-purple-600 hover:bg-purple-700 text-white">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="address" className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium">
                      Street Address <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="pl-10 border-2 focus:border-blue-400"
                        placeholder="123 Business Street"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="border-2 focus:border-blue-400"
                        placeholder="City"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-medium">
                        State/Province <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="border-2 focus:border-blue-400"
                        placeholder="State/Province"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-sm font-medium">
                        Postal/ZIP Code <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="border-2 focus:border-blue-400"
                        placeholder="Postal/ZIP Code"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-sm font-medium">
                        Country <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                        <SelectTrigger className="border-2 focus:border-blue-400">
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          {/* Add more countries as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={prevTab} className="border-2 border-gray-200">
                      Back
                    </Button>
                    <Button type="button" onClick={nextTab} className="bg-purple-600 hover:bg-purple-700 text-white">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="account" className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Username <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="border-2 focus:border-blue-400"
                      placeholder="Choose a username"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="border-2 focus:border-blue-400"
                      placeholder="••••••••"
                      required
                    />
                    <p className="text-xs text-gray-500">
                      Password must be at least 8 characters long and include uppercase, lowercase, number, and special
                      character.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                      Confirm Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="border-2 focus:border-blue-400"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: checked }))}
                        required
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="agreeTerms" className="text-sm">
                          I agree to the{" "}
                          <Link to="/terms-conditions" className="text-blue-600 hover:underline">
                            Terms and Conditions
                          </Link>{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreePrivacy"
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreePrivacy: checked }))}
                        required
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="agreePrivacy" className="text-sm">
                          I agree to the{" "}
                          <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={prevTab} className="border-2 border-gray-200">
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-violet-400 to-purple-500 hover:from-purple-700 hover:to-violet-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      <ShieldCheck className="mr-2 h-4 w-4" />
                      Complete Registration
                    </Button>
                  </div>
                </TabsContent>
              </form>
            </Tabs>
          </CardContent>

          <CardFooter className="bg-gray-50 rounded-b-lg p-6 text-center text-sm text-gray-600">
            <div className="mx-auto max-w-md">
              <p>
                Already have a vendor account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
              <p className="mt-2 flex items-center justify-center">
                <FileText className="h-4 w-4 mr-1 text-gray-500" />
                <span>
                  Need help? Check our{" "}
                  <Link to="/vendor-guide" className="text-blue-600 hover:underline">
                    Vendor Guide
                  </Link>
                </span>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className=" px-4 md:px-10 py-8">   <AccountLinking /></div>
    </div>
  )
}

