import { Clock, MapPin, Truck, Calendar, AlertTriangle, DollarSign, X, PhoneCall, CheckCircle } from "lucide-react"

const NextSameDayDelivery = () => {
  const lastUpdated = "January 15, 2025"

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Next/Same Day Delivery Terms & Conditions</h1>
          <p className="text-center text-gray-600 mt-2">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Introduction */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                Whatever.com offers Next Day and Same Day Delivery services to provide our customers with faster delivery
                options for eligible products. These Terms and Conditions specifically govern our Next Day and Same Day
                Delivery services and should be read in conjunction with our general Terms and Conditions.
              </p>
              <p>
                By selecting Next Day or Same Day Delivery during checkout, you agree to these specific delivery terms
                in addition to our general Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Service Availability */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Service Availability</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mt-6 mb-3">Eligible Locations</h3>
              <p>Next Day and Same Day Delivery services are currently available in select areas within:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Dhaka City (all major areas)</li>
                <li>Chittagong City (select areas)</li>
                <li>Sylhet City (select areas)</li>
                <li>Khulna City (select areas)</li>
                <li>Rajshahi City (select areas)</li>
              </ul>
              <p>
                During checkout, you will be notified if your delivery address is eligible for Next Day or Same Day
                Delivery. We are continuously expanding our coverage areas. Please check our website or contact customer
                service for the most up-to-date information on service availability in your area.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Eligible Products</h3>
              <p>
                Not all products are eligible for Next Day or Same Day Delivery. Eligibility depends on various factors
                including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Product size and weight</li>
                <li>Inventory availability at our fulfillment centers</li>
                <li>Seller participation in expedited delivery programs</li>
                <li>Special handling requirements</li>
              </ul>
              <p>
                Products eligible for Next Day or Same Day Delivery will be clearly marked on the product page and
                during checkout.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Order Value Requirements</h3>
              <p>To qualify for Next Day or Same Day Delivery, your order must meet the following requirements:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Minimum order value of BDT 1,000 for Next Day Delivery</li>
                <li>Minimum order value of BDT 2,000 for Same Day Delivery</li>
                <li>Maximum order value of BDT 50,000 for both services</li>
                <li>Maximum of 10 items per order for Same Day Delivery</li>
              </ul>
            </div>
          </div>

          {/* Order Cut-off Times */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Order Cut-off Times</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>To ensure timely delivery, orders must be placed before the following cut-off times:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Same Day Delivery</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Orders must be placed before 12:00 PM (noon) to qualify for delivery on the same day</li>
                <li>Orders placed after 12:00 PM will be delivered the next day</li>
                <li>Same Day Delivery service is available Sunday through Thursday (excluding holidays)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Next Day Delivery</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Orders must be placed before 8:00 PM to qualify for delivery on the next day</li>
                <li>Orders placed after 8:00 PM will be delivered within two business days</li>
                <li>Next Day Delivery service is available seven days a week (excluding holidays)</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
                <p className="text-blue-700">
                  <strong>Note:</strong> Cut-off times are based on Bangladesh Standard Time (BST). Order processing
                  begins once payment is confirmed. For Cash on Delivery (COD) orders, additional verification may be
                  required, which could affect delivery timing.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Timeframes */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Delivery Timeframes</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mt-6 mb-3">Same Day Delivery</h3>
              <p>
                Orders eligible for Same Day Delivery will be delivered between 2:00 PM and 8:00 PM on the same day the
                order is placed, provided the order is placed before the cut-off time.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Next Day Delivery</h3>
              <p>
                Orders eligible for Next Day Delivery will be delivered between 10:00 AM and 8:00 PM on the day
                following the day the order is placed, provided the order is placed before the cut-off time.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Delivery Time Slots</h3>
              <p>For certain areas, you may be able to select a specific delivery time slot during checkout:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Morning: 10:00 AM - 1:00 PM</li>
                <li>Afternoon: 1:00 PM - 4:00 PM</li>
                <li>Evening: 4:00 PM - 8:00 PM</li>
              </ul>
              <p>Time slot selection is subject to availability and may incur an additional fee.</p>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-4">
                <p className="text-yellow-700">
                  <strong>Important:</strong> While we strive to deliver within the specified timeframes, delivery times
                  are estimates and not guaranteed. Actual delivery times may vary due to factors beyond our control,
                  such as traffic conditions, weather, or high order volumes.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Exceptions and Limitations */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Delivery Exceptions and Limitations</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                Next Day and Same Day Delivery services may be limited or unavailable in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Weather and Natural Events</h3>
              <p>
                Delivery may be delayed or suspended during severe weather conditions, natural disasters, or other
                events that may compromise the safety of our delivery personnel or affect road conditions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Holidays and Special Events</h3>
              <p>
                Delivery services may be limited or unavailable during national holidays, religious festivals (such as
                Eid), or major events that may affect traffic or logistics operations. We will provide advance notice of
                any scheduled service disruptions on our website.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">High-Volume Periods</h3>
              <p>
                During peak shopping seasons (such as Eid, Puja, or special sale events), delivery capacity may be
                limited, and standard delivery timeframes may be extended. We reserve the right to limit the number of
                Next Day and Same Day Delivery orders during these periods.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Address Accessibility</h3>
              <p>Delivery may be delayed or not possible if:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>The delivery address is incomplete or incorrect</li>
                <li>The location is difficult to access by delivery vehicles</li>
                <li>The building has restricted access (e.g., security gates, no elevator access)</li>
                <li>The area is temporarily inaccessible due to road construction or other obstacles</li>
              </ul>
            </div>
          </div>

          {/* Fees and Charges */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Fees and Charges</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                Next Day and Same Day Delivery services are premium delivery options and incur additional fees beyond
                our standard delivery charges:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Same Day Delivery</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Within Dhaka City: BDT 150</li>
                <li>Other eligible cities: BDT 200</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Next Day Delivery</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Within Dhaka City: BDT 80</li>
                <li>Other eligible cities: BDT 120</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Additional Charges</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Specific time slot selection: Additional BDT 50</li>
                <li>
                  Delivery to remote areas within eligible cities: Additional BDT 30-50 (will be specified during
                  checkout)
                </li>
                <li>Heavy or bulky items may incur additional handling fees</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Fee Waivers</h3>
              <p>Next Day Delivery fees may be waived for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Orders above BDT 5,000 (excluding certain categories)</li>
                <li>Whatever Premium members</li>
                <li>Special promotional periods (as advertised on our website)</li>
              </ul>

              <p>All fees will be clearly displayed during the checkout process before you complete your order.</p>
            </div>
          </div>

          {/* Failed Delivery Attempts */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <X className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Failed Delivery Attempts</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                If we are unable to complete the delivery due to reasons attributable to the customer, the following
                policies apply:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">First Failed Attempt</h3>
              <p>If the first delivery attempt fails because:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>No one is available to receive the package</li>
                <li>The recipient refuses to accept the delivery</li>
                <li>The recipient is unable to pay for a Cash on Delivery (COD) order</li>
                <li>The delivery address is inaccessible</li>
              </ul>
              <p>
                Our delivery personnel will leave a delivery attempt notice and try to contact you via phone. We will
                attempt a second delivery on the next business day.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Second Failed Attempt</h3>
              <p>If the second delivery attempt fails:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  For prepaid orders: The package will be returned to our warehouse, and you will need to contact
                  customer service to reschedule delivery or arrange for pickup
                </li>
                <li>For COD orders: The order may be canceled, and you may be charged a restocking fee of BDT 100</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Redelivery Charges</h3>
              <p>If a delivery fails due to customer-related reasons, and you request redelivery:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Standard redelivery (within 3-5 business days): No additional charge</li>
                <li>Next Day redelivery: 50% of the original Next Day Delivery fee</li>
                <li>Same Day redelivery: Not available for failed deliveries</li>
              </ul>
            </div>
          </div>

          {/* Cancellation and Rescheduling */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Cancellation and Rescheduling</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mt-6 mb-3">Order Cancellation</h3>
              <p>For orders with Next Day or Same Day Delivery:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Same Day Delivery orders can be canceled up to 1 hour after placing the order, provided the order has
                  not yet been processed for shipping
                </li>
                <li>
                  Next Day Delivery orders can be canceled up to 2 hours after placing the order, provided the order has
                  not yet been processed for shipping
                </li>
                <li>Once an order has been processed for shipping, it cannot be canceled</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Delivery Rescheduling</h3>
              <p>If you need to reschedule your delivery:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  For Same Day Delivery: Rescheduling is not available; the order will be delivered according to
                  standard delivery timeframes
                </li>
                <li>
                  For Next Day Delivery: You may reschedule once at no additional cost, provided you notify us at least
                  3 hours before the scheduled delivery window
                </li>
                <li>
                  Rescheduling requests must be made through our customer service hotline or your account dashboard
                </li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
                <p className="text-blue-700">
                  <strong>Note:</strong> If you reschedule a Next Day Delivery to a standard delivery timeframe, the
                  difference in delivery fees will not be refunded.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Responsibilities */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Customer Responsibilities</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>To ensure successful Next Day or Same Day Delivery, customers are responsible for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Providing accurate and complete delivery address information, including landmarks or directions if
                  necessary
                </li>
                <li>Ensuring someone is available to receive the package during the delivery window</li>
                <li>Providing a valid phone number where you can be reached regarding delivery</li>
                <li>Having the exact payment amount ready for Cash on Delivery (COD) orders</li>
                <li>Promptly responding to calls or messages from our delivery personnel or customer service team</li>
                <li>Informing us in advance of any access restrictions or special instructions for delivery</li>
              </ul>

              <p>
                Failure to meet these responsibilities may result in delivery delays or failed delivery attempts, for
                which Whatever.com cannot be held responsible.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="flex items-center mb-4">
              <PhoneCall className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Contact Information</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                For questions, concerns, or assistance regarding Next Day or Same Day Delivery, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Whatever.com Delivery Support</strong>
                </p>
                <p>Phone: 09613-800800 (9 AM - 10 PM, Every day)</p>
                <p>Email: delivery@Whatever.com</p>
                <p>Live Chat: Available on our website and mobile app</p>
              </div>
              <p className="mt-4">
                For urgent delivery inquiries, please use our phone support for the fastest assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextSameDayDelivery

