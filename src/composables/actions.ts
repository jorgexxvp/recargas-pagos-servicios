import { api } from "../api";

export const useApi = () => {

  const getBalance = async () => {
    try {
      const response = await api.get('/getActualBalance');
      const valor = response.data;
      return valor;
    } catch (error) {
      console.error('Error al obtener el balance:', error);
      throw error;
    }
  };

  const getProvider = async () => {
    try {
      const response = await api.get('/getProvider');
      const valor = response.data;
      
      return valor;
    } catch (error) {
      console.error('Error al obtener el proveedor:', error);
      throw error;
    }
  };

  return { getBalance, getProvider };
};
