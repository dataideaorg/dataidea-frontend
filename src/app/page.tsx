'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  AcademicCapIcon, 
  CodeBracketIcon,
  UserGroupIcon, 
  BuildingOfficeIcon,
  CheckCircleIcon,
  StarIcon,
  PlayCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  RocketLaunchIcon
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

export default function Home() {
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
          {/* Grid of plus signs */}
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

        <div className="container mx-auto px-6 md:px-12 py-5 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                  <StarIcon className="w-4 h-4 mr-2" />
                  Trusted by 1000+ Professionals
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Master Tech Skills
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  That Pay
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl"
              >
                Learn <strong>Programming for Data Science</strong>, <strong>Web Development</strong>, 
                and <strong>Project Management</strong> from industry experts. 
                <span className="block mt-2 text-lg">
                  Start earning more in 12 weeks or less.
                </span>
              </motion.p>

              {/* Key Benefits */}
              <motion.div variants={fadeInUp} className="mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {[
                    "Live Online Classes",
                    "Industry Projects", 
                    "Job Placement Support",
                    "Lifetime Access"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-3 text-white flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
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
                  <Link href="/courses" className="flex items-center">
                    Start Learning Today
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <Link href="#demo" className="flex items-center">
                    <PlayCircleIcon className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#008374] rounded-full flex items-center justify-center mx-auto mb-4">
                    <RocketLaunchIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Journey</h3>
                  <p className="text-gray-600">Choose your path to success</p>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Data Science", students: "500+", icon: ChartBarIcon },
                    { name: "Web Development", students: "300+", icon: CodeBracketIcon },
                    { name: "Project Management", students: "200+", icon: UserGroupIcon }
                  ].map((course, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-[#008374]/5 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <course.icon className="w-6 h-6 text-[#008374] mr-4" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{course.name}</div>
                        <div className="text-sm text-gray-500">{course.students} students</div>
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button asChild className="w-full bg-[#008374] hover:bg-[#006A5C]">
                    <Link href="/courses">View All Courses</Link>
                  </Button>
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
                  <span className="text-sm font-medium text-gray-700">Live Classes</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why Choose DATAIDEA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just teach technology – we transform careers and build futures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <LightBulbIcon className="h-8 w-8" />,
                title: "Learn by Doing",
                description: "Work on real projects from day one. Build a portfolio that employers want to see.",
                stat: "100+ Projects"
              },
              {
                icon: <UserGroupIcon className="h-8 w-8" />,
                title: "Expert Mentorship", 
                description: "Get guidance from industry professionals who've built successful careers.",
                stat: "15+ Years Experience"
              },
              {
                icon: <RocketLaunchIcon className="h-8 w-8" />,
                title: "Career Support",
                description: "From resume building to interview prep, we help you land your dream job.",
                stat: "95% Job Placement"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#008374] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-2xl font-bold text-[#008374]">{feature.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Choose Your Career Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start with beginner-friendly courses and advance to expert level
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Programming for Data Science",
                description: "Master Python, machine learning, and data visualization to become a data scientist",
                features: ["Python Programming", "Data Analysis", "Machine Learning", "Deep Learning"],
                duration: "16 weeks",
                price: "From $299",
                popular: true,
                icon: <ChartBarIcon className="h-8 w-8" />,
                link: "/courses"
              },
              {
                title: "Web Development", 
                description: "Build modern websites and web applications using the latest technologies",
                features: ["JavaScript & React", "Backend with Django", "Database Design", "Deployment"],
                duration: "20 weeks", 
                price: "From $349",
                popular: false,
                icon: <CodeBracketIcon className="h-8 w-8" />,
                link: "/courses"
              },
              {
                title: "Project Management",
                description: "Learn to lead teams and deliver projects successfully in any industry",
                features: ["Agile & Scrum", "Risk Management", "Stakeholder Management", "Tools & Software"],
                duration: "12 weeks",
                price: "From $449", 
                popular: false,
                icon: <UserGroupIcon className="h-8 w-8" />,
                link: "/courses"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-[#008374] text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  course.popular ? 'border-2 border-[#008374] shadow-lg' : 'border border-gray-200'
                }`}>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#008374]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-[#008374]">{course.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{course.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{course.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">What you'll learn:</h4>
                    <div className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-5 h-5 text-[#008374] mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                      {course.price}
                    </div>
                  </div>

                  <Button 
                    asChild
                    className={`w-full ${
                      course.popular 
                        ? 'bg-[#008374] hover:bg-[#006A5C] text-white' 
                        : 'bg-gray-900 hover:bg-black text-white'
                    }`}
                  >
                    <Link href={course.link}>
                      Enroll Now
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <Button asChild size="lg" variant="outline" className="border-[#008374] text-[#008374] hover:bg-[#008374] hover:text-white">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our students have transformed their careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "DATAIDEA's Python course got me my dream job as a Data Scientist at a top tech company. The hands-on projects were incredibly valuable.",
                name: "Sarah Mukisa",
                title: "Data Scientist at Microsoft",
                image: "SM",
                rating: 5
              },
              {
                quote: "The web development program was exactly what I needed. I went from zero coding experience to building full-stack applications in 5 months.",
                name: "James Okello", 
                title: "Full-Stack Developer at Safaricom",
                image: "JO",
                rating: 5
              },
              {
                quote: "The project management course helped me get promoted to Team Lead. The skills I learned are applicable to any industry.",
                name: "Grace Namuli",
                title: "Project Manager at World Bank",
                image: "GN", 
                rating: 5
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
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#008374] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <Button asChild size="lg" className="bg-[#008374] hover:bg-[#006A5C]">
              <Link href="/contact">Start Your Success Story</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#008374] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                label: "Students Trained",
                icon: <UserGroupIcon className="h-8 w-8" />
              },
              {
                number: "95%",
                label: "Job Placement Rate",
                icon: <RocketLaunchIcon className="h-8 w-8" />
              },
              {
                number: "15+",
                label: "Years Experience",
                icon: <BuildingOfficeIcon className="h-8 w-8" />
              },
              {
                number: "$50K+",
                label: "Average Salary Increase",
                icon: <CurrencyDollarIcon className="h-8 w-8" />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our programs
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Do I need prior experience?",
                  answer: "No! Our courses are designed for beginners. We start with the basics and gradually build up to advanced concepts."
                },
                {
                  question: "How long are the courses?",
                  answer: "Our courses range from 12-20 weeks depending on the program. You can learn at your own pace with lifetime access to materials."
                },
                {
                  question: "Do you provide job placement support?",
                  answer: "Yes! We offer resume building, interview preparation, and connect you with our network of hiring partners."
                },
                {
                  question: "Are the classes live or recorded?",
                  answer: "We offer both live interactive sessions and recorded content so you can learn on your schedule."
                },
                {
                  question: "What if I can't keep up?",
                  answer: "We provide one-on-one mentorship and additional support to ensure every student succeeds."
                },
                {
                  question: "Do you offer payment plans?",
                  answer: "Yes, we offer flexible payment options to make our courses accessible to everyone."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-l-4 border-[#008374] hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button asChild variant="outline" size="lg" className="border-[#008374] text-[#008374] hover:bg-[#008374] hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join professionals from top companies and institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Kenya Bureau of Statistics" },
              { name: "Uganda Bureau of Statistics" },
              { name: "Tanzania National Bureau of Statistics" },
              { name: "Rwanda National Institute of Statistics" },
              { name: "African Development Bank" },
              { name: "World Bank" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center"
              >
                <div className="text-center p-4 rounded-lg hover:bg-white transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#008374]/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <BuildingOfficeIcon className="h-6 w-6 text-[#008374]" />
                  </div>
                  <p className="text-xs font-medium text-gray-600 leading-tight">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div 
            className="flex justify-center items-center gap-8 mt-16 flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="flex items-center text-gray-600">
              <ShieldCheckIcon className="w-6 h-6 text-[#008374] mr-2" />
              <span className="font-medium">Certified Training</span>
            </div>
            <div className="flex items-center text-gray-600">
              <GlobeAltIcon className="w-6 h-6 text-[#008374] mr-2" />
              <span className="font-medium">Global Recognition</span>
            </div>
            <div className="flex items-center text-gray-600">
              <UserGroupIcon className="w-6 h-6 text-[#008374] mr-2" />
              <span className="font-medium">Expert Instructors</span>
            </div>
          </motion.div>
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Your Future Starts
              <span className="block bg-gradient-to-r from-[#008374] to-[#00A08A] bg-clip-text text-transparent">
                Today
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Don't wait for the perfect moment. Start building the skills that will change your career and life. 
              <strong className="text-white"> Join 1000+ successful students who trusted DATAIDEA.</strong>
            </motion.p>

            <motion.div 
              className="mb-12"
              variants={fadeInUp}
            >
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">12 Weeks</div>
                  <div className="text-gray-400">To New Career</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">95%</div>
                  <div className="text-gray-400">Job Placement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#008374] mb-2">$50K+</div>
                  <div className="text-gray-400">Salary Increase</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              variants={fadeInUp}
            >
              <Button 
                asChild
                size="lg"
                className="bg-[#008374] hover:bg-[#006A5C] text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-[#008374]/50 transition-all duration-300"
              >
                <Link href="/courses" className="flex items-center">
                  Start Learning Now
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 text-lg transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  <PlayCircleIcon className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <p className="text-gray-400 mb-6">Follow us for daily tech tips and career advice</p>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://x.com/dataideaorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://youtube.com/@dataideaorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
