'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChartBarIcon, 
  CodeBracketIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  TrophyIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  CogIcon,
  StarIcon
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

export default function Consultancy() {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Full-stack web applications tailored to your business needs, built with modern technologies like React, Node.js, and Python.",
      icon: <GlobeAltIcon className="h-8 w-8" />,
      features: ["Responsive Design", "Database Integration", "API Development", "Cloud Deployment"],
      price: "Starting from $2,500",
      timeline: "4-12 weeks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Intelligent systems that learn from your data to automate processes, predict outcomes, and drive insights.",
      icon: <CpuChipIcon className="h-8 w-8" />,
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation"],
      price: "Starting from $5,000",
      timeline: "6-16 weeks",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Platforms",
      description: "Complete online stores with payment processing, inventory management, and customer relationship tools.",
      icon: <ShoppingCartIcon className="h-8 w-8" />,
      features: ["Payment Integration", "Inventory Management", "Customer Analytics", "Mobile Optimization"],
      price: "Starting from $3,500",
      timeline: "6-10 weeks",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android that provide seamless user experiences.",
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      features: ["Cross-Platform", "Push Notifications", "Offline Support", "App Store Deployment"],
      price: "Starting from $4,000",
      timeline: "8-14 weeks",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Analytics Dashboards",
      description: "Interactive dashboards and reporting systems that transform your data into actionable business insights.",
      icon: <ChartBarIcon className="h-8 w-8" />,
      features: ["Real-time Analytics", "Custom Visualizations", "Automated Reports", "Multi-source Integration"],
      price: "Starting from $2,000",
      timeline: "3-8 weeks",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "API Development & Integration",
      description: "Robust APIs and third-party integrations to connect your systems and streamline operations.",
      icon: <CogIcon className="h-8 w-8" />,
      features: ["RESTful APIs", "Third-party Integrations", "Authentication", "Documentation"],
      price: "Starting from $1,500",
      timeline: "2-6 weeks",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const portfolio = [
    {
      title: "E-Learning Platform",
      description: "Comprehensive online learning management system with video streaming, assessments, and progress tracking.",
      client: "Educational Institution",
      technology: ["React", "Node.js", "MongoDB", "AWS"],
      results: "500+ active users, 40% increase in engagement",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Agricultural Data Analytics",
      description: "Machine learning system for crop yield prediction and farmer decision support using satellite imagery.",
      client: "NGO Organization",
      technology: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
      results: "85% prediction accuracy, 200+ farmers served",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Healthcare Management System",
      description: "Complete clinic management solution with patient records, appointment scheduling, and billing.",
      client: "Private Healthcare Clinic",
      technology: ["Django", "React", "MySQL", "Redis"],
      results: "50% reduction in admin time, improved patient flow",
      image: "/api/placeholder/600/400"
    }
  ];

  const testimonials = [
    {
      quote: "DATAIDEA delivered exactly what we needed. Their team understood our requirements and built a solution that transformed our business operations.",
      name: "Sarah Mukasa",
      title: "Operations Director",
      company: "TechCorp Uganda",
      rating: 5,
      project: "Custom Web Application"
    },
    {
      quote: "The AI solution they built for our agricultural project exceeded expectations. The prediction accuracy is remarkable and farmers love using it.",
      name: "James Okello",
      title: "Project Manager",
      company: "AgriTech Solutions",
      rating: 5,
      project: "Machine Learning Platform"
    },
    {
      quote: "Professional, timely, and cost-effective. DATAIDEA's e-commerce platform increased our online sales by 300% in the first quarter.",
      name: "Grace Namuli",
      title: "CEO",
      company: "Fashion Hub Kenya",
      rating: 5,
      project: "E-commerce Platform"
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Experienced developers with deep knowledge in modern technologies and best practices.",
      icon: <TrophyIcon className="h-8 w-8" />
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered 100+ projects across various industries in East Africa.",
      icon: <ShieldCheckIcon className="h-8 w-8" />
    },
    {
      title: "End-to-End Service",
      description: "From concept to deployment and maintenance, we handle every aspect of your project.",
      icon: <RocketLaunchIcon className="h-8 w-8" />
    },
    {
      title: "Local Understanding",
      description: "Deep understanding of the East African market and business environment.",
      icon: <BuildingOfficeIcon className="h-8 w-8" />
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
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Custom Software Solutions
                </Badge>
              </motion.div>

            <motion.h1 
              variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
                Build Your 
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Digital Future
                </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
                className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
              >
                From <strong>simple websites to complex AI applications</strong>, we transform your ideas into 
                powerful software solutions.
                <span className="block mt-2 text-lg">
                  Trusted by 100+ organizations across East Africa.
                </span>
            </motion.p>

              {/* Key Benefits */}
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                  {[
                    "Custom Development",
                    "AI Integration", 
                    "Mobile & Web Apps",
                    "E-commerce Solutions",
                    "Data Analytics",
                    "Ongoing Support"
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
                asChild
                size="lg"
                  className="bg-white text-[#008374] hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Service Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Service Cards */}
              <div className="space-y-4">
                <motion.div 
                  className="bg-white rounded-2xl shadow-2xl p-6 relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <GlobeAltIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Web Applications</h3>
                      <p className="text-[#008374] font-medium text-sm">Starting from $2,500</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Custom web solutions built with modern technologies</p>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-2xl shadow-2xl p-6 relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <CpuChipIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">AI Solutions</h3>
                      <p className="text-[#008374] font-medium text-sm">Starting from $5,000</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Intelligent systems powered by machine learning</p>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg p-3 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">100+</div>
                  <div className="text-xs">Projects</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg p-3 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">98%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Software Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs, from concept to deployment
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  <div className={`h-20 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      {service.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 text-gray-900">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-3 h-3 text-[#008374] mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing and Timeline */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center text-[#008374] font-semibold">
                        <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                        {service.price}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {service.timeline}
                      </div>
                    </div>

                    <Button 
                      asChild
                      className="w-full bg-[#008374] hover:bg-[#006A5C] text-white font-semibold"
                    >
                      <Link href="/contact" className="flex items-center justify-center">
                        Get Quote
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

      {/* Portfolio Section */}
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
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real solutions delivering measurable results for our clients across East Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-[#008374] to-[#006A5C] overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                          <CodeBracketIcon className="w-8 h-8" />
                        </div>
                        <div className="text-sm font-medium opacity-90">{project.client}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Technology Stack */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-xs text-gray-900 mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technology.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-[#008374]/10 text-[#008374] text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Results */}
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-1">
                        <TrophyIcon className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-semibold text-xs text-gray-900">Results</span>
                      </div>
                      <p className="text-gray-600 text-xs">{project.results}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by organizations across East Africa for delivering exceptional software solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#008374] to-[#00A08A] rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                        <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-600">{testimonial.title}</div>
                        <div className="text-xs text-[#008374] font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Project */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                      Project: {testimonial.project}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              We combine technical excellence with deep market understanding to deliver solutions that drive results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
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
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
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
              Ready to Build
              <span className="block bg-gradient-to-r from-[#008374] to-[#00A08A] bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Transform your ideas into powerful software solutions. Get a free consultation and 
              <strong className="text-white"> project quote within 24 hours.</strong>
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
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 text-lg transition-all duration-300"
              >
                View All Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
