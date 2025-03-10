/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

let baseURL = process.env.NEXT_PUBLIC_API_URL || '';
if (baseURL && !baseURL.endsWith('/')) {
  baseURL += '/';
}

const apiSet = axios.create({
  baseURL: baseURL
});

const api = {
  get: <T = any>(endpoint: string): Promise<T> =>
    apiSet.get<T>(endpoint).then((res: AxiosResponse<T>) => res.data),

  post: <T = any, B = Record<string, any>>(endpoint: string, body?: B): Promise<T> =>
    apiSet.post<T>(endpoint, body).then((res: AxiosResponse<T>) => res.data),

  put: <T = any, B = Record<string, any>>(endpoint: string, body?: B): Promise<T> =>
    apiSet.put<T>(endpoint, body).then((res: AxiosResponse<T>) => res.data),

  delete: <T = any, B = Record<any, any>>(endpoint: string, body?: B): Promise<T> =>
    apiSet.delete<T>(endpoint, body as any).then((res: AxiosResponse<T>) => res.data),
};

export default api;
