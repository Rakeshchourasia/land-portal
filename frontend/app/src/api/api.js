import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: "https://land-portal-or0a.onrender.com",
   withCredentials: true,
});

// --- THIS IS THE CRITICAL PART ---
// This 'interceptor' runs before every single request is sent.
api.interceptors.request.use(
  (config) => {
    // 1. Get the user info from localStorage.
    const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null;

    // 2. If the user is logged in (userInfo and token exist)...
    if (userInfo && userInfo.token) {
      // 3. ...attach the token to the 'Authorization' header.
      config.headers['Authorization'] = `Bearer ${userInfo.token}`;
    }
    
    // 4. Send the request with the new header.
    return config;
  },
  (error) => {
    // This part handles errors during the request setup.
    return Promise.reject(error);
  }
);

export default api;