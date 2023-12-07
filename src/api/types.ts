export type APIResponse<T> = {
  success: boolean
  data: T;
  status?: number;
}

export interface ICompanies {
  company: ICompany[];
}

export interface ICompany {
  company: string;
  _id: string;
  image: string;
}
