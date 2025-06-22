
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-2-t9yf.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
