import {
    CheckCircle,
    Shield,
    Award,
    Search,
    BarChart,
    UserCheck,
    ThumbsUp,
    HelpCircle,
    AlertCircle,
    Truck,
  } from "lucide-react"
  
  const WhateverCertified = () => {
    const faqItems = [
      {
        question: "What is Whatever Certified?",
        answer:
          "Whatever Certified is our quality assurance program that verifies products meet our high standards for authenticity, quality, and reliability. Products with this badge have undergone rigorous testing and verification by our quality assurance team.",
      },
      {
        question: "How do I know if a product is Whatever Certified?",
        answer:
          "Whatever Certified products display a blue verification badge on the product listing page, search results, and product detail pages. You can also filter search results to show only Certified products.",
      },
      {
        question: "Are all products on Whatever.com certified?",
        answer:
          "No, not all products are Whatever Certified. We are continuously working to expand our certification program to cover more products and categories, but certification requires a rigorous verification process that takes time.",
      },
      {
        question: "Do Whatever Certified products cost more?",
        answer:
          "Whatever Certified products may sometimes have a slightly higher price point due to the additional quality assurance processes they undergo. However, the added peace of mind and quality guarantee often justify the small price difference.",
      },
      {
        question: "What happens if an Whatever Certified product doesn't meet my expectations?",
        answer:
          "Whatever Certified products come with our enhanced satisfaction guarantee. If you're not satisfied with a Certified product, you can return it within 14 days (instead of the standard 7 days) for a full refund or replacement, no questions asked.",
      },
      {
        question: "How can sellers get their products certified?",
        answer:
          "Sellers interested in the Whatever Certified program can apply through their Seller Dashboard. Products must meet our certification criteria, and sellers must maintain a high performance rating. Our team will guide sellers through the certification process.",
      },
    ]
  
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
          <div className="relative container mx-auto px-4 py-20 flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-4 mb-6">
              <CheckCircle className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Whatever Certified</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Our quality assurance program that guarantees authenticity, quality, and reliability for every certified
              product.
            </p>
          </div>
        </div>
  
        {/* Introduction Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What is Whatever Certified?</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Whatever Certified is our premium quality assurance program designed to help customers identify products
                that meet our highest standards for quality, authenticity, and reliability. When you see the Whatever
                Certified badge, you can shop with complete confidence.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Authentic</h3>
                <p className="text-gray-600">
                  Every Certified product is verified to be 100% genuine and sourced directly from authorized suppliers or
                  manufacturers.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                <p className="text-gray-600">
                  Certified products undergo rigorous quality checks to ensure they meet or exceed industry standards and
                  customer expectations.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Guarantee</h3>
                <p className="text-gray-600">
                  Enjoy extended return periods, priority customer service, and additional warranty coverage on all
                  Certified products.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Benefits Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits of Buying Certified</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                When you choose Whatever Certified products, you're choosing peace of mind and a superior shopping
                experience.
              </p>
            </div>
  
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Guaranteed Authenticity</h3>
                    <p className="text-gray-600">
                      Every Certified product is verified to be 100% authentic, eliminating the risk of counterfeit or
                      imitation products.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 shrink-0">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Priority Shipping</h3>
                    <p className="text-gray-600">
                      Certified products receive priority handling and shipping, ensuring faster delivery to your
                      doorstep.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Extended Returns</h3>
                    <p className="text-gray-600">
                      Enjoy a 14-day return period for Certified products, compared to our standard 7-day return policy.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 shrink-0">
                    <AlertCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Inspected</h3>
                    <p className="text-gray-600">
                      Each Certified product undergoes a multi-point quality inspection before being shipped to customers.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 shrink-0">
                    <UserCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Verified Sellers</h3>
                    <p className="text-gray-600">
                      Certified products come from sellers who maintain high performance standards and customer
                      satisfaction ratings.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Additional Warranty</h3>
                    <p className="text-gray-600">
                      Many Certified products come with extended warranty coverage beyond the manufacturer's standard
                      warranty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Certification Process */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certification Process</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We follow a rigorous multi-step process to ensure only the highest quality products earn the Whatever
              Certified badge.
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
  
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold">Seller Verification</h3>
                    <p className="text-gray-600">
                      We verify the seller's credentials, business registration, and track record.
                    </p>
                  </div>
  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">1</span>
                    </div>
                  </div>
  
                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 mx-auto mb-4 md:hidden">
                      <span className="text-sm">1</span>
                    </div>
                    <h3 className="text-xl font-bold md:hidden">Seller Verification</h3>
                    <p className="text-gray-600 md:hidden">
                      We verify the seller's credentials, business registration, and track record.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right">
                    <h3 className="text-xl font-bold md:block hidden">Source Authentication</h3>
                    <p className="text-gray-600 md:block hidden">
                      We confirm that products are sourced directly from authorized manufacturers or distributors.
                    </p>
                  </div>
  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">2</span>
                    </div>
                  </div>
  
                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 mx-auto mb-4 md:hidden">
                      <span className="text-sm">2</span>
                    </div>
                    <h3 className="text-xl font-bold md:hidden">Source Authentication</h3>
                    <p className="text-gray-600 md:hidden">
                      We confirm that products are sourced directly from authorized manufacturers or distributors.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold">Product Sampling</h3>
                    <p className="text-gray-600">
                      We randomly select product samples for physical inspection and testing.
                    </p>
                  </div>
  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">3</span>
                    </div>
                  </div>
  
                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 mx-auto mb-4 md:hidden">
                      <span className="text-sm">3</span>
                    </div>
                    <h3 className="text-xl font-bold md:hidden">Product Sampling</h3>
                    <p className="text-gray-600 md:hidden">
                      We randomly select product samples for physical inspection and testing.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Step 4 */}
              <div className="relative mb-12">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right">
                    <h3 className="text-xl font-bold md:block hidden">Quality Testing</h3>
                    <p className="text-gray-600 md:block hidden">
                      Our quality assurance team conducts thorough testing based on category-specific criteria.
                    </p>
                  </div>
  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">4</span>
                    </div>
                  </div>
  
                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 mx-auto mb-4 md:hidden">
                      <span className="text-sm">4</span>
                    </div>
                    <h3 className="text-xl font-bold md:hidden">Quality Testing</h3>
                    <p className="text-gray-600 md:hidden">
                      Our quality assurance team conducts thorough testing based on category-specific criteria.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* Step 5 */}
              <div className="relative">
                <div className="flex items-center justify-between flex-col md:flex-row">
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold">Ongoing Monitoring</h3>
                    <p className="text-gray-600">
                      We continuously monitor customer feedback and conduct periodic re-testing to maintain certification.
                    </p>
                  </div>
  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">
                      <span className="text-sm">5</span>
                    </div>
                  </div>
  
                  <div className="md:w-5/12 md:pl-8 md:text-left text-center">
                    <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10 mx-auto mb-4 md:hidden">
                      <span className="text-sm">5</span>
                    </div>
                    <h3 className="text-xl font-bold md:hidden">Ongoing Monitoring</h3>
                    <p className="text-gray-600 md:hidden">
                      We continuously monitor customer feedback and conduct periodic re-testing to maintain certification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Certification Criteria */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certification Criteria</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Products must meet or exceed our strict standards across multiple criteria to earn the Whatever Certified
                badge.
              </p>
            </div>
  
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    Authenticity
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Products must be genuine and from authorized sources</li>
                    <li>Original packaging with valid manufacturer codes</li>
                    <li>Proper documentation and warranty cards where applicable</li>
                    <li>Verification of serial numbers with manufacturers</li>
                  </ul>
                </div>
  
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    Quality
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Products must meet or exceed industry standards</li>
                    <li>Consistent performance in functionality tests</li>
                    <li>Durability and reliability under normal usage conditions</li>
                    <li>Free from manufacturing defects and cosmetic imperfections</li>
                  </ul>
                </div>
  
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <UserCheck className="h-5 w-5 text-blue-600 mr-2" />
                    Seller Performance
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Minimum 4.5/5 seller rating over the past 6 months</li>
                    <li>Less than 1% order cancellation rate</li>
                    <li>On-time delivery rate of at least 95%</li>
                    <li>Prompt and effective customer service</li>
                  </ul>
                </div>
  
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                    Customer Satisfaction
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Minimum 4-star average product rating</li>
                    <li>Low return and complaint rates</li>
                    <li>Positive customer feedback and reviews</li>
                    <li>Consistent satisfaction across multiple orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* How to Identify */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Identify Certified Products</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Look for these indicators to easily identify Whatever Certified products while shopping.
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certification Badge</h3>
                <p className="text-gray-600">
                  Look for the blue Whatever Certified badge displayed prominently on product listings and detail pages.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Search Filter</h3>
                <p className="text-gray-600">
                  Use the "Whatever Certified" filter in search results to show only certified products in your search.
                </p>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Product Packaging</h3>
                <p className="text-gray-600">
                  Certified products arrive with a tamper-evident Whatever Certified seal on the packaging.
                </p>
              </div>
            </div>
  
            <div className="mt-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex">
                <AlertCircle className="h-6 w-6 text-blue-600 mr-2 shrink-0" />
                <p className="text-blue-700">
                  <strong>Important:</strong> The Whatever Certified badge can only be found on our official website and
                  app. If you see this badge on other platforms or websites, it may not be legitimate. Always shop
                  directly through Whatever.com for authentic Certified products.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* FAQ Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
  
            <div className="max-w-3xl mx-auto">
              {faqItems.map((faq, index) => (
                <div key={index} className="mb-6 bg-gray-50 rounded-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-bold flex items-center">
                      <HelpCircle className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                      {faq.question}
                    </h3>
                  </div>
                  <div className="px-5 pb-5">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-blue-600 rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Shop with Confidence</h2>
                <p className="mb-6 text-blue-100">
                  Explore our wide selection of Whatever Certified products and experience the difference that guaranteed
                  quality makes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                  >
                    Shop Certified Products
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-blue-700 transition-colors"
                  >
                    Learn More for Sellers
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 bg-blue-700 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 mx-auto mb-4">
                    <CheckCircle className="h-16 w-16 text-blue-600" />
                  </div>
                  <p className="text-white font-bold">Whatever Certified</p>
                  <p className="text-blue-200 text-sm">Quality Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default WhateverCertified
  
  