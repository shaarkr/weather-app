import axios from 'axios';
const defaultOptions = {
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const http = axios.create(defaultOptions);

http.interceptors.request.use((config) => {
  console.log('[Axios Req]: ' + config.url);
  config.url += `&key=${API_KEY}`;
  return config;
});

http.interceptors.response.use((config) => {
  console.log('[Axios Res]: ' + config.config.url);
  return config;
});

export default http;
