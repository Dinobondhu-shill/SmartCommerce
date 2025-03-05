import { Award, Users, Target, TrendingUp, Star } from "lucide-react"

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Whatever</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're on a mission to make online shopping accessible, affordable, and enjoyable for everyone in Bangladesh.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Founded in 2015, Whatever began with a simple idea: to create an online marketplace that truly serves the
              needs of Bangladeshi consumers. What started as a small team working out of a single room has grown into
              one of the country's leading e-commerce platforms.
            </p>
            <p>
              Our journey hasn't always been easy, but our commitment to quality, authenticity, and customer
              satisfaction has never wavered. Through the years, we've expanded our product range, improved our
              logistics network, and invested in technology to provide a seamless shopping experience.
            </p>
            <p>
              Today, Whatever connects thousands of sellers with millions of customers across Bangladesh, offering
              everything from electronics and fashion to groceries and household essentials. But despite our growth, we
              remain true to our founding principles: providing genuine products at competitive prices with exceptional
              service.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              At Whatever, we're guided by a set of core values that define who we are and how we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make starts with the question: "How does this benefit our customers?"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality & Authenticity</h3>
              <p className="text-gray-600">
                We never compromise on the quality and authenticity of products available on our platform.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to improve the shopping experience and solve customer pain points.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empowerment</h3>
              <p className="text-gray-600">
                We empower local businesses and entrepreneurs to reach customers across the country.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">The passionate individuals behind Whatever's success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gray-200">
              <img src="/placeholder.svg?height=300&width=300" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Choncol Biswas</h3>
              <p className="text-blue-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of experience in retail and e-commerce, Ahmed leads our company vision and strategy.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gray-200">
              <img src="/placeholder.svg?height=300&width=300" alt="COO" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Fatima Khan</h3>
              <p className="text-blue-600 mb-3">Chief Operating Officer</p>
              <p className="text-gray-600 text-sm">
                Fatima oversees our day-to-day operations, ensuring we deliver on our promises to customers.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gray-200">
              <img src="/placeholder.svg?height=300&width=300" alt="CTO" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Rahim Chowdhury</h3>
              <p className="text-blue-600 mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Rahim leads our tech team, building innovative solutions that power the Whatever platform.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gray-200">
              <img src="/placeholder.svg?height=300&width=300" alt="CMO" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Hazrat Ali</h3>
              <p className="text-blue-600 mb-3">Chief Marketing Officer</p>
              <p className="text-gray-600 text-sm">
                Nadia drives our marketing strategy, helping us connect with customers across Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">Key milestones in our growth story.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {/* 2015 */}
              <div className="relative mb-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold">Founded in Dhaka</h3>
                    <p className="text-gray-600">Whatever launches with just 10 product categories</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">1</span>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <h3 className="text-xl font-bold md:hidden">Founded in Dhaka</h3>
                    <p className="text-blue-600 font-bold">2015</p>
                    <p className="text-gray-600 md:hidden">Whatever launches with just 10 product categories</p>
                  </div>
                </div>
              </div>

              {/* 2017 */}
              <div className="relative mb-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right">
                    <h3 className="text-xl font-bold md:block hidden">Expanded Nationwide</h3>
                    <p className="text-gray-600 md:block hidden">Delivery service expanded to all 64 districts</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">2</span>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <h3 className="text-xl font-bold md:hidden">Expanded Nationwide</h3>
                    <p className="text-blue-600 font-bold">2017</p>
                    <p className="text-gray-600 md:hidden">Delivery service expanded to all 64 districts</p>
                  </div>
                </div>
              </div>

              {/* 2019 */}
              <div className="relative mb-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold">1 Million Customers</h3>
                    <p className="text-gray-600">Reached our first million customer milestone</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">3</span>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <h3 className="text-xl font-bold md:hidden">1 Million Customers</h3>
                    <p className="text-blue-600 font-bold">2019</p>
                    <p className="text-gray-600 md:hidden">Reached our first million customer milestone</p>
                  </div>
                </div>
              </div>

              {/* 2021 */}
              <div className="relative mb-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right">
                    <h3 className="text-xl font-bold md:block hidden">Same-Day Delivery</h3>
                    <p className="text-gray-600 md:block hidden">Launched same-day delivery in major cities</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">4</span>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <h3 className="text-xl font-bold md:hidden">Same-Day Delivery</h3>
                    <p className="text-blue-600 font-bold">2021</p>
                    <p className="text-gray-600 md:hidden">Launched same-day delivery in major cities</p>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold">Whatever Certified Program</h3>
                    <p className="text-gray-600">Launched our quality assurance program for sellers</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">5</span>
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <h3 className="text-xl font-bold md:hidden">Whatever Certified Program</h3>
                    <p className="text-blue-600 font-bold">2023</p>
                    <p className="text-gray-600 md:hidden">Launched our quality assurance program for sellers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "I've been shopping with Whatever for over 3 years now. Their product quality and customer service are
              consistently excellent. The same-day delivery option has been a lifesaver many times!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Customer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold">Tasnim Ahmed</h4>
                <p className="text-sm text-gray-500">Dhaka</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "What I appreciate most about Whatever is the authenticity of products. In a market flooded with
              counterfeits, it's reassuring to know I'm getting genuine items every time I order."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Customer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold">Karim Hossain</h4>
                <p className="text-sm text-gray-500">Chittagong</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "As a small business owner, selling on Whatever has transformed my business. Their platform is easy to use,
              and they've helped me reach customers across Bangladesh that I never could have on my own."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Customer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold">Sabina Begum</h4>
                <p className="text-sm text-gray-500">Sylhet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Whatever Family</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Whether you're a shopper looking for great deals or a seller wanting to grow your business, we're here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-blue-600 transition-colors"
            >
              Start Shopping
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Become a Seller
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

