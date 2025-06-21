
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-ddas.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

export default API;
