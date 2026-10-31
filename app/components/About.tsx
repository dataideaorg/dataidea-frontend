'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: '🎯',
      title: 'Career-Focused Education',
      description: 'Programs designed with industry demand in mind. Get practical skills employers are looking for.',
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Team',
      description: 'Learn from and work with professionals at leading tech companies with real-world experience.',
    },
    {
      icon: '🤝',
      title: 'Supportive Community',
      description: 'Join a vibrant network of learners and mentors across Africa supporting each other\'s growth.',
    },
    {
      icon: '💼',
      title: 'End-to-End Development',
      description: 'From concept to deployment, we build custom websites and AI solutions tailored to your needs.',
    },
    {
      icon: '⏱️',
      title: 'Flexible & Scalable',
      description: 'Flexible learning options and scalable development solutions that grow with your needs.',
    },
    {
      icon: '🏆',
      title: 'Quality Guaranteed',
      description: 'Earn recognized certifications and get professional-grade development with ongoing support.',
    },
  ];

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-ground">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            variants={itemVariants}
            className="eyebrow mb-4"
          >
            About DATAIDEA
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-normal text-bright mb-6 font-serif leading-[1.15]"
          >
            Why Choose DATAIDEA?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-support max-w-2xl mx-auto"
          >
            DATAIDEA empowers people through hands-on data science education and professional development services. We build AI solutions and train the next generation of data professionals.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-panel border border-line rounded-xl p-8"
            >
              <div className="text-4xl mb-4 grayscale opacity-70">{feature.icon}</div>
              <h3 className="text-xl font-bold text-bright mb-3">{feature.title}</h3>
              <p className="text-support leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};