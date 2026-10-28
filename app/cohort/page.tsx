'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Button from '../components/Button';
import { FLAGSHIP_COHORT, formatUgx } from '../lib/cohort';

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CohortPage() {
  const {
    name,
    tagline,
    startDate,
    endDate,
    duration,
    seats,
    earlyBirdDeadline,
    applyUrl,
    pricing,
    includes,
    modules,
  } = FLAGSHIP_COHORT;

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#222] to-[#333] pointer-events-none" />
        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={item}
            className="inline-block px-4 py-2 bg-[#333] text-[#e5e5e5] rounded-full text-sm font-semibold mb-6"
          >
            Next intake · {startDate}
          </motion.span>
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif"
          >
            {name}
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-xl text-[#bbb] mb-8">
            {tagline} · {duration} · {seats} seats · Kampala / remote live sessions
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for January 2027
            </Button>
            <Button size="lg" variant="outline" href="#pricing">
              See pricing
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'Starts', value: startDate },
            { label: 'Ends', value: endDate },
            { label: 'Class size', value: `${seats} learners` },
          ].map((stat) => (
            <div key={stat.label} className="border border-[#333] rounded-xl p-6 bg-[#222]">
              <p className="text-sm text-[#999] mb-1">{stat.label}</p>
              <p className="text-xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">What you get</h2>
            <ul className="space-y-4">
              {includes.map((line) => (
                <li key={line} className="flex gap-3 text-[#e5e5e5]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-[#999] mt-6 text-sm">
              SQL and statistics are no longer in this cohort. Deep Learning and Time Series stay as later add-ons.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">12-week path</h2>
            <ol className="space-y-4">
              {modules.map((module, index) => (
                <li
                  key={module.title}
                  className="flex gap-4 border-b border-[#333] pb-4 last:border-0"
                >
                  <span className="text-[#999] w-8 shrink-0">{index + 1}</span>
                  <div>
                    <p className="text-white font-semibold">{module.title}</p>
                    <p className="text-sm text-[#999]">{module.weeks}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div id="pricing" className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-serif text-center">
            Pricing
          </h2>
          <p className="text-[#bbb] text-center mb-10 max-w-2xl mx-auto">
            Highest consumer price is {formatUgx(pricing.regular)}. Corporate seats stay under UGX 1,000,000.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PriceCard
              name="Early bird"
              price={formatUgx(pricing.earlyBird)}
              note={`Pay by ${earlyBirdDeadline}`}
              featured
            />
            <PriceCard
              name="Regular"
              price={formatUgx(pricing.regular)}
              note="After early bird closes"
            />
            <PriceCard
              name="Two instalments"
              price={`${formatUgx(pricing.instalment1)} + ${formatUgx(pricing.instalment2)}`}
              note="Before start, then week 6"
            />
            <PriceCard
              name="Corporate / NGO"
              price={formatUgx(pricing.corporate)}
              note="Invoice per seat"
            />
          </div>
        </div>

        <div className="mt-16 text-center border border-[#333] rounded-2xl p-8 md:p-12 bg-[#111]">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">
            Ready to join?
          </h3>
          <p className="text-[#bbb] mb-6">
            Apply now. We will confirm your seat and share payment details.
          </p>
          <Button
            size="lg"
            variant="primary"
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply for the January cohort
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PriceCard({
  name,
  price,
  note,
  featured = false,
}: {
  name: string;
  price: string;
  note: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 border ${
        featured ? 'border-white bg-[#222]' : 'border-[#333] bg-[#1a1a1a]'
      }`}
    >
      {featured && (
        <p className="text-xs uppercase tracking-wide text-white mb-2">Recommended</p>
      )}
      <p className="text-[#999] text-sm mb-2">{name}</p>
      <p className="text-xl font-bold text-white mb-2 leading-snug">{price}</p>
      <p className="text-sm text-[#999]">{note}</p>
    </div>
  );
}
