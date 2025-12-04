'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuthStatus, getBackendUrl, User } from '@/app/lib/auth';
import { Certificate } from '@/app/lib/types';
import { Navbar } from '../components/Navbar';

export default function MyCertificates() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
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
      fetchCertificates();
    };

    init();
  }, [router]);

  const fetchCertificates = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) return;

      const response = await fetch(`${getBackendUrl()}/school/certificates/my_certificates/`, {
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

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#e5e5e5]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">My Certificates</h1>
          <p className="text-gray-400">View and share your earned certificates</p>
        </div>

        {certificates.length === 0 ? (
          <div className="bg-[#111111] border border-[#333333] rounded-lg p-12 text-center">
            <svg
              className="w-16 h-16 text-gray-600 mx-auto mb-4"
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
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No certificates yet</h3>
            <p className="text-gray-400 mb-6">
              Complete a course to earn your first certificate!
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-[#111111] border border-[#333333] rounded-lg overflow-hidden hover:border-yellow-400 transition-colors"
              >
                {/* Certificate Header with decorative background */}
                <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-b border-[#333333] p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Certificate of Completion</p>
                      <h3 className="text-xl font-bold text-yellow-400">
                        {certificate.course.title}
                      </h3>
                    </div>
                    <svg
                      className="w-12 h-12 text-yellow-400"
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
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>Certificate #</span>
                    <span className="font-mono text-yellow-400 font-medium">
                      {certificate.certificate_number}
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Awarded to</p>
                      <p className="text-lg font-semibold">{user.name}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">Issued on</p>
                      <p className="font-medium">
                        {new Date(certificate.issued_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>

                    {certificate.issued_by_name && (
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Issued by</p>
                        <p className="font-medium">{certificate.issued_by_name}</p>
                      </div>
                    )}

                    <div>
                      <p className="text-sm text-gray-400 mb-2">Skills earned</p>
                      <div className="flex flex-wrap gap-2">
                        {certificate.course.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#1a1a1a] border border-[#333333] rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => window.open(`/verify/${certificate.verification_code}`, '_blank')}
                      className="flex-1 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2"
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
                      <span>View Certificate</span>
                    </button>
                    <button
                      onClick={() => handleCopyVerificationLink(certificate.verification_code)}
                      className="px-4 py-2 bg-[#1a1a1a] border border-[#333333] hover:border-yellow-400 rounded-lg transition-colors flex items-center justify-center"
                      title="Copy verification link"
                    >
                      <svg
                        className="w-5 h-5"
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
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}