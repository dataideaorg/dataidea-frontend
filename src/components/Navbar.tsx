'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bars3Icon, 
  XMarkIcon, 
  RocketLaunchIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses', highlight: true },
    { name: 'Training', href: '/training' },
    { name: 'About', href: '/about' },
    { name: 'Consultancy', href: '/consultancy' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: 'https://blog.dataidea.org/', external: true },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="relative z-50">
      {/* Top Banner - Modern Announcement */}
      <AnimatePresence>
        {showBanner && (
          <motion.section 
            className="relative bg-gradient-to-r from-[#008374] to-[#00A08A] text-white overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10L15 5H5z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="container mx-auto px-6 py-3 relative z-10">
              <motion.div 
                className="flex flex-col md:flex-row items-center justify-between"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Left side - Event announcement */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3 md:mb-0">
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Badge className="bg-white text-[#008374] hover:bg-gray-100 font-bold px-3 py-1 flex items-center space-x-1">
                      <SparklesIcon className="w-3 h-3" />
                      <span>Next Cohort</span>
                    </Badge>
                    <span className="font-semibold text-sm md:text-base">Data Management with Python</span>
                  </motion.div>
                </div>
                
                {/* Right side - Details and CTA */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                  {/* Event details */}
                  <div className="hidden lg:flex items-center space-x-4 text-white/90">
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>July 29-30, 2025</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span>Kampala, Uganda</span>
                    </div>
                  </div>
                  
                  {/* Mobile: show compact info */}
                  <div className="lg:hidden text-center text-white/90 text-xs">
                    July 29-30, 2025 • Kampala
                  </div>
                  
                  {/* CTA and close button */}
                  <div className="flex items-center space-x-3">
                    <Button
                      asChild
                      size="sm"
                      className="bg-white text-[#008374] hover:bg-gray-100 font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/contact" className="flex items-center space-x-1">
                        <RocketLaunchIcon className="w-4 h-4" />
                        <span>Join Now</span>
                        <ArrowRightIcon className="w-3 h-3" />
                      </Link>
                    </Button>
                    
                    <button
                      onClick={() => setShowBanner(false)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                      aria-label="Close banner"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <motion.div 
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'shadow-lg border-b border-gray-100' : 'shadow-sm'
        }`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#008374] to-[#00A08A] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-[#008374] to-[#00A08A] bg-clip-text text-transparent">
                    DATAIDEA
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Tech Education</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#008374] hover:bg-[#008374]/5 transition-all duration-200 relative group"
                    >
                      {item.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#008374] group-hover:w-full transition-all duration-300"></div>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                        isActive(item.href)
                          ? 'text-[#008374] bg-[#008374]/10'
                          : 'text-gray-700 hover:text-[#008374] hover:bg-[#008374]/5'
                      } ${item.highlight ? 'font-bold' : ''}`}
                    >
                      {item.name}
                      {item.highlight && (
                        <Badge className="absolute -top-1 -right-1 bg-[#008374] text-white text-xs px-1 py-0 h-4">
                          Hot
                        </Badge>
                      )}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-[#008374] transition-all duration-300 ${
                        isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="border-[#008374] text-[#008374] hover:bg-[#008374] hover:text-white font-medium"
              >
                <Link href="/contact">Talk to Us</Link>
              </Button>
              <Button 
                asChild 
                size="sm"
                className="bg-gradient-to-r from-[#008374] to-[#00A08A] hover:from-[#006A5C] hover:to-[#008374] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/courses" className="flex items-center space-x-1">
                  <span>Start Learning</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-2 rounded-lg text-[#008374] hover:text-[#008374] hover:bg-[#008374]/10"
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                      ) : (
                        <Bars3Icon className="h-6 w-6" />
                      )}
                    </motion.div>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] bg-white/95 backdrop-blur-md">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="border-b border-gray-100 pb-6 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#008374] to-[#00A08A] rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">D</span>
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-[#008374]">DATAIDEA</h2>
                          <p className="text-xs text-gray-500">Tech Education</p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex-1 space-y-2">
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#008374] hover:bg-[#008374]/5 transition-all duration-200"
                            >
                              <span>{item.name}</span>
                              <ArrowRightIcon className="w-4 h-4" />
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                isActive(item.href)
                                  ? 'text-[#008374] bg-[#008374]/10'
                                  : 'text-gray-700 hover:text-[#008374] hover:bg-[#008374]/5'
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <span>{item.name}</span>
                                {item.highlight && (
                                  <Badge className="bg-[#008374] text-white text-xs px-2 py-0 h-5">
                                    Hot
                                  </Badge>
                                )}
                              </div>
                              <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Mobile CTA */}
                    <div className="border-t border-gray-100 pt-6 space-y-3">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#008374] text-[#008374] hover:bg-[#008374] hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/contact">Talk to Us</Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-[#008374] to-[#00A08A] hover:from-[#006A5C] hover:to-[#008374] text-white font-bold"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/courses" className="flex items-center justify-center space-x-2">
                          <RocketLaunchIcon className="w-4 h-4" />
                          <span>Start Learning</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
