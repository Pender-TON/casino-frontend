import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : import.meta.env.VITE_API_URL,
  timeout: 10000,
});

export default axiosInstance;
