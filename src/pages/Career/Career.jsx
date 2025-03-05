"use client"

import { useState } from "react"
import { Briefcase, Heart, Coffee, Award, Users, Clock, MapPin, ChevronDown, ChevronUp, Search } from "lucide-react"

const Career = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedFaq, setExpandedFaq] = useState(null)

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description:
        "We're looking for an experienced software engineer to join our team and help build the next generation of our e-commerce platform.",
      requirements: [
        "5+ years of experience in web development",
        "Strong proficiency in JavaScript, React, and Node.js",
        "Experience with e-commerce platforms",
        "Bachelor's degree in Computer Science or related field",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description:
        "Join our design team to create beautiful, intuitive user experiences for our customers and sellers.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Portfolio demonstrating user-centered design approach",
        "Experience with e-commerce or retail applications",
      ],
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: "Help us grow our brand and reach new customers through innovative marketing campaigns.",
      requirements: [
        "3+ years of experience in digital marketing",
        "Experience with social media marketing and SEO",
        "Strong analytical skills and data-driven approach",
        "Bachelor's degree in Marketing or related field",
      ],
    },
    {
      id: 4,
      title: "Customer Support Representative",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time",
      description: "Provide exceptional support to our customers and help them have the best shopping experience.",
      requirements: [
        "1+ years of customer service experience",
        "Excellent communication skills",
        "Problem-solving mindset",
        "Fluency in Bengali and English",
      ],
    },
    {
      id: 5,
      title: "Operations Manager",
      department: "Operations",
      location: "Chittagong, Bangladesh",
      type: "Full-time",
      description:
        "Oversee our logistics and fulfillment operations to ensure timely delivery of products to customers.",
      requirements: [
        "5+ years of experience in operations or logistics",
        "Experience with supply chain management",
        "Strong leadership and team management skills",
        "Bachelor's degree in Business, Supply Chain, or related field",
      ],
    },
    {
      id: 6,
      title: "Data Analyst",
      department: "Analytics",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: "Turn data into insights that drive business decisions and improve customer experience.",
      requirements: [
        "3+ years of experience in data analysis",
        "Proficiency in SQL, Python, and data visualization tools",
        "Experience with e-commerce data analysis",
        "Bachelor's degree in Statistics, Computer Science, or related field",
      ],
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "What is the application process like?",
      answer:
        "Our application process typically includes an initial application review, a phone screening, one or more interviews (technical if applicable), and a final decision. The entire process usually takes 2-3 weeks, depending on the position.",
    },
    {
      id: 2,
      question: "Do you offer internships or entry-level positions?",
      answer:
        "Yes, we offer internships and entry-level positions throughout the year. We believe in nurturing talent and providing opportunities for fresh graduates to start their careers. Check our job listings regularly for these opportunities.",
    },
    {
      id: 3,
      question: "What is the work culture like at Whatever?",
      answer:
        "At Whatever, we foster a collaborative, innovative, and inclusive work environment. We value work-life balance, continuous learning, and personal growth. Our teams work in an agile manner, and we encourage open communication and idea sharing.",
    },
    {
      id: 4,
      question: "Do you offer remote work options?",
      answer:
        "Yes, we offer remote work options for certain positions. Some roles are fully remote, while others follow a hybrid model. The job listing will specify the work arrangement for each position.",
    },
    {
      id: 5,
      question: "What benefits do employees receive?",
      answer:
        "Our employees enjoy comprehensive health insurance, retirement plans, paid time off, parental leave, professional development opportunities, employee discounts, and various wellness programs. We believe in taking care of our team members.",
    },
  ]

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTab = activeTab === "all" || job.department.toLowerCase() === activeTab.toLowerCase()

    return matchesSearch && matchesTab
  })

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Build your career with Bangladesh's leading e-commerce platform and help shape the future of online
            shopping.
          </p>
          <a
            href="#openings"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Join Whatever?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            At Whatever, we're more than just an e-commerce platform. We're a team of passionate individuals working
            together to transform how people shop in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Meaningful Work</h3>
            <p className="text-gray-600">
              Your work directly impacts millions of customers and thousands of sellers across Bangladesh, making online
              shopping accessible and enjoyable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
            <p className="text-gray-600">
              Work alongside talented, diverse colleagues in an environment that values teamwork, innovation, and open
              communication.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
            <p className="text-gray-600">
              Develop your skills and advance your career through mentorship, training programs, and challenging
              projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Coffee className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Work-Life Balance</h3>
            <p className="text-gray-600">
              We believe in working hard and living well. Enjoy flexible work arrangements, generous time off, and
              wellness initiatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Competitive Benefits</h3>
            <p className="text-gray-600">
              Enjoy comprehensive health coverage, retirement plans, parental leave, and other benefits that support you
              and your family.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
            <p className="text-gray-600">
              Be part of a forward-thinking team that embraces new technologies and approaches to solve complex
              challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Employee Testimonials */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Life at Whatever</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Hear from our team members about their experiences working at Whatever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "Working at Whatever has been the most rewarding experience of my career. I've grown professionally and
                personally, and I'm proud of the impact our team has made on e-commerce in Bangladesh."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Employee"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Imran Hossain</h4>
                  <p className="text-sm text-gray-500">Software Engineer, 3 years</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "The collaborative culture at Whatever is unlike anywhere I've worked before. Everyone is passionate about
                our mission, and there's a genuine sense of camaraderie across teams."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Employee"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Nusrat Jahan</h4>
                  <p className="text-sm text-gray-500">Marketing Manager, 2 years</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "I joined Whatever as an intern and have since grown into a leadership role. The company truly invests in
                its employees and provides opportunities for advancement based on merit."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Employee"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Rafiq Ahmed</h4>
                  <p className="text-sm text-gray-500">Product Manager, 4 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div id="openings" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">Find your perfect role and join our growing team.</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search positions..."
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-md ${activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === "Engineering" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => setActiveTab("Engineering")}
              >
                Engineering
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === "Design" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => setActiveTab("Design")}
              >
                Design
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === "Marketing" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => setActiveTab("Marketing")}
              >
                Marketing
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === "Operations" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => setActiveTab("Operations")}
              >
                Operations
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-blue-600">{job.department}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{job.location}</span>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">No job openings match your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setActiveTab("all")
              }}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Application Process */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Application Process</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Here's what to expect when you apply for a position at Whatever.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Application</h3>
                <p className="text-gray-600 text-sm">Submit your application through our careers page.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Initial Screening</h3>
                <p className="text-gray-600 text-sm">
                  Our HR team reviews your application and conducts a phone interview.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Interviews</h3>
                <p className="text-gray-600 text-sm">
                  Meet with the hiring team for technical and cultural fit interviews.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Offer</h3>
                <p className="text-gray-600 text-sm">Receive and accept your offer to join the Whatever team!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-md hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-medium text-left">{faq.question}</span>
                {expandedFaq === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedFaq === faq.id && (
                <div className="p-5 bg-gray-50 rounded-b-lg border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Explore our current openings and take the first step toward a rewarding career at Whatever.
          </p>
          <a
            href="#openings"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  )
}

export default Career

