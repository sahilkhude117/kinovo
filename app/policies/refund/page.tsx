'use client'

import React from 'react';

import Link from 'next/link';

interface RefundPolicySection {
  id: string;
  title: string;
  content: string | string[];
}

const RefundPolicyPage: React.FC = () => {
  const lastUpdated = "January 15, 2025";
  const companyName = "Kinovo";
  const contactEmail = "support@kinovo.com";
  const contactPhone = "+1-800-KINOVO";

  const refundSections: RefundPolicySection[] = [
    {
      id: "overview",
      title: "Refund Policy Overview",
      content: [
        "At Kinovo, we are committed to providing high-quality printable worksheet bundles for children's educational development. Due to the digital nature of our products, all sales are generally final upon download.",
        "However, we understand that exceptional circumstances may arise, and we are committed to working with our customers to resolve any genuine issues.",
        "This refund policy complies with applicable consumer protection laws and payment gateway requirements including Razorpay's merchant guidelines."
      ]
    },
    {
      id: "digital-products",
      title: "Digital Product Policy",
      content: [
        "All worksheet bundles sold on Kinovo are digital products delivered instantly upon successful payment.",
        "Once a product is downloaded or accessed, it cannot be returned in the traditional sense as the digital content has been delivered.",
        "By purchasing our digital products, you acknowledge that you are purchasing downloadable content that will be immediately available after payment confirmation."
      ]
    },
    {
      id: "refund-eligibility",
      title: "Refund Eligibility Criteria",
      content: [
        "Refunds may be considered under the following circumstances:",
        "• Technical Issues: If you experience technical problems preventing download or access to your purchased content, and our support team cannot resolve the issue within 48 hours.",
        "• Duplicate Purchases: If you accidentally purchase the same product multiple times within a 24-hour period.",
        "• Payment Errors: If your payment was processed but you did not receive the product due to system errors on our end.",
        "• Defective Products: If the downloaded files are corrupted, incomplete, or significantly different from the product description.",
        "• Unauthorized Transactions: If your payment method was used without your authorization (subject to verification)."
      ]
    },
    {
      id: "non-refundable",
      title: "Non-Refundable Circumstances",
      content: [
        "Refunds will NOT be provided in the following situations:",
        "• Change of mind after successful download or access to the product.",
        "• Incompatibility with your device or software (product requirements are clearly stated).",
        "• Failure to download products within the specified time limit.",
        "• Requests made more than 7 days after the original purchase date.",
        "• Products that have been shared, distributed, or used commercially without proper licensing.",
        "• Requests based on subjective dissatisfaction with content quality or style."
      ]
    },
    {
      id: "refund-process",
      title: "Refund Request Process",
      content: [
        "To request a refund, please follow these steps:",
        "1. Contact our support team at " + contactEmail + " within 7 days of your purchase.",
        "2. Include your order number, transaction ID, and detailed reason for the refund request.",
        "3. Provide any relevant screenshots or documentation supporting your claim.",
        "4. Our team will review your request within 2-3 business days.",
        "5. If approved, refunds will be processed within 5-7 business days to your original payment method.",
        "6. You will receive an email confirmation once the refund has been processed."
      ]
    },
    {
      id: "refund-timeframes",
      title: "Refund Processing Timeframes",
      content: [
        "• Request Review: 2-3 business days from receipt of your refund request.",
        "• Processing Time: 5-7 business days for approved refunds.",
        "• Bank/Payment Method: Additional 3-5 business days depending on your financial institution.",
        "• International Transactions: May take up to 10-15 business days for international payment methods.",
        "Note: Refunds are processed to the original payment method used for the purchase."
      ]
    },
    {
      id: "partial-refunds",
      title: "Partial Refunds",
      content: [
        "In certain circumstances, we may offer partial refunds:",
        "• If only a portion of a bundle is defective or inaccessible.",
        "• For bulk purchases where some items were successfully delivered and others were not.",
        "• When technical issues affect only specific components of a product bundle.",
        "Partial refund amounts will be calculated based on the affected portion of your purchase."
      ]
    },
    {
      id: "payment-disputes",
      title: "Payment Disputes and Chargebacks",
      content: [
        "Before initiating a chargeback with your payment provider, please contact our support team to resolve the issue directly.",
        "Chargebacks may result in the suspension of your account and access to purchased products.",
        "We work with Razorpay and other payment processors to resolve disputes fairly and in accordance with their terms of service.",
        "Documentation of our refund policy and your purchase will be provided to payment processors if disputes arise."
      ]
    },
    {
      id: "promotional-purchases",
      title: "Promotional and Discounted Purchases",
      content: [
        "Products purchased using discount codes, promotional offers, or during sales events are subject to the same refund policy.",
        "Refunds for promotional purchases will be processed at the actual amount paid, not the original price.",
        "Bundle deals and package discounts are treated as single transactions for refund purposes."
      ]
    },
    {
      id: "legal-compliance",
      title: "Legal Rights and Compliance",
      content: [
        "This refund policy complies with applicable consumer protection laws in your jurisdiction.",
        "Nothing in this policy limits your statutory rights as a consumer.",
        "For customers in the EU, this policy respects your rights under the Consumer Rights Directive.",
        "This policy meets the requirements of payment processors including Razorpay's merchant terms of service."
      ]
    },
    {
      id: "contact-information",
      title: "Contact Information",
      content: [
        "For refund requests or questions about this policy, please contact us:",
        "• Email: " + contactEmail,
        "• Business Hours: Monday to Friday, 9:00 AM to 6:00 PM (EST)",
        "• Response Time: Within 24 hours for email inquiries",
        "Please include your order number and transaction details in all communications."
      ]
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      content: [
        "We reserve the right to update this refund policy at any time.",
        "Changes will be posted on this page with an updated 'Last Modified' date.",
        "Continued use of our services after policy changes constitutes acceptance of the updated terms.",
        "For significant changes, we will notify customers via email when possible."
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-[#FBB406] to-[#13C0FA] text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-baloo">
                Refund Policy
              </h1>
              <p className="text-xl md:text-2xl font-medium opacity-95 max-w-2xl mx-auto">
                Clear guidelines for refunds on our printable worksheet bundles
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        </header>

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-6">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-[#13C0FA] hover:text-[#FBB406] transition-colors">
                Home
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-700 font-medium">Refund Policy</span>
            </div>
          </div>
        </nav>

        {/* Last Updated Notice */}
        <div className="bg-blue-50 border-l-4 border-[#13C0FA] py-4">
          <div className="container mx-auto px-6">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Last Updated:</span> {lastUpdated}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-baloo">
                Table of Contents
              </h2>
              <nav className="grid md:grid-cols-2 gap-3">
                {refundSections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#FBB406]/10 hover:to-[#13C0FA]/10 transition-all duration-200 group"
                  >
                    <span className="w-8 h-8 bg-gradient-to-r from-[#FBB406] to-[#13C0FA] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                      {section.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {refundSections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-[#FBB406] to-[#13C0FA] p-6">
                    <h2 className="text-2xl font-bold text-white font-baloo flex items-center">
                      <span className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {index + 1}
                      </span>
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="p-8">
                    <div className="prose prose-lg max-w-none">
                      {Array.isArray(section.content) ? (
                        section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4 text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-12 bg-gradient-to-r from-[#FBB406]/10 to-[#13C0FA]/10 border border-[#13C0FA]/20 rounded-lg p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FBB406] to-[#13C0FA] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-baloo">
                    Important Notice
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    This refund policy is designed to be fair to both our customers and our business. 
                    We encourage you to read through your purchase carefully before completing your transaction. 
                    If you have any questions about this policy or need clarification on any point, 
                    please don't hesitate to contact our support team before making your purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-baloo">
                  Have Questions About Our Refund Policy?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our customer support team is here to help you understand our refund policy 
                  and assist with any concerns you may have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FBB406] to-[#13C0FA] text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Support
                  </a>
                  <Link
                    href="/policies/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-[#13C0FA] hover:text-[#13C0FA] transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        .font-baloo {
          font-family: 'Baloo 2', cursive;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .prose p {
          margin-bottom: 1rem;
        }
        
        .prose p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default RefundPolicyPage;