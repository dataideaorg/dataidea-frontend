'use client';

import { useEffect, useState } from 'react';
import { getBackendUrl } from '@/app/lib/auth';
import { Course } from '@/app/lib/types';

export default function CoursesManagement() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    level: 'beginner' as 'beginner' | 'intermediate' | 'advanced' | 'all',
    skills: '',
    free_resources_link: '',
    is_active: true,
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) return;

      const response = await fetch(`${getBackendUrl()}/school/courses/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const accessToken = localStorage.getItem('access_token');
      const skillsArray = formData.skills
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s);

      const payload = {
        ...formData,
        skills: skillsArray,
      };

      const url = editingCourse
        ? `${getBackendUrl()}/school/courses/${editingCourse.id}/`
        : `${getBackendUrl()}/school/courses/`;

      const method = editingCourse ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert(editingCourse ? 'Course updated successfully!' : 'Course created successfully!');
        resetForm();
        fetchCourses();
      } else {
        const error = await response.json();
        alert(`Error: ${JSON.stringify(error)}`);
      }
    } catch (error) {
      console.error('Failed to save course:', error);
      alert('Failed to save course');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      duration: course.duration,
      level: course.level,
      skills: course.skills.join(', '),
      free_resources_link: course.free_resources_link || '',
      is_active: course.is_active,
    });
    setShowCreateModal(true);
  };

  const handleDelete = async (courseId: number) => {
    if (!confirm('Are you sure you want to delete this course?')) return;

    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await fetch(`${getBackendUrl()}/school/courses/${courseId}/`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.ok) {
        alert('Course deleted successfully!');
        fetchCourses();
      } else {
        alert('Failed to delete course');
      }
    } catch (error) {
      console.error('Failed to delete course:', error);
      alert('Failed to delete course');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      duration: '',
      level: 'beginner',
      skills: '',
      free_resources_link: '',
      is_active: true,
    });
    setEditingCourse(null);
    setShowCreateModal(false);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'intermediate':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'advanced':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'all':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 mb-2">Courses Management</h1>
          <p className="text-gray-400">Create and manage your courses</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
        >
          + Create Course
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#111111] border border-[#333333] rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Total Courses</p>
          <p className="text-2xl font-bold text-white">{courses.length}</p>
        </div>
        <div className="bg-[#111111] border border-[#333333] rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Active Courses</p>
          <p className="text-2xl font-bold text-green-400">
            {courses.filter((c) => c.is_active).length}
          </p>
        </div>
        <div className="bg-[#111111] border border-[#333333] rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Inactive Courses</p>
          <p className="text-2xl font-bold text-gray-400">
            {courses.filter((c) => !c.is_active).length}
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#111111] border border-[#333333] rounded-lg p-6 hover:border-yellow-400 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                      course.level
                    )}`}
                  >
                    {course.level.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-400">{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    course.is_active ? 'bg-green-400' : 'bg-gray-600'
                  }`}
                ></div>
                <span className="text-xs text-gray-400">
                  {course.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{course.description}</p>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">Skills:</p>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[#1a1a1a] border border-[#333333] rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {course.free_resources_link && (
              <a
                href={course.free_resources_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 mb-4 block"
              >
                Free Resources →
              </a>
            )}

            <div className="flex space-x-2 pt-4 border-t border-[#333333]">
              <button
                onClick={() => handleEdit(course)}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <div className="bg-[#111111] border border-[#333333] rounded-lg p-12 text-center">
          <p className="text-gray-400 mb-4">No courses created yet</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Create Your First Course
          </button>
        </div>
      )}

      {/* Create/Edit Course Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111111] border border-[#333333] rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              {editingCourse ? 'Edit Course' : 'Create New Course'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Course Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-yellow-400 min-h-[100px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration *</label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="e.g., 8 weeks"
                      className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-yellow-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Level *</label>
                    <select
                      value={formData.level}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          level: e.target.value as 'beginner' | 'intermediate' | 'advanced' | 'all',
                        })
                      }
                      className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-yellow-400"
                      required
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="all">All Levels</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Skills (comma-separated) *
                  </label>
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="e.g., Python, Data Analysis, Machine Learning"
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Free Resources Link</label>
                  <input
                    type="url"
                    value={formData.free_resources_link}
                    onChange={(e) =>
                      setFormData({ ...formData, free_resources_link: e.target.value })
                    }
                    placeholder="https://..."
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="is_active" className="text-sm font-medium">
                    Active (visible to students)
                  </label>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg hover:border-yellow-400 transition-colors"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50"
                  disabled={submitting}
                >
                  {submitting ? 'Saving...' : editingCourse ? 'Update Course' : 'Create Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}