'use client';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Courses } from './components/Courses';
import { Partners } from './components/Partners';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Courses />
      <Partners />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
