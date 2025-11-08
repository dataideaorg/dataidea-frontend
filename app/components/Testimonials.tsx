'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="h-full">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>

      <p className="text-[#bbb] mb-6 leading-relaxed italic text-lg">
        "{quote}"
      </p>

      <div className="border-t border-[#333] pt-4">
        <p className="font-bold text-white">{author}</p>
        <p className="text-sm text-[#999]">
          {role}
          {company && ` at ${company}`}
        </p>
      </div>
    </Card>
  </motion.div>
);

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: 'DATAIDEA transformed my career. Within 3 months of completing their Machine Learning program, I landed a job as a Data Analyst at a tech company. The instructors truly care about student success.',
      author: 'Amara Okonkwo',
      role: 'Data Analyst',
      company: 'TechCorp Uganda',
    },
    {
      quote: 'I started with zero coding experience. The Python course was so well-structured and the mentorship was incredible. I now confidently build data pipelines at my job!',
      author: 'Kwame Mensah',
      role: 'Data Engineer',
      company: 'DataFlow Solutions',
    },
    {
      quote: 'The community aspect is what impressed me most. I made lifelong friends and professional connections. Plus, the job placement support actually works!',
      author: 'Zainab Habiba',
      role: 'Data Scientist',
      company: 'AI Innovations',
    },
    {
      quote: 'Flexible learning schedule with world-class content. I completed the AI course while working full-time. The real-world projects made all the difference.',
      author: 'David Mutua',
      role: 'ML Engineer',
      company: 'CloudTech Africa',
    },
    {
      quote: 'The instructors are industry experts who make complex concepts simple. The support system ensures you don\'t fall behind. Highly recommend to anyone serious about data science.',
      author: 'Ama Asante',
      role: 'Analytics Manager',
      company: 'StartupHub Kenya',
    },
    {
      quote: 'DATAIDEA gave me confidence to pursue my passion for data science. The certification is respected in the job market and opened many doors for me.',
      author: 'Jamal Hassan',
      role: 'Business Analyst',
      company: 'Digital Ventures',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-gradient-to-br from-[#1a1a1a] to-[#222]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-[#333] text-[#e5e5e5] rounded-full text-sm font-semibold mb-4"
          >
            Success Stories
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Learn From Our Alumni
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#bbb] max-w-2xl mx-auto"
          >
            Hear from graduates who've transformed their careers and achieved their data science dreams.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};