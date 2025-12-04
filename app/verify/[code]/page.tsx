'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getBackendUrl } from '@/app/lib/auth';
import { CertificateVerification } from '@/app/lib/types';
import { Navbar } from '@/app/components/Navbar';

export default function VerifyCertificate() {
  const params = useParams();
  const code = params.code as string;
  const [verification, setVerification] = useState<CertificateVerification | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (code) {
      verifyCertificate(code);
    }
  }, [code]);

  // Add print styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        @page {
          margin: 0;
          size: A4 portrait;
        }

        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }

        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const verifyCertificate = async (verificationCode: string) => {
    try {
      const response = await fetch(`${getBackendUrl()}/school/verify/${verificationCode}/`);
      const data = await response.json();

      if (response.ok) {
        setVerification(data);
      } else {
        setError(data.detail || 'Certificate verification failed');
      }
    } catch (err) {
      console.error('Verification error:', err);
      setError('Failed to verify certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-[#e5e5e5]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {/* Verification Badge Skeleton */}
          <div className="flex justify-center mb-8">
            <div className="h-14 w-48 bg-[#222] rounded-full animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Skeleton */}
            <div className="lg:col-span-3">
              <div className="bg-[#111] border border-[#333] rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-[#222] rounded w-3/4 mb-4"></div>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="h-3 bg-[#222] rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-[#222] rounded w-full"></div>
                  </div>
                  <div>
                    <div className="h-3 bg-[#222] rounded w-1/2 mb-2"></div>
                    <div className="h-16 bg-[#222] rounded w-full"></div>
                  </div>
                  <div>
                    <div className="h-3 bg-[#222] rounded w-1/2 mb-2"></div>
                    <div className="h-6 bg-[#222] rounded-full w-20"></div>
                  </div>
                  <div>
                    <div className="h-3 bg-[#222] rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-[#222] rounded w-2/3"></div>
                  </div>
                </div>
                <div className="border-t border-[#333] pt-6">
                  <div className="h-24 bg-[#222] rounded mb-4"></div>
                  <div className="h-12 bg-[#222] rounded"></div>
                </div>
              </div>
            </div>

            {/* Certificate Skeleton */}
            <div className="lg:col-span-9">
              <div className="bg-[#111] border-2 border-[#333] rounded-lg overflow-hidden animate-pulse">
                <div className="bg-[#222] p-8 border-b border-[#333]">
                  <div className="h-10 bg-[#333] rounded w-1/2 mx-auto mb-2"></div>
                  <div className="h-6 bg-[#333] rounded w-1/3 mx-auto"></div>
                </div>
                <div className="p-12 space-y-8">
                  <div className="text-center space-y-4">
                    <div className="h-4 bg-[#222] rounded w-1/4 mx-auto"></div>
                    <div className="h-8 bg-[#222] rounded w-1/2 mx-auto"></div>
                    <div className="h-4 bg-[#222] rounded w-1/3 mx-auto"></div>
                    <div className="h-7 bg-[#222] rounded w-2/3 mx-auto"></div>
                  </div>
                  <div className="border-t border-b border-[#333] py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i}>
                          <div className="h-3 bg-[#222] rounded w-1/2 mb-2"></div>
                          <div className="h-5 bg-[#222] rounded w-3/4"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-[#222] rounded w-full mx-auto"></div>
                    <div className="h-4 bg-[#222] rounded w-2/3 mx-auto"></div>
                  </div>
                </div>
                <div className="bg-[#222] p-4 border-t border-[#333]">
                  <div className="h-4 bg-[#333] rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#e5e5e5]">
      <div className="print:hidden">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 print:max-w-4xl print:pt-0 print:px-0">
        {error || !verification?.valid ? (
          // Invalid Certificate
          <div className="bg-[#111] border-2 border-[#333] rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[#999]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 font-serif">Certificate Not Valid</h1>
            <p className="text-[#bbb] mb-6">
              {error || verification?.detail || 'This certificate could not be verified.'}
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-white text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#e5e5e5] transition-colors"
            >
              Return to Home
            </button>
          </div>
        ) : (
          // Valid Certificate
          <div>
            {/* Verification Status Badge */}
            <div className="flex justify-center mb-8 print:hidden">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#222] border border-[#333] rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white font-semibold">Verified Certificate</span>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Sidebar - Course Info Card */}
              <div className="lg:col-span-3 print:hidden">
                <div className="bg-[#111] border border-[#333] rounded-lg p-6 sticky top-24">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h3 className="text-lg font-bold text-white font-serif">Course Information</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-[#999] mb-1">Course Title</p>
                      <p className="text-white font-semibold">{verification.certificate?.course_title}</p>
                    </div>

                    {verification.certificate?.course?.description && (
                      <div>
                        <p className="text-sm text-[#999] mb-1">Description</p>
                        <p className="text-sm text-[#e5e5e5] line-clamp-3">{verification.certificate.course.description}</p>
                      </div>
                    )}

                    {verification.certificate?.course?.level && (
                      <div>
                        <p className="text-sm text-[#999] mb-1">Level</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${
                          verification.certificate.course.level === 'beginner' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                          verification.certificate.course.level === 'intermediate' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                          verification.certificate.course.level === 'advanced' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                          'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        }`}>
                          {verification.certificate.course.level.toUpperCase()}
                        </span>
                      </div>
                    )}

                    {verification.certificate?.course?.duration && (
                      <div>
                        <p className="text-sm text-[#999] mb-1">Duration</p>
                        <p className="text-[#e5e5e5]">{verification.certificate.course.duration}</p>
                      </div>
                    )}

                    {verification.certificate?.course?.skills && verification.certificate.course.skills.length > 0 && (
                      <div>
                        <p className="text-sm text-[#999] mb-2">Skills Covered</p>
                        <div className="flex flex-wrap gap-1.5">
                          {verification.certificate.course.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 bg-[#222] border border-[#444] rounded text-xs text-[#bbb]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-[#333] pt-6">
                    <div className="bg-[#222] rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Interested in this course?</h4>
                      <p className="text-xs text-[#bbb]">
                        Join our training program and earn your own certificate
                      </p>
                    </div>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdMPQZWEBZhOrJHPpYdD3KH_h9oBV_9wIqGb6cY6-wnCXxNLg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-3 bg-white text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#e5e5e5] transition-colors text-center"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Certificate Display */}
              <div className="lg:col-span-9">
            {/* Certificate Display */}
            <div className="bg-[#111] border-2 border-[#333] rounded-lg overflow-hidden shadow-2xl print:shadow-none print:border-0">
              {/* Decorative Header */}
              <div className="bg-gradient-to-r from-[#222] via-[#1a1a1a] to-[#222] p-8 border-b border-[#333]">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-white mb-2 font-serif">DATAIDEA</h1>
                  <p className="text-[#bbb] text-lg">Certificate of Completion</p>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-12 space-y-8">
                <div className="text-center">
                  <p className="text-[#999] mb-2">This is to certify that</p>
                  <h2 className="text-3xl font-bold text-white mb-6 font-serif">
                    {verification.certificate?.student_name}
                  </h2>
                  <p className="text-[#999] mb-2">has successfully completed the course</p>
                  <h3 className="text-2xl font-semibold text-white mb-8">
                    {verification.certificate?.course_title}
                  </h3>
                </div>

                {/* Certificate Details */}
                <div className="border-t border-b border-[#333] py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-[#999] mb-1">Certificate Number</p>
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-[#bbb] font-semibold">
                          {verification.certificate?.certificate_number}
                        </p>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(verification.certificate?.certificate_number || '');
                            alert('Certificate ID copied to clipboard!');
                          }}
                          className="p-1 hover:bg-[#222] rounded transition-colors print:hidden"
                          title="Copy Certificate ID"
                        >
                          <svg
                            className="w-4 h-4 text-[#bbb] hover:text-white"
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
                    <div>
                      <p className="text-sm text-[#999] mb-1">Issue Date</p>
                      <p className="font-semibold text-[#e5e5e5]">
                        {verification.certificate?.issued_date &&
                          new Date(verification.certificate.issued_date).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#999] mb-1">Verification Code</p>
                      <p className="font-mono text-xs text-[#bbb] break-all">
                        {verification.certificate?.verification_code}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#999] mb-1">Status</p>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="text-white font-semibold">Valid & Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-sm text-[#999]">
                  <p className="mb-2">
                    This certificate is issued by DATAIDEA and can be verified at any time using the
                    verification code above.
                  </p>
                  <p>Visit dataidea.org to learn more about our courses.</p>
                </div>
              </div>

              {/* Decorative Footer */}
              <div className="bg-gradient-to-r from-[#222] via-[#1a1a1a] to-[#222] p-4 border-t border-[#333]">
                <div className="flex items-center justify-center space-x-4 text-xs text-[#999]">
                  <span>Verified on {new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Powered by DATAIDEA</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center space-x-4 print:hidden">
              <button
                onClick={() => window.print()}
                className="px-6 py-3 bg-white text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#e5e5e5] transition-colors flex items-center space-x-2"
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
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                <span>Print Certificate</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Verification link copied to clipboard!');
                }}
                className="px-6 py-3 bg-[#222] border border-[#333] hover:border-[#555] rounded-lg transition-colors flex items-center space-x-2"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>Share</span>
              </button>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-[#222] border border-[#333] rounded-lg p-6 print:hidden">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-[#bbb] mt-0.5 flex-shrink-0"
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
                  <p className="font-semibold text-white mb-2">About This Certificate</p>
                  <p className="text-sm text-[#bbb]">
                    This is an official certificate issued by DATAIDEA. The certificate details above
                    have been cryptographically verified against our secure database. You can verify
                    this certificate at any time by visiting this page or using the verification code.
                  </p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}