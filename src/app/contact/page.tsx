'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-easi-primary to-easi-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Get in touch with our team for training, consultancy, or research inquiries
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-easi-dark mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="Training Inquiry" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your needs..."
                      rows={6}
                    />
                  </div>
                  <Button className="w-full bg-easi-primary hover:bg-easi-primaryHover">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-easi-dark mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="h-6 w-6 text-easi-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">
                        Plot 15 Baskerville Avenue, Kololo<br />
                        P.O. Box 11140 Kampala (Uganda)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <PhoneIcon className="h-6 w-6 text-easi-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href="tel:+256774128257"
                        className="text-gray-600 hover:text-easi-primary transition-colors"
                      >
                        +256 774 128 257
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <EnvelopeIcon className="h-6 w-6 text-easi-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:easi.ac.ug@gmail.com"
                        className="text-gray-600 hover:text-easi-primary transition-colors"
                      >
                        easi.ac.ug@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-easi-dark mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
