'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  AcademicCapIcon, 
  UserIcon, 
  BuildingLibraryIcon, 
  ChartBarIcon
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

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Fabian Nabugoomu",
      title: "Chairman, Board of Directors",
      shortBio: "Associate Professor of Statistics and Applied Computing. Currently the Deputy Vice-Chancellor of Kyambogo University responsible for Finance and Administration.",
      education: "PhD in Statistics (1994) from the University of Edinburgh, Scotland",
      icon: <AcademicCapIcon className="h-6 w-6 text-easi-primary" />
    },
    {
      name: "Prof. Ronald Wesonga",
      title: "Founding Director",
      shortBio: "Statistician based at the Department of Statistics, Sultan Qaboos University. Formerly a visiting Professor at the Institute of Social Research, Makerere University.",
      education: "Studied at the Institute of Statistics and Applied Economics, Makerere University",
      icon: <UserIcon className="h-6 w-6 text-easi-primary" />
    },
    {
      name: "Dr. Abraham Owino Yeyo",
      title: "Director",
      shortBio: "Statistician involved in capacity building in Research, Monitoring and Evaluation and Community Development, currently lecturing at Makerere University.",
      education: "Lecturer at Makerere University School of Statistics and Planning",
      icon: <BuildingLibraryIcon className="h-6 w-6 text-easi-primary" />
    }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "We are committed to the highest standards of statistical methodology and research.",
      icon: <AcademicCapIcon className="h-12 w-12 text-easi-primary" />
    },
    {
      title: "Innovation",
      description: "We continuously seek new approaches to solve complex statistical challenges.",
      icon: <ChartBarIcon className="h-12 w-12 text-easi-primary" />
    },
    {
      title: "Integrity",
      description: "We uphold ethical standards and transparency in all our work and relationships.",
      icon: <UserIcon className="h-12 w-12 text-easi-primary" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnerships to achieve greater impact across the region.",
      icon: <BuildingLibraryIcon className="h-12 w-12 text-easi-primary" />
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
            className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-easi-primary/20 blur-3xl"
            animate={{ 
              x: [0, 50, 0],
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
          <motion.div 
            className="max-w-3xl mx-auto text-center text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-8"
              variants={fadeInUp}
            >
              About <span className="text-white">DATAIDEA</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              variants={fadeInUp}
            >
              DATAIDEA was established to provide primarily a complementary role of research in appropriate statistical and computational methodology that facilitate production and sustenance of quality national statistics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Card className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-easi-primary h-full">
                <h2 className="text-3xl font-bold mb-4 text-easi-dark">Our Mission</h2>
                <p className="text-gray-600">
                  To provide high-quality research in statistical methodology and computational techniques that enhance the production and sustainability of quality national statistics across East Africa.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Card className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-easi-primary h-full">
                <h2 className="text-3xl font-bold mb-4 text-easi-dark">Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading center of excellence in statistical research, methodology development, and capacity building in East Africa and beyond.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-center text-gray-600 mb-0 max-w-2xl mx-auto">
              Over the years, DATAIDEA has made significant contributions to statistical development across East Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Professionals Trained" },
              { number: "50+", label: "Research Projects" },
              { number: "10+", label: "Partner Countries" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-easi-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-center text-gray-600 mb-0 max-w-2xl mx-auto">
              These principles guide our work and relationships with partners and clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
