'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  ClipboardDocumentCheckIcon,
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  FireIcon,
  TrophyIcon,
  MapPinIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon
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
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingTrainings = [
    {
      id: 1,
      title: "Data Management with Python",
      subtitle: "Master Python for Data Analysis",
      description: "Comprehensive hands-on training covering Python fundamentals, data manipulation, analysis, and visualization.",
      date: "Friday, July 29 - Saturday, July 30, 2025",
      time: "9:00 AM - 5:00 PM EAT",
      location: "Kampala, Uganda",
      format: "Hybrid (In-person + Online)",
      price: 250,
      earlyBirdPrice: 200,
      capacity: 50,
      enrolled: 32,
      featured: true,
      category: "Data Science",
      level: "Beginner to Intermediate",
      duration: "2 days",
      instructor: "Dr. John Mukasa",
      link: "https://meet.google.com/ypg-wxdc-dwr",
      highlights: [
        "Hands-on Python programming",
        "Real-world datasets",
        "Data visualization techniques",
        "Certificate of completion",
        "Networking opportunities"
      ]
    },
    {
      id: 2,
      title: "Machine Learning Bootcamp",
      subtitle: "Build AI Models from Scratch",
      description: "Intensive 3-day bootcamp covering machine learning algorithms, model building, and deployment strategies.",
      date: "TBD (September 2025)",
      time: "9:00 AM - 6:00 PM EAT",
      location: "Nairobi, Kenya",
      format: "In-person",
      price: 400,
      earlyBirdPrice: 320,
      capacity: 30,
      enrolled: 12,
      featured: false,
      category: "Machine Learning",
      level: "Intermediate to Advanced",
      duration: "3 days",
      instructor: "Prof. Sarah Nakamya",
      highlights: [
        "Supervised & Unsupervised Learning",
        "Model evaluation techniques",
        "Deployment to production",
        "Industry case studies",
        "Project portfolio building"
      ]
    },
    {
      id: 3,
      title: "Full-Stack Web Development",
      subtitle: "Build Modern Web Applications",
      description: "Complete web development training covering frontend, backend, databases, and deployment.",
      date: "TBD (October 2025)",
      time: "9:00 AM - 5:00 PM EAT",
      location: "Online",
      format: "Online Live",
      price: 350,
      earlyBirdPrice: 280,
      capacity: 40,
      enrolled: 8,
      featured: false,
      category: "Web Development",
      level: "Beginner to Intermediate",
      duration: "5 days",
      instructor: "James Okello",
      highlights: [
        "React & Node.js",
        "Database design",
        "API development",
        "Cloud deployment",
        "Industry mentorship"
      ]
    }
  ];

  const trainingCategories = [
    {
      title: "Programming for Data Science",
      description: "Master Python, data analysis, machine learning, and AI to become a data professional.",
      icon: <ChartBarIcon className="h-12 w-12 text-[#008374]" />,
      color: "from-blue-500 to-cyan-500",
      courses: 4,
      students: 1200,
      topics: [
        "Python Programming Fundamentals",
        "Data Analysis with Pandas & NumPy", 
        "Machine Learning with Scikit-learn",
        "Deep Learning with PyTorch",
        "Data Visualization & Storytelling"
      ]
    },
    {
      title: "Web Development",
      description: "Build modern, scalable web applications using the latest technologies and frameworks.",
      icon: <CodeBracketIcon className="h-12 w-12 text-[#008374]" />,
      color: "from-green-500 to-teal-500",
      courses: 3,
      students: 800,
      topics: [
        "JavaScript & ES6+ Features",
        "Frontend Development with React",
        "Backend Development with Django",
        "Database Design & Management",
        "DevOps & Cloud Deployment"
      ]
    },
    {
      title: "Project Management",
      description: "Learn to lead teams, manage resources, and deliver successful projects on time and budget.",
      icon: <UserGroupIcon className="h-12 w-12 text-[#008374]" />,
      color: "from-purple-500 to-pink-500",
      courses: 1,
      students: 400,
      topics: [
        "Agile & Scrum Methodologies",
        "Risk Assessment & Management",
        "Stakeholder Communication",
        "Budget & Resource Planning",
        "Team Leadership Skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#008374] to-[#006A5C] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Plus Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-40 gap-2 opacity-10">
            {[...Array(500)].map((_, i) => (
              <div
                key={i}
                className="text-white font-bold text-md md:text-xl lg:text-2xl flex items-center justify-center"
              >
                +
              </div>
            ))}
          </div>
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
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/20 blur-3xl"
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

        <div className="container mx-auto px-6 md:px-12 py-20 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                  <AcademicCapIcon className="w-4 h-4 mr-2" />
                  Professional Training Programs
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Intensive 
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Tech Training
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
              >
                Transform your career with our <strong>intensive, hands-on training programs</strong>. 
                Learn from industry experts and build real-world projects.
                <span className="block mt-2 text-lg">
                  Next cohort starts soon - limited seats available!
                </span>
              </motion.p>

              {/* Key Benefits */}
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                  {[
                    "Small Class Sizes",
                    "Industry Projects", 
                    "Job Placement Support",
                    "Certificate Awarded",
                    "Networking Events",
                    "Lifetime Community"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-white flex-shrink-0" />
                      <span className="text-white/90 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  size="lg"
                  className="bg-white text-[#008374] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Upcoming Training
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Featured Training Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Featured Training Card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10">
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 shadow-lg">
                    <FireIcon className="w-3 h-3 mr-1" />
                    Next Cohort
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#008374] rounded-xl flex items-center justify-center mr-4">
                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Data Management with Python</h3>
                      <p className="text-[#008374] font-medium text-sm">Master Python for Data Analysis</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4 mr-2 text-[#008374]" />
                      July 29-30, 2025
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-2 text-[#008374]" />
                      Kampala, Uganda (Hybrid)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ClockIcon className="w-4 h-4 mr-2 text-[#008374]" />
                      2 Days Intensive
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">$200</span>
                        <span className="text-sm text-gray-500 line-through">$250</span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">Early Bird Price</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">32/50 enrolled</div>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#008374] h-2 rounded-full" style={{width: '64%'}}></div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#008374] hover:bg-[#006A5C] text-white font-semibold">
                    Reserve Your Spot
                  </Button>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-[#008374]">95%</div>
                  <div className="text-xs text-gray-600">Job Placement</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -right-4 bg-[#008374] text-white rounded-lg shadow-lg p-3 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">2,400+</div>
                  <div className="text-xs">Graduates</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Trainings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Upcoming Training Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our intensive training programs and accelerate your career growth
            </p>
          </motion.div>

          {/* Training Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTrainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Featured Badge */}
                {training.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 shadow-lg">
                      <FireIcon className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0 shadow-lg">
                  {/* Header */}
                  <div className="relative h-32 bg-gradient-to-br from-[#008374] to-[#006A5C] overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <ChartBarIcon className="w-6 h-6" />
                        </div>
                        <div className="text-sm font-medium opacity-90">{training.category}</div>
                      </div>
                    </div>
                    
                    {/* Enrollment Progress */}
                    <div className="absolute bottom-2 right-2 bg-white/90 rounded-lg px-2 py-1">
                      <div className="text-xs font-medium text-gray-700">
                        {training.enrolled}/{training.capacity}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title and Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{training.title}</h3>
                      <p className="text-[#008374] font-medium text-sm mb-2">{training.subtitle}</p>
                      <p className="text-gray-600 text-sm line-clamp-2">{training.description}</p>
                    </div>

                    {/* Training Details */}
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2 text-[#008374]" />
                        {training.date}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-2 text-[#008374]" />
                        {training.location} ({training.format})
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-2 text-[#008374]" />
                        {training.duration} • {training.level}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2 text-gray-900">What you'll learn:</h4>
                      <div className="space-y-1">
                        {training.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-3 h-3 text-[#008374] mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">${training.earlyBirdPrice}</span>
                        <span className="text-sm text-gray-500 line-through">${training.price}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        Early Bird
                      </Badge>
                    </div>

                    {/* Enrollment Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{training.enrolled} enrolled</span>
                        <span>{training.capacity - training.enrolled} spots left</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#008374] h-2 rounded-full transition-all duration-300"
                          style={{width: `${(training.enrolled / training.capacity) * 100}%`}}
                        ></div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#008374] hover:bg-[#006A5C] text-white font-semibold">
                      {training.link ? (
                        <a href={training.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                          Reserve Spot
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </a>
                      ) : (
                        <Link href="/contact" className="flex items-center justify-center w-full">
                          Express Interest
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </Link>
                      )}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Training Tracks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your specialization and master the skills that matter most in today's tech industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingCategories.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                  {/* Header with Gradient */}
                  <div className={`h-32 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white text-sm">
                      <div className="flex items-center">
                        <AcademicCapIcon className="w-4 h-4 mr-1" />
                        {category.courses} courses
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-1" />
                        {category.students.toLocaleString()} students
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                    
                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 text-gray-900">Key Topics:</h4>
                      <div className="space-y-2">
                        {category.topics.slice(0, 4).map((topic, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-3 h-3 text-[#008374] mr-2 flex-shrink-0" />
                            {topic}
                          </div>
                        ))}
                        {category.topics.length > 4 && (
                          <div className="text-sm text-gray-500">
                            +{category.topics.length - 4} more topics
                          </div>
                        )}
                      </div>
                    </div>

                    <Button 
                      asChild
                      className="w-full bg-[#008374] hover:bg-[#006A5C] text-white font-semibold"
                    >
                      <Link href="/courses" className="flex items-center justify-center">
                        View Courses
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've made it easy for you to invest in your future with multiple convenient payment methods
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <CurrencyDollarIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mobile Money (Uganda)</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">MTN Mobile Money</span>
                      <span className="text-[#008374] font-mono">+256 774128257</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Airtel Money</span>
                      <span className="text-[#008374] font-mono">+256 701520768</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Account Name</div>
                  <div className="font-semibold text-gray-900">Juma Kibekityo</div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <BuildingOfficeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Bank Transfer</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Account Name</div>
                    <div className="font-semibold text-gray-900">DATAIDEA</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Bank</div>
                    <div className="font-semibold text-gray-900">Stanbic Bank Uganda</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Account Number</div>
                    <div className="font-mono text-[#008374] font-semibold">9030017263958</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Payment Instructions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircleIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Complete Your Registration</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    After making your payment, complete your registration using our online form:
                  </p>
                  <Button asChild className="bg-[#008374] hover:bg-[#006A5C] text-white font-semibold mb-4">
                    <a href="https://forms.gle/7yHWruQ7RFBXANTc9" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Complete Registration Form
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <p className="text-gray-600 text-sm">
                    Or send payment confirmation via WhatsApp to <strong className="text-[#008374]">+256 774128257</strong> or email to{' '}
                    <strong className="text-[#008374]">easi.ac.ug@gmail.com</strong>
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear how our intensive training programs have transformed careers and organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The Python training was a game-changer! I went from zero programming knowledge to landing a data analyst role at the World Bank in just 3 months.",
                name: "Sarah Mukisa",
                title: "Data Analyst",
                company: "World Bank",
                training: "Python for Data Science",
                rating: 5,
                image: "SM",
                achievement: "Promoted within 3 months"
              },
              {
                quote: "DATAIDEA's web development bootcamp gave me the skills to build enterprise applications. I now lead a team of developers at my company.",
                name: "James Okello",
                title: "Lead Developer",
                company: "Safaricom",
                training: "Full-Stack Development",
                rating: 5,
                image: "JO",
                achievement: "Salary increased by 150%"
              },
              {
                quote: "The project management training transformed how I lead teams. I successfully delivered a $2M project ahead of schedule and under budget.",
                name: "Grace Namuli",
                title: "Senior Project Manager",
                company: "African Development Bank",
                training: "Project Management",
                rating: 5,
                image: "GN",
                achievement: "Led $2M project successfully"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Achievement Badge */}
                  <div className="mb-6">
                    <Badge className="bg-gradient-to-r from-[#008374] to-[#00A08A] text-white px-3 py-1">
                      <TrophyIcon className="w-3 h-3 mr-1" />
                      {testimonial.achievement}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#008374] to-[#00A08A] rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.title}</div>
                        <div className="text-sm text-[#008374] font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Training Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                      Graduate: {testimonial.training}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DATAIDEA Training */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Our Training Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven methodology has helped thousands of professionals advance their careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheckIcon className="w-8 h-8" />,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of real-world experience and proven track records."
              },
              {
                icon: <RocketLaunchIcon className="w-8 h-8" />,
                title: "Hands-on Projects",
                description: "Build real applications and solve actual business problems during the training sessions."
              },
              {
                icon: <UserGroupIcon className="w-8 h-8" />,
                title: "Small Class Sizes",
                description: "Personalized attention with maximum 30 participants per training session."
              },
              {
                icon: <TrophyIcon className="w-8 h-8" />,
                title: "Job Placement Support",
                description: "Career guidance, resume reviews, and job placement assistance for all graduates."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#008374]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#008374]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Ready to Level Up
              <span className="block bg-gradient-to-r from-[#008374] to-[#00A08A] bg-clip-text text-transparent">
                Your Skills?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Join our next intensive training cohort and fast-track your career growth. 
              <strong className="text-white"> Limited seats available - secure your spot today.</strong>
            </motion.p>

            <motion.div 
              className="mb-12"
              variants={fadeInUp}
            >
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">2,400+</div>
                  <div className="text-gray-400">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">95%</div>
                  <div className="text-gray-400">Job Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">150%</div>
                  <div className="text-gray-400">Average Salary Increase</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <Button 
                size="lg"
                className="bg-[#008374] hover:bg-[#006A5C] text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#008374]/50 transition-all duration-300"
              >
                Reserve Your Spot
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 text-lg transition-all duration-300"
              >
                <Link href="/contact">
                  Custom Training for Teams
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
