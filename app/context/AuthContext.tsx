'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, checkAuthStatus, logout as logoutUser } from '../lib/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshAuth = async () => {
    setLoading(true);
    try {
      const userData = await checkAuthStatus();
      console.log('Auth status checked:', userData);
      setUser(userData);
    } catch (error) {
      console.error('Failed to refresh auth:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshAuth();

    // Refresh auth when window regains focus (after OAuth redirect)
    const handleFocus = () => {
      console.log('Window focused, refreshing auth...');
      refreshAuth();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};