'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Animation variants for consistent animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  projectDetails: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        projectDetails: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Call Us Now",
      description: "Speak directly with our team",
      value: "+256 774128257",
      action: "tel:+256774128257",
      availability: "24/7 Support"
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us a detailed message",
      value: "info@dataidea.org",
      action: "mailto:info@dataidea.org",
      availability: "Response within 24hrs"
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
      title: "WhatsApp Chat",
      description: "Quick questions and support",
      value: "+256 774128257",
      action: "https://wa.me/256774128257",
      availability: "Instant Response"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Visit Our Office",
      description: "Meet us in person",
      value: "Kampala, Uganda",
      action: "#",
      availability: "By Appointment"
    }
  ];

  const services = [
    "Web Development",
    "AI & Machine Learning",
    "Data Analytics",
    "Mobile Apps",
    "E-commerce",
    "Custom Software",
    "Training Programs",
    "Consultation"
  ];

  const budgetRanges = [
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not Sure"
  ];

  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "We can typically start within 1-2 weeks of project approval. For urgent projects, we offer expedited timelines."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer comprehensive maintenance and support packages to ensure your project continues running smoothly."
    },
    {
      question: "Can you work with my existing team?",
      answer: "Absolutely! We love collaborating with in-house teams and can provide training and knowledge transfer."
    },
    {
      question: "What if I need changes after delivery?",
      answer: "We include 30 days of free revisions and offer flexible maintenance packages for ongoing updates."
    }
  ];

  const responseTime = [
    {
      icon: <ClockIcon className="w-5 h-5" />,
      title: "24 Hours",
      description: "Initial Response"
    },
    {
      icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
      title: "48 Hours",
      description: "Detailed Proposal"
    },
    {
      icon: <BuildingOfficeIcon className="w-5 h-5" />,
      title: "1 Week",
      description: "Project Kickoff"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008374] to-[#006A5C] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Plus Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-40 gap-2 opacity-10">
            {[...Array(500)].map((_, i) => (
              <div
                key={i}
                className="text-white font-bold text-md md:text-xl lg:text-2xl flex items-center justify-center"
              >
                +
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Get In Touch Today
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Let&apos;s Build
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl"
              >
                Ready to start your project? Get a free consultation and quote from our expert team.
                <span className="block mt-2 text-lg">
                  We&apos;re here to turn your ideas into reality.
                </span>
              </motion.p>

              <motion.div variants={fadeInUp} className="mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  {responseTime.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-white/90">{item.icon}</div>
                      <div className="ml-3">
                        <div className="text-white font-semibold">{item.title}</div>
                        <div className="text-white/70 text-sm">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-[#008374] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="tel:+256774128257" className="flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Call Us Now
                  </a>
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <a href="https://wa.me/256774128257" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                    WhatsApp Chat
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Stats */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#008374] rounded-full flex items-center justify-center mx-auto mb-4">
                    <StarIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quick Contact Stats</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <ClockIcon className="w-5 h-5 text-[#008374] mr-3" />
                      <span className="text-gray-700">Response Time</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">24hrs</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-[#008374] mr-3" />
                      <span className="text-gray-700">Clients Served</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">100+</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <BuildingOfficeIcon className="w-5 h-5 text-[#008374] mr-3" />
                      <span className="text-gray-700">Years Experience</span>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">15+</Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the method that works best for you. We&apos;re here to help 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#008374]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-[#008374]">
                        {method.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{method.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-lg font-bold text-[#008374]">{method.value}</div>
                      <div className="text-xs text-gray-500">{method.availability}</div>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-[#008374] hover:bg-[#006A5C] text-white"
                    >
                      <a href={method.action} target={method.action.startsWith('http') ? '_blank' : '_self'} rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}>
                        {method.title}
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Tell Us About Your Project
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed proposal.
                </p>
              </div>

              {submitted ? (
                <Card className="p-8 text-center border-2 border-green-200 bg-green-50">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-4">
                    Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008374] focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008374] focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008374] focus:border-transparent transition-all duration-200"
                        placeholder="+256 774128257"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008374] focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008374] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008374] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      rows={6}
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008374] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#008374] hover:bg-[#006A5C] text-white font-semibold py-4 text-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        Send Message
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right Column - Additional Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="space-y-6"
            >
              {/* Office Hours */}
              <Card className="p-6 border-0 shadow-lg bg-white">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#008374]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-[#008374]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM EAT</div>
                      <div><strong>Saturday:</strong> 9:00 AM - 3:00 PM EAT</div>
                      <div><strong>Sunday:</strong> Closed</div>
                      <div className="mt-2 text-[#008374] font-medium">
                        Emergency support available 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card className="p-6 border-0 shadow-lg bg-white">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#008374]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-[#008374]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><strong>Kampala, Uganda</strong></div>
                      <div>East Africa&apos;s Tech Hub</div>
                      <div className="mt-2 text-[#008374] font-medium">
                        Serving clients globally
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 border-0 shadow-lg bg-white">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#008374]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-[#008374]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Contact</h3>
                    <div className="space-y-3">
                      <Button 
                        asChild
                        size="sm"
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        <a href="https://wa.me/256774128257" target="_blank" rel="noopener noreferrer">
                          <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                          WhatsApp Chat
                        </a>
                      </Button>
                      <Button 
                        asChild
                        size="sm"
                        variant="outline"
                        className="w-full border-[#008374] text-[#008374] hover:bg-[#008374] hover:text-white"
                      >
                        <a href="tel:+256774128257">
                          <PhoneIcon className="w-4 h-5 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get quick answers to common questions about working with DATAIDEA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#008374] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-[#008374] hover:bg-[#006A5C] text-white">
              <Link href="/contact">Ask Us Anything</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Ready to Start
              <span className="block bg-gradient-to-r from-[#008374] to-[#00A08A] bg-clip-text text-transparent">
                Your Project?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Let&apos;s discuss your vision and create something extraordinary together.
              <strong className="text-white"> Your success is our priority.</strong>
            </motion.p>

            <motion.div 
              className="mb-12"
              variants={fadeInUp}
            >
              <div className="grid sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">24hr</div>
                  <div className="text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">100+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">15+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="bg-[#008374] hover:bg-[#006A5C] text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#008374]/50 transition-all duration-300"
              >
                <a href="tel:+256774128257" className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
              
              <Button
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 text-lg transition-all duration-300"
              >
                <a href="https://wa.me/256774128257" target="_blank" rel="noopener noreferrer">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
