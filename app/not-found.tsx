'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Button from './components/Button';

export default function NotFound() {
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
    <main className="min-h-screen bg-white">
      <Navbar />
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
          className="relative max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Number */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-white via-[#bbb] to-white bg-clip-text text-transparent font-serif leading-none">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-serif bg-gradient-to-r from-white to-[#bbb] bg-clip-text text-transparent"
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#bbb] max-w-2xl mb-8 leading-relaxed"
          >
            Oops! The page you're looking for seems to have wandered off into the data void. 
            Let's get you back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 mb-12">
            <Link href="/">
              <Button
                size="lg"
                variant="primary"
              >
                Go Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-2xl"
          >
            <p className="text-[#999] text-sm mb-4">Or explore our popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Courses', href: '#courses' },
                { name: 'About', href: '#about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Dashboard', href: '/dashboard' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="px-4 py-2 bg-[#333] text-[#bbb] hover:text-white hover:bg-[#444] rounded-full text-sm font-medium transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}




