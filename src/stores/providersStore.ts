import { defineStore } from 'pinia';
import { ref ,onMounted } from 'vue';
import { APIResponse, ICompany } from '../api/types';
import { API } from '../api/controller';
import { AxiosError } from 'axios';


export const useProvidersStore = defineStore("providers", () => {
  const companies = ref<ICompany[]>([]);
  
  function initData(data: ICompany[]) {
    companies.value = data;
  }

  async function dispatchGetProviders(): Promise<APIResponse<null>> {
    try {
      const data = await API.provider.getProvider();
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
    companies,
    initData,
    dispatchGetProviders
  };
});