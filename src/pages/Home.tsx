import Python from "../assets/images/python_programming.jpg";
import DataAnalysis from "../assets/images/python_data_analysis.jpg";
import MachineLearning from "../assets/images/python_machine_learning.jpg";
import ProgrammingHard from "../assets/images/programming_hard.jpg";
import DotEnv from "../assets/images/dot-env.jpg";
import ReactThumb from "../assets/images/react-thumbnails.jpg";
import HeroImage from "../assets/images/hero-image.png";
import {
  FaChartLine,
  FaGlobe,
  FaExternalLinkAlt,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGraduationCap,
  FaLaptopCode
} from "react-icons/fa";


const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="font-default bg-gradient-to-br from-[#008374] to-[#006d61] min-h-[85vh] flex items-center relative overflow-hidden" id="hero">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Programming for Data Science</span>
                {/* <span className="block">Solutions</span> */}
              </h1>
              <p className="my-6 text-xl text-white/90 leading-relaxed">
                We provide comprehensive educational resources for Data Science and Web Development, 
                alongside powerful software solutions for individuals and organizations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#services" className="px-8 py-3 bg-white text-[#008374] rounded-md font-semibold hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Our Services
                </a>
                <a href="#courses" className="px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white/10 transition-all duration-300">
                  Browse Courses
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img 
                src={HeroImage} 
                alt="Programming and Data Science"
                className="w-[85%] h-auto animate-updown drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section id="services" className="py-12 font-default">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            {/* Education Services Card */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-[#008374]/10 rounded-full flex items-center justify-center mb-4">
                  <FaGraduationCap className="text-[#008374]" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Educational Services</h3>
                <p className="mt-3 text-gray-600">
                  Comprehensive courses designed to equip you with the skills to excel in data science and web development.
                </p>
              </div>
              <div className="flex justify-center">
                <a href="#courses" className="inline-block bg-[#008374] text-white rounded-lg px-6 py-3 hover:bg-[#019b89] transition-all duration-300">
                  Explore Courses
                </a>
              </div>
            </div>
            
            {/* Software Services Card */}
            <div className="bg-cyan-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-[#008374]/10 rounded-full flex items-center justify-center mb-4">
                  <FaLaptopCode className="text-[#008374]" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Software Solutions</h3>
                <p className="mt-3 text-gray-600">
                  Powerful software tools designed to enhance productivity, communication, and workflow efficiency.
                </p>
              </div>
              <div className="flex justify-center">
                <a href="#software" className="inline-block bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition-all duration-300">
                  Discover Software
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Services Section */}
      <section id="software" className="bg-cyan-50 px-4 py-10 font-default">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-6 text-center">
            Software Solutions
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Explore our range of software solutions designed to enhance your productivity and collaboration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#008374]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#008374]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">DATAIDEA MEET</h3>
                <p className="text-gray-600 mb-4">Our video conferencing platform for seamless online meetings and collaboration.</p>
                <a 
                  href="https://meet.dataidea.org" 
                  className="text-[#008374] hover:text-[#019b89] font-medium flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Meet
                  <span className="ml-2"><FaExternalLinkAlt size={12} /></span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#008374]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#008374]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">DATAIDEA COURSES</h3>
                <p className="text-gray-600 mb-4">Our comprehensive learning management system for courses and training (in development).</p>
                <a 
                  href="https://courses.dataidea.org" 
                  className="text-[#008374] hover:text-[#019b89] font-medium flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Courses
                  <span className="ml-2"><FaExternalLinkAlt size={12} /></span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#008374]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#008374]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">DATAIDEA LOGGER</h3>
                <p className="text-gray-600 mb-4">Our application logging system for monitoring and troubleshooting software.</p>
                <a 
                  href="https://logger.dataidea.org" 
                  className="text-[#008374] hover:text-[#019b89] font-medium flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Logger
                  <span className="ml-2"><FaExternalLinkAlt size={12} /></span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#008374]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#008374]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">DATAIDEA DOCS</h3>
                <p className="text-gray-600 mb-4">Our official documentation site with comprehensive guides and references.</p>
                <a 
                  href="https://docs.dataidea.org" 
                  className="text-[#008374] hover:text-[#019b89] font-medium flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Docs
                  <span className="ml-2"><FaExternalLinkAlt size={12} /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-cyan-50 px-4 py-10 font-default">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-6 text-center">
            Browse Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={Python} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  Start with the basics of Python, a versatile and powerful
                  programming language. This course lays the foundation for your
                  data science journey
                </div>

                <h3 className="text-[#008374] mb-2">Juma Shafara</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>4 Weeks
                    15 Seats
                  </div>
                  <a
                    href="https://science.dataidea.org/Python/00_python_programming_outline.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                    <span className="inline-block pl-3">
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={DataAnalysis} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  Explore data analysis using libraries like Pandas, NumPy, and
                  Matplotlib. Learn to transform raw data into actionable
                  insights
                </div>

                <h3 className="text-[#008374] mb-2">Juma Shafara</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>4 Weeks
                    10 seats
                  </div>
                  <a
                    href="https://science.dataidea.org/Python-Data-Analysis/python_data_analysis_outline.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                    <span className="inline-block pl-3">
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={MachineLearning} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  Discover the principles of machine learning and gain hands-on
                  experience in building and optimizing models
                </div>

                <h3 className="text-[#008374] mb-2">Juma Shafara</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>4 Weeks
                    10 seats
                  </div>
                  <a
                    href="https://science.dataidea.org/Python-Data-Analysis/Week4-ML-Intro/41_overview_of_machine_learning.html"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Get Started
                    <span className="inline-block pl-3">
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="https://science.dataidea.org"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Courses
        </a>
      </section>

      {/* Blog */}
      <section className="bg-gray-100 px-4 py-10 font-default">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-[#008374] mb-6 text-center">
            Latest on the Blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={ReactThumb} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  In this guide, we'll create a new React project with Vite,
                  TypeScript, Tailwind CSS, and add a basic navigation bar using
                  React components.
                </div>

                <h3 className="text-[#008374] mb-2">Nov 7, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafafa
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/react-naviagaion/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                    <span className="inline-block pl-3">
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={DotEnv} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  Environment variables are crucial in programming for storing
                  sensitive information
                </div>

                <h3 className="text-[#008374] mb-2">Oct 31, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafara
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/setting-up-dotenv/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                    <span className="inline-block pl-3">
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <img src={ProgrammingHard} alt="" className="rounded-xl" />
                </div>

                <div className="mb-5">
                  Why is programming so difficult to learn, and how can you make
                  the process smoother? Let's dive in.
                </div>

                <h3 className="text-[#008374] mb-2">Aug 12, 2024</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Juma Shafara
                  </div>
                  <a
                    href="https://jumashafara.dataidea.org/posts/2024/why-coding-is-hard/"
                    className="h-[36px] bg-[#008374] hover:bg-[#019b89] text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                    <span className="inline-block pl-3">
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="https://blog.dataidea.org"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Blogs
        </a>
      </section>

      <section className="bg-[#008374] text-white py-6">
        <div className="container-xl lg:container m-auto text-center">
          <p className="text-sm">
            © 2024 DataIdea. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://twitter.com/dataideaorg" className="hover:text-gray-300 flex items-center space-x-2">
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a href="https://youtube.com/@dataideascience" className="hover:text-gray-300 flex items-center space-x-2">
              <FaYoutube />
              <span>YouTube</span>
            </a>
            <a href="https://linkedin.com/company/dataideaorg" className="hover:text-gray-300 flex items-center space-x-2">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
