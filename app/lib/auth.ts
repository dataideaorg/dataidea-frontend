export interface User {
  id: number;
  email: string;
  name: string;
  picture?: string;
}

export interface AuthResponse {
  success: boolean;
  user: User;
}

export const getBackendUrl = () => {
  return process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.dataidea.org';
};

export const checkAuthStatus = async (): Promise<User | null> => {
  try {
    const response = await fetch(`${getBackendUrl()}/auth/status/`, {
      credentials: 'include',
    });

    if (response.ok) {
      const data: AuthResponse = await response.json();
      return data.user;
    }
    return null;
  } catch (error) {
    console.error('Auth check failed:', error);
    return null;
  }
};

export const logout = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${getBackendUrl()}/auth/logout/`, {
      method: 'POST',
      credentials: 'include',
    });
    return response.ok;
  } catch (error) {
    console.error('Logout failed:', error);
    return false;
  }
};