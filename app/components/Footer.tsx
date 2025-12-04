'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="w-full bg-[#111] text-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ddd] to-white bg-clip-text text-transparent mb-4">
              DATAIDEA
            </h3>
            <p className="text-[#999] text-sm leading-relaxed">
              Empowering Africans with world-class data science and AI education.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com/dataideaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] hover:text-white transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/dataideaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://instagram.com/dataideaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] hover:text-white transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" stroke="none" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@dataideaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] hover:text-white transition"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-3 text-[#999]">
              <li>
                <Link href="#courses" className="hover:text-white transition">
                  Python Fundamentals
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white transition">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white transition">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white transition">
                  Deep Learning & AI
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-[#999]">
              <li>
                <a href="https://blog.dataidea.org/" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://docs.dataidea.org/" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/GuCZRyJICgO3Y7MPvDQKhi?mode=wwt" className="hover:text-white transition">
                  Community Forum
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-[#999]">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:dataideaorg@gmail.com" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#333] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#999] text-sm">
            <p>© {currentYear} DATAIDEA. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Made with ❤️ in Uganda</p>
          </div>
        </div>
      </div>
    </footer>
  );
};