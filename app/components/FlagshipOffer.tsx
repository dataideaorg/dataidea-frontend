'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FLAGSHIP, formatUgx, isEarlyBirdOpen } from '../lib/flagship';

export const FlagshipOffer: React.FC = () => {
  const earlyBird = isEarlyBirdOpen();

  return (
    <section id="flagship" className="w-full py-20 md:py-28 bg-[#111]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-wide text-[#bbb] uppercase mb-3">
            Flagship cohort
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-4">
            {FLAGSHIP.shortName}
          </h2>
          <p className="text-lg text-[#bbb] leading-relaxed mb-8">
            {FLAGSHIP.tagline}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-[#999]">Starts</dt>
                <dd className="text-white font-semibold text-base">{FLAGSHIP.startLabel}</dd>
              </div>
              <div>
                <dt className="text-[#999]">Duration</dt>
                <dd className="text-white font-semibold text-base">{FLAGSHIP.duration}</dd>
              </div>
              <div>
                <dt className="text-[#999]">Seats</dt>
                <dd className="text-white font-semibold text-base">{FLAGSHIP.seats} max</dd>
              </div>
              <div>
                <dt className="text-[#999]">Ends</dt>
                <dd className="text-white font-semibold text-base">{FLAGSHIP.endLabel}</dd>
              </div>
            </dl>

            <ul className="space-y-3">
              {FLAGSHIP.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[#ddd] text-sm md:text-base">
                  <span className="text-white mt-1" aria-hidden>
                    –
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border border-[#333] bg-[#1a1a1a] p-6 md:p-8"
          >
            <p className="text-sm text-[#999] mb-2">Tuition (all under UGX 1M)</p>
            <p className="text-3xl md:text-4xl font-bold text-white font-serif mb-1">
              {formatUgx(
                earlyBird ? FLAGSHIP.pricing.earlyBird : FLAGSHIP.pricing.regular
              )}
            </p>
            <p className="text-sm text-[#bbb] mb-6">
              {earlyBird
                ? `Early bird until ${FLAGSHIP.earlyBirdDeadlineLabel}. Then ${formatUgx(FLAGSHIP.pricing.regular)}.`
                : `Regular cohort price. Early bird ended ${FLAGSHIP.earlyBirdDeadlineLabel}.`}
            </p>

            <div className="space-y-3 text-sm text-[#bbb] mb-8 border-t border-[#333] pt-6">
              <p>
                <span className="text-white font-medium">2 instalments:</span>{' '}
                {formatUgx(FLAGSHIP.pricing.instalment1)} +{' '}
                {formatUgx(FLAGSHIP.pricing.instalment2)}
              </p>
              <p>
                <span className="text-white font-medium">Corporate / NGO seat:</span>{' '}
                {formatUgx(FLAGSHIP.pricing.corporate)}
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => window.open(FLAGSHIP.enrollUrl, '_blank')}
            >
              Apply for January 2027
            </Button>
            <p className="text-xs text-[#999] mt-4 text-center">
              Free module docs stay on science.dataidea.org. This fee covers the live cohort, projects, and certificate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
