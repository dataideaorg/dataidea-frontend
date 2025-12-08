'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#e5e5e5] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#bbb] mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none text-[#bbb]">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">1. Introduction</h2>
              <p className="mb-4 leading-relaxed">
                DATAIDEA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
              </p>
              <p className="mb-4 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-[#e5e5e5] mb-3 mt-6">2.1 Personal Information</h3>
              <p className="mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Register for an account</li>
                <li>Enroll in courses or programs</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Demographic information</li>
                <li>Payment and billing information</li>
                <li>Educational background and professional information</li>
                <li>Profile photo and bio</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#e5e5e5] mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="mb-4 leading-relaxed">
                When you access our platform, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring/exit pages</li>
                <li>Click patterns and navigation paths</li>
                <li>Course progress and completion data</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#e5e5e5] mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
              <p className="mb-4 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to collect and store information about your preferences and activities on our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">3. How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your enrollments and payments</li>
                <li>Send you course materials and updates</li>
                <li>Communicate with you about your account and courses</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Personalize your learning experience</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Issue certificates and verify credentials</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">4. How We Share Your Information</h2>
              <p className="mb-4 leading-relaxed">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-[#e5e5e5] mb-3 mt-6">4.1 Service Providers</h3>
              <p className="mb-4 leading-relaxed">
                We may share your information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Payment processors</li>
                <li>Email service providers</li>
                <li>Analytics providers</li>
                <li>Cloud storage providers</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#e5e5e5] mb-3 mt-6">4.2 Legal Requirements</h3>
              <p className="mb-4 leading-relaxed">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold text-[#e5e5e5] mb-3 mt-6">4.3 Business Transfers</h3>
              <p className="mb-4 leading-relaxed">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>

              <h3 className="text-xl font-semibold text-[#e5e5e5] mb-3 mt-6">4.4 With Your Consent</h3>
              <p className="mb-4 leading-relaxed">
                We may share your information for any other purpose with your consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">5. Data Security</h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">6. Data Retention</h2>
              <p className="mb-4 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">7. Your Privacy Rights</h2>
              <p className="mb-4 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                <li><strong>Object:</strong> Object to processing of your personal information</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                To exercise these rights, please contact us at dataideaorg@gmail.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">8. Third-Party Links</h2>
              <p className="mb-4 leading-relaxed">
                Our platform may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information to them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">9. Children's Privacy</h2>
              <p className="mb-4 leading-relaxed">
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">10. International Data Transfers</h2>
              <p className="mb-4 leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your country, where data protection laws may differ. By using our services, you consent to the transfer of your information to these locations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">11. Changes to This Privacy Policy</h2>
              <p className="mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">12. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="mb-2">
                <strong>Email:</strong> <a href="mailto:dataideaorg@gmail.com" className="text-blue-600 hover:underline">dataideaorg@gmail.com</a>
              </p>
              <p className="mb-2">
                <strong>Website:</strong> <a href="https://dataidea.org" className="text-blue-600 hover:underline">dataidea.org</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}