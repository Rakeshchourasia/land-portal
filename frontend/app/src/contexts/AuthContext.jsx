import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
        const userInfo = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null;
      if (userInfo) {
        setUser(userInfo);
      }
    } catch (error) {
        console.error("Failed to parse user info from localStorage", error);
        localStorage.removeItem('userInfo');
    } finally {
        setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('userInfo', JSON.stringify(data));
    setUser(data);
    return data;
  };

  const register = async (name, email, password, role) => {
    const { data } = await api.post('/auth/register', { name, email, password, role });
    localStorage.setItem('userInfo', JSON.stringify(data));
    setUser(data);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
  };
  
  const refreshUserProfile = async () => {
    try {
        const { data } = await api.get('/auth/profile');
        const updatedUserInfo = { ...JSON.parse(localStorage.getItem('userInfo')), ...data };
        localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
        setUser(updatedUserInfo);
    } catch (error) {
        console.error('Failed to refresh user profile:', error);
        if (error.response && error.response.status === 401) {
            logout();
        }
    }
  };

  const isPremium = user?.subscription?.status === 'active';
  const isAdmin = user?.role === 'admin';
  const isSeller = user?.role === 'seller';

  const value = { user, setUser, login, register, logout, loading, isPremium, isAdmin, isSeller, refreshUserProfile };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;