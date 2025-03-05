import {
    FileText,
    ShoppingBag,
    Truck,
    RotateCcw,
    Shield,
    Copyright,
    MessageSquare,
    Scale,
    Gavel,
    Bell,
  } from "lucide-react"
  
  const TermsAndConditions = () => {
    const lastUpdated = "January 15, 2025"
  
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Terms and Conditions</h1>
            <p className="text-center text-gray-600 mt-2">Last Updated: {lastUpdated}</p>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            {/* Legal Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-700">
                <strong>Disclaimer:</strong> These Terms and Conditions are provided as a template and should be reviewed
                by a legal professional familiar with Bangladeshi law before implementation. This document is not legal
                advice.
              </p>
            </div>
  
            {/* Introduction */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Introduction</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Welcome to Whatever.com ("we," "us," or "our"). These Terms and Conditions govern your access to and use
                  of the Whatever.com website, mobile applications, and services (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms and Conditions and our Privacy
                  Policy. If you do not agree to these Terms and Conditions, please do not use our Services.
                </p>
                <p>
                  These Terms and Conditions are subject to change by Whatever.com at any time. We will notify users of
                  material changes to these terms by posting the new Terms and Conditions on this page and updating the
                  "Last Updated" date above. Your continued use of the Services following the posting of revised Terms and
                  Conditions means that you accept and agree to the changes.
                </p>
              </div>
            </div>
  
            {/* Account Registration and User Responsibilities */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Account Registration and User Responsibilities</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <h3 className="text-xl font-semibold mt-6 mb-3">Account Registration</h3>
                <p>
                  To access certain features of our Services, you may be required to register for an account. You agree to
                  provide accurate, current, and complete information during the registration process and to update such
                  information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your password and for all activities that occur under your account.
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of
                  security.
                </p>
  
                <h3 className="text-xl font-semibold mt-6 mb-3">Eligibility</h3>
                <p>
                  You must be at least 18 years old to create an account and use our Services. By creating an account and
                  using our Services, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>You are at least 18 years of age;</li>
                  <li>You have the legal capacity to enter into binding contracts;</li>
                  <li>
                    You are not a person barred from receiving services under the laws of Bangladesh or other applicable
                    jurisdiction;
                  </li>
                  <li>
                    You will comply with these Terms and Conditions and all applicable local, state, national, and
                    international laws, rules, and regulations.
                  </li>
                </ul>
  
                <h3 className="text-xl font-semibold mt-6 mb-3">Prohibited Activities</h3>
                <p>You agree not to engage in any of the following prohibited activities:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Using our Services for any illegal purpose or in violation of any local, state, national, or
                    international law;
                  </li>
                  <li>
                    Violating or infringing other people's intellectual property, privacy, publicity, or other legal
                    rights;
                  </li>
                  <li>
                    Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation
                    with a person or entity;
                  </li>
                  <li>Interfering with or disrupting the Services or servers or networks connected to the Services;</li>
                  <li>
                    Attempting to gain unauthorized access to any portion of the Services or any other accounts, computer
                    systems, or networks connected to the Services;
                  </li>
                  <li>
                    Using any automated means, including bots, robots, crawlers, or data mining tools, to download data
                    from or otherwise interact with the Services;
                  </li>
                  <li>
                    Introducing any viruses, Trojan horses, worms, logic bombs, or other harmful material to the Services.
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Ordering and Payment Terms */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Ordering and Payment Terms</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <h3 className="text-xl font-semibold mt-6 mb-3">Order Acceptance and Pricing</h3>
                <p>
                  All orders placed through our Services are subject to our acceptance. We reserve the right to refuse or
                  cancel any order for any reason at any time. If we cancel an order after you have already been charged,
                  we will refund the full amount.
                </p>
                <p>
                  Prices for products are subject to change without notice. We reserve the right to modify or discontinue
                  any product or service without notice at any time. We shall not be liable to you or any third party for
                  any modification, price change, suspension, or discontinuance of any product or service.
                </p>
                <p>
                  All prices are displayed in Bangladeshi Taka (BDT) and include applicable taxes unless otherwise stated.
                  Additional charges such as shipping fees will be shown at checkout.
                </p>
  
                <h3 className="text-xl font-semibold mt-6 mb-3">Payment Methods</h3>
                <p>
                  We accept various payment methods, including credit cards, debit cards, mobile banking, and cash on
                  delivery (where available). By providing a payment method, you represent and warrant that you are
                  authorized to use the designated payment method and that the payment information you provide is true and
                  accurate.
                </p>
                <p>
                  For credit and debit card payments, we may verify your payment information with your card issuer or
                  bank. We may also require additional information to verify your identity before accepting your order.
                </p>
  
                <h3 className="text-xl font-semibold mt-6 mb-3">Order Confirmation</h3>
                <p>
                  After placing an order, you will receive an email confirmation with your order details. This email
                  confirms that we have received your order, but it does not confirm that your order has been accepted or
                  shipped.
                </p>
                <p>
                  We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by
                  dealers, resellers, or distributors, or that exceed reasonable quantities for personal use.
                </p>
              </div>
            </div>
  
            {/* Shipping and Delivery */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Truck className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Shipping and Delivery</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We offer various shipping methods and delivery timeframes, which are displayed during the checkout
                  process. Delivery times are estimates and are not guaranteed. We are not responsible for delays that are
                  beyond our control, such as customs processing or natural disasters.
                </p>
                <p>
                  Risk of loss and title for items purchased from our website pass to you upon delivery of the items to
                  the carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.
                </p>
                <p>
                  For Cash on Delivery (COD) orders, you agree to pay the full amount when the package is delivered to
                  your shipping address. If you refuse to accept and pay for a COD order without a valid reason, we
                  reserve the right to ban your account from future COD orders.
                </p>
              </div>
            </div>
  
            {/* Returns and Refunds */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <RotateCcw className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Returns and Refunds</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We want you to be satisfied with your purchase. If you are not completely satisfied, you may return
                  eligible items within 7 days of delivery for a full refund or exchange, subject to the following
                  conditions:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    The item must be unused, unworn, unwashed, and in its original packaging with all tags attached;
                  </li>
                  <li>You must provide proof of purchase (order number, receipt, etc.);</li>
                  <li>
                    Certain items, such as perishable goods, personal care products, and intimate apparel, are not
                    eligible for return due to health and hygiene reasons;
                  </li>
                  <li>Digital products, gift cards, and downloadable software are not eligible for return;</li>
                  <li>Custom-made or personalized items are not eligible for return unless they are defective.</li>
                </ul>
                <p>
                  If you receive a defective or damaged item, please contact our customer service within 48 hours of
                  delivery. We may require photographic evidence of the defect or damage before approving a return or
                  replacement.
                </p>
                <p>
                  Refunds will be processed using the original payment method. The time it takes for the refund to appear
                  in your account depends on your payment provider and may take up to 14 business days.
                </p>
                <p>
                  Shipping costs for returns are generally the responsibility of the customer, except in cases where the
                  item is defective, damaged, or incorrectly shipped.
                </p>
              </div>
            </div>
  
            {/* Product Information and Disclaimers */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Product Information and Disclaimers</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We strive to provide accurate product descriptions, images, and pricing information. However, we do not
                  warrant that product descriptions, images, pricing, or other content on our Services is accurate,
                  complete, reliable, current, or error-free.
                </p>
                <p>
                  Colors of products as shown on the website may not be an exact representation of the actual colors due
                  to variations in display settings and screen resolutions.
                </p>
                <p>
                  In the event of a pricing error, we reserve the right to cancel any orders placed for products listed at
                  an incorrect price. If your payment has already been processed for such an order, we will issue a
                  refund.
                </p>
                <p>
                  For certain products, we may provide manufacturer's warranties. These warranties are provided by the
                  manufacturers and not by us. We do not make any representations or warranties regarding such
                  manufacturer's warranties.
                </p>
              </div>
            </div>
  
            {/* Intellectual Property Rights */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Copyright className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  The Services and their entire contents, features, and functionality (including but not limited to all
                  information, software, text, displays, images, video, and audio, and the design, selection, and
                  arrangement thereof) are owned by Whatever.com, its licensors, or other providers of such material and are
                  protected by Bangladesh and international copyright, trademark, patent, trade secret, and other
                  intellectual property or proprietary rights laws.
                </p>
                <p>
                  These Terms and Conditions permit you to use the Services for your personal, non-commercial use only.
                  You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                  perform, republish, download, store, or transmit any of the material on our Services, except as follows:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
                    viewing those materials;
                  </li>
                  <li>
                    You may store files that are automatically cached by your Web browser for display enhancement
                    purposes;
                  </li>
                  <li>
                    You may print or download one copy of a reasonable number of pages of the website for your own
                    personal, non-commercial use and not for further reproduction, publication, or distribution;
                  </li>
                  <li>
                    If we provide social media features with certain content, you may take such actions as are enabled by
                    such features.
                  </li>
                </ul>
                <p>You must not:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Modify copies of any materials from the Services;</li>
                  <li>
                    Use any illustrations, photographs, video or audio sequences, or any graphics separately from the
                    accompanying text;
                  </li>
                  <li>
                    Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials
                    from the Services;
                  </li>
                  <li>
                    Access or use for any commercial purposes any part of the Services or any services or materials
                    available through the Services.
                  </li>
                </ul>
              </div>
            </div>
  
            {/* User-Generated Content */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">User-Generated Content</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Our Services may allow you to post, submit, publish, display, or transmit content such as product
                  reviews, comments, and forum posts (collectively, "User Content").
                </p>
                <p>
                  By posting User Content, you grant us and our affiliates a non-exclusive, royalty-free, perpetual,
                  irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create
                  derivative works from, distribute, perform, and display such User Content throughout the world in any
                  media.
                </p>
                <p>You represent and warrant that:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    You own or control all rights in and to the User Content and have the right to grant the license
                    granted above;
                  </li>
                  <li>All of your User Content does and will comply with these Terms and Conditions;</li>
                  <li>User Content is not false, inaccurate, or misleading;</li>
                  <li>User Content does not violate any law or regulation;</li>
                  <li>
                    User Content does not infringe any intellectual property right, privacy right, or other right of any
                    third party;
                  </li>
                  <li>
                    User Content does not contain any defamatory, obscene, offensive, or otherwise objectionable material.
                  </li>
                </ul>
                <p>
                  We have the right, but not the obligation, to monitor and edit or remove any User Content. We take no
                  responsibility and assume no liability for any User Content posted by you or any third party.
                </p>
              </div>
            </div>
  
            {/* Limitation of Liability */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  To the fullest extent permitted by applicable law, in no event shall Whatever.com, its affiliates, or
                  their licensors, service providers, employees, agents, officers, or directors be liable for damages of
                  any kind, under any legal theory, arising out of or in connection with your use, or inability to use,
                  the Services, including any direct, indirect, special, incidental, consequential, or punitive damages,
                  including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue,
                  loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data,
                  and whether caused by tort (including negligence), breach of contract, or otherwise, even if
                  foreseeable.
                </p>
                <p>
                  The foregoing does not affect any liability which cannot be excluded or limited under applicable law,
                  which may include fraud.
                </p>
              </div>
            </div>
  
            {/* Dispute Resolution */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Dispute Resolution</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  In the event of any dispute, claim, question, or disagreement arising from or relating to these Terms
                  and Conditions or the breach thereof, the parties shall use their best efforts to settle the dispute,
                  claim, question, or disagreement. To this effect, they shall consult and negotiate with each other in
                  good faith and, recognizing their mutual interests, attempt to reach a just and equitable solution
                  satisfactory to both parties.
                </p>
                <p>
                  If they do not reach such solution within a period of 60 days, then, upon notice by either party to the
                  other, all disputes, claims, questions, or differences shall be finally settled by arbitration
                  administered by the Bangladesh International Arbitration Centre in accordance with its Arbitration
                  Rules.
                </p>
                <p>
                  The number of arbitrators shall be one. The place of arbitration shall be Dhaka, Bangladesh. The
                  language of the arbitration shall be English.
                </p>
              </div>
            </div>
  
            {/* Governing Law */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Gavel className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Governing Law</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  These Terms and Conditions and any separate agreements whereby we provide you Services shall be governed
                  by and construed in accordance with the laws of the People's Republic of Bangladesh, without regard to
                  its conflict of law principles.
                </p>
                <p>
                  Any legal suit, action, or proceeding arising out of, or related to, these Terms and Conditions or the
                  Services shall be instituted exclusively in the courts of Bangladesh, although we retain the right to
                  bring any suit, action, or proceeding against you for breach of these Terms and Conditions in your
                  country of residence or any other relevant country.
                </p>
              </div>
            </div>
  
            {/* Changes to Terms and Conditions */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Bell className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Changes to Terms and Conditions</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We may revise and update these Terms and Conditions from time to time in our sole discretion. All
                  changes are effective immediately when we post them, and apply to all access to and use of the Services
                  thereafter.
                </p>
                <p>
                  Your continued use of the Services following the posting of revised Terms and Conditions means that you
                  accept and agree to the changes. You are expected to check this page frequently so you are aware of any
                  changes, as they are binding on you.
                </p>
              </div>
            </div>
  
            {/* Contact Information */}
            <div>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>
              <div className="prose max-w-none text-gray-600">
                <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p>
                    <strong>Whatever.com</strong>
                  </p>
                  <p>123 Commerce Street, Suite 500</p>
                  <p>Dhaka, Bangladesh</p>
                  <p>Email: legal@Whatever.com</p>
                  <p>Phone: 09613-800800</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default TermsAndConditions
  
  