'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  AcademicCapIcon,
  GlobeAltIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Courses() {
  const courseCategories = [
    {
      title: "Data Science & Analytics",
      description: "Master the tools and techniques for data analysis, visualization, and machine learning.",
      icon: <ChartBarIcon className="h-12 w-12 text-dataidea-primary" />,
      courses: [
        {
          title: "Python for Data Science",
          description: "Comprehensive course covering Python fundamentals, data manipulation, visualization, and machine learning.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          price: "Free",
          external: true,
          link: "https://python.dataidea.ac.ug",
          features: ["Python Basics", "Pandas & NumPy", "Data Visualization", "Machine Learning", "Real-world Projects"]
        },
        {
          title: "R Programming for Statistics",
          description: "Learn statistical analysis and data visualization using R programming language.",
          duration: "6 weeks",
          level: "Beginner",
          price: "$299",
          external: false,
          features: ["R Fundamentals", "Statistical Analysis", "Data Visualization", "Reporting"]
        },
        {
          title: "Advanced Machine Learning",
          description: "Deep dive into machine learning algorithms and their practical applications.",
          duration: "10 weeks",
          level: "Advanced",
          price: "$499",
          external: false,
          features: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Model Deployment"]
        }
      ]
    },
    {
      title: "Statistical Analysis",
      description: "Develop strong statistical foundations for research and data analysis.",
      icon: <AcademicCapIcon className="h-12 w-12 text-dataidea-primary" />,
      courses: [
        {
          title: "Statistical Methods",
          description: "Comprehensive introduction to statistical methods and their applications.",
          duration: "6 weeks",
          level: "Beginner",
          price: "$249",
          external: false,
          features: ["Descriptive Statistics", "Inferential Statistics", "Hypothesis Testing", "Regression Analysis"]
        },
        {
          title: "Research Methodology",
          description: "Learn research design, data collection, and analysis methodologies.",
          duration: "8 weeks",
          level: "Intermediate",
          price: "$349",
          external: false,
          features: ["Research Design", "Survey Methods", "Qualitative Analysis", "Report Writing"]
        }
      ]
    },
    {
      title: "Professional Development",
      description: "Enhance your professional skills in monitoring, evaluation, and project management.",
      icon: <UserGroupIcon className="h-12 w-12 text-dataidea-primary" />,
      courses: [
        {
          title: "Monitoring & Evaluation",
          description: "Master M&E frameworks and tools for effective program management.",
          duration: "6 weeks",
          level: "Intermediate",
          price: "$399",
          external: false,
          features: ["M&E Frameworks", "Data Collection", "Impact Assessment", "Reporting"]
        },
        {
          title: "Project Management",
          description: "Learn project management methodologies and tools for successful project delivery.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          price: "$449",
          external: false,
          features: ["Project Planning", "Risk Management", "Stakeholder Management", "Agile Methods"]
        }
      ]
    }
  ];

  const features = [
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from experienced professionals and researchers in the field of statistics and data science."
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "Flexible Learning",
      description: "Choose between online and in-person courses to fit your schedule and learning preferences."
    },
    {
      icon: <CodeBracketIcon className="h-8 w-8" />,
      title: "Practical Skills",
      description: "Gain hands-on experience with real-world projects and case studies from East Africa."
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: "Community Support",
      description: "Join a network of professionals and researchers across East Africa for collaboration and support."
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Industry-Relevant",
      description: "Course content is designed to address the specific needs and challenges of the East African context."
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "Lifetime Access",
      description: "Access course materials and updates even after completion to support your ongoing learning."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dataidea-primary/90 to-dataidea-dark/90"></div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-dataidea-primary/20 blur-3xl"
            animate={{ 
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Professional <span className="text-white">Courses</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enhance your skills with our comprehensive online and in-person courses designed for professionals, researchers, and students across East Africa.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-dataidea-primary hover:bg-gray-100">
                Explore Courses
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link href="/contact">Get Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Course Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of courses designed to meet the needs of professionals, researchers, and students at all levels.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {courseCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                  <div className="flex flex-col md:flex-row md:items-center mb-8">
                    <div className="p-4 rounded-full bg-dataidea-primary/10 mr-6 mb-4 md:mb-0 w-fit">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-gray-600 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.courses.map((course, courseIndex) => (
                      <motion.div
                        key={courseIndex}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <div className="p-6 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-lg font-semibold text-dataidea-primary">{course.title}</h4>
                              {course.external && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  External
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge variant="outline" className="text-xs">
                                <ClockIcon className="h-3 w-3 mr-1" />
                                {course.duration}
                              </Badge>
                              <Badge variant="secondary" className="bg-dataidea-primary/10 text-dataidea-primary text-xs">
                                {course.level}
                              </Badge>
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                                {course.price}
                              </Badge>
                            </div>
                            
                            <div className="mb-4">
                              <h5 className="font-semibold text-sm mb-2">What you&apos;ll learn:</h5>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {course.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-1.5 h-1.5 bg-dataidea-primary rounded-full mr-2"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {course.external ? (
                              <a 
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                              >
                                <Button className="bg-dataidea-primary text-white hover:bg-dataidea-primaryHover w-full">
                                  Visit Course
                                </Button>
                              </a>
                            ) : (
                              <Button asChild variant="outline" className="w-full">
                                <Link href="/contact">Enroll Now</Link>
                              </Button>
                            )}
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Courses?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of learning with DATAIDEA&apos;s professional training programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="p-6">
                    <div className="p-3 rounded-full bg-dataidea-primary/10 w-fit mx-auto mb-4">
                      <div className="text-dataidea-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dataidea-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Learning Journey?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose from our comprehensive course offerings and take the first step towards enhancing your professional skills.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-dataidea-primary hover:bg-dataidea-primaryHover">
                Browse All Courses
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link href="/contact">Get Course Advice</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
