'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardTitle, CardDescription, CardFooter } from './Card';
import Button from './Button';
import { getBackendUrl } from '../lib/auth';
import { Course } from '../lib/types';

interface CourseCardProps {
  title: string;
  description: string;
  skills: string[];
  duration: string;
  level: string;
  free_resources_link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  skills,
  duration,
  level,
  free_resources_link,
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="h-full"
  >
    <Card className="h-full flex flex-col justify-between">
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <div className="space-y-3 my-6">
          <div>
            <p className="text-sm font-semibold text-support mb-2">Key Skills:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-pill text-pill-fg text-xs rounded-full font-medium border border-line"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-line">
            <div>
              <p className="text-xs text-mute">Duration</p>
              <p className="font-semibold text-bright">{duration}</p>
            </div>
            <div>
              <p className="text-xs text-mute">Level</p>
              <p className="font-semibold text-bright">{level}</p>
            </div>
          </div>
        </div>
      </div>

      <CardFooter className="flex flex-col gap-3">
        <Button variant="primary" size="md" className="w-full" href="/cohort">
          Join the Live Cohort
        </Button>
        <Button
          variant="outline"
          size="md"
          className="w-full"
          onClick={() => window.open(free_resources_link, '_blank')}
        >
          Free Resources
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export const Courses: React.FC = () => {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${getBackendUrl()}/school/courses/`);
        const data: Course[] = await response.json();

        // Filter only active courses, sort by created_at (newest first), and transform to CourseCardProps
        const activeCourses = data
          .filter(course => course.is_active)
          .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
          .map(course => ({
            title: course.title,
            description: course.description,
            skills: course.skills,
            duration: course.duration,
            level: course.level.charAt(0).toUpperCase() + course.level.slice(1),
            free_resources_link: course.free_resources_link || '#',
          }));

        setCourses(activeCourses);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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
    <section id="courses" className="w-full py-20 md:py-32 bg-ground">
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
            className="eyebrow mb-4"
          >
            Our Programs
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-normal text-bright mb-6 font-serif leading-[1.15]"
          >
            Modules inside the flagship
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-support max-w-2xl mx-auto"
          >
            Study any module free. The January live cohort wraps them into one 12-week path with feedback and a certificate.
          </motion.p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-panel border border-line rounded-xl p-6 animate-pulse">
                <div className="h-6 bg-hover rounded w-3/4 mb-4"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-hover rounded w-full"></div>
                  <div className="h-4 bg-hover rounded w-5/6"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-hover rounded w-1/3 mb-2"></div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="h-6 bg-hover rounded-full w-16"></div>
                    <div className="h-6 bg-hover rounded-full w-20"></div>
                    <div className="h-6 bg-hover rounded-full w-16"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-line">
                    <div className="h-8 bg-hover rounded"></div>
                    <div className="h-8 bg-hover rounded"></div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="h-10 bg-hover rounded"></div>
                    <div className="h-10 bg-hover rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-support text-lg">No courses available at the moment.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {courses.map((course, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};