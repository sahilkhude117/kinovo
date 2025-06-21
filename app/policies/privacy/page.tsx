import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Baloo, cursive' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#13C0FA] to-[#FBB406] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white text-center">
            Privacy Policy
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
              Your Privacy Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Kinovo, we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you use our application and services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              1. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following personal information when you use our services:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mb-6">
              <li>Name and contact information (email address, phone number)</li>
              <li>Billing and payment information (processed securely through Razorpay)</li>
              <li>Account credentials and profile information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Usage Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information about your device and usage patterns:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Device information (device type, operating system, browser type)</li>
              <li>Usage analytics (pages visited, features used, time spent)</li>
              <li>IP address and location data (approximate)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Process transactions and deliver purchased products</li>
              <li>Create and manage your account</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send important updates about your purchases and account</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations and prevent fraud</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information in the following limited circumstances:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Service Providers</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mb-4">
              <li>Payment processors (Razorpay) for transaction processing</li>
              <li>Cloud hosting services for data storage and security</li>
              <li>Analytics providers to improve our services</li>
              <li>Customer support tools to assist you better</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose your information when required by law, court order, or to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Comply with legal processes or government requests</li>
              <li>Protect the rights, property, or safety of Kinovo, users, or others</li>
              <li>Prevent or investigate suspected fraud or security issues</li>
              <li>Enforce our Terms of Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              4. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement robust security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Data backup and recovery procedures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. 
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Types of Cookies</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand user behavior</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed">
              You can control cookies through your browser settings, but disabling certain cookies 
              may affect the functionality of our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              6. Your Rights and Choices
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restriction:</strong> Limit how we process your information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While our products are designed for children, our services are intended for use by 
              adults (parents, teachers, caregivers). We do not knowingly collect personal information 
              from children under 13 without parental consent. If we become aware that we have 
              collected personal information from a child under 13, we will take steps to delete 
              such information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              8. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Provide our services and support</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services and prevent fraud</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Account information may be retained for up to 7 years after account closure for 
              legal and business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              9. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information in accordance 
              with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              10. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service may contain links to third-party websites or services. We are not 
              responsible for the privacy practices of these external sites. We encourage you 
              to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#FBB406' }}>
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices 
              or legal requirements. We will notify you of material changes through the app or 
              via email. The updated policy will be effective immediately upon posting.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}