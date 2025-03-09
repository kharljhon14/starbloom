import axios, { AxiosError, AxiosResponse } from 'axios';
import { LoginUserSchemaType } from '../schemas/auth';
import { AuthToken } from '../types/auth';

const responseBody = <T>(res: AxiosResponse<T>) => res.data;

const baseURL = 'http://localhost:8080/api/v1';

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error)
);

const requests = {
  get: <T>(url: string) => axios.get(url).then(responseBody<T>),
  post: <T, D>(url: string, body: D) => axios.post(url, body).then(responseBody<T>),
  patch: <T, D>(url: string, body: D) => axios.patch(url, body).then(responseBody<T>),
  delete: <T>(url: string) => axios.delete(url).then(responseBody<T>)
};

const auth = {
  login: (body: LoginUserSchemaType) =>
    requests.post<AuthToken, LoginUserSchemaType>(`${baseURL}/login`, body)
};

const agent = {
  auth
};

export default agent;
