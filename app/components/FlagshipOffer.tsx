'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FLAGSHIP_COHORT, formatUgx } from '../lib/cohort';

export const FlagshipOffer: React.FC = () => {
  const { name, tagline, startDateShort, duration, seats, pricing, includes, earlyBirdDeadlineShort } =
    FLAGSHIP_COHORT;

  return (
    <section id="cohort" className="w-full py-20 md:py-28 bg-wash border-y border-line">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div>
            <span className="eyebrow mb-4">Next intake · {startDateShort}</span>
            <h2 className="text-3xl md:text-5xl font-normal text-bright mb-4 font-serif leading-[1.15]">
              {name}
            </h2>
            <p className="text-lg text-support mb-6">
              {tagline} · {duration} · {seats} seats. One guided pathway from beginner Python to a
              capstone and a verified certificate.
            </p>
            <ul className="space-y-3 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-type">
                  <span className="mt-1 h-2 w-2 rounded-full bg-bright shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary" href="/cohort">
                View the January cohort
              </Button>
              <Button size="lg" variant="outline" href="/cohort#pricing">
                See pricing
              </Button>
            </div>
          </div>

          <div className="bg-panel border border-line rounded-2xl p-6 md:p-8">
            <p className="text-sm text-mute mb-2">Early bird until {earlyBirdDeadlineShort}</p>
            <p className="text-4xl md:text-5xl font-bold text-bright mb-1">
              {formatUgx(pricing.earlyBird)}
            </p>
            <p className="text-mute mb-6">
              Then {formatUgx(pricing.regular)} · never above {formatUgx(pricing.regular)}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="border border-line rounded-xl p-4">
                <p className="text-mute">Starts</p>
                <p className="text-bright font-semibold">{startDateShort}</p>
              </div>
              <div className="border border-line rounded-xl p-4">
                <p className="text-mute">Seats</p>
                <p className="text-bright font-semibold">{seats} learners</p>
              </div>
              <div className="border border-line rounded-xl p-4">
                <p className="text-mute">Length</p>
                <p className="text-bright font-semibold">{duration}</p>
              </div>
              <div className="border border-line rounded-xl p-4">
                <p className="text-mute">Format</p>
                <p className="text-bright font-semibold">{tagline}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
