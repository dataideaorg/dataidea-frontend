'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuthStatus, getBackendUrl, User } from '@/app/lib/auth';
import { Enrollment } from '@/app/lib/types';
import { Navbar } from '../components/Navbar';

export default function MyEnrollments() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const init = async () => {
      const currentUser = await checkAuthStatus();
      if (!currentUser) {
        router.push('/');
        return;
      }
      setUser(currentUser);
      fetchEnrollments();
    };

    init();
  }, [router]);

  const fetchEnrollments = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) return;

      const response = await fetch(`${getBackendUrl()}/school/enrollments/my_enrollments/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data = await response.json();
      setEnrollments(data);
    } catch (error) {
      console.error('Failed to fetch enrollments:', error);
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

  const filteredEnrollments = enrollments.filter((enrollment) => {
    if (filter === 'all') return true;
    return enrollment.status === filter;
  });

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#bbb]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#e5e5e5]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 font-serif">My Enrollments</h1>
          <p className="text-[#bbb]">Track your enrolled courses and learning progress</p>
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-white text-[#1a1a1a]'
                : 'bg-[#111] border border-[#333] hover:border-[#555]'
            }`}
          >
            All ({enrollments.length})
          </button>
          <button
            onClick={() => setFilter('enrolled')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'enrolled'
                ? 'bg-white text-[#1a1a1a]'
                : 'bg-[#111] border border-[#333] hover:border-[#555]'
            }`}
          >
            Enrolled ({enrollments.filter((e) => e.status === 'enrolled').length})
          </button>
          <button
            onClick={() => setFilter('in_progress')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'in_progress'
                ? 'bg-white text-[#1a1a1a]'
                : 'bg-[#111] border border-[#333] hover:border-[#555]'
            }`}
          >
            In Progress ({enrollments.filter((e) => e.status === 'in_progress').length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'completed'
                ? 'bg-white text-[#1a1a1a]'
                : 'bg-[#111] border border-[#333] hover:border-[#555]'
            }`}
          >
            Completed ({enrollments.filter((e) => e.status === 'completed').length})
          </button>
        </div>

        {filteredEnrollments.length === 0 ? (
          <div className="bg-[#111] border border-[#333] rounded-lg p-12 text-center">
            <svg
              className="w-16 h-16 text-[#555] mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">
              {filter === 'all' ? 'No enrollments yet' : `No ${filter.replace('_', ' ')} courses`}
            </h3>
            <p className="text-[#bbb] mb-6">
              {filter === 'all'
                ? 'Start your learning journey by enrolling in a course!'
                : 'Try changing the filter to see other courses'}
            </p>
            {filter === 'all' && (
              <button
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-white text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#e5e5e5] transition-colors"
              >
                Browse Courses
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEnrollments.map((enrollment) => (
              <div
                key={enrollment.id}
                className="bg-[#111] border border-[#333] rounded-lg overflow-hidden hover:border-[#555] transition-colors"
              >
                <div className="bg-gradient-to-r from-[#222] to-[#1a1a1a] border-b border-[#333] p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{enrollment.course.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        enrollment.status
                      )}`}
                    >
                      {enrollment.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-[#999]">{enrollment.course.duration}</p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-[#999] mb-2">Course Description</p>
                    <p className="text-sm text-[#e5e5e5]">{enrollment.course.description}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-[#999] mb-2">Skills you'll learn</p>
                    <div className="flex flex-wrap gap-2">
                      {enrollment.course.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#222] border border-[#333] rounded-full text-xs text-[#e5e5e5]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#999]">Enrolled on</span>
                      <span className="text-[#e5e5e5]">
                        {new Date(enrollment.enrolled_date).toLocaleDateString()}
                      </span>
                    </div>
                    {enrollment.completed_date && (
                      <div className="flex justify-between text-sm">
                        <span className="text-[#999]">Completed on</span>
                        <span className="text-green-400">
                          {new Date(enrollment.completed_date).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {enrollment.course.free_resources_link && (
                    <div className="mt-6">
                      <a
                        href={enrollment.course.free_resources_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-4 py-2 bg-white text-[#1a1a1a] text-center font-semibold rounded-lg hover:bg-[#e5e5e5] transition-colors"
                      >
                        Access Course Resources →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}