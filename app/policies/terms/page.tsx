import React from 'react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Baloo, cursive' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FBB406] to-[#13C0FA] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white text-center">
            Terms & Conditions
          </h1>
          <p className="text-white/90 text-center mt-4 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4" style={{ color: '#13C0FA' }}>
              Welcome to Kinovo
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the Kinovo application and services 
              operated by Kinovo ("we," "us," or "our"). By accessing or using our service, you agree to 
              be bound by these Terms.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By downloading, installing, accessing, or using the Kinovo app, you acknowledge that you have 
              read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, 
              please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              2. Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kinovo provides digital printable worksheet bundles designed for children's educational 
              activities. Our service includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Access to downloadable educational worksheet bundles</li>
              <li>Printing rights for personal, non-commercial use</li>
              <li>Age-appropriate learning materials for children</li>
              <li>Customer support for purchased products</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              3. User Accounts and Registration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features of our service, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your account information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              4. Payment Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment processing is handled through Razorpay and other authorized payment gateways. 
              By making a purchase, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Pay all fees and charges associated with your purchases</li>
              <li>Provide valid payment information</li>
              <li>Accept that all prices are in Indian Rupees (INR) unless stated otherwise</li>
              <li>Understand that payment confirmation is required before product delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              5. License and Usage Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon successful payment, you are granted a limited, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Download and print the purchased worksheet bundles for personal use</li>
              <li>Use the materials for educational purposes with children in your care</li>
              <li>Make reasonable copies for classroom use if you are an educator</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may NOT:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Resell, redistribute, or commercially exploit the materials</li>
              <li>Share digital files with others who have not purchased them</li>
              <li>Modify, reverse engineer, or create derivative works</li>
              <li>Remove copyright notices or branding from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              6. Refund and Cancellation Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Due to the digital nature of our products, all sales are generally final. However, we may 
              provide refunds in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Technical issues preventing download within 7 days of purchase</li>
              <li>Significant errors in product description or content</li>
              <li>Duplicate purchases made in error</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Refund requests must be submitted within 7 days of purchase through our customer support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              7. User Conduct
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to use our service to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with other users' enjoyment of the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              8. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, trademarks, logos, and intellectual property on Kinovo are owned by us or 
              our licensors. You may not use our intellectual property without explicit written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              9. Privacy and Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we 
              collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              10. Disclaimers and Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service is provided "as is" without warranties of any kind. We do not guarantee 
              uninterrupted access or error-free operation. Our liability is limited to the amount 
              you paid for the specific product or service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              11. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account and access to our services 
              at any time for violations of these Terms or for any other reason at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              12. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of India. Any disputes will be resolved in the 
              courts of [Your City/State], India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              13. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting. Continued use of our service constitutes acceptance of 
              modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              14. Contact Information
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-2">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> support@kinovo.app</p>
                <p><strong>Address:</strong> 46 B SAMPADA SOCIETY TELLI GALLI
                                            ANDHERI EAST. Pin-400069</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}