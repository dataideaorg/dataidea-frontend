'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
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
              About EASI
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              The East African Statistics Institute is dedicated to advancing statistical excellence across the region
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-easi-dark mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                The East African Statistics Institute (EASI) provides comprehensive research 
                in statistical methodology and high-quality training to enhance the quality 
                of national statistics across East Africa.
              </p>
              <p className="text-gray-600">
                We are committed to building statistical capacity and promoting evidence-based 
                decision making through innovative research, training, and consultancy services.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-easi-primary mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-easi-primary mb-2">1000+</div>
                <div className="text-gray-600">Professionals Trained</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-easi-primary mb-2">50+</div>
                <div className="text-gray-600">Research Projects</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-easi-primary mb-2">10+</div>
                <div className="text-gray-600">Partner Countries</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
