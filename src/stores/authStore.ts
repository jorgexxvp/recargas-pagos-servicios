import { defineStore } from 'pinia';

export const useAuthStore = defineStore('token', {
  state: () => ({
    token: '',
  }),
  actions: {
    setToken(newToken:string) {
      this.token = newToken;
    },
  },
});