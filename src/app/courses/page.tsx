'use client';

import { useState } from 'react';
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
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  PlayCircleIcon,
  FireIcon,
  TrophyIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ShieldCheckIcon
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

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses', icon: <BoltIcon className="w-5 h-5" /> },
    { id: 'data-science', name: 'Data Science', icon: <ChartBarIcon className="w-5 h-5" /> },
    { id: 'web-dev', name: 'Web Development', icon: <CodeBracketIcon className="w-5 h-5" /> },
    { id: 'project-mgmt', name: 'Project Management', icon: <UserGroupIcon className="w-5 h-5" /> }
  ];

  const allCourses = [
    {
      id: 1,
      title: "Introduction to Programming with Python",
      subtitle: "Perfect for absolute beginners",
      description: "Master Python programming from scratch with hands-on projects and real-world applications.",
      category: "data-science",
          duration: "8 weeks",
      level: "Beginner",
      price: 0,
      originalPrice: 199,
      rating: 4.9,
      students: 1247,
      popular: true,
      featured: true,
          external: true,
          link: "https://python.dataidea.ac.ug",
      instructor: "Dr. John Mukasa",
      image: "/api/placeholder/400/240",
      features: [
        "Python Fundamentals & Syntax",
        "Data Structures & Algorithms", 
        "Object-Oriented Programming",
        "File Handling & Modules",
        "Hands-on Projects",
        "Certificate of Completion"
      ],
      outcomes: [
        "Build complete Python applications",
        "Understand programming fundamentals",
        "Prepare for advanced courses"
      ]
    },
    {
      id: 2,
      title: "Data Analysis with Python",
      subtitle: "Transform data into insights",
      description: "Learn to analyze and visualize data using Python's powerful libraries like Pandas and Matplotlib.",
      category: "data-science",
          duration: "6 weeks",
      level: "Intermediate",
      price: 299,
      rating: 4.8,
      students: 892,
      popular: false,
      featured: false,
          external: false,
      instructor: "Sarah Nakamya",
      image: "/api/placeholder/400/240",
      features: [
        "Advanced Pandas Techniques",
        "Statistical Analysis",
        "Data Visualization",
        "Real-world Datasets",
        "Industry Projects",
        "Portfolio Building"
      ],
      outcomes: [
        "Analyze complex datasets",
        "Create compelling visualizations", 
        "Make data-driven decisions"
      ]
    },
    {
      id: 3,
      title: "Machine Learning with Python + Scikit-learn",
      subtitle: "Build intelligent systems",
      description: "Deep dive into machine learning algorithms and build predictive models that solve real problems.",
      category: "data-science",
          duration: "10 weeks",
      level: "Intermediate",
      price: 499,
      rating: 4.9,
      students: 634,
      popular: true,
      featured: false,
      external: false,
      instructor: "Prof. Emmanuel Kwizera",
      image: "/api/placeholder/400/240",
      features: [
        "Supervised Learning Algorithms",
        "Unsupervised Learning",
        "Model Evaluation & Tuning",
        "Scikit-learn Mastery",
        "End-to-end ML Projects",
        "Industry Case Studies"
      ],
      outcomes: [
        "Build ML models from scratch",
        "Deploy models to production",
        "Land ML engineering roles"
      ]
    },
    {
      id: 4,
      title: "Deep Learning with Python + PyTorch",
      subtitle: "Master AI & Neural Networks",
      description: "Build advanced neural networks and work with cutting-edge AI technologies using PyTorch.",
      category: "data-science",
      duration: "12 weeks",
          level: "Advanced",
      price: 699,
      rating: 4.9,
      students: 423,
      popular: false,
      featured: true,
          external: false,
      instructor: "Dr. Grace Namuli",
      image: "/api/placeholder/400/240",
      features: [
        "Neural Network Architecture",
        "Computer Vision with CNNs",
        "Natural Language Processing",
        "PyTorch Framework",
        "GPU Programming",
        "Industry Mentorship"
      ],
      outcomes: [
        "Build sophisticated AI models",
        "Work with computer vision",
        "Develop NLP applications"
      ]
    },
    {
      id: 5,
      title: "JavaScript Fundamentals",
      subtitle: "The language of the web",
      description: "Master JavaScript from basics to advanced concepts and start your web development journey.",
      category: "web-dev",
          duration: "6 weeks",
          level: "Beginner",
      price: 249,
      rating: 4.7,
      students: 956,
      popular: false,
      featured: false,
          external: false,
      instructor: "James Okello",
      image: "/api/placeholder/400/240",
      features: [
        "ES6+ Modern JavaScript",
        "DOM Manipulation",
        "Asynchronous Programming",
        "API Integration",
        "Interactive Projects",
        "Browser DevTools"
      ],
      outcomes: [
        "Build interactive websites",
        "Understand modern JS concepts",
        "Ready for frameworks"
      ]
    },
    {
      id: 6,
      title: "Frontend Development with React",
      subtitle: "Build modern user interfaces",
      description: "Create stunning, responsive web applications using React, the most popular frontend framework.",
      category: "web-dev",
          duration: "8 weeks",
          level: "Intermediate",
      price: 399,
      rating: 4.8,
      students: 721,
      popular: true,
      featured: false,
          external: false,
      instructor: "Mary Tusiime",
      image: "/api/placeholder/400/240",
      features: [
        "React Components & Hooks",
        "State Management",
        "Responsive Design",
        "Modern CSS Techniques",
        "API Integration",
        "Production Deployment"
      ],
      outcomes: [
        "Build professional React apps",
        "Master component architecture",
        "Deploy to production"
      ]
    },
    {
      id: 7,
      title: "Backend Development with Django",
      subtitle: "Power your applications",
      description: "Build robust, scalable backend systems and APIs using Python's Django framework.",
      category: "web-dev",
      duration: "10 weeks",
          level: "Intermediate",
      price: 449,
      rating: 4.8,
      students: 567,
      popular: false,
      featured: false,
          external: false,
      instructor: "Ronald Wesonga",
      image: "/api/placeholder/400/240",
      features: [
        "Django Framework Mastery",
        "RESTful API Development",
        "Database Design",
        "Authentication & Security",
        "Cloud Deployment",
        "Performance Optimization"
      ],
      outcomes: [
        "Build scalable backends",
        "Create secure APIs",
        "Deploy to cloud platforms"
      ]
    },
    {
      id: 8,
      title: "Project Management Fundamentals",
      subtitle: "Lead teams to success",
      description: "Master project management methodologies and tools to deliver successful projects on time and budget.",
      category: "project-mgmt",
          duration: "8 weeks",
      level: "Beginner",
      price: 349,
      rating: 4.7,
      students: 445,
      popular: false,
      featured: false,
          external: false,
      instructor: "Abraham Owino",
      image: "/api/placeholder/400/240",
      features: [
        "Agile & Scrum Methodologies",
        "Risk Management",
        "Stakeholder Management",
        "Project Planning Tools",
        "Budget Management",
        "Leadership Skills"
      ],
      outcomes: [
        "Manage complex projects",
        "Lead cross-functional teams",
        "Deliver results on time"
      ]
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                  <TrophyIcon className="w-4 h-4 mr-2" />
                  Industry-Leading Curriculum
                </Badge>
              </motion.div>

            <motion.h1 
              variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
                Learn 
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Future-Ready Skills
                </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
                className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
            >
                Master <strong>in-demand technologies</strong> with our comprehensive courses designed by industry experts. 
                <span className="block mt-2 text-lg">
                  From beginner to expert, we've got you covered.
                </span>
            </motion.p>

              {/* Key Stats */}
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold">8+</div>
                    <div className="text-white/80 text-sm">Expert Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-white/80 text-sm">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.8★</div>
                    <div className="text-white/80 text-sm">Average Rating</div>
                  </div>
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
                  Browse All Courses
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <Link href="#demo" className="flex items-center">
                    <PlayCircleIcon className="w-5 h-5 mr-2" />
                    Watch Preview
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Course Preview Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid gap-4">
                {/* Featured Course Card */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-2xl p-6 relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-[#008374] text-white px-3 py-1">
                      <FireIcon className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                    <div className="flex items-center text-amber-500">
                      <StarIcon className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-gray-600 ml-1">4.9</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Python for Data Science</h3>
                  <p className="text-gray-600 text-sm mb-4">Perfect for absolute beginners</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#008374]">FREE</div>
                    <div className="text-sm text-gray-500">1,247 students</div>
                  </div>
                </motion.div>

                {/* Mini Course Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-8 h-8 bg-[#008374] rounded-lg flex items-center justify-center mb-3">
                      <CodeBracketIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Web Development</div>
                    <div className="text-xs text-gray-600">3 courses</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-8 h-8 bg-[#008374] rounded-lg flex items-center justify-center mb-3">
                      <UserGroupIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Project Management</div>
                    <div className="text-xs text-gray-600">1 course</div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live Support</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008374] focus:border-transparent outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-[#008374] text-white hover:bg-[#006A5C]'
                      : 'border-gray-200 text-gray-600 hover:border-[#008374] hover:text-[#008374]'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
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
              {selectedCategory === 'all' ? 'All Courses' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 shadow-lg">
                      <FireIcon className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                {/* Featured Badge */}
                {course.featured && (
                  <div className="absolute -top-3 -left-3 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 shadow-lg">
                      <TrophyIcon className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0 shadow-lg">
                  {/* Course Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#008374] to-[#006A5C] overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                          {course.category === 'data-science' && <ChartBarIcon className="w-8 h-8" />}
                          {course.category === 'web-dev' && <CodeBracketIcon className="w-8 h-8" />}
                          {course.category === 'project-mgmt' && <UserGroupIcon className="w-8 h-8" />}
                        </div>
                        <div className="text-sm font-medium opacity-90">{course.level}</div>
                      </div>
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <PlayCircleIcon className="w-8 h-8 text-[#008374]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{course.title}</h3>
                              {course.external && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 ml-2">
                                  External
                                </Badge>
                              )}
                            </div>
                      <p className="text-[#008374] font-medium text-sm mb-2">{course.subtitle}</p>
                      <p className="text-gray-600 text-sm line-clamp-2">{course.description}</p>
                    </div>

                    {/* Course Meta */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                                {course.duration}
                        </div>
                        <div className="flex items-center">
                          <UserGroupIcon className="w-4 h-4 mr-1" />
                          {course.students.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-amber-400 fill-current mr-1" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                            </div>
                            
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 text-gray-900">What you'll learn:</h4>
                      <div className="space-y-2">
                        {course.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-[#008374] mr-2 flex-shrink-0" />
                                    {feature}
                          </div>
                        ))}
                        {course.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{course.features.length - 3} more skills
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {course.price === 0 ? (
                          <span className="text-2xl font-bold text-[#008374]">FREE</span>
                        ) : (
                          <>
                            <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                            {course.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                            )}
                          </>
                        )}
                            </div>
                            
                            {course.external ? (
                        <Button
                          asChild
                          className="bg-[#008374] hover:bg-[#006A5C] text-white px-6"
                        >
                              <a 
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            className="flex items-center"
                              >
                            Start Now
                            <ArrowRightIcon className="w-4 h-4 ml-1" />
                          </a>
                                </Button>
                      ) : (
                        <Button
                          asChild
                          className="bg-[#008374] hover:bg-[#006A5C] text-white px-6"
                        >
                          <Link href="/contact" className="flex items-center">
                            Enroll Now
                            <ArrowRightIcon className="w-4 h-4 ml-1" />
                          </Link>
                              </Button>
                            )}
                    </div>
                          </div>
                        </Card>
                      </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="outline"
                className="border-[#008374] text-[#008374] hover:bg-[#008374] hover:text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Learning Path Visualization */}
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
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our structured paths to master the skills you need for your dream career
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Path",
                  description: "Select from Data Science, Web Development, or Project Management",
                  icon: <LightBulbIcon className="w-8 h-8" />,
                  color: "from-blue-500 to-purple-500"
                },
                {
                  step: "2", 
                  title: "Learn by Doing",
                  description: "Build real projects with hands-on exercises and industry mentorship",
                  icon: <RocketLaunchIcon className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "3",
                  title: "Launch Your Career",
                  description: "Get job placement support and join our alumni network",
                  icon: <TrophyIcon className="w-8 h-8" />,
                  color: "from-pink-500 to-red-500"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  {/* Connector Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-gray-900 mb-2">Step {step.step}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful graduates who transformed their careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The Python course changed my life! I went from complete beginner to landing a data scientist role at Microsoft in just 6 months.",
                name: "Sarah Mukisa",
                title: "Data Scientist at Microsoft",
                course: "Python for Data Science",
                rating: 5,
                image: "SM"
              },
              {
                quote: "Amazing curriculum and supportive instructors. The React course helped me build a portfolio that got me hired immediately.",
                name: "James Okello",
                title: "Frontend Developer at Safaricom",
                course: "React Development",
                rating: 5,
                image: "JO"
              },
              {
                quote: "The project management course gave me the skills to lead my team effectively. I got promoted within 3 months of completion!",
                name: "Grace Namuli",
                title: "Senior PM at World Bank",
                course: "Project Management",
                rating: 5,
                image: "GN"
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
                <Card className="p-6 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#008374] to-[#00A08A] rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.title}</div>
                        <div className="text-xs text-[#008374] font-medium">{testimonial.course}</div>
                      </div>
                  </div>
                </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DATAIDEA */}
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
              Why Choose DATAIDEA?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just an education platform - we're your career transformation partner
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheckIcon className="w-8 h-8" />,
                title: "Industry-Proven Curriculum",
                description: "Courses designed by industry experts and updated regularly to match current market demands."
              },
              {
                icon: <UserGroupIcon className="w-8 h-8" />,
                title: "Expert Instructors",
                description: "Learn from professionals with years of real-world experience in their respective fields."
              },
              {
                icon: <RocketLaunchIcon className="w-8 h-8" />,
                title: "Career Support",
                description: "Get job placement assistance, resume reviews, and interview preparation from our career team."
              },
              {
                icon: <GlobeAltIcon className="w-8 h-8" />,
                title: "Flexible Learning",
                description: "Study at your own pace with lifetime access to course materials and regular live sessions."
              },
              {
                icon: <TrophyIcon className="w-8 h-8" />,
                title: "Hands-on Projects",
                description: "Build a portfolio of real-world projects that demonstrate your skills to potential employers."
              },
              {
                icon: <ClockIcon className="w-8 h-8" />,
                title: "Continuous Support",
                description: "Access our community, mentorship programs, and ongoing support even after course completion."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-[#008374]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-[#008374]">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
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
              Ready to Transform
              <span className="block bg-gradient-to-r from-[#008374] to-[#00A08A] bg-clip-text text-transparent">
                Your Career?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Join thousands of successful students who've already transformed their careers with DATAIDEA. 
              <strong className="text-white"> Your future starts today.</strong>
            </motion.p>

            <motion.div 
              className="mb-12"
              variants={fadeInUp}
            >
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">5000+</div>
                  <div className="text-gray-400">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">95%</div>
                  <div className="text-gray-400">Job Placement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">4.8★</div>
                  <div className="text-gray-400">Student Rating</div>
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
                Start Learning Today
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 text-lg transition-all duration-300"
              >
                <Link href="/contact">
                  Talk to an Advisor
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
