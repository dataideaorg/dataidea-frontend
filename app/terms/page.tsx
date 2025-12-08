'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function TermsOfService() {
  const currentYear = new Date().getFullYear();

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
            Terms of Service
          </h1>
          <p className="text-[#bbb] mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none text-[#bbb]">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4 leading-relaxed">
                By accessing and using DATAIDEA's platform and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">2. Description of Service</h2>
              <p className="mb-4 leading-relaxed">
                DATAIDEA provides educational services including but not limited to online courses, training programs, certifications, and educational resources in data science, artificial intelligence, and related fields.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">3. User Accounts</h2>
              <p className="mb-4 leading-relaxed">
                To access certain features of our services, you may be required to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Providing accurate and complete information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">4. Course Enrollment and Payment</h2>
              <p className="mb-4 leading-relaxed">
                When you enroll in a course or program:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Payment must be completed before accessing course materials</li>
                <li>Prices are subject to change but will not affect already enrolled students</li>
                <li>Refund policies, if applicable, will be clearly stated for each course</li>
                <li>You receive a non-transferable license to access course content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">5. Intellectual Property</h2>
              <p className="mb-4 leading-relaxed">
                All content provided through DATAIDEA, including but not limited to text, graphics, logos, videos, and software, is the property of DATAIDEA or its content suppliers and is protected by intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Reproduce, distribute, or create derivative works without permission</li>
                <li>Share course materials with non-enrolled individuals</li>
                <li>Use content for commercial purposes without authorization</li>
                <li>Remove or alter any copyright notices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">6. User Conduct</h2>
              <p className="mb-4 leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the service for any unlawful purpose</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Upload malicious code or viruses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">7. Certificates and Credentials</h2>
              <p className="mb-4 leading-relaxed">
                Certificates are issued upon successful completion of course requirements. Certificates:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Are provided as proof of course completion</li>
                <li>Do not constitute accredited academic credentials unless explicitly stated</li>
                <li>May be verified through our verification system</li>
                <li>Can be revoked if obtained fraudulently</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">8. Privacy and Data Protection</h2>
              <p className="mb-4 leading-relaxed">
                Your use of DATAIDEA is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">9. Disclaimers and Limitations of Liability</h2>
              <p className="mb-4 leading-relaxed">
                DATAIDEA provides services "as is" and "as available" without warranties of any kind. We do not guarantee that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The service will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The service is free of viruses or harmful components</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                DATAIDEA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">10. Modifications to Service and Terms</h2>
              <p className="mb-4 leading-relaxed">
                We reserve the right to modify or discontinue the service at any time without notice. We may also revise these Terms of Service at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">11. Termination</h2>
              <p className="mb-4 leading-relaxed">
                We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">12. Governing Law</h2>
              <p className="mb-4 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Uganda, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#e5e5e5] mb-4">13. Contact Information</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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