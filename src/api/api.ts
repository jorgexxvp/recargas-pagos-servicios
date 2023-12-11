import axios, { AxiosError, AxiosResponse } from 'axios';
import { useAuthStore } from '../stores/authStore';
import { router } from '../router';

const api = axios.create({
  baseURL: "api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const data = useAuthStore();
  if (data.token) {
    config.headers['Access-Control-Allow-Headers'] = '*';
    config.headers['Access-Control-Allow-Methods'] = '*';
    config.headers['Access-Control-Exposed-Headers'] = '*';
    config.headers.Authorization = `Bearer ${data.token}`;
  }
  useAuthStore().setLoading(true);

  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    useAuthStore().setLoading(false);
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (router.currentRoute.value.path !== './') {
        useAuthStore().setLoading(true);
        useAuthStore().setToken(null);     
      }
    }

    return Promise.reject(error);
  }
);

export { api };
