'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Resources() {
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
              Resources
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Access our library of statistical resources and materials
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-easi-dark mb-6">Resource Library</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re building a comprehensive library of statistical resources, research papers, 
              and educational materials. Check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
