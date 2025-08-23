'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        budget: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008374] to-[#006A5C] text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 py-20 lg:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
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
                className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
              >
                Ready to transform your ideas into powerful software solutions? 
                <strong> Get a free consultation</strong> and project quote within 24 hours.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-[#008374] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="tel:+256700000000">Call Us Now</a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <a href="https://wa.me/256700000000" target="_blank" className="flex items-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                    WhatsApp Chat
                  </a>
                </Button>
              </motion.div>
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
              How Would You Like to Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the communication method that works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PhoneIcon className="w-6 h-6" />,
                title: "Call Us",
                description: "Speak directly with our team",
                value: "+256 700 000 000",
                action: "tel:+256700000000",
                available: "Mon-Fri 9AM-6PM EAT"
              },
              {
                icon: <EnvelopeIcon className="w-6 h-6" />,
                title: "Email Us",
                description: "Get detailed responses",
                value: "hello@dataidea.ac.ug",
                action: "mailto:hello@dataidea.ac.ug",
                available: "24/7 response within 4 hours"
              },
              {
                icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
                title: "WhatsApp Chat",
                description: "Quick questions and support",
                value: "+256 700 000 000",
                action: "https://wa.me/256700000000",
                available: "Mon-Sun 8AM-10PM EAT"
              },
              {
                icon: <MapPinIcon className="w-6 h-6" />,
                title: "Visit Our Office",
                description: "Meet us in person",
                value: "Kampala, Uganda",
                action: "#",
                available: "By appointment only"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 text-center p-8">
                  <div className="w-16 h-16 bg-[#008374]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#008374] transition-colors duration-300">
                    <div className="text-[#008374] group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  
                  <div className="mb-4">
                    <div className="font-semibold text-[#008374] mb-1">{method.value}</div>
                    <div className="text-sm text-gray-500">{method.available}</div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-[#008374] hover:bg-[#006A5C] text-white"
                  >
                    <a 
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      className="flex items-center justify-center"
                    >
                      Contact Now
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] focus:border-transparent outline-none transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] focus:border-transparent outline-none transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] focus:border-transparent outline-none transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="AI/ML Solutions">AI/ML Solutions</option>
                        <option value="Training Programs">Training Programs</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] focus:border-transparent outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#008374] hover:bg-[#006A5C] text-white font-semibold py-4 text-lg transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you&apos;re looking to build a new application or train your team, 
                  we&apos;re here to help with tailored solutions.
                </p>
              </div>

              <Card className="p-6 bg-gradient-to-r from-[#008374]/5 to-[#006A5C]/5 border-0">
                <div className="flex items-center mb-4">
                  <ClockIcon className="w-6 h-6 text-[#008374] mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Office Hours</h4>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Our Location</h4>
                </div>
                <div className="text-gray-600">
                  <p className="mb-2">Kampala, Uganda</p>
                  <p className="mb-4">East Africa&apos;s Technology Hub</p>
                  <p className="text-sm text-blue-600">
                    🌍 We serve clients globally through remote collaboration
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
