import axios, { AxiosError, AxiosResponse } from 'axios';
import { LoginUserSchemaType, SignupUserSchemaType } from '../schemas/auth';
import { AuthToken, User } from '../types/auth';
import { getCookie } from '../utils/utils';
import { GetPostsResponse } from '../types/post';

const responseBody = <T>(res: AxiosResponse<T>) => res.data;

axios.defaults.baseURL = 'http://localhost:8080/api/v1';

axios.interceptors.request.use((config) => {
  const token = getCookie('bearer');
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

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
    requests.post<AuthToken, LoginUserSchemaType>('/login', body),
  signup: (body: SignupUserSchemaType) =>
    requests.post<User, SignupUserSchemaType>('/signup', body),
  getUserByToken: () => requests.get<{ user: User }>(`/validate-token`)
};

const posts = {
  getPosts: (id: number, page: number, pageSize: number) =>
    requests.get<GetPostsResponse>(`/posts?id=${id}&page=${page}&pageSize=${pageSize}`),
  getFollowingPosts: (id: number, page: number, pageSize: number) =>
    requests.get<GetPostsResponse>(`/posts/following?id=${id}&page=${page}&pageSize=${pageSize}`)
};

const agent = {
  auth,
  posts
};

export default agent;
