'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Social media icons (using SVGs directly since we don't have Material-UI)
const TwitterIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // For now, we'll just log the email. Replace with actual endpoint later.
      console.log('Newsletter subscription:', email);
      setEmail('');
      // TODO: Implement actual newsletter API call
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <footer className="bg-[#008374] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/DATAIDEA-Logo.png"
                alt="DATAIDEA Logo"
                width={40}
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-sm mb-6">
              DATAIDEA provides comprehensive research 
              in statistical methodology and high-quality training to enhance the quality 
              of national statistics.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://x.com/easiacug" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-dataidea-primary transition-colors"
              >
                <TwitterIcon />
              </a>
              <a 
                href="https://youtube.com/@easiacug" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-dataidea-primary transition-colors"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-dataidea-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-dataidea-primary transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/consultancy" className="hover:text-dataidea-primary transition-colors">
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-dataidea-primary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Plot 15 Baskerville Avenue, Kololo<br />
                  P.O. Box 11140 Kampala (Uganda)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-dataidea-primary" />
                <a 
                  href="tel:+256774128257"
                  className="hover:text-dataidea-primary transition-colors text-sm"
                >
                  +256 774 128 257
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-dataidea-primary" />
                <a 
                  href="mailto:dataidea.ac.ug@gmail.com"
                  className="hover:text-dataidea-primary transition-colors text-sm"
                >
                  dataidea.ac.ug@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive updates about new programs and training opportunities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border-gray-600 focus:border-dataidea-primary text-white placeholder:text-gray-400 p-5"
                required
              />
              <Button
                type="submit"
                className="w-full border-white border-1 rounded-sm p-5 bg-[#008374] text-white hover:bg-white hover:text-[#008374] hover:cursor-pointer px-4 py-2"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © {currentYear} East African Statistics Institute. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-dataidea-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-dataidea-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
