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
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Verifying certificate...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#e5e5e5]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {error || !verification?.valid ? (
          // Invalid Certificate
          <div className="bg-[#111111] border-2 border-red-500/20 rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-400"
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
            <h1 className="text-2xl font-bold text-red-400 mb-2">Certificate Not Valid</h1>
            <p className="text-gray-400 mb-6">
              {error || verification?.detail || 'This certificate could not be verified.'}
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Return to Home
            </button>
          </div>
        ) : (
          // Valid Certificate
          <div>
            {/* Verification Status Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
                <svg
                  className="w-6 h-6 text-green-400"
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
                <span className="text-green-400 font-semibold">Verified Certificate</span>
              </div>
            </div>

            {/* Certificate Display */}
            <div className="bg-[#111111] border-2 border-yellow-400/20 rounded-lg overflow-hidden shadow-2xl">
              {/* Decorative Header */}
              <div className="bg-gradient-to-r from-yellow-400/20 via-yellow-600/20 to-yellow-400/20 p-8 border-b border-[#333333]">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-yellow-400 mb-2">DATAIDEA</h1>
                  <p className="text-gray-300 text-lg">Certificate of Completion</p>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-12 space-y-8">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">This is to certify that</p>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {verification.certificate?.student_name}
                  </h2>
                  <p className="text-gray-400 mb-2">has successfully completed the course</p>
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-8">
                    {verification.certificate?.course_title}
                  </h3>
                </div>

                {/* Certificate Details */}
                <div className="border-t border-b border-[#333333] py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Certificate Number</p>
                      <p className="font-mono text-yellow-400 font-semibold">
                        {verification.certificate?.certificate_number}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Issue Date</p>
                      <p className="font-semibold">
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
                      <p className="text-sm text-gray-400 mb-1">Verification Code</p>
                      <p className="font-mono text-xs text-gray-300 break-all">
                        {verification.certificate?.verification_code}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Status</p>
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-green-400 font-semibold">Valid & Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-sm text-gray-400">
                  <p className="mb-2">
                    This certificate is issued by DATAIDEA and can be verified at any time using the
                    verification code above.
                  </p>
                  <p>Visit dataidea.org to learn more about our courses.</p>
                </div>
              </div>

              {/* Decorative Footer */}
              <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-600/10 to-yellow-400/10 p-4 border-t border-[#333333]">
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <span>Verified on {new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Powered by DATAIDEA</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors flex items-center space-x-2"
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
                className="px-6 py-3 bg-[#111111] border border-[#333333] hover:border-yellow-400 rounded-lg transition-colors flex items-center space-x-2"
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
            <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0"
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
                  <p className="font-semibold text-blue-400 mb-2">About This Certificate</p>
                  <p className="text-sm text-gray-300">
                    This is an official certificate issued by DATAIDEA. The certificate details above
                    have been cryptographically verified against our secure database. You can verify
                    this certificate at any time by visiting this page or using the verification code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}