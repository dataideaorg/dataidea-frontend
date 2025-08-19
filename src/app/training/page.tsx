'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  ClipboardDocumentCheckIcon,
  CalendarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Animation variants for consistent animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Training() {
  const trainingCategories = [
    {
      title: "R Programming for Statistical Analysis",
      description: "Comprehensive training in R programming language for statistical analysis, data visualization, and reporting.",
      icon: <CodeBracketIcon className="h-12 w-12 text-easi-primary" />,
      courses: [
        {
          title: "Introduction to R for Statisticians",
          duration: "3 days",
          level: "Beginner",
          description: "Learn the fundamentals of R programming for statistical analysis, including data manipulation, visualization, and basic statistical tests."
        },
        {
          title: "Advanced Statistical Modeling with R",
          duration: "5 days",
          level: "Advanced",
          description: "Master advanced statistical techniques using R, including regression analysis, time series forecasting, and multivariate analysis."
        },
        {
          title: "Data Visualization with R",
          duration: "2 days",
          level: "Intermediate",
          description: "Create compelling visualizations using ggplot2 and other R packages to effectively communicate statistical findings."
        }
      ]
    },
    {
      title: "Python for Data Science",
      description: "Hands-on training in Python programming for data analysis, machine learning, and statistical applications.",
      icon: <ChartBarIcon className="h-12 w-12 text-easi-primary" />,
      courses: [
        {
          title: "Python Fundamentals for Data Analysis",
          duration: "4 days",
          level: "Beginner",
          description: "Learn Python basics, data manipulation with pandas, and visualization with matplotlib and seaborn."
        },
        {
          title: "Machine Learning with Python",
          duration: "5 days",
          level: "Intermediate",
          description: "Implement machine learning algorithms using scikit-learn and understand their statistical foundations."
        },
        {
          title: "Statistical Analysis with Python",
          duration: "3 days",
          level: "Intermediate",
          description: "Perform statistical analysis using Python's statsmodels and scipy packages for hypothesis testing and modeling."
        }
      ]
    },
    {
      title: "Monitoring and Evaluation",
      description: "Comprehensive training in designing, implementing, and managing effective M&E systems for programs and projects.",
      icon: <ClipboardDocumentCheckIcon className="h-12 w-12 text-easi-primary" />,
      courses: [
        {
          title: "M&E Fundamentals",
          duration: "3 days",
          level: "Beginner",
          description: "Learn the core concepts, frameworks, and tools for effective monitoring and evaluation of development programs."
        },
        {
          title: "Results-Based M&E Systems",
          duration: "4 days",
          level: "Intermediate",
          description: "Design and implement results-based M&E systems that track outcomes and impact, not just activities and outputs."
        },
        {
          title: "Data Collection and Analysis for M&E",
          duration: "3 days",
          level: "Intermediate",
          description: "Master various data collection methods and analytical techniques specifically for monitoring and evaluation purposes."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:px-32 lg:px-64">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#008374] to-[#008374]/80"></div>
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
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-easi-primary/20 blur-3xl"
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
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0 text-white"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold mb-8"
                variants={fadeInUp}
              >
                Training <span className="text-white">Programs</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-10 text-white/90"
                variants={fadeInUp}
              >
                DATAIDEA offers comprehensive training programs in statistical analysis, research methodology, and data science to enhance the capacity of professionals across East Africa.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-6"
                variants={fadeInUp}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-easi-primary hover:bg-gray-100 hover:cursor-pointer"
                >
                  <a
                    href="https://calendar.google.com/calendar/u/0?cid=ZWFzaS5hYy51Z0BnbWFpbC5jb20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Schedule
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20"
                >
                  <Link href="/contact">Request Custom Training</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-easi-dark mb-4">Upcoming Training / Meetings</h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center p-3 border-l-4 border-easi-primary bg-gray-50"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mr-4">
                      <CalendarIcon className="h-8 w-8 text-easi-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Management with R Language</h4>
                      <div className="text-sm text-gray-600 flex flex-wrap gap-x-4">
                        <span>Tuesday, July 29, to Wednesday, July 30, 2025</span>
                        <span>Kampala, Uganda</span>
                        <a href="https://meet.google.com/ypg-wxdc-dwr" target="_blank" rel="noopener noreferrer" className="text-easi-primary">Join event</a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Trainings Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">All Upcoming Training Events</h2>
            <p className="text-center text-gray-600 mb-0 max-w-2xl mx-auto">
              Explore our upcoming events and secure your spot today.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Management with R Language',
                date: 'Tuesday, July 29, to Wednesday, July 30, 2025',
                location: 'Online',
                description: 'Master the art of data management using R Language. Ideal for analysts and researchers.'
              },
              {
                title: 'Python for Data Science Bootcamp',
                date: 'To Be Determined',
                location: 'Online',
                description: 'An intensive bootcamp covering Python basics, pandas, and machine learning for aspiring data scientists.'
              },
              {
                title: 'Machine Learning with Python',
                date: 'To Be Determined',
                location: 'Online',
                description: 'An intensive training covering machine learning algorithms and their applications, with a focus on practical implementation.'
              },
            ].map((training, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-easi-primary">{training.title}</h3>
                    <div className="text-gray-700 mb-1"><strong className="text-gray-900">Date:</strong> {training.date}</div>
                    <div className="text-gray-700 mb-1"><strong className="text-gray-900">Location:</strong> {training.location}</div>
                    <p className="text-gray-600 mt-2 mb-4">{training.description}</p>
                    <Button
                      asChild
                      className="w-full bg-easi-primary hover:bg-easi-primaryHover"
                    >
                      <Link href="/contact">Express Interest</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Pay */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-yellow-50 border-l-4 border-easi-primary shadow-md mb-12">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-easi-primary">How to Pay</h2>
                <p className="mb-4 text-gray-700">
                  To secure your spot in our training, please deposit the required fee via Mobile Money to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-easi-primary">Mobile Number:</span>
                    <span className="font-mono text-lg text-gray-900">+256 749747472</span>
                    <span className="font-semibold text-lg text-easi-primary">Name:</span>
                    <span className="font-mono text-lg text-gray-900">Ronald Wesonga</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-easi-primary">Mobile Number:</span>
                    <span className="font-mono text-lg text-gray-900">+256 791429565</span>
                    <span className="font-semibold text-lg text-easi-primary">Name:</span>
                    <span className="font-mono text-lg text-gray-900">Ronald Wesonga</span>
                  </div>
                </div>
                <p className="mb-2 text-gray-700">
                  After payment, capture the transaction ID and fill it in this form{' '}
                  <a href='https://forms.gle/7yHWruQ7RFBXANTc9' className="text-easi-primary underline" target="_blank" rel="noopener noreferrer">
                    DATAIDEA Training Registration Form
                  </a>.
                </p>
                <p className="text-gray-600 text-sm">
                  For any questions, <Link href="/contact" className="text-easi-primary underline">contact us here</Link>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Other Training Programs</h2>
            <p className="text-center text-gray-600 mb-0 max-w-2xl mx-auto">
              Comprehensive training solutions designed to enhance statistical capacity and data analysis skills
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {trainingCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8 border-t-4 border-easi-primary">
                  <div className="flex flex-col md:flex-row md:items-center mb-8">
                    <div className="p-4 rounded-full bg-easi-primary/10 mr-6 mb-4 md:mb-0 w-fit">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-easi-dark">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {category.courses.map((course, courseIndex) => (
                      <motion.div
                        key={courseIndex}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <div className="p-6">
                            <h4 className="text-lg font-semibold mb-3">{course.title}</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge variant="outline" className="text-xs">
                                <ClockIcon className="h-3 w-3 mr-1" />
                                {course.duration}
                              </Badge>
                              <Badge variant="secondary" className="bg-easi-primary/10 text-easi-primary text-xs">
                                {course.level}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                            <Button variant="outline" size="sm" className="w-full hover:bg-easi-primary hover:text-white">
                              Learn More
                            </Button>
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

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Trainees Say</h2>
            <p className="text-center text-gray-600 mb-0 max-w-2xl mx-auto">
              Hear from professionals who have participated in our training programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The R programming training was excellent. The instructors were knowledgeable and the hands-on exercises helped me apply what I learned immediately in my work.",
                author: "John Mukasa",
                organization: "Uganda Bureau of Statistics"
              },
              {
                quote: "DATAIDEA's M&E training transformed how our organization approaches program evaluation. The practical tools and frameworks have been invaluable.",
                author: "Sarah Nyambura",
                organization: "Kenya National Bureau of Statistics"
              },
              {
                quote: "The Python for Data Science course was comprehensive and well-structured. I now feel confident analyzing large datasets and creating insightful visualizations.",
                author: "Emmanuel Rwema",
                organization: "Rwanda National Institute of Statistics"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-50 border border-gray-100 h-full">
                  <div className="p-6">
                    <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.organization}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-easi-dark text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6"
              variants={fadeInUp}
            >
              Ready to Enhance Your Team&apos;s Skills?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Contact us today to discuss your training needs and how we can design a 
              customized program for your organization.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <Button
                asChild
                size="lg"
                className="bg-easi-primary hover:bg-easi-primaryHover px-8 py-4 text-lg"
              >
                <Link href="/contact">Request Training</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg"
                onClick={() => {
                  alert("The brochure will be available soon");
                }}
              >
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
