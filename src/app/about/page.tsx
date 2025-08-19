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
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-easi-dark/90 to-easi-primary/80"></div>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="text-white">EASI</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The East African Statistics Institute (EASI) was established to provide primarily a complementary role of research in appropriate statistical and computational methodology that facilitate production and sustenance of quality national statistics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-easi-primary h-full">
                <h2 className="text-3xl font-bold mb-4 text-easi-dark">Our Mission</h2>
                <p className="text-gray-600">
                  To provide high-quality research in statistical methodology and computational techniques that enhance the production and sustainability of quality national statistics across East Africa.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over the years, EASI has made significant contributions to statistical development across East Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "1000+", label: "Professionals Trained" },
              { number: "50+", label: "Research Projects" },
              { number: "10+", label: "Partner Countries" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team consists of experienced statisticians and researchers dedicated to advancing statistical excellence across East Africa.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-0 flex flex-col h-full">
                    <div className="relative bg-gradient-to-br from-easi-primary/10 to-easi-secondary/10 p-8">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        {member.icon}
                      </div>
                      <Badge className="absolute top-4 right-4 bg-easi-primary text-white">
                        Leadership
                      </Badge>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-easi-primary font-medium mb-4">{member.title}</p>
                      <p className="text-gray-600 mb-4 text-sm">{member.shortBio}</p>
                      <div className="flex items-center mb-4">
                        <AcademicCapIcon className="h-5 w-5 text-gray-500 mr-2" />
                        <p className="text-sm text-gray-500">{member.education}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          alert('Full biography coming soon');
                        }}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our work and relationships with partners and clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* CTA Section */}
      <section className="bg-easi-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Join Us in Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Partner with EASI to advance statistical excellence and contribute to evidence-based decision making across East Africa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-easi-primary hover:bg-easi-primaryHover px-8 py-4"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
