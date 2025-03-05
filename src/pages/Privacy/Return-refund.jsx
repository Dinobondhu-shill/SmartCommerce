import { RotateCcw, X, AlertTriangle, DollarSign, RefreshCw, HelpCircle, FileText, PhoneCall } from "lucide-react"

const CancellationReturnRefund = () => {
  const lastUpdated = "January 15, 2023"

  const faqItems = [
    {
      question: "How do I cancel my order?",
      answer:
        "You can cancel your order by logging into your account, going to 'My Orders', finding the order you wish to cancel, and clicking the 'Cancel Order' button. This option is only available if your order hasn't been shipped yet. Alternatively, you can contact our customer service team for assistance.",
    },
    {
      question: "Can I return part of my order?",
      answer:
        "Yes, you can return individual items from your order. Each item will be evaluated separately according to our return policy. Please note that any promotional or bundle discounts may be adjusted if you return part of a qualifying order.",
    },
    {
      question: "How long will it take to process my refund?",
      answer:
        "Once we receive and inspect your return, we'll process your refund within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment method: 2-3 business days for credit/debit cards, 1-2 business days for mobile banking, and 5-7 business days for bank transfers.",
    },
    {
      question: "Do I have to pay for return shipping?",
      answer:
        "In most cases, customers are responsible for return shipping costs. However, if you received a damaged, defective, or incorrect item, we'll provide a free return shipping label or arrange for pickup at our expense.",
    },
    {
      question: "Can I exchange an item instead of returning it?",
      answer:
        "Yes, we offer exchanges for items of equal value. If you want to exchange for an item of different value, we'll process a refund for the returned item and you can place a new order for the desired item. To request an exchange, select the 'Exchange' option instead of 'Return' when initiating the return process.",
    },
    {
      question: "What if my item is damaged or defective?",
      answer:
        "If you receive a damaged or defective item, please contact our customer service within 48 hours of delivery. We'll need photos of the damage or defect. Once verified, we'll arrange for a return, replacement, or refund at our discretion, with no additional cost to you.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Cancellation, Return & Refund Policy</h1>
          <p className="text-center text-gray-600 mt-2">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Introduction */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                At Othoba.com, we strive to ensure your complete satisfaction with every purchase. We understand that
                sometimes you may need to cancel an order, return a product, or request a refund. This policy outlines
                the terms and procedures for cancellations, returns, and refunds.
              </p>
              <p>
                Please read this policy carefully before making a purchase. By placing an order on Othoba.com, you agree
                to the terms outlined in this policy. These terms may be updated from time to time, and the most current
                version will always be available on our website.
              </p>
            </div>
          </div>

          {/* Order Cancellation Policy */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <X className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Order Cancellation Policy</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mt-6 mb-3">Cancellation Timeframe</h3>
              <p>You may cancel your order without any penalty under the following conditions:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>For regular orders: Within 1 hour of placing the order</li>
                <li>For pre-orders or back-ordered items: Any time before the item is shipped</li>
                <li>For Next Day Delivery orders: Within 2 hours of placing the order</li>
                <li>For Same Day Delivery orders: Within 30 minutes of placing the order</li>
              </ul>
              <p>
                Once your order has been processed for shipping or has been shipped, it cannot be canceled. In such
                cases, you may refuse delivery or return the item according to our Return Policy.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Non-Cancelable Orders</h3>
              <p>The following types of orders cannot be canceled once placed:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Custom-made or personalized items</li>
                <li>Perishable goods (e.g., food items, flowers)</li>
                <li>Digital products or services that have been activated or accessed</li>
                <li>Items marked as non-cancelable on the product page</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">How to Cancel an Order</h3>
              <p>You can cancel an eligible order through the following methods:</p>
              <ol className="list-decimal pl-6 mb-4">
                <li>
                  <strong>Online:</strong> Log in to your Othoba.com account, go to "My Orders," find the order you wish
                  to cancel, and click the "Cancel Order" button (if available).
                </li>
                <li>
                  <strong>Phone:</strong> Call our customer service at 09613-800800 during business hours (9 AM - 10 PM,
                  every day).
                </li>
                <li>
                  <strong>Email:</strong> Send a cancellation request to orders@othoba.com with your order number and
                  reason for cancellation.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">Refund for Canceled Orders</h3>
              <p>
                If you have already paid for an order that is successfully canceled, we will process a refund as
                follows:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Credit/Debit Card payments: Refunded to the original card within 5-7 business days</li>
                <li>Mobile Banking payments: Refunded to the original account within 3-5 business days</li>
                <li>Bank Transfer: Refunded to your bank account within 7-10 business days</li>
                <li>Othoba Wallet: Refunded to your wallet immediately</li>
              </ul>
              <p>Please note that payment gateway charges or processing fees may not be refundable in some cases.</p>
            </div>
          </div>

          {/* Return Policy */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <RotateCcw className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Return Policy</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mt-6 mb-3">Return Eligibility</h3>
              <p>
                You may return items purchased from Othoba.com within 7 days of delivery, provided they meet the
                following conditions:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The item is unused, unworn, unwashed, and in its original condition</li>
                <li>The item is in its original packaging with all tags, labels, and accessories intact</li>
                <li>You have the original receipt or proof of purchase</li>
                <li>The item is not listed under "Non-Returnable Items" below</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4 mb-6">
                <p className="text-blue-700">
                  <strong>Note:</strong> Othoba Certified products have an extended return period of 14 days from the
                  date of delivery.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Non-Returnable Items</h3>
              <p>The following items cannot be returned:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Perishable goods such as food, flowers, or plants</li>
                <li>Newspapers, magazines, or other periodicals</li>
                <li>Intimate apparel, swimwear, and undergarments for hygiene reasons</li>
                <li>Beauty products and cosmetics that have been opened or used</li>
                <li>Digital products, downloadable software, or e-books</li>
                <li>Gift cards or vouchers</li>
                <li>Custom-made or personalized items</li>
                <li>Items marked as "Final Sale" or "Non-Returnable" on the product page</li>
                <li>Products with tampered or missing serial numbers</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Special Category Return Policies</h3>
              <p>Some product categories have specific return conditions:</p>

              <h4 className="text-lg font-medium mt-4 mb-2">Electronics</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Must be returned within 7 days of delivery</li>
                <li>Must be in original packaging with all accessories and manuals</li>
                <li>Must not have any physical damage or signs of use</li>
                <li>Software, games, and other digital media must be unopened</li>
                <li>Activated devices with user accounts cannot be returned</li>
              </ul>

              <h4 className="text-lg font-medium mt-4 mb-2">Clothing and Apparel</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Must have original tags attached</li>
                <li>Must not have been worn, washed, or altered</li>
                <li>Must be free from perfume, deodorant, or makeup stains</li>
                <li>Footwear must be unworn and without any marks on the soles</li>
              </ul>

              <h4 className="text-lg font-medium mt-4 mb-2">Furniture and Large Items</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Must be returned within 7 days of delivery</li>
                <li>Must not be assembled (unless delivered assembled)</li>
                <li>Must be in original packaging</li>
                <li>Customer is responsible for disassembly if required</li>
                <li>Return shipping for large items may incur additional fees</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Return Process</h3>
              <p>To return an item, please follow these steps:</p>
              <ol className="list-decimal pl-6 mb-4">
                <li>
                  <strong>Initiate Return:</strong> Log in to your Othoba.com account, go to "My Orders," find the order
                  containing the item you wish to return, and click "Return Item." Alternatively, contact our customer
                  service.
                </li>
                <li>
                  <strong>Return Reason:</strong> Select a reason for your return from the provided options. This helps
                  us improve our products and services.
                </li>
                <li>
                  <strong>Return Method:</strong> Choose whether you want a refund or an exchange (if applicable).
                </li>
                <li>
                  <strong>Return Shipping:</strong> Select a return shipping method from the available options.
                </li>
                <li>
                  <strong>Package the Item:</strong> Securely pack the item in its original packaging or a suitable
                  alternative. Include all accessories, manuals, and free gifts that came with the item.
                </li>
                <li>
                  <strong>Attach Return Label:</strong> Print and attach the return shipping label to your package (if
                  provided).
                </li>
                <li>
                  <strong>Ship the Item:</strong> Drop off the package at the designated courier service or schedule a
                  pickup (if available).
                </li>
              </ol>

              <h3 className="text-xl font-semibold mt-6 mb-3">Return Shipping</h3>
              <p>
                Return shipping costs are generally the responsibility of the customer, except in the following cases:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The item received was damaged, defective, or incorrect</li>
                <li>The item does not match the product description or specifications</li>
                <li>You received an incomplete order</li>
              </ul>
              <p>
                In these cases, we will provide a free return shipping label or arrange for pickup at our expense. For
                all other returns, the shipping cost will be deducted from your refund amount or charged separately.
              </p>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Refund Policy</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mt-6 mb-3">Refund Process</h3>
              <p>
                Once we receive your returned item, our team will inspect it to ensure it meets our return policy
                requirements. The inspection process typically takes 1-2 business days.
              </p>
              <p>
                If your return is approved, we will process your refund. If your return is rejected, we will notify you
                of the reason and arrange to ship the item back to you.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Refund Methods</h3>
              <p>Refunds will be processed using the original payment method whenever possible:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Credit/Debit Card payments: Refunded to the original card</li>
                <li>Mobile Banking payments: Refunded to the original account</li>
                <li>Cash on Delivery (COD): Refunded via bank transfer or Othoba Wallet</li>
                <li>Gift Card purchases: Refunded as store credit</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Refund Timeline</h3>
              <p>After your return is approved, refunds are processed within the following timeframes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Othoba Wallet: Immediate credit</li>
                <li>Credit/Debit Cards: 5-7 business days</li>
                <li>Mobile Banking: 3-5 business days</li>
                <li>Bank Transfers: 7-10 business days</li>
              </ul>
              <p>
                Please note that while we process refunds promptly, the time it takes for the refund to appear in your
                account depends on your payment provider and may take additional time beyond our processing.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Partial Refunds</h3>
              <p>In some cases, we may issue partial refunds:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>If the returned item shows signs of use or damage not present when shipped</li>
                <li>If any parts, accessories, free gifts, or documentation are missing</li>
                <li>If the original packaging is damaged or missing</li>
                <li>If you return only part of a bundle or set that was priced and sold as a single unit</li>
                <li>
                  If you return an item purchased with a promotional discount that required a minimum order value, and
                  the return brings your order below that threshold
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Refund for Damaged or Defective Items</h3>
              <p>
                If you receive a damaged or defective item, please contact our customer service within 48 hours of
                delivery. We may request photos or videos of the damage or defect.
              </p>
              <p>Once verified, we will offer one of the following solutions at our discretion:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Full refund without requiring return of the item (for low-value items)</li>
                <li>Replacement with the same item (subject to availability)</li>
                <li>Full refund including original shipping charges after the item is returned</li>
                <li>Store credit with additional bonus amount as compensation for the inconvenience</li>
              </ul>
            </div>
          </div>

          {/* Exchange Policy */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <RefreshCw className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Exchange Policy</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                Instead of a refund, you may request an exchange for another item of equal value, subject to the
                following conditions:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The item you want to exchange for is in stock</li>
                <li>The exchange is requested within the return eligibility period</li>
                <li>The original item meets all return eligibility requirements</li>
                <li>The new item is of equal or lesser value than the original item</li>
              </ul>
              <p>
                If you wish to exchange for an item of higher value, you will need to pay the price difference. If you
                exchange for an item of lower value, we will refund the difference.
              </p>
              <p>
                To request an exchange, select the "Exchange" option instead of "Return" when initiating the return
                process through your account. Our customer service team will guide you through the exchange process.
              </p>
            </div>
          </div>

          {/* Special Circumstances */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Special Circumstances</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mt-6 mb-3">Promotional Items and Free Gifts</h3>
              <p>
                If you return an item that came with a free gift or promotional item, you must also return the free gift
                or promotional item in unused condition. If the free gift is not returned or is returned in used
                condition, the value of the gift may be deducted from your refund.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Promotional Discounts and Coupons</h3>
              <p>
                If you used a promotional discount or coupon on your order and then return part of the order, the
                discount may be adjusted or removed if the return makes your order ineligible for the original
                promotion. For example, if you received a 10% discount for ordering over BDT 5,000 and your return
                brings the order value below BDT 5,000, the discount amount will be deducted from your refund.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Incorrect or Missing Items</h3>
              <p>
                If you receive an incorrect item or if an item is missing from your order, please contact our customer
                service within 48 hours of delivery. We will arrange for the correct item to be sent to you and, if
                necessary, for the incorrect item to be returned at our expense.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Refused Deliveries</h3>
              <p>
                If you refuse delivery of an order without contacting us first, the order will be returned to our
                warehouse. Once received, we will process a refund minus the shipping costs, unless the refusal was due
                to visible damage to the package.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                  </div>
                  <div className="px-5 pb-5">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
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
                If you have any questions or need assistance with cancellations, returns, or refunds, please contact our
                customer service team:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Othoba.com Customer Service</strong>
                </p>
                <p>Phone: 09613-800800 (9 AM - 10 PM, Every day)</p>
                <p>Email: support@othoba.com</p>
                <p>Live Chat: Available on our website and mobile app</p>
              </div>
              <p className="mt-4">
                For the fastest assistance with returns and refunds, please have your order number ready when contacting
                us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancellationReturnRefund

