'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DocumentTextIcon, 
  ArrowDownTrayIcon, 
  BookOpenIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

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
  // Sample resources data - in a real app, this would come from an API
  const resourceCategories = [
    {
      title: "Research Papers & Publications",
      icon: <DocumentTextIcon className="h-8 w-8" />,
      description: "Access to published research papers and academic publications in statistics and data science.",
      resources: [
        {
          title: "Statistical Methods in East African Development",
          description: "A comprehensive study on statistical methodologies used in development research across East Africa.",
          type: "Research Paper",
          date: "2024",
          downloadUrl: "#"
        },
        {
          title: "Survey Methodology Best Practices",
          description: "Guidelines and best practices for conducting surveys in developing countries.",
          type: "Publication",
          date: "2024",
          downloadUrl: "#"
        },
        {
          title: "Data Quality Assessment Framework",
          description: "A framework for assessing data quality in statistical surveys and administrative data.",
          type: "Research Paper",
          date: "2023",
          downloadUrl: "#"
        }
      ]
    },
    {
      title: "Educational Materials",
      icon: <AcademicCapIcon className="h-8 w-8" />,
      description: "Learning materials, tutorials, and guides for statistical analysis and research methods.",
      resources: [
        {
          title: "Introduction to R for Statisticians",
          description: "A beginner-friendly guide to R programming for statistical analysis.",
          type: "Tutorial",
          date: "2024",
          downloadUrl: "#"
        },
        {
          title: "Python Data Science Handbook",
          description: "Comprehensive guide to data science using Python and its libraries.",
          type: "Handbook",
          date: "2024",
          downloadUrl: "#"
        },
        {
          title: "Statistical Inference Workbook",
          description: "Practice exercises and examples for statistical inference concepts.",
          type: "Workbook",
          date: "2023",
          downloadUrl: "#"
        }
      ]
    },
    {
      title: "Datasets & Examples",
      icon: <ChartBarIcon className="h-8 w-8" />,
      description: "Sample datasets and worked examples for practicing statistical analysis.",
      resources: [
        {
          title: "East African Economic Indicators Dataset",
          description: "Economic indicators data for East African countries from 2010-2023.",
          type: "Dataset",
          date: "2024",
          downloadUrl: "#"
        },
        {
          title: "Population Survey Sample Data",
          description: "Anonymized sample data from population surveys for practice analysis.",
          type: "Dataset",
          date: "2023",
          downloadUrl: "#"
        },
        {
          title: "Agricultural Statistics Examples",
          description: "Worked examples of statistical analysis in agricultural research.",
          type: "Examples",
          date: "2023",
          downloadUrl: "#"
        }
      ]
    },
    {
      title: "Software & Tools",
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      description: "Software tools, scripts, and utilities for statistical analysis.",
      resources: [
        {
          title: "EASI R Package for Survey Analysis",
          description: "Custom R package developed by EASI for survey data analysis.",
          type: "Software",
          date: "2024",
          downloadUrl: "#"
        },
        {
          title: "Statistical Analysis Templates",
          description: "Ready-to-use templates for common statistical analyses in R and Python.",
          type: "Templates",
          date: "2024",
          downloadUrl: "#"
        },
        {
          title: "Data Visualization Toolkit",
          description: "Collection of scripts and tools for creating effective statistical visualizations.",
          type: "Toolkit",
          date: "2023",
          downloadUrl: "#"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-easi-primary/90 to-easi-dark/80"></div>
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
          <motion.div 
            className="max-w-3xl text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Resources
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 text-white/90"
              variants={fadeInUp}
            >
              Access our collection of statistical resources, research papers, educational materials, and datasets to enhance your statistical knowledge and skills.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Available Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download educational materials, research papers, and datasets to enhance your statistical knowledge
            </p>
          </motion.div>

          {/* Resource Categories */}
          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-easi-primary/10 mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-easi-dark">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resourceIndex}
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                        <div className="p-6 flex-grow">
                          <div className="flex items-start mb-4">
                            <div className="p-2 rounded-full bg-easi-primary/10 mr-4">
                              <DocumentTextIcon className="h-6 w-6 text-easi-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="text-xs">
                                  {resource.type}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {resource.date}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4 text-sm">
                            {resource.description}
                          </p>
                        </div>
                        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                          <Link 
                            href="#"
                            className="text-easi-primary hover:text-easi-primaryHover font-medium text-sm"
                          >
                            View Details
                          </Link>
                          <Button
                            size="sm"
                            className="bg-easi-primary hover:bg-easi-primaryHover text-white"
                            onClick={() => {
                              // In a real app, this would trigger the download
                              alert('Download functionality will be available soon');
                            }}
                          >
                            <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <BookOpenIcon className="h-16 w-16 text-easi-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Need Something Specific?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              If you&apos;re looking for specific resources or have suggestions for materials you&apos;d like to see in our library, 
              don&apos;t hesitate to reach out to us.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-easi-primary hover:bg-easi-primaryHover px-8 py-4"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
