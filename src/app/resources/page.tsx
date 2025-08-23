'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowDownTrayIcon, 
  BookOpenIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  PlayCircleIcon,
  LightBulbIcon,
  SparklesIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UsersIcon,
  RocketLaunchIcon,
  TrophyIcon,
  MagnifyingGlassIcon
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

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: <SparklesIcon className="w-5 h-5" /> },
    { id: 'tutorials', name: 'Tutorials', icon: <PlayCircleIcon className="w-5 h-5" /> },
    { id: 'guides', name: 'Guides', icon: <BookOpenIcon className="w-5 h-5" /> },
    { id: 'templates', name: 'Templates', icon: <CodeBracketIcon className="w-5 h-5" /> },
    { id: 'tools', name: 'Tools', icon: <ComputerDesktopIcon className="w-5 h-5" /> }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Complete Python for Data Science Course",
      description: "Our most comprehensive free course covering everything from Python basics to machine learning.",
      category: "tutorials",
      type: "Free Course",
      duration: "40 hours",
      level: "Beginner to Advanced",
      downloads: 2450,
      rating: 4.9,
      featured: true,
      image: "/api/placeholder/400/240",
      link: "https://python.dataidea.ac.ug",
      author: "DATAIDEA Team",
      tags: ["Python", "Data Science", "Machine Learning", "Free"]
    },
    {
      id: 2,
      title: "React Development Handbook",
      description: "Comprehensive guide to building modern web applications with React and Next.js.",
      category: "guides",
      type: "Handbook",
      duration: "6 hours read",
      level: "Intermediate",
      downloads: 1820,
      rating: 4.8,
      featured: true,
      image: "/api/placeholder/400/240",
      link: "#",
      author: "James Okello",
      tags: ["React", "Web Development", "JavaScript", "Frontend"]
    },
    {
      id: 3,
      title: "Project Management Templates",
      description: "Ready-to-use templates for project planning, tracking, and reporting.",
      category: "templates",
      type: "Template Pack",
      duration: "Instant download",
      level: "All Levels",
      downloads: 3200,
      rating: 4.7,
      featured: false,
      image: "/api/placeholder/400/240",
      link: "#",
      author: "Abraham Owino",
      tags: ["Project Management", "Templates", "Planning", "Excel"]
    }
  ];

  const allResources = [
    ...featuredResources,
    {
      id: 4,
      title: "Data Analysis with Pandas Masterclass",
      description: "Deep dive into pandas for data manipulation and analysis.",
      category: "tutorials",
      type: "Video Tutorial",
      duration: "8 hours",
      level: "Intermediate",
      downloads: 1650,
      rating: 4.8,
      featured: false,
      image: "/api/placeholder/400/240",
      link: "#",
      author: "DATAIDEA Team",
      tags: ["Python", "Pandas", "Data Analysis"]
    },
    {
      id: 5,
      title: "Machine Learning Algorithms Guide",
      description: "Comprehensive guide covering all major ML algorithms with examples.",
      category: "guides",
      type: "PDF Guide",
      duration: "3 hours read",
      level: "Advanced",
      downloads: 2100,
      rating: 4.9,
      featured: false,
      image: "/api/placeholder/400/240",
      link: "#",
      author: "Prof. Ronald Wesonga",
      tags: ["Machine Learning", "Algorithms", "Theory"]
    },
    {
      id: 6,
      title: "Django REST API Starter Kit",
      description: "Complete starter template for building REST APIs with Django.",
      category: "templates",
      type: "Code Template",
      duration: "Setup in 30 mins",
      level: "Intermediate",
      downloads: 980,
      rating: 4.6,
      featured: false,
      image: "/api/placeholder/400/240",
      link: "#",
      author: "DATAIDEA Team",
      tags: ["Django", "API", "Backend", "Python"]
    },
    {
      id: 7,
      title: "Data Visualization Toolkit",
      description: "Collection of reusable chart components and visualization scripts.",
      category: "tools",
      type: "Tool Kit",
      duration: "Ready to use",
      level: "All Levels",
      downloads: 1450,
      rating: 4.7,
      featured: false,
      image: "/api/placeholder/400/240",
      link: "#",
      author: "DATAIDEA Team",
      tags: ["Visualization", "Charts", "Tools", "Python"]
    },
    {
      id: 8,
      title: "SQL for Data Science Cheat Sheet",
      description: "Quick reference guide for essential SQL queries in data science.",
      category: "guides",
      type: "Cheat Sheet",
      duration: "1 hour read",
      level: "Beginner",
      downloads: 5200,
      rating: 4.8,
      featured: false,
      image: "/api/placeholder/400/240",
      link: "#",
      author: "DATAIDEA Team",
      tags: ["SQL", "Database", "Reference", "Quick Guide"]
    }
  ];

  const filteredResources = allResources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: "Free Resources", value: "50+", icon: <LightBulbIcon className="w-6 h-6" /> },
    { label: "Downloads", value: "25K+", icon: <ArrowDownTrayIcon className="w-6 h-6" /> },
    { label: "Happy Learners", value: "5K+", icon: <UsersIcon className="w-6 h-6" /> },
    { label: "Expert Authors", value: "15+", icon: <TrophyIcon className="w-6 h-6" /> }
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

        <div className="container mx-auto px-6 md:px-12 py-20 lg:py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Free Learning Resources
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Learn Tech Skills 
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  For Free
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
              >
                Access our comprehensive library of <strong>free tutorials, guides, templates, and tools</strong> to 
                accelerate your learning journey.
                <span className="block mt-2 text-lg">
                  Created by industry experts, used by thousands of learners worldwide.
                </span>
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <div className="text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg"
                  className="bg-white text-[#008374] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Browse All Resources
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <Link href="https://python.dataidea.ac.ug" target="_blank" className="flex items-center">
                    <PlayCircleIcon className="w-5 h-5 mr-2" />
                    Start Free Course
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
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
                placeholder="Search resources..."
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

      {/* Featured Resources */}
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
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and comprehensive learning materials, trusted by thousands of students
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredResources.slice(0, 3).map((resource, index) => (
              <motion.div
                key={resource.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {resource.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 shadow-lg">
                      <TrophyIcon className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-0 shadow-lg">
                  {/* Resource Image */}
                  <div className="relative h-48 bg-gradient-to-br from-[#008374] to-[#006A5C] overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                          <PlayCircleIcon className="w-8 h-8" />
                        </div>
                        <div className="text-sm font-medium opacity-90">{resource.type}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {resource.duration}
                        </div>
                        <div className="flex items-center">
                          <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                          {resource.downloads.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-amber-400 fill-current mr-1" />
                        <span className="font-medium">{resource.rating}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {resource.tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-[#008374]/10 text-[#008374] text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {resource.tags.length > 3 && (
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                            +{resource.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Author and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        by {resource.author}
                      </div>
                      <Button 
                        asChild
                        className="bg-[#008374] hover:bg-[#006A5C] text-white"
                      >
                        <Link 
                          href={resource.link} 
                          target={resource.link.startsWith('http') ? '_blank' : '_self'}
                          className="flex items-center"
                        >
                          {resource.link.startsWith('http') ? 'Access' : 'Download'}
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources Grid */}
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
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#008374]/10 rounded-lg flex items-center justify-center mr-3">
                        <PlayCircleIcon className="w-5 h-5 text-[#008374]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-gray-900 line-clamp-2">{resource.title}</h3>
                        <p className="text-xs text-[#008374]">{resource.type}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{resource.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        {resource.duration}
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="w-3 h-3 text-amber-400 fill-current mr-1" />
                        {resource.rating}
                      </div>
                    </div>

                    <Button 
                      asChild
                      size="sm"
                      className="w-full bg-[#008374] hover:bg-[#006A5C] text-white text-xs"
                    >
                      <Link 
                        href={resource.link}
                        target={resource.link.startsWith('http') ? '_blank' : '_self'}
                      >
                        {resource.link.startsWith('http') ? 'Access' : 'Download'}
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
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
              Join thousands of learners who&apos;ve already transformed their careers with our free resources. 
              <strong className="text-white"> Start your journey today.</strong>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={fadeInUp}
            >
              <Button 
                asChild
                size="lg"
                className="bg-[#008374] hover:bg-[#006A5C] text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#008374]/50 transition-all duration-300"
              >
                <Link href="https://python.dataidea.ac.ug" target="_blank">Start Free Course</Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 text-lg transition-all duration-300"
              >
                <Link href="/contact">
                  Request Custom Resource
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
