// axios-config.ts
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useAuthStore } from '../stores/authStore';
import { router } from '../router';

const api = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const data = useAuthStore();
  if (data.token) {
    console.log(data.token);
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
    useAuthStore().setLoading(false);

    if (error.response?.status === 401) {
      if (router.currentRoute.value.path !== '/') {
        useAuthStore().setToken(null);
        router.push('/');
      }
    }

    return Promise.reject(error);
  }
);

export { api };