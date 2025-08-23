'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008374] to-[#006A5C] text-white overflow-hidden py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Get In Touch Today
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Build 
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Ready to transform your ideas into powerful software solutions? 
              <strong> Get a free consultation</strong> and project quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-[#008374] hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              >
                <a href="tel:+256700000000">Call Us Now</a>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg"
              >
                <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              How Would You Like to Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PhoneIcon className="w-6 h-6" />,
                title: "Call Us",
                value: "+256 700 000 000",
                action: "tel:+256700000000"
              },
              {
                icon: <EnvelopeIcon className="w-6 h-6" />,
                title: "Email Us", 
                value: "hello@dataidea.ac.ug",
                action: "mailto:hello@dataidea.ac.ug"
              },
              {
                icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
                title: "WhatsApp",
                value: "+256 700 000 000", 
                action: "https://wa.me/256700000000"
              },
              {
                icon: <MapPinIcon className="w-6 h-6" />,
                title: "Visit Us",
                value: "Kampala, Uganda",
                action: "#"
              }
            ].map((method, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#008374]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-[#008374]">{method.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <div className="font-semibold text-[#008374] mb-4">{method.value}</div>
                <Button asChild className="w-full bg-[#008374] hover:bg-[#006A5C] text-white">
                  <a href={method.action} target={method.action.startsWith('http') ? '_blank' : '_self'}>
                    Contact Now
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Service *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App Development</option>
                        <option value="AI/ML">AI/ML Solutions</option>
                        <option value="Training">Training Programs</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] outline-none resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#008374] hover:bg-[#006A5C] text-white py-4">
                      Send Message
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Let&apos;s Start a Conversation</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you&apos;re looking to build a new application or train your team, 
                  we&apos;re here to help with tailored solutions.
                </p>
              </div>

              <Card className="p-6 bg-gradient-to-r from-[#008374]/5 to-[#006A5C]/5">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h4>
                <div className="text-gray-600">
                  <p className="mb-2">Kampala, Uganda</p>
                  <p>East Africa&apos;s Technology Hub</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
