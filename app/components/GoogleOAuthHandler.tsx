'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getBackendUrl, setStoredUser } from '../lib/auth';

export const GoogleOAuthHandler = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      handleOAuthCallback(code);
    }
  }, [searchParams]);

  const handleOAuthCallback = async (code: string) => {
    try {
      const response = await fetch(`${getBackendUrl()}/auth/google/callback/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
        credentials: 'include', // Include cookies - tokens will be set as HTTP-only cookies by backend
      });

      if (response.ok) {
        const data = await response.json();

        // Store user data in non-HTTP-only cookie for client-side access
        // (tokens are already set as HTTP-only cookies by the backend)
        setStoredUser(data.user);

        // Redirect to home and force a reload to update auth state
        window.location.href = '/';
      } else {
        console.error('OAuth callback failed:', await response.text());
        router.push('/?auth_error=true');
      }
    } catch (error) {
      console.error('OAuth callback error:', error);
      router.push('/?auth_error=true');
    }
  };

  return null; // This component doesn't render anything
};