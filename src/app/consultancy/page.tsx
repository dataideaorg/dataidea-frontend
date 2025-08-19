'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  PresentationChartLineIcon, 
  UserGroupIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Consultancy() {
  const services = [
    {
      title: "Statistical Analysis & Modeling",
      description: "Expert analysis of complex data sets using advanced statistical techniques to extract meaningful insights and support decision-making.",
      icon: <ChartBarIcon className="h-12 w-12 text-dataidea-primary" />
    },
    {
      title: "Research Design & Methodology",
      description: "Development of robust research designs and methodologies tailored to your specific research questions and objectives.",
      icon: <BeakerIcon className="h-12 w-12 text-dataidea-primary" />
    },
    {
      title: "Survey Design & Implementation",
      description: "End-to-end survey solutions, from questionnaire design to sampling strategies, data collection, and analysis.",
      icon: <DocumentTextIcon className="h-12 w-12 text-dataidea-primary" />
    },
    {
      title: "Data Visualization & Reporting",
      description: "Creation of compelling data visualizations and comprehensive reports that effectively communicate findings to diverse audiences.",
      icon: <PresentationChartLineIcon className="h-12 w-12 text-dataidea-primary" />
    },
    {
      title: "Capacity Building & Technical Support",
      description: "Customized training and ongoing technical support to enhance your team's statistical and analytical capabilities.",
      icon: <UserGroupIcon className="h-12 w-12 text-dataidea-primary" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dataidea-dark/90 to-dataidea-primary/80"></div>
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
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-dataidea-primary/20 blur-3xl"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Consultancy <span className="text-white">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              DATAIDEA provides expert statistical consultancy services to government agencies, 
              research institutions, and private organizations across East Africa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-dataidea-primary hover:bg-gray-100 px-8 py-4"
              >
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Consultancy Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of statistical consultancy services to meet your organization&apos;s needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Consultancy Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure we deliver high-quality solutions that meet your specific needs
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We begin with a thorough discussion to understand your needs, objectives, and challenges."
              },
              {
                step: "2",
                title: "Proposal Development",
                description: "Based on your requirements, we develop a detailed proposal outlining methodology, timeline, and deliverables."
              },
              {
                step: "3",
                title: "Project Execution",
                description: "Our team of experts implements the agreed methodology, keeping you informed throughout the process."
              },
              {
                step: "4",
                title: "Results Presentation",
                description: "We present our findings and recommendations in a clear, actionable format tailored to your audience."
              },
              {
                step: "5",
                title: "Follow-up Support",
                description: "We provide ongoing support to help you implement recommendations and address any questions that arise."
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="flex mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dataidea-primary text-white flex items-center justify-center font-bold text-xl mr-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dataidea-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to discuss your statistical consultancy needs and how we can support your organization.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-dataidea-primary hover:bg-dataidea-primaryHover px-8 py-4"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
