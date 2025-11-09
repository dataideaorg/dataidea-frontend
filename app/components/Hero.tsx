'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export const Hero: React.FC = () => {
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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#111] via-[#222] to-[#333] pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        {/* Animated Jigsaw Pattern */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            backgroundImage: 'url(/jigsaw.svg)',
            backgroundSize: '192px 192px',
            backgroundRepeat: 'repeat',
            filter: 'invert(1)',
          }}
        />
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-[#333] text-[#e5e5e5] rounded-full text-sm font-semibold">
            Learn Data Science in Uganda
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif bg-gradient-to-r from-white to-[#bbb] bg-clip-text text-transparent"
        >
          Programming for Data Science
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#bbb] max-w-2xl mb-8 leading-relaxed"
        >
          Learn Python, Data Analysis, Machine Learning, and AI from industry experts. Join a thriving community of learners transforming careers across Africa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 mb-12">
          <Button
            size="lg"
            variant="primary"
            onClick={() => window.open('https://forms.gle/usTT5nm6HaZT1V2cA', '_blank')}
          >
            Join Our Next Cohort
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Courses
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl"
        >
          {[
            { number: '500+', label: 'Students Trained' },
            { number: '95%', label: 'Success Rate' },
            { number: '8+', label: 'Programs' },
            { number: '100%', label: 'Hands-on' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.number}</p>
              <p className="text-[#bbb] text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};