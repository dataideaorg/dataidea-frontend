'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const services = [
    {
      title: 'Data Science Education',
      description: 'Comprehensive training programs in Python, Data Analysis, Machine Learning, and AI. Learn from industry experts and join a thriving community of learners.',
      features: [
        'Live & Recorded Sessions',
        'Hands-on Projects',
        'Job Placement Support',
        'Mentorship Program',
        'Flexible Learning Paths',
        'Free Learning Materials',
      ],
      icon: '📚',
      cta: 'Explore Courses',
      ctaAction: () => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: 'Web & AI Development',
      description: 'Custom website development and AI-powered solutions tailored for individuals and organizations. Transform your ideas into powerful digital products.',
      features: [
        'Custom Web Applications',
        'AI Tool Development',
        'Data Analytics Dashboards',
        'Machine Learning Integration',
        'API Development',
        'Ongoing Support & Maintenance',
      ],
      icon: '💻',
      cta: 'Get a Quote',
      ctaAction: () => window.open('https://forms.gle/usTT5nm6HaZT1V2cA', '_blank'),
    },
  ];

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
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
            Our Services
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            What We Offer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#bbb] max-w-2xl mx-auto"
          >
            Whether you want to learn data science or need custom development solutions, we've got you covered.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#222] to-[#1a1a1a] border border-[#333] rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#444] group"
            >
              <div className="text-6xl mb-6 grayscale opacity-70 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>

              <p className="text-[#bbb] mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  What's Included:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#bbb] text-sm">
                      <span className="text-white mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                variant="primary"
                onClick={service.ctaAction}
                className="w-full"
              >
                {service.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};