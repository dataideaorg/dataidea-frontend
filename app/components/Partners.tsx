'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PartnerProps {
  name: string;
  logo: string;
}

const PartnerLogo: React.FC<PartnerProps> = ({ name, logo }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="flex items-center justify-center p-8 bg-white rounded-lg h-32 border border-[#444]"
  >
    <img
      src={logo}
      alt={name}
      className="max-h-20 max-w-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
  </motion.div>
);

export const Partners: React.FC = () => {
  const partners: PartnerProps[] = [
    {
      name: 'Centre for Policy Analysis',
      logo: '/patners/centre_for_policy_analysis.webp',
    },
    {
      name: 'East African Statistics Institute',
      logo: '/patners/east_african_statistics_institute.jpg',
    },
    {
      name: 'Raising the Village',
      logo: '/patners/raising_the_village.png',
    },
    {
      name: 'Twaweza',
      logo: '/patners/twaweza.png',
    },
    {
      name: 'Watu',
      logo: '/patners/watu.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="partners" className="w-full py-20 md:py-32 bg-gradient-to-br from-[#1a1a1a] to-[#222]">
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
            Alumni Success
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Our Alumni Have Worked With
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#bbb] max-w-2xl mx-auto"
          >
            Our graduates and partners have gone on to work with leading organizations across East Africa and beyond.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PartnerLogo {...partner} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
