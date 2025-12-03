'use client';

import React from 'react';
import { initiateGoogleLogin } from '../lib/auth';

interface GoogleSignInButtonProps {
  className?: string;
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ className = '' }) => {
  const handleGoogleSignIn = () => {
    initiateGoogleLogin();
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className={`flex items-center gap-3 px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-md hover:shadow-lg ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8055 10.2292C19.8055 9.55059 19.7499 8.86719 19.6301 8.19922H10.2002V12.0492H15.5914C15.3565 13.2911 14.6125 14.3898 13.5139 15.0867V17.5866H16.7738C18.7137 15.8449 19.8055 13.2728 19.8055 10.2292Z" fill="#4285F4"/>
        <path d="M10.2002 20.0006C12.9515 20.0006 15.2708 19.1151 16.7783 17.5865L13.5184 15.0867C12.5797 15.6943 11.3901 16.0426 10.2047 16.0426C7.54606 16.0426 5.28698 14.2828 4.4619 11.9165H1.10303V14.4922C2.64907 17.5477 6.28071 20.0006 10.2002 20.0006Z" fill="#34A853"/>
        <path d="M4.45742 11.9165C4.01297 10.6746 4.01297 9.33008 4.45742 8.08816V5.51245H1.10335C-0.370117 8.40802 -0.370117 11.5965 1.10335 14.4921L4.45742 11.9165Z" fill="#FBBC04"/>
        <path d="M10.2002 3.95805C11.4562 3.93677 12.6643 4.40517 13.5706 5.26624L16.4617 2.37521C15.1822 1.18289 13.5228 0.527148 10.2002 0.527148C6.28071 0.527148 2.64907 2.97999 1.10303 6.03548L4.4619 8.61119C5.28215 6.24001 7.54606 3.95805 10.2002 3.95805Z" fill="#EA4335"/>
      </svg>
      Sign in with Google
    </button>
  );
};