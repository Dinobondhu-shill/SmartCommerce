import { Shield, Lock, Eye, Database, UserCheck, Cookie, Bell, FileText } from "lucide-react"

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2025"

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
          <p className="text-center text-gray-600 mt-2">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Introduction */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                At Whatever ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website [www.Whatever.com] and use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our website and services, you
                acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this
                Privacy Policy. If you do not agree with our policies and practices, please do not use our website or
                services.
              </p>
              <p>
                We may change our Privacy Policy from time to time. We encourage you to review the Privacy Policy
                whenever you access our website to stay informed about our information practices and the choices
                available to you.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>We collect several types of information from and about users of our website, including:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
              <p>
                When you create an account, place an order, subscribe to our newsletter, or participate in promotions or
                surveys, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, postal address, phone number</li>
                <li>Username and password</li>
                <li>Payment information (credit card numbers, billing address)</li>
                <li>Demographic information (age, gender, location)</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
              <p>
                When you visit our website, we automatically collect certain information about your device and browsing
                actions, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address, device type, browser type</li>
                <li>Operating system and system configuration</li>
                <li>Pages you visit on our website and how you interact with them</li>
                <li>Referring websites, search terms, and links that directed you to our site</li>
                <li>Time spent on our website and date/time stamps</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Information from Third Parties</h3>
              <p>We may receive information about you from third parties, such as:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Business partners, including payment processors and delivery services</li>
                <li>Social media platforms when you connect your account or share our content</li>
                <li>Advertising and analytics providers</li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>We use the information we collect about you for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Process and fulfill your orders, including shipping and delivery</li>
                <li>Create and manage your account</li>
                <li>Provide customer service and respond to your inquiries</li>
                <li>Send transactional emails, such as order confirmations and updates</li>
                <li>Send marketing communications, if you have opted in</li>
                <li>Personalize your shopping experience and recommend products</li>
                <li>Improve our website, products, and services</li>
                <li>Analyze usage patterns and conduct research</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing and Disclosure */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <UserCheck className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Information Sharing and Disclosure</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>We may share your personal information with:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Service Providers</h3>
              <p>
                We share information with third-party vendors, consultants, and other service providers who perform
                services on our behalf, such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Payment processors to process transactions</li>
                <li>Shipping and logistics companies to deliver orders</li>
                <li>Cloud service providers for data storage</li>
                <li>Marketing and analytics companies to help us improve our services</li>
                <li>Customer service providers to assist with inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, financing, or sale of all or a portion of our assets, your
                information may be transferred as part of that transaction. We will notify you via email and/or a
                prominent notice on our website of any change in ownership or uses of your personal information.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Legal Requirements</h3>
              <p>
                We may disclose your information if required to do so by law or in response to valid requests by public
                authorities (e.g., a court or government agency).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Protection of Rights</h3>
              <p>
                We may disclose your information to protect the safety, rights, property, or security of Whatever, our
                customers, or others; to detect, prevent, or address fraud or security issues; or to investigate or
                defend against potential legal claims.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">With Your Consent</h3>
              <p>We may share your information with third parties when you have given us your consent to do so.</p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Data Security</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                We have implemented appropriate technical and organizational measures to protect the security of your
                personal information. However, please be aware that no method of transmission over the Internet or
                method of electronic storage is 100% secure.
              </p>
              <p>Our security measures include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Encryption of sensitive information using SSL technology</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication procedures</li>
                <li>Secure data storage and backup systems</li>
                <li>Employee training on data protection and security practices</li>
              </ul>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, we cannot
                guarantee its absolute security. You are responsible for maintaining the confidentiality of your account
                credentials and for restricting access to your computer or device.
              </p>
            </div>
          </div>

          {/* Your Rights and Choices */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Your Rights and Choices</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>You have certain rights regarding your personal information, including:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Account Information</h3>
              <p>
                You can review and update your account information by logging into your account on our website. You may
                also contact us directly to request access to, correction, or deletion of personal information that you
                have provided to us.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Communications</h3>
              <p>
                You can opt out of receiving promotional emails from us by following the instructions in those emails.
                If you opt out, we may still send you non-promotional emails, such as those about your account or our
                ongoing business relations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cookies and Tracking Technologies</h3>
              <p>
                Most web browsers are set to accept cookies by default. You can usually choose to set your browser to
                remove or reject cookies. Please note that if you choose to remove or reject cookies, this could affect
                the availability and functionality of our website.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Do Not Track</h3>
              <p>
                Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want
                to have your online activity tracked. Our website does not currently respond to "Do Not Track" signals.
              </p>
            </div>
          </div>

          {/* Cookies and Tracking Technologies */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Cookie className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Cookies and Tracking Technologies</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                We and our third-party service providers use cookies, web beacons, and other tracking technologies to
                collect information about your browsing activities on our website.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. We use the
                following types of cookies:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Essential cookies:</strong> Necessary for the website to function properly
                </li>
                <li>
                  <strong>Preference cookies:</strong> Remember your preferences and settings
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Track your browsing habits to deliver targeted advertising
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Other Tracking Technologies</h3>
              <p>
                We may also use web beacons (small graphic images), pixels, and similar technologies to monitor how you
                interact with our website and marketing communications.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Analytics</h3>
              <p>
                We use third-party analytics services, such as Google Analytics, to help us understand how users engage
                with our website. These services may use cookies and similar technologies to collect information about
                your use of the website and report website trends.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <UserCheck className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Children's Privacy</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe that your child has
                provided us with personal information, please contact us, and we will delete such information from our
                systems.
              </p>
            </div>
          </div>

          {/* Changes to Our Privacy Policy */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Bell className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Changes to Our Privacy Policy</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                We may update our Privacy Policy from time to time. If we make material changes to how we treat our
                users' personal information, we will notify you by email to the email address specified in your account
                and/or through a notice on our website.
              </p>
              <p>
                The date the Privacy Policy was last revised is identified at the top of the page. You are responsible
                for ensuring we have an up-to-date active and deliverable email address for you, and for periodically
                visiting our website and this Privacy Policy to check for any changes.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Contact Information</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact
                us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Whatever.com</strong>
                </p>
                <p>123 Commerce Street, Suite 500</p>
                <p>Dhaka, Bangladesh</p>
                <p>Email: privacy@Whatever.com</p>
                <p>Phone: 01937392767</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

