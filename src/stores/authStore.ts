import { defineStore } from 'pinia';

interface AppState {
  token: string | null;
  loading: boolean;
}

export const useAuthStore = defineStore('app', {
  state: (): AppState => ({
    token: localStorage.getItem('token') || null,
    loading: false,
  }),
  actions: {
    setToken(token: string | null) {
      this.token = token;
      localStorage.setItem('token', token || '');
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
  },
});