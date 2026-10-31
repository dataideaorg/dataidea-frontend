'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { GoogleSignInButton } from './GoogleSignIn';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { user, loading, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const courses = [
    { name: 'Data Science', href: 'https://science.dataidea.org', external: true },
    { name: 'Web Development', href: 'https://web.dataidea.org', external: true },
  ];

  const resources = [
    { name: 'Open Datasets', href: 'https://datasets.dataidea.org', external: true  },
    { name: 'Blog & Articles', href: 'https://blog.dataidea.org', external: true },
    { name: 'YouTube Channel', href: 'https://youtube.com/@dataideaorg', external: true },
    {name: 'Community', href: 'https://chat.whatsapp.com/GuCZRyJICgO3Y7MPvDQKhi?mode=wwt', external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-ground/95 backdrop-blur-md border-b border-line z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="DATAIDEA home">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 whitespace-nowrap">
            <Link href="/#about" className="nav-link transition font-medium">
              About
            </Link>
            <Link href="/cohort" className="nav-link transition font-medium">
              January Cohort
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button className="nav-link transition font-medium flex items-center gap-1">
                Courses
                <svg
                  className={`w-4 h-4 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-56 bg-panel border border-line rounded-lg overflow-hidden"
                  >
                    {courses.map((course, index) => (
                      <Link
                        key={index}
                        href={course.href}
                        target={course.external ? '_blank' : undefined}
                        rel={course.external ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-3 nav-link hover:bg-hover transition font-medium border-b border-line last:border-b-0"
                      >
                        <div className="flex items-center justify-between">
                          {course.name}
                          {course.external && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button className="nav-link transition font-medium flex items-center gap-1">
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
                <div className="absolute top-full left-0 pt-2">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-56 bg-panel border border-line rounded-lg overflow-hidden"
                  >
                    {resources.map((resource, index) => (
                      <Link
                        key={index}
                        href={resource.href}
                        target={resource.external ? '_blank' : undefined}
                        rel={resource.external ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-3 nav-link hover:bg-hover transition font-medium border-b border-line last:border-b-0"
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
                </div>
              )}
            </div>

            <Link href="/careers" className="nav-link transition font-medium">
              Careers
            </Link>
            <Link href="/#contact" className="nav-link transition font-medium">
              Contact
            </Link>

            {/* Auth Section */}
            {!loading && (
              <>
                {user ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setUserDropdownOpen(true)}
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-2">
                      {user.picture ? (
                        <img
                          src={user.picture}
                          alt={user.email}
                          className="w-8 h-8 rounded-full border-2 border-line"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-panel border border-line flex items-center justify-center text-bright font-medium">
                          {user.email?.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </button>

                    {userDropdownOpen && (
                      <div className="absolute top-full right-0 pt-2">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="w-48 bg-panel border border-line rounded-lg overflow-hidden"
                        >
                          <div className="px-4 py-3 border-b border-line">
                            <p className="text-bright font-medium text-sm">{user.name || user.email.split('@')[0]}</p>
                            <p className="text-mute text-xs">{user.email}</p>
                          </div>
                          <Link
                            href="/dashboard"
                            className="block px-4 py-3 nav-link hover:bg-hover transition font-medium border-b border-line"
                          >
                            Dashboard
                          </Link>
                          <button
                            onClick={logout}
                            className="w-full text-left px-4 py-3 nav-link hover:bg-hover transition font-medium"
                          >
                            Sign Out
                          </button>
                        </motion.div>
                      </div>
                    )}
                  </div>
                ) : (
                  <GoogleSignInButton className="!px-4 !py-2 text-sm" />
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-nav"
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
              href="/#about"
              className="block nav-link py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/cohort"
              className="block nav-link py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              January Cohort
            </Link>

            {/* Mobile Courses Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full nav-link py-2"
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              >
                Courses
                <svg
                  className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileCoursesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4 space-y-2 mt-2"
                >
                  {courses.map((course, index) => (
                    <Link
                      key={index}
                      href={course.href}
                      target={course.external ? '_blank' : undefined}
                      rel={course.external ? 'noopener noreferrer' : undefined}
                      className="block text-mute hover:text-nav-hover py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {course.name}
                      {course.external && ' ↗'}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Mobile Resources Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full nav-link py-2"
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
                      className="block text-mute hover:text-nav-hover py-2 text-sm"
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
              href="/careers"
              className="block nav-link py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/#contact"
              className="block nav-link py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Auth Section */}
            {!loading && (
              <div className="pt-3 border-t border-line mt-3">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 py-2">
                      {user.picture ? (
                        <img
                          src={user.picture}
                          alt={user.email}
                          className="w-10 h-10 rounded-full border-2 border-line"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-panel border border-line flex items-center justify-center text-bright font-medium">
                          {user.email?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <p className="text-bright font-medium text-sm">{user.name || user.email.split('@')[0]}</p>
                        <p className="text-mute text-xs">{user.email}</p>
                      </div>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 mt-2 bg-panel nav-link hover:bg-hover transition font-medium rounded-lg"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 mt-2 bg-panel nav-link hover:bg-hover transition font-medium rounded-lg"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <GoogleSignInButton className="w-full !justify-center" />
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};