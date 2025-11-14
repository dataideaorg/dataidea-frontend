'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import Button from '../components/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const opportunities = [
  {
    title: 'Internship',
    description: 'Join our team as an intern and gain hands-on experience in data science, machine learning, and analytics. Work alongside industry experts on real-world projects.',
    type: 'Part-time / Full-time',
    location: 'Remote / Hybrid',
    highlights: [
      'Mentorship from experienced professionals',
      'Work on real client projects',
      'Flexible learning schedule',
      'Certificate upon completion'
    ]
  },
  // {
  //   title: 'Contractor',
  //   description: 'We are looking for experienced professionals to join our team on a contract basis. Help us deliver exceptional data solutions to our clients.',
  //   type: 'Contract',
  //   location: 'Remote',
  //   highlights: [
  //     'Flexible working hours',
  //     'Project-based engagement',
  //     'Competitive rates',
  //     'Opportunity for long-term collaboration'
  //   ]
  // }
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <div className="pt-24 pb-16 px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e5e5e5] mb-4">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-[#bbb] max-w-3xl mx-auto">
              Be part of a dynamic team transforming data into actionable insights.
              We're always looking for talented individuals to grow with us.
            </p>
          </motion.div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#222] border border-[#333] rounded-lg p-8 hover:border-[#444] transition-all duration-300"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#e5e5e5] mb-3">
                  {opportunity.title}
                </h2>

                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#333] text-[#bbb] rounded-full text-sm">
                    {opportunity.type}
                  </span>
                  <span className="px-3 py-1 bg-[#333] text-[#bbb] rounded-full text-sm">
                    {opportunity.location}
                  </span>
                </div>

                <p className="text-[#bbb] mb-6 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#e5e5e5] mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {opportunity.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#bbb]">
                        <svg
                          className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="https://forms.gle/9CYpgT8HY1xusFU3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="primary" size="lg" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Why Join Us Section */}
          <motion.div
            variants={itemVariants}
            className="bg-[#222] border border-[#333] rounded-lg p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-6">
              Why Join DATAIDEA?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-semibold text-[#e5e5e5] mb-2">Growth</h3>
                <p className="text-[#bbb]">
                  Continuous learning and professional development opportunities
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-semibold text-[#e5e5e5] mb-2">Collaboration</h3>
                <p className="text-[#bbb]">
                  Work with a passionate team of data enthusiasts
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-xl font-semibold text-[#e5e5e5] mb-2">Impact</h3>
                <p className="text-[#bbb]">
                  Make a real difference in how businesses use data
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}