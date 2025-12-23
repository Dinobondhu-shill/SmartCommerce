"use client"

import { useState } from "react"
import { Eye, EyeOff, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Notyf } from "notyf"
import "notyf/notyf.min.css"
import SocialShare from "@/components/SocialShare"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axiosInstance from "@/config/AxiosInstance"



const notyf = new Notyf({
  position: { x: "right", y: "top" },
  types: [
    {
      type: "error",
      background: "#ef4444",
      icon: false,
    },
    {
      type: "success",
      background: "#22c55e",
      icon: false,
    },
  ],
})

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    agreeTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
 const queryClient =  useQueryClient()

  // 🔥 DEFINE MUTATION HERE 
  
  const { mutate } = useMutation({
    mutationFn: (userData) => axiosInstance.post("/auth/register", userData),

    onSuccess: (data) => {
       console.log("Server response:", data);
      notyf.success(`{data.data.message}`);

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        newsletter: false,
        agreeTerms: false,
      });
      setPasswordStrength(0)

      queryClient.invalidateQueries(["users"]);
    },

    onError: (data) => {
      console.error("Registration error:", data.response.data.errors);
      notyf.error("Registration failed. Try again.");
    }
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (name === "password") {
      let strength = 0
      if (value.length >= 8) strength++
      if (/[A-Z]/.test(value)) strength++
      if (/[0-9]/.test(value)) strength++
      if (/[^A-Za-z0-9]/.test(value)) strength++
      setPasswordStrength(strength)
    }
  }

  
   


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.first_name.trim() || !formData.last_name.trim()) {
      notyf.error("Please enter your first and last name")
      return
    }

    if (!formData.email.includes("@")) {
      notyf.error("Please enter a valid email address")
      return
    }

    if (formData.password.length < 8) {
      notyf.error("Password must be at least 8 characters long")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      notyf.error("Passwords do not match")
      return
    }

    if (!formData.agreeTerms) {
      notyf.error("You must agree to the terms and conditions")
      return
    }

    console.log("Submitting form data:", formData);
   // 🔥 FINALLY CALL MUTATION
    setIsLoading(true);
    mutate(formData);  
    setIsLoading(false);

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <SocialShare />
      <div className="w-full max-w-xl ">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Create Account</h1>
          <p className="text-slate-600 text-lg">Join us today and get started in minutes</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className=" w-full space-y-5 flex justify-between md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-1/2">
                <Label htmlFor="first_name" className="block text-sm font-semibold text-slate-900 mb-2">
                  First Name
                </Label>
                <Input
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:ring-0 transition-colors bg-slate-50"
                />
              </div>
              <div className="w-1/2">
                <Label htmlFor="last_name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Last Name
                </Label>
                <Input
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:ring-0 transition-colors bg-slate-50"
                />
              </div>
            </div>

            {/* Email  and Phone Field */}
             <div className=" w-full space-y-5 flex justify-between md:flex-row md:space-y-0 md:space-x-4">
           <div className="w-1/2">
              <Label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:ring-0 transition-colors bg-slate-50"
              />
            </div>
                {/* Phone Field */}
            <div className="w-1/2">
              <Label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:ring-0 transition-colors bg-slate-50"
              />
            </div>

            </div>

        

        <div className=" w-full space-y-5 flex justify-between md:flex-row md:space-y-0 md:space-x-4">
            {/* Password Field */}
            <div className="w-1/2">
              <Label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-2">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:ring-0 transition-colors bg-slate-50 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-3 space-y-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          level <= passwordStrength ? "bg-purple-500" : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600">
                    {passwordStrength === 1 && "Weak password"}
                    {passwordStrength === 2 && "Fair password"}
                    {passwordStrength === 3 && "Good password"}
                    {passwordStrength === 4 && "Strong password"}
                  </p>
                </div>
              )}
            </div>
          {/* Confirm Password Field */}
            <div className="W-1/2">
              <Label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-900 mb-2">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:ring-0 transition-colors bg-slate-50 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Match Indicator */}
              {formData.confirmPassword && (
                <div className="mt-2 flex items-center gap-2">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <Check size={16} className="text-green-500" />
                      <p className="text-xs text-green-600">Passwords match</p>
                    </>
                  ) : (
                    <p className="text-xs text-red-600">Passwords do not match</p>
                  )}
                </div>
              )}
            </div>
            </div>

            

            {/* Newsletter Checkbox */}
            <div className="flex items-center space-x-3 pt-2">
              <Checkbox
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, newsletter: checked }))}
                className="w-5 h-5 rounded border-2 border-slate-300"
              />
              <Label htmlFor="newsletter" className="text-sm text-slate-600 cursor-pointer">
                Subscribe to our newsletter for updates
              </Label>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: checked }))}
                className="w-5 h-5 rounded border-2 border-slate-300 mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer leading-relaxed">
                I agree to the <span className="text-purple-600 font-semibold hover:underline">Terms & Conditions</span>{" "}
                and <span className="text-purple-600 font-semibold hover:underline">Privacy Policy</span>
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

            {/* Login Link */}
            <p className="text-center text-slate-600 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-purple-600 font-semibold hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>

        {/* Footer Text */}
        <p className="text-center text-slate-500 text-xs mt-8">We respect your privacy. Your data is secure with us.</p>
      </div>
    </div>
  )
}
