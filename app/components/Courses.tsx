'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardTitle, CardDescription, CardFooter } from './Card';
import Button from './Button';

interface CourseCardProps {
  title: string;
  description: string;
  skills: string[];
  duration: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
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
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <div className="space-y-3 my-6">
          <div>
            <p className="text-sm font-semibold text-[#bbb] mb-2">Key Skills:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#333] text-[#e5e5e5] text-xs rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#333]">
            <div>
              <p className="text-xs text-[#999]">Duration</p>
              <p className="font-semibold text-white">{duration}</p>
            </div>
            <div>
              <p className="text-xs text-[#999]">Level</p>
              <p className="font-semibold text-white">{level}</p>
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
      title: 'Python Fundamentals',
      description: 'Master Python from scratch. Learn syntax, data structures, and build real projects.',
      skills: ['Variables', 'Functions', 'OOP', 'File Handling'],
      duration: '4 weeks',
      level: 'Beginner',
    },
    {
      title: 'Data Analysis & Visualization',
      description: 'Transform raw data into insights. Use pandas, NumPy, and Matplotlib for powerful analysis.',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      duration: '8 weeks',
      level: 'Intermediate',
    },
    {
      title: 'Machine Learning',
      description: 'Build predictive models. Learn supervised & unsupervised learning techniques.',
      skills: ['Scikit-learn', 'Regression', 'Classification', 'Clustering'],
      duration: '8 weeks',
      level: 'Intermediate',
    },
    {
      title: 'Deep Learning & AI',
      description: 'Dive into neural networks and AI. Build cutting-edge deep learning models.',
      skills: ['PyTorch', 'Neural Networks', 'CNN', 'NLP'],
      duration: '8 weeks',
      level: 'Advanced',
    },
    {
      title: 'Web Development',
      description: 'Build full-stack web applications. Master Django backend and React/NextJS frontend.',
      skills: ['Django', 'React', 'NextJS', 'REST APIs'],
      duration: '12 weeks',
      level: 'Intermediate',
    },
    {
      title: 'Project Management',
      description: 'Lead data science projects effectively. Learn agile methodologies and team collaboration.',
      skills: ['Agile', 'Scrum', 'Team Leadership', 'Planning'],
      duration: '6 weeks',
      level: 'All Levels',
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
    <section id="courses" className="w-full py-20 md:py-32 bg-[#1a1a1a]">
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
            Our Programs
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Choose Your Learning Path
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#bbb] max-w-2xl mx-auto"
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