'use client';

import { useEffect, useState } from 'react';
import { getBackendUrl } from '@/app/lib/auth';
import { Certificate } from '@/app/lib/types';

export default function CertificatesManagement() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) return;

      const response = await fetch(`${getBackendUrl()}/school/certificates/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      console.error('Failed to fetch certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyVerificationLink = (verificationCode: string) => {
    const link = `${window.location.origin}/verify/${verificationCode}`;
    navigator.clipboard.writeText(link);
    alert('Verification link copied to clipboard!');
  };

  const filteredCertificates = certificates.filter((cert) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      cert.user.name.toLowerCase().includes(searchLower) ||
      cert.user.email.toLowerCase().includes(searchLower) ||
      cert.course.title.toLowerCase().includes(searchLower) ||
      cert.certificate_number.toLowerCase().includes(searchLower)
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#bbb]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 font-serif">Certificates Management</h1>
        <p className="text-[#bbb]">View and manage issued certificates</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by student name, email, course, or certificate number..."
            className="w-full px-4 py-3 pl-12 bg-[#111111] border border-[#333333] rounded-lg focus:outline-none focus:border-[#555]"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#111111] border border-[#333333] rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Total Certificates</p>
          <p className="text-2xl font-bold text-white">{certificates.length}</p>
        </div>
        <div className="bg-[#111111] border border-[#333333] rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">This Month</p>
          <p className="text-2xl font-bold text-white">
            {
              certificates.filter((cert) => {
                const issuedDate = new Date(cert.issued_date);
                const now = new Date();
                return (
                  issuedDate.getMonth() === now.getMonth() &&
                  issuedDate.getFullYear() === now.getFullYear()
                );
              }).length
            }
          </p>
        </div>
        <div className="bg-[#111111] border border-[#333333] rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Unique Students</p>
          <p className="text-2xl font-bold text-white">
            {new Set(certificates.map((cert) => cert.user.id)).size}
          </p>
        </div>
      </div>

      {/* Certificates Table */}
      <div className="bg-[#111111] border border-[#333333] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a1a1a] border-b border-[#333333]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Certificate #
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Student</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Course</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Issued Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Issued By
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333333]">
              {filteredCertificates.map((certificate) => (
                <tr key={certificate.id} className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-sm font-medium text-[#bbb]">
                        {certificate.certificate_number}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {certificate.user.picture && (
                        <img
                          src={certificate.user.picture}
                          alt={certificate.user.name}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div>
                        <p className="font-medium">{certificate.user.name}</p>
                        <p className="text-sm text-gray-400">{certificate.user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium">{certificate.course.title}</p>
                    <p className="text-sm text-gray-400">{certificate.course.duration}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {new Date(certificate.issued_date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">
                    {certificate.issued_by_name || 'System'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleCopyVerificationLink(certificate.verification_code)}
                        className="px-3 py-1.5 bg-white text-[#1a1a1a] hover:bg-[#e5e5e5] rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1"
                        title="Copy verification link"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                          />
                        </svg>
                        <span>Copy Link</span>
                      </button>
                      <a
                        href={`/verify/${certificate.verification_code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-[#1a1a1a] border border-[#333333] hover:border-[#555] rounded-lg text-sm transition-colors flex items-center space-x-1"
                        title="View certificate"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span>View</span>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            {searchTerm ? 'No certificates found matching your search' : 'No certificates issued yet'}
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-[#222] border border-[#333] rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <svg
            className="w-5 h-5 text-[#bbb] mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-semibold text-white mb-1">About Certificate Verification</p>
            <p className="text-sm text-[#bbb]">
              Certificates are automatically generated when an enrollment is marked as completed.
              Each certificate has a unique verification code and can be publicly verified using the
              verification link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}