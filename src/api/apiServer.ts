import { api } from ".";
import { APIResponse, ICompanies, ISaldo } from "./types";


async function getProvider() {
  return await api.get<APIResponse<ICompanies>>("/getProviders");
}

async function getSaldo(){
  return await api.get<APIResponse<ISaldo>>("/getActualBalance")
}


export default {
  getProvider,
  getSaldo  
};