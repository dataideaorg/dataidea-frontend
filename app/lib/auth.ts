export interface User {
  id: number;
  email: string;
  username?: string;
  picture?: string;
}

export const getBackendUrl = () => {
  return process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.dataidea.org';
};

export const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('access_token');
};

export const getRefreshToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('refresh_token');
};

export const setTokens = (accessToken: string, refreshToken: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

export const clearTokens = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
};

export const getStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const initiateGoogleLogin = async () => {
  try {
    const response = await fetch(`${getBackendUrl()}/auth/google/login/`);
    const data = await response.json();

    if (data.auth_url) {
      window.location.href = data.auth_url;
    }
  } catch (error) {
    console.error('Failed to initiate Google login:', error);
  }
};

export const checkAuthStatus = async (): Promise<User | null> => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    // Check if user is stored in localStorage (from recent login)
    return getStoredUser();
  }

  try {
    const response = await fetch(`${getBackendUrl()}/auth/status/`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.user;
    }

    // Try to refresh token if status check fails
    return await refreshAccessToken();
  } catch (error) {
    console.error('Auth check failed:', error);
    return null;
  }
};

export const refreshAccessToken = async (): Promise<User | null> => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    clearTokens();
    return null;
  }

  try {
    const response = await fetch(`${getBackendUrl()}/auth/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('access_token', data.access);
      return getStoredUser();
    }

    clearTokens();
    return null;
  } catch (error) {
    console.error('Token refresh failed:', error);
    clearTokens();
    return null;
  }
};

export const logout = (): boolean => {
  clearTokens();
  return true;
};