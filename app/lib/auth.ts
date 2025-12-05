export interface User {
  id: number;
  email: string;
  name: string;
  username?: string;
  picture?: string;
}

export const getBackendUrl = () => {
  return process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.dataidea.org';
};

// Cookie utility functions (for non-HTTP-only cookies like user data)
const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof window === 'undefined') return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const deleteCookie = (name: string) => {
  if (typeof window === 'undefined') return;
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Note: Access and refresh tokens are now HTTP-only cookies set by the backend
// We can't access them directly in JavaScript (which is more secure)

export const getStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const userCookie = getCookie('user_data');
  if (userCookie) {
    try {
      return JSON.parse(decodeURIComponent(userCookie));
    } catch (e) {
      console.error('Failed to parse user cookie:', e);
      return null;
    }
  }
  return null;
};

export const setStoredUser = (user: User) => {
  if (typeof window === 'undefined') return;
  const userStr = JSON.stringify(user);
  setCookie('user_data', encodeURIComponent(userStr), 7);
};

export const clearAuth = () => {
  if (typeof window === 'undefined') return;
  // Clear user data cookie (HTTP-only cookies are cleared by backend on logout)
  deleteCookie('user_data');
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
  // Check if we have user data stored locally first
  const storedUser = getStoredUser();

  try {
    // Call backend to verify auth status (cookies sent automatically)
    const response = await fetch(`${getBackendUrl()}/auth/status/`, {
      credentials: 'include', // Include HTTP-only cookies
    });

    if (response.ok) {
      const data = await response.json();
      if (data.user) {
        setStoredUser(data.user); // Cache user data
        return data.user;
      }
    }

    // If status check fails, try to refresh token
    if (response.status === 401) {
      return await refreshAccessToken();
    }

    return storedUser; // Return cached user if available
  } catch (error) {
    console.error('Auth check failed:', error);
    return storedUser; // Return cached user if available
  }
};

export const refreshAccessToken = async (): Promise<User | null> => {
  try {
    // Refresh token is automatically sent as HTTP-only cookie
    const response = await fetch(`${getBackendUrl()}/auth/token/refresh/`, {
      method: 'POST',
      credentials: 'include', // Include cookies (refresh token)
    });

    if (response.ok) {
      // New access token is set as cookie by backend
      // Try to get updated user info
      return await checkAuthStatus();
    }

    // Refresh failed, clear local data
    clearAuth();
    return null;
  } catch (error) {
    console.error('Token refresh failed:', error);
    clearAuth();
    return null;
  }
};

export const logout = async (): Promise<boolean> => {
  try {
    // Call backend logout to clear HTTP-only cookies
    await fetch(`${getBackendUrl()}/auth/logout/`, {
      method: 'POST',
      credentials: 'include',
    });
  } catch (error) {
    console.error('Logout request failed:', error);
  }

  // Clear local user data regardless of backend response
  clearAuth();
  return true;
};

// Helper function to create authenticated fetch options
// Now we don't need to manually add Authorization headers - cookies handle it
export const createAuthFetchOptions = (
  method: string = 'GET',
  body?: any
): RequestInit => {
  const options: RequestInit = {
    method,
    credentials: 'include', // Always include cookies (contains auth tokens)
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
};