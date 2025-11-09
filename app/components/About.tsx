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
      title: 'Career-Focused',
      description: 'Programs designed with industry demand in mind. Get practical skills employers are looking for.',
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Instructors',
      description: 'Learn from professionals working at leading tech companies with real-world experience.',
    },
    {
      icon: '🤝',
      title: 'Supportive Community',
      description: 'Join a vibrant network of learners and mentors across Africa supporting each other\'s growth.',
    },
    {
      icon: '💼',
      title: 'Job Placement',
      description: 'Get access to exclusive job opportunities and internships with our partner companies.',
    },
    {
      icon: '⏱️',
      title: 'Flexible Learning',
      description: 'Study at your own pace with recorded sessions, live classes, and personalized support.',
    },
    {
      icon: '🏆',
      title: 'Certification',
      description: 'Earn recognized certifications that boost your resume and professional credibility.',
    },
  ];

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-[#0f0f0f]">
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
            className="inline-block px-4 py-2 bg-[#333] text-[#e5e5e5] rounded-full text-sm font-semibold mb-4"
          >
            About DATAIDEA
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Why Choose DATAIDEA?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#bbb] max-w-2xl mx-auto"
          >
            DATAIDEA is dedicated to empowering Africans with world-class data science and AI education. We believe talent is universal, but opportunity isn't. That's why we're here.
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
              className="bg-[#222] border border-[#333] rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 grayscale opacity-70">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#bbb] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};