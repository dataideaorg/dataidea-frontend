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
    <section className="relative w-full min-h-screen bg-ground pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="hero-jigsaw absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        />
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="eyebrow">Learn Data Science in Uganda</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-[1.15] font-serif text-bright"
        >
          Programming for <span className="mark-phrase">Data Science</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-support max-w-2xl mb-8 leading-relaxed"
        >
          We offer hands on data science training and build custom websites and AI tools for individuals and organizations.
        </motion.p>

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

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl"
        >
          {[
            { number: '500+', label: 'Students Trained' },
            { number: '78%', label: 'Success Rate' },
            { number: '6+', label: 'Programs' },
            { number: '100%', label: 'Hands-on' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-bright">{stat.number}</p>
              <p className="text-mute text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
