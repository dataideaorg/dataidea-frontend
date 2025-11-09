'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../components/Button';

export default function Upcoming() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-[#333] flex items-center justify-center">
            <svg
              className="w-16 h-16 text-[#e5e5e5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <span className="inline-block px-4 py-2 bg-[#333] text-[#e5e5e5] rounded-full text-sm font-semibold mb-6">
            Coming Soon
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
            This Content is Upcoming
          </h1>

          <p className="text-lg text-[#bbb] mb-8 max-w-xl mx-auto">
            We're working hard to bring you this resource. Check back soon or explore our other available courses and materials in the meantime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </Link>
          <a href="mailto:dataideaorg@gmail.com">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-[#333]"
        >
          <p className="text-sm text-[#999]">
            Want to be notified when this becomes available?
          </p>
          <button
            onClick={() => window.open('https://forms.gle/usTT5nm6HaZT1V2cA', '_blank')}
            className="mt-4 text-[#e5e5e5] hover:text-white transition-colors underline"
          >
            Join our waiting list
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
