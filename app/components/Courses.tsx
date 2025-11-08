'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardTitle, CardDescription, CardFooter } from './Card';
import Button from './Button';

interface CourseCardProps {
  icon: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  icon,
  title,
  description,
  skills,
  duration,
  level,
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="h-full flex flex-col justify-between">
      <div>
        <div className="w-24 h-24 mb-4 relative">
          <Image
            src={icon}
            alt={title}
            width={96}
            height={96}
            className="w-full h-full"
            priority={false}
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <div className="space-y-3 my-6">
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-teal-100 text-teal-700 text-xs rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-semibold text-gray-900">{duration}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Level</p>
              <p className="font-semibold text-gray-900">{level}</p>
            </div>
          </div>
        </div>
      </div>

      <CardFooter>
        <Button variant="primary" size="md" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export const Courses: React.FC = () => {
  const courses: CourseCardProps[] = [
    {
      icon: '/python-icon.svg',
      title: 'Python Fundamentals',
      description: 'Master Python from scratch. Learn syntax, data structures, and build real projects.',
      skills: ['Variables', 'Functions', 'OOP', 'File Handling'],
      duration: '8 weeks',
      level: 'Beginner',
    },
    {
      icon: '/data-analysis-icon.svg',
      title: 'Data Analysis & Visualization',
      description: 'Transform raw data into insights. Use pandas, NumPy, and Matplotlib for powerful analysis.',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      duration: '10 weeks',
      level: 'Intermediate',
    },
    {
      icon: '/ml-icon.svg',
      title: 'Machine Learning',
      description: 'Build predictive models. Learn supervised & unsupervised learning techniques.',
      skills: ['Scikit-learn', 'Regression', 'Classification', 'Clustering'],
      duration: '12 weeks',
      level: 'Intermediate',
    },
    {
      icon: '/ai-icon.svg',
      title: 'Deep Learning & AI',
      description: 'Dive into neural networks and AI. Build cutting-edge deep learning models.',
      skills: ['TensorFlow', 'Neural Networks', 'CNN', 'NLP'],
      duration: '14 weeks',
      level: 'Advanced',
    },
    {
      icon: '/bigdata-icon.svg',
      title: 'Big Data & SQL',
      description: 'Handle large datasets. Master SQL and big data technologies.',
      skills: ['SQL', 'PostgreSQL', 'Spark', 'Databases'],
      duration: '10 weeks',
      level: 'Intermediate',
    },
    {
      icon: '/analytics-icon.svg',
      title: 'Business Analytics',
      description: 'Apply data skills to business. Learn metrics, dashboards, and decision-making.',
      skills: ['Dashboard Tools', 'KPIs', 'A/B Testing', 'Storytelling'],
      duration: '8 weeks',
      level: 'Intermediate',
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
    <section id="courses" className="w-full py-20 md:py-32 bg-white">
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
            className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4"
          >
            Our Programs
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Choose Your Learning Path
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From beginner to advanced, we have the perfect course to match your skill level and career goals.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};