'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  useEffect(() => {
    // Load Beehiiv embed script
    const script = document.createElement('script');
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-r from-[#111] to-[#333] relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ float: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"
      />
      <motion.div
        animate={{ float: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"
      />

      <motion.div
        className="relative max-w-4xl mx-auto px-4 md:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
        >
          Ready to Transform Your Career?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Join hundreds of learners who've unlocked their potential in data science and AI. Get insights about our latest cohorts, exclusive offers, and career tips.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center mb-8"
        >
          <iframe
            src="https://subscribe-forms.beehiiv.com/1183471d-1aea-40d3-aa5e-81264543bdac"
            className="beehiiv-embed"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{
              width: '400px',
              height: '45px',
              margin: 0,
              borderRadius: '0px 0px 0px 0px',
              backgroundColor: 'transparent',
              boxShadow: '0 0 #0000',
              maxWidth: '100%'
            }}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-white/20"
        >
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm"><span className="grayscale opacity-70">📧</span> Email</p>
            <a href="mailto:dataideaorg@gmail.com" className="text-white font-semibold hover:underline">
              dataideaorg@gmail.com
            </a>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm"><span className="grayscale opacity-70">📍</span> Location</p>
            <p className="text-white font-semibold">Kampala, Uganda</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm"><span className="grayscale opacity-70">🌐</span> Website</p>
            <a href="https://dataidea.org" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">
              dataidea.org
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};