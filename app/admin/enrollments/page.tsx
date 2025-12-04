'use client';

import { useEffect, useState } from 'react';
import { getBackendUrl } from '@/app/lib/auth';
import { Enrollment, Course } from '@/app/lib/types';

export default function EnrollmentsManagement() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) return;

      const [enrollmentsRes, coursesRes] = await Promise.all([
        fetch(`${getBackendUrl()}/school/enrollments/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
        fetch(`${getBackendUrl()}/school/courses/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      ]);

      const enrollmentsData = await enrollmentsRes.json();
      const coursesData = await coursesRes.json();

      setEnrollments(enrollmentsData);
      setCourses(coursesData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkCompleted = async (enrollmentId: number) => {
    if (!confirm('Mark this enrollment as completed and generate a certificate?')) return;

    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await fetch(
        `${getBackendUrl()}/school/enrollments/${enrollmentId}/mark_completed/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        alert('Enrollment marked as completed and certificate generated!');
        fetchData();
      } else {
        const error = await response.json();
        alert(`Error: ${error.detail || 'Failed to mark as completed'}`);
      }
    } catch (error) {
      console.error('Failed to mark as completed:', error)
      alert('Failed to mark as completed');
    }
  };

  const handleIssueCertificate = async (enrollmentId: number) => {
    if (!confirm('Issue certificate for this completed enrollment?')) return;

    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await fetch(
        `${getBackendUrl()}/school/enrollments/${enrollmentId}/issue_certificate/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        alert('Certificate issued successfully!');
        fetchData();
      } else {
        const error = await response.json();
        alert(`Error: ${error.detail || 'Failed to issue certificate'}`);
      }
    } catch (error) {
      console.error('Failed to issue certificate:', error);
      alert('Failed to issue certificate');
    }
  };

  const handleCreateEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourseId || !userEmail) {
      alert('Please select a course and enter user email');
      return;
    }

    setSubmitting(true);
    try {
      const accessToken = localStorage.getItem('access_token');

      // First, fetch user by email
      const usersRes = await fetch(`${getBackendUrl()}/auth/users/?email=${userEmail}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!usersRes.ok) {
        alert('User not found with that email');
        setSubmitting(false);
        return;
      }

      const users = await usersRes.json();
      if (users.length === 0) {
        alert('User not found with that email');
        setSubmitting(false);
        return;
      }

      const userId = users[0].id;

      // Create enrollment
      const response = await fetch(`${getBackendUrl()}/school/admin/enrollments/create/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          course_id: selectedCourseId,
        }),
      });

      if (response.ok) {
        alert('Enrollment created successfully!');
        setShowCreateModal(false);
        setUserEmail('');
        setSelectedCourseId(null);
        fetchData();
      } else {
        const error = await response.json();
        alert(`Error: ${error.detail || 'Failed to create enrollment'}`);
      }
    } catch (error) {
      console.error('Failed to create enrollment:', error);
      alert('Failed to create enrollment');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredEnrollments = enrollments.filter((enrollment) => {
    if (filter === 'all') return true;
    return enrollment.status === filter;
  });

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#bbb]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 font-serif">Enrollments Management</h1>
          <p className="text-[#bbb]">Manage student enrollments and track progress</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 bg-white text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#e5e5e5] transition-colors"
        >
          + Create Enrollment
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'all'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-[#111111] border border-[#333333] hover:border-[#555]'
          }`}
        >
          All ({enrollments.length})
        </button>
        <button
          onClick={() => setFilter('enrolled')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'enrolled'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-[#111111] border border-[#333333] hover:border-[#555]'
          }`}
        >
          Enrolled ({enrollments.filter((e) => e.status === 'enrolled').length})
        </button>
        <button
          onClick={() => setFilter('in_progress')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'in_progress'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-[#111111] border border-[#333333] hover:border-[#555]'
          }`}
        >
          In Progress ({enrollments.filter((e) => e.status === 'in_progress').length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'completed'
              ? 'bg-white text-[#1a1a1a]'
              : 'bg-[#111111] border border-[#333333] hover:border-[#555]'
          }`}
        >
          Completed ({enrollments.filter((e) => e.status === 'completed').length})
        </button>
      </div>

      {/* Enrollments Table */}
      <div className="bg-[#111111] border border-[#333333] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a1a1a] border-b border-[#333333]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Student</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Course</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Enrolled Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333333]">
              {filteredEnrollments.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {enrollment.user.picture && (
                        <img
                          src={enrollment.user.picture}
                          alt={enrollment.user.name}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div>
                        <p className="font-medium">{enrollment.user.name}</p>
                        <p className="text-sm text-gray-400">{enrollment.user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium">{enrollment.course.title}</p>
                    <p className="text-sm text-gray-400">{enrollment.course.duration}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        enrollment.status
                      )}`}
                    >
                      {enrollment.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {new Date(enrollment.enrolled_date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {enrollment.status !== 'completed' ? (
                        <button
                          onClick={() => handleMarkCompleted(enrollment.id)}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm transition-colors"
                        >
                          Mark Completed
                        </button>
                      ) : (
                        <>
                          <span className="text-sm text-green-400 flex items-center">✓ Completed</span>
                          <button
                            onClick={() => handleIssueCertificate(enrollment.id)}
                            className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-sm transition-colors"
                          >
                            Issue Certificate
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEnrollments.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No enrollments found
          </div>
        )}
      </div>

      {/* Create Enrollment Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#111111] border border-[#333333] rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">Create Enrollment</h2>
            <form onSubmit={handleCreateEnrollment}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Student Email</label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-[#555]"
                  placeholder="student@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Course</label>
                <select
                  value={selectedCourseId || ''}
                  onChange={(e) => setSelectedCourseId(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-[#555]"
                  required
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setUserEmail('');
                    setSelectedCourseId(null);
                  }}
                  className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg hover:border-[#555] transition-colors"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-white text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#e5e5e5] transition-colors disabled:opacity-50"
                  disabled={submitting}
                >
                  {submitting ? 'Creating...' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}