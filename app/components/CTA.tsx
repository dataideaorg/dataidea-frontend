'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

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
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Career?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Join hundreds of learners who've unlocked their potential in data science and AI. Get insights about our latest cohorts, exclusive offers, and career tips.
        </motion.p>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-full bg-white text-[#111] focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-[#777]"
          />
          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="font-bold"
          >
            Subscribe
          </Button>
        </motion.form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-white font-semibold text-center"
          >
            ✓ Welcome! Check your email for exclusive updates.
          </motion.p>
        )}

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-white/20"
        >
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">📧 Email</p>
            <a href="mailto:hello@dataidea.io" className="text-white font-semibold hover:underline">
              hello@dataidea.io
            </a>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">📍 Location</p>
            <p className="text-white font-semibold">Kampala, Uganda</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">🌐 Website</p>
            <a href="https://dataidea.io" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">
              dataidea.io
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};