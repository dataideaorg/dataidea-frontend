'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuthStatus, getBackendUrl, User } from '@/app/lib/auth';
import { Certificate, Enrollment } from '@/app/lib/types';
import { Navbar } from '../components/Navbar';

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const currentUser = await checkAuthStatus();
      if (!currentUser) {
        router.push('/');
        return;
      }
      setUser(currentUser);
      fetchData();
    };

    init();
  }, [router]);

  const fetchData = async () => {
    try {
      // No need to manually get access token - it's sent automatically as HTTP-only cookie
      const [enrollmentsRes, certificatesRes] = await Promise.all([
        fetch(`${getBackendUrl()}/school/enrollments/my_enrollments/`, {
          credentials: 'include', // Include authentication cookies
        }),
        fetch(`${getBackendUrl()}/school/certificates/my_certificates/`, {
          credentials: 'include', // Include authentication cookies
        }),
      ]);

      if (enrollmentsRes.ok) {
        const enrollmentsData = await enrollmentsRes.json();
        setEnrollments(Array.isArray(enrollmentsData) ? enrollmentsData : []);
      } else {
        console.error('Failed to fetch enrollments:', enrollmentsRes.status);
        setEnrollments([]);
      }

      if (certificatesRes.ok) {
        const certificatesData = await certificatesRes.json();
        setCertificates(Array.isArray(certificatesData) ? certificatesData : []);
      } else {
        console.error('Failed to fetch certificates:', certificatesRes.status);
        setCertificates([]);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setEnrollments([]);
      setCertificates([]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'enrolled':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'in_progress':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'completed':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'dropped':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const handleCopyCertificateId = (certificateNumber: string) => {
    navigator.clipboard.writeText(certificateNumber);
    alert('Certificate ID copied to clipboard!');
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-ground text-type">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {/* Header Skeleton */}
          <div className="mb-8 animate-pulse">
            <div className="h-10 bg-panel rounded w-1/3 mb-2"></div>
            <div className="h-6 bg-panel rounded w-1/4"></div>
          </div>

          {/* Stats Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-ground border border-line rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-panel rounded w-2/3 mb-3"></div>
                <div className="h-8 bg-panel rounded w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Content Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-ground border border-line rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-panel rounded w-1/3 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-20 bg-panel rounded"></div>
                  <div className="h-20 bg-panel rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const completedCourses = enrollments.filter((e) => e.status === 'completed').length;
  const inProgressCourses = enrollments.filter((e) => e.status === 'in_progress').length;

  return (
    <div className="min-h-screen bg-ground text-type">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bright mb-2 font-serif">
            Welcome back, {user.name.split(' ')[0]}!
          </h1>
          <p className="text-support">Track your learning progress and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-ground border border-line rounded-lg p-6 hover:border-line transition-colors">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-mute">Total Enrollments</p>
              <svg className="w-5 h-5 text-support" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-bright">{enrollments.length}</p>
          </div>

          <div className="bg-ground border border-line rounded-lg p-6 hover:border-line transition-colors">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-mute">In Progress</p>
              <svg className="w-5 h-5 text-support" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-bright">{inProgressCourses}</p>
          </div>

          <div className="bg-ground border border-line rounded-lg p-6 hover:border-line transition-colors">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-mute">Completed</p>
              <svg className="w-5 h-5 text-support" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-bright">{completedCourses}</p>
          </div>

          <div className="bg-ground border border-line rounded-lg p-6 hover:border-line transition-colors">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-mute">Certificates</p>
              <svg className="w-5 h-5 text-support" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-bright">{certificates.length}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Enrollments */}
          <div className="bg-ground border border-line rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-bright font-serif">My Enrollments</h2>
              <button
                onClick={() => router.push('/enrollments')}
                className="text-sm text-support hover:text-bright transition-colors"
              >
                View All →
              </button>
            </div>

            {enrollments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-mute mb-4">No enrollments yet</p>
                <button
                  onClick={() => router.push('/#courses')}
                  className="px-4 py-2 bg-signal text-black font-semibold rounded-lg hover:bg-signal-press transition-colors"
                >
                  Browse Courses
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {enrollments.slice(0, 3).map((enrollment) => (
                  <div
                    key={enrollment.id}
                    className="bg-ground border border-line rounded-lg p-4 hover:border-line transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-bright">{enrollment.course.title}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          enrollment.status
                        )}`}
                      >
                        {enrollment.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-mute mb-2">{enrollment.course.duration}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {enrollment.course.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-panel border border-line rounded text-xs text-support"
                        >
                          {skill}
                        </span>
                      ))}
                      {enrollment.course.skills.length > 3 && (
                        <span className="px-2 py-0.5 text-xs text-mute">
                          +{enrollment.course.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* My Certificates */}
          <div className="bg-ground border border-line rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-bright font-serif">My Certificates</h2>
              <button
                onClick={() => router.push('/certificates')}
                className="text-sm text-support hover:text-bright transition-colors"
              >
                View All →
              </button>
            </div>

            {certificates.length === 0 ? (
              <div className="text-center py-8">
                <svg
                  className="w-12 h-12 text-mute mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <p className="text-mute">No certificates earned yet</p>
                <p className="text-sm text-mute mt-2">Complete a course to earn your first certificate!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {certificates.slice(0, 3).map((certificate) => (
                  <div
                    key={certificate.id}
                    className="bg-ground border border-line rounded-lg p-4 hover:border-line transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-bright mb-1">{certificate.course.title}</h3>
                        <div className="flex items-center space-x-2 text-xs text-mute">
                          <span>Certificate #</span>
                          <span className="font-mono text-support">{certificate.certificate_number}</span>
                          <button
                            onClick={() => handleCopyCertificateId(certificate.certificate_number)}
                            className="p-0.5 hover:bg-panel rounded transition-colors"
                            title="Copy Certificate ID"
                          >
                            <svg
                              className="w-3 h-3 text-support hover:text-bright"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => window.open(`/verify/${certificate.verification_code}`, '_blank')}
                        className="px-3 py-1.5 bg-signal text-black text-xs font-semibold rounded hover:bg-signal-press transition-colors"
                      >
                        View
                      </button>
                    </div>
                    <p className="text-xs text-mute">
                      Issued on {new Date(certificate.issued_date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-6 bg-ground border border-line rounded-lg p-6">
          <h2 className="text-xl font-bold text-bright mb-4 font-serif">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              {user.picture && (
                <img src={user.picture} alt={user.name} className="w-16 h-16 rounded-full" />
              )}
              <div>
                <p className="text-sm text-mute mb-1">Full Name</p>
                <p className="text-lg font-semibold text-bright">{user.name}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-mute mb-1">Email Address</p>
              <p className="text-lg font-medium text-type">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}