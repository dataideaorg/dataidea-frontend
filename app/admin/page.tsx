'use client';

import { useEffect, useState } from 'react';
import { getBackendUrl } from '@/app/lib/auth';

interface DashboardStats {
  total_courses: number;
  active_courses: number;
  total_enrollments: number;
  completed_enrollments: number;
  total_certificates: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) return;

      // Fetch data from all endpoints
      const [coursesRes, enrollmentsRes, certificatesRes] = await Promise.all([
        fetch(`${getBackendUrl()}/school/courses/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
        fetch(`${getBackendUrl()}/school/enrollments/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
        fetch(`${getBackendUrl()}/school/certificates/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      ]);

      const courses = await coursesRes.json();
      const enrollments = await enrollmentsRes.json();
      const certificates = await certificatesRes.json();

      setStats({
        total_courses: courses.length,
        active_courses: courses.filter((c: any) => c.is_active).length,
        total_enrollments: enrollments.length,
        completed_enrollments: enrollments.filter((e: any) => e.status === 'completed').length,
        total_certificates: certificates.length,
      });
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Overview of your certificate management system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#111111] border border-[#333333] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Courses</p>
              <p className="text-3xl font-bold text-white">{stats?.total_courses || 0}</p>
              <p className="text-sm text-green-400 mt-1">
                {stats?.active_courses || 0} active
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-[#333333] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Enrollments</p>
              <p className="text-3xl font-bold text-white">{stats?.total_enrollments || 0}</p>
              <p className="text-sm text-green-400 mt-1">
                {stats?.completed_enrollments || 0} completed
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-[#333333] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Certificates Issued</p>
              <p className="text-3xl font-bold text-white">{stats?.total_certificates || 0}</p>
              <p className="text-sm text-gray-500 mt-1">All time</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[#111111] border border-[#333333] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => window.location.href = '/admin/courses'}
            className="p-4 border border-[#333333] rounded-lg hover:border-yellow-400 transition-colors text-left"
          >
            <h3 className="font-semibold mb-1">Manage Courses</h3>
            <p className="text-sm text-gray-400">Add, edit, or remove courses</p>
          </button>

          <button
            onClick={() => window.location.href = '/admin/enrollments'}
            className="p-4 border border-[#333333] rounded-lg hover:border-yellow-400 transition-colors text-left"
          >
            <h3 className="font-semibold mb-1">View Enrollments</h3>
            <p className="text-sm text-gray-400">Track student progress</p>
          </button>

          <button
            onClick={() => window.location.href = '/admin/certificates'}
            className="p-4 border border-[#333333] rounded-lg hover:border-yellow-400 transition-colors text-left"
          >
            <h3 className="font-semibold mb-1">Issue Certificates</h3>
            <p className="text-sm text-gray-400">Generate and manage certificates</p>
          </button>
        </div>
      </div>
    </div>
  );
}