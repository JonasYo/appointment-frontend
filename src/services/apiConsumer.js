import axios from 'axios';

const apiConsumer = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers': 'Api-version',
  },
});

apiConsumer.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error.response),
);

apiConsumer.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default apiConsumer;
