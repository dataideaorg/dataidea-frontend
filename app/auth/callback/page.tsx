'use client';

import { Suspense } from 'react';
import { GoogleOAuthHandler } from '../../components/GoogleOAuthHandler';

export default function AuthCallbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Completing authentication...</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <GoogleOAuthHandler />
      </Suspense>
    </div>
  );
}