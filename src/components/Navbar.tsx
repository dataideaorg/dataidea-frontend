'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Training', href: '/training' },
    { name: 'Consultancy', href: '/consultancy' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: 'https://blog.dataidea.org/', external: true },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Thin Top Banner */}
      <section className="relative bg-[#008374] py-2 md:py-3">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left side - Event info */}
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-2 md:mb-0">
              <span className="text-xs md:text-sm font-semibold bg-white text-[#008374] px-2 md:px-3 py-1 rounded-full">
                🚀 Upcoming Event
              </span>
              <span className="text-xs md:text-sm font-medium text-center sm:text-left">Data Management with R Language</span>
            </div>
            
            {/* Right side - Date, location, and buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 text-xs md:text-sm">
              {/* Date and location - hide on very small screens */}
              <div className="hidden sm:flex items-center space-x-3">
                <span>📅 Tuesday, July 29, to Wednesday, July 30, 2025</span>
                <span>📍 Kampala, Uganda</span>
              </div>
              
              {/* Mobile: show only date */}
              <div className="sm:hidden">
                <span>📅 Tuesday, July 29, to Wednesday, July 30, 2025</span>
              </div>
              
              {/* Buttons */}
              <div className="flex items-center space-x-2">
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-white text-[#008374] hover:bg-gray-100 text-xs md:text-sm px-2 md:px-3 py-1 font-bold"
                >
                  <Link href="/contact">Express Interest</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-[#008374]">DATAIDEA</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-dataidea-dark hover:text-dataidea-primary hover:bg-teal-50 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-dataidea-primary bg-teal-50'
                      : 'text-dataidea-dark hover:text-dataidea-primary hover:bg-teal-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button asChild className="bg-dataidea-primary hover:bg-dataidea-primaryHover">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-md text-dataidea-primary hover:text-dataidea-primary hover:bg-teal-50"
                >
                  {isOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="px-3 py-2 rounded-md text-base font-medium text-dataidea-dark hover:text-dataidea-primary hover:bg-teal-50 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'text-dataidea-primary bg-teal-50'
                            : 'text-dataidea-dark hover:text-dataidea-primary hover:bg-teal-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                  <Button
                    asChild
                    className="mt-4 bg-dataidea-primary hover:bg-dataidea-primaryHover"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
