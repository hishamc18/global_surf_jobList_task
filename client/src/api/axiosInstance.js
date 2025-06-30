import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: '/api',
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;