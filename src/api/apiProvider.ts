import { api } from ".";
import { APIResponse, ICompany } from "./types";


async function getProvider() {
  return await api.get<APIResponse<ICompany[]>>("/getProviders");
}


export default {
  getProvider,

};