import { api } from "../../api"

export const useApi = () => {
  const getBalance =async () => {
    return await api.get('/getActualBalance/')
  }
  return {getBalance}
}