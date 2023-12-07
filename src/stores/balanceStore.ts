import { defineStore } from 'pinia';
import { ref } from 'vue';
import { APIResponse, ISaldo } from '../api/types';
import { API } from '../api/controller';
import { AxiosError } from 'axios';


export const useBalanceStore = defineStore("balance", () => {
  const balance = ref<ISaldo>();
  
  function initData(data: ISaldo) {
    balance.value = data;
  }

  async function dispatchGetBalance(): Promise<APIResponse<null>> {
    try {
      const data = await API.provider.getSaldo();
      if (data.status === 200) {
        initData(data.data.data);
        return {
          success: true,
          data: null,
          status: 200,
        };
      }
    } catch (error) {
      const _error = error as AxiosError<string>;
      return {
        success: false,
        status: _error.response?.status,
        data: null,
      };
    }
    return {
      success: false,
      data: null,
      status: 400,
    };
  }

  return {
    balance,
    initData,
    dispatchGetBalance
  };
});