'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const resources = [
    { name: 'Blog & Articles', href: 'https://blog.dataidea.org', external: true },
    { name: 'YouTube Channel', href: 'https://youtube.com/@dataideaorg', external: true },
    { name: 'Free Course Resources', href: '#courses' },
      {name: 'Community', href: 'https://chat.whatsapp.com/GuCZRyJICgO3Y7MPvDQKhi?mode=wwt', external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#333] z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-[#bbb] bg-clip-text text-transparent">
              DATAIDEA
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-[#bbb] hover:text-white transition font-medium">
              About
            </Link>
            <Link href="#courses" className="text-[#bbb] hover:text-white transition font-medium">
              Courses
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button className="text-[#bbb] hover:text-white transition font-medium flex items-center gap-1">
                Free Resources
                <svg
                  className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {resourcesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-[#222] border border-[#444] rounded-lg shadow-xl overflow-hidden"
                >
                  {resources.map((resource, index) => (
                    <Link
                      key={index}
                      href={resource.href}
                      target={resource.external ? '_blank' : undefined}
                      rel={resource.external ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-3 text-[#bbb] hover:text-white hover:bg-[#2a2a2a] transition font-medium border-b border-[#333] last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        {resource.name}
                        {resource.external && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link href="#testimonials" className="text-[#bbb] hover:text-white transition font-medium">
              Testimonials
            </Link>
            <Link href="#contact" className="text-[#bbb] hover:text-white transition font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#bbb]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-3"
          >
            <Link
              href="#about"
              className="block text-[#bbb] hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#courses"
              className="block text-[#bbb] hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>

            {/* Mobile Resources Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full text-[#bbb] hover:text-white py-2"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              >
                Free Resources
                <svg
                  className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4 space-y-2 mt-2"
                >
                  {resources.map((resource, index) => (
                    <Link
                      key={index}
                      href={resource.href}
                      target={resource.external ? '_blank' : undefined}
                      rel={resource.external ? 'noopener noreferrer' : undefined}
                      className="block text-[#999] hover:text-white py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {resource.name}
                      {resource.external && ' ↗'}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link
              href="#testimonials"
              className="block text-[#bbb] hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block text-[#bbb] hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};