'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

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

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Our Location",
      details: [
        "Plot 15 Baskerville Avenue, Kololo",
        "P.O. Box 11140",
        "Kampala, Uganda"
      ]
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "+256 774 128 257",
        "+256 700 123 456",
        "+256 772 987 654",
      ]
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        "dataidea.ac.ug@gmail.com",
        "wesonga@wesonga.com",
        "fullerbbosa@gmail.com"
      ]
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Working Hours",
      details: [
        "Mon - Fri: 8:00 AM - 5:00 PM",
        "Sat: 9:00 AM - 1:00 PM",
        "Sun: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:px-32 lg:px-64">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#008374] to-[#008374]/80"></div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-easi-primary/20 blur-3xl"
            animate={{ 
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-8"
              variants={fadeInUp}
            >
              Contact <span className="text-white">Us</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              variants={fadeInUp}
            >
              Have questions or want to learn more about our services? 
              We&apos;re here to help. Reach out to us using the contact information below or fill out the form.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex justify-center mb-4 text-easi-primary">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                    <div>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Card className="shadow-lg">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+256 774 123 456" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input id="organization" placeholder="Your Organization" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="training">Training Programs</SelectItem>
                          <SelectItem value="consultancy">Consultancy Services</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Training Inquiry" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about your needs..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button className="w-full bg-easi-primary hover:bg-easi-primaryHover py-3">
                      Send Message
                    </Button>
                  </form>
                </div>
              </Card>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Card className="shadow-lg h-full">
                <div className="p-0 h-full">
                  <div className="h-full min-h-[500px] w-full rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7512501188808!2d32.59823291070469!3d0.33222059966312184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbbe17c0c8ef%3A0x569e2dd06779b13e!2s15a%20Baskerville%20Ave%2C%20Kampala!5e0!3m2!1sen!2sug!4v1753125417714!5m2!1sen!2sug"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="DATAIDEA Location"
                    ></iframe>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-0 max-w-2xl mx-auto">
              Find answers to common questions about our services and programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How can I register for a training program?",
                answer: "You can register for our training programs by filling out the contact form on this page, specifying the program you're interested in, or by emailing us directly at dataidea.ac.ug@gmail.com."
              },
              {
                question: "Do you offer customized training for organizations?",
                answer: "Yes, we offer customized training programs tailored to the specific needs of your organization. Contact us to discuss your requirements and we'll design a program that meets your objectives."
              },
              {
                question: "What areas do your consultancy services cover?",
                answer: "Our consultancy services cover a wide range of statistical areas including research design, data analysis, survey methodology, monitoring and evaluation, and statistical capacity building."
              },
              {
                question: "How can I partner with DATAIDEA?",
                answer: "We welcome partnerships with organizations that share our commitment to advancing statistical excellence in East Africa. Please contact us at dataidea.ac.ug@gmail.com to discuss potential collaboration opportunities."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
