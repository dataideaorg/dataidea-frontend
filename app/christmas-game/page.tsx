'use client';

import { ChristmasGame } from '../components/ChristmasGame';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function ChristmasGamePage() {
  return (
    <main className="min-h-screen bg-ground">
      <Navbar />
      <div className="pt-16">
        <ChristmasGame />
      </div>
      <Footer />
    </main>
  );
}


