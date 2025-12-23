
import {  useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Eye, EyeOff, LogIn, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import AccountLinking from "../Utilites/AccountLinking"
import axiosInstance from "@/config/AxiosInstance"
import { useMutation } from "@tanstack/react-query"
import { notyf } from "./Register"
import { useAuth } from "@/hooks/useAuth"
import Loader from "@/Loader/Loader"

export default function LoginPage() {
const {user, isLoading} = useAuth();

console.log(user)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  


    const { mutate } = useMutation({
      mutationFn: (userData) => axiosInstance.post("/auth/login", userData, { withCredentials: true }),
  
      onSuccess: (data) => {
        notyf.success(`${data.data.message}`);
  
        // Reset form
        setFormData({
          email: "",
          password: ""
        });
  
      },
  
      onError: (data) => {
        console.error("Login error:", data);
        notyf.error(`${data.response.data.message}` || "Login failed, Please try again.");
      }
    });
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login form submitted:", formData)
    mutate(formData);
  }


  if (isLoading) return <Loader />;

  if (user) {
    return <Navigate to="/" replace />;
  }
   return (
    <div className="min-h-screen flex items-center justify-center md:justify-end md:gap-16 flex-wrap bg-gradient-to-b from-purple-50 to-blue-50 px-4 py-8">
      <div className=" flex-1   max-w-lg">
        <Card className="border-none shadow-lg shadow-blue-100">
          <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-500 py-4 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-center text-2xl font-bold">
              <LogIn className="mr-2 h-6 w-6" />
              Account Login
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-3 pr-3 py-2 border-2 focus:border-purple-400 focus:ring-purple-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Link to="/forget-password" className="text-sm text-purple-600 hover:text-purple-800">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-3 pr-10 py-2 border-2 focus:border-purple-400 focus:ring-purple-300"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked }))}
                />
                <Label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 transform hover:scale-[1.02]"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-gray-50 rounded-b-lg p-6">
            <div className="text-center text-sm text-gray-600">Don't have an account?</div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50"
                asChild
              >
                <Link to="/register">Customer Register</Link>
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                asChild
              >
                <Link to="/vendor/register">Vendor Register</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
   <div className=" px-4 md:px-10 py-8">   <AccountLinking /></div>
    </div>
  )
}

