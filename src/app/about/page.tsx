'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  AcademicCapIcon, 
  UserIcon, 
  BuildingLibraryIcon, 
  ChartBarIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  TrophyIcon,
  HeartIcon,
  GlobeAltIcon,
  UsersIcon,
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  BoltIcon,
  BeakerIcon,
  CogIcon,
  EyeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

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

export default function About() {
  const teamMembers = [
    {
      name: "Juma Shafara",
      title: "Co-Founder & Instructor",
      shortBio: "Juma is a Data Scientist with a passion for building scalable and efficient systems.",
      education: "BSc in Statistics, Makerere University Kampala",
      specialties: ["Software Development", "Data Science", "Project Management"],
      currentRole: "Data Scientist, Instructor",
      image: "/assets/images/juma.jpg",
      linkedin: "#",
      achievements: "Trained 100+ professionals"
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "DATAIDEA Founded",
      description: "Established as East Africa's premier statistical consulting and training institute",
      icon: <RocketLaunchIcon className="w-6 h-6" />
    },
    {
      year: "2012",
      title: "First 1000 Students",
      description: "Reached milestone of training 1000 professionals across East Africa",
      icon: <TrophyIcon className="w-6 h-6" />
    },
    {
      year: "2016",
      title: "Digital Transformation",
      description: "Launched online learning platform and expanded to web development training",
      icon: <BoltIcon className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "Tech Education Focus",
      description: "Pivoted to focus on Programming for Data Science, Web Development, and Project Management",
      icon: <BeakerIcon className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "AI & Innovation",
      description: "Integrated AI technologies and launched advanced software development services",
      icon: <SparklesIcon className="w-6 h-6" />
    }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in education, delivering world-class training that transforms careers.",
      icon: <TrophyIcon className="h-8 w-8" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to stay ahead of industry trends.",
      icon: <LightBulbIcon className="h-8 w-8" />,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical practices in all our relationships.",
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Impact",
      description: "We measure success by the positive transformation we create in individuals and organizations.",
      icon: <HeartIcon className="h-8 w-8" />,
      color: "from-pink-400 to-red-500"
    }
  ];

  const achievements = [
    {
      number: "5000+",
      label: "Students Trained",
      description: "Professionals across Africa",
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      number: "95%",
      label: "Job Placement Rate",
      description: "Within 6 months",
      icon: <TrophyIcon className="w-8 h-8" />
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Industry leadership",
      icon: <CalendarIcon className="w-8 h-8" />
    },
    {
      number: "50+",
      label: "Partner Organizations",
      description: "Across East Africa",
      icon: <BuildingLibraryIcon className="w-8 h-8" />
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
                  Transforming Lives Through Technology
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Empowering 
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Africa's Tech Future
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
              >
                Since 2009, DATAIDEA has been <strong>East Africa's premier institution</strong> for 
                technology education and software development.
                <span className="block mt-2 text-lg">
                  We've trained 5,000+ professionals and built 100+ software solutions.
                </span>
              </motion.p>

              {/* Key Stats */}
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-white/80 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5,000+</div>
                    <div className="text-white/80 text-sm">Graduates</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-white/80 text-sm">Success Rate</div>
                  </div>
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
                  <Link href="/courses">Explore Our Courses</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#008374] font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center">
                    <UsersIcon className="w-5 h-5 mr-2" />
                    Meet Our Team
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Mission/Vision Cards */}
              <div className="space-y-4">
                <motion.div 
                  className="bg-white rounded-2xl shadow-2xl p-6 relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <EyeIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To empower individuals and organizations with the skills in software development 
                    and data science needed to thrive in the digital economy.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-2xl shadow-2xl p-6 relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <RocketLaunchIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading center of excellence in technology education and 
                    software solutions in East Africa and beyond.
                  </p>
                </motion.div>
              </div>

              {/* Floating Achievements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg p-3 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">15+</div>
                  <div className="text-xs">Years</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg p-3 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">50+</div>
                  <div className="text-xs">Partners</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              15 years of innovation, growth, and impact across East Africa's technology landscape
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#008374] to-[#006A5C] rounded-full"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-2xl font-bold text-[#008374] mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </Card>
                    </div>
                    
                    {/* Timeline node */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 bg-[#008374] rounded-full flex items-center justify-center text-white shadow-lg">
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Our Impact by Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence and transformation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-8 h-full bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#008374]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-[#008374]">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-[#008374] mb-2">{achievement.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to empowering Africa's next generation of tech talent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
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
                  {/* Profile Image */}
                  <div className="relative h-64 bg-gradient-to-br from-[#008374] to-[#006A5C] overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    {/* Achievement Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        <TrophyIcon className="w-3 h-3 mr-1" />
                        Leader
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Name and Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#008374] font-medium text-sm mb-3">{member.title}</p>
                    
                    {/* Bio */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.shortBio}</p>
                    
                    {/* Education */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-xs text-gray-900 mb-1">Education</h4>
                      <p className="text-gray-600 text-xs">{member.education}</p>
                    </div>
                    
                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-xs text-gray-900 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-[#008374]/10 text-[#008374] text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-semibold text-xs text-gray-900">Key Achievements</span>
                      </div>
                      <p className="text-gray-600 text-xs">{member.achievements}</p>
                    </div>
                    
                    {/* Current Role */}
                    <div className="text-center">
                      <Badge className="bg-[#008374] text-white">
                        {member.currentRole}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture of excellence
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <Card className="p-8 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              Ready to Join
              <span className="block bg-gradient-to-r from-[#008374] to-[#00A08A] bg-clip-text text-transparent">
                Our Success Story?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Become part of DATAIDEA's mission to transform Africa through technology education. 
              <strong className="text-white"> Your journey to excellence starts here.</strong>
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
                <Link href="/courses">Start Learning Today</Link>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 text-lg transition-all duration-300"
              >
                <Link href="/contact">
                  Partner With Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
