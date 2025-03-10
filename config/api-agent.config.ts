/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import https from 'https';

let baseURL = process.env.NEXT_PUBLIC_API_AGENT_URL || '';
if (baseURL && !baseURL.endsWith('/')) {
  baseURL += '/';
}

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const apiSet = axios.create({
  baseURL,
  httpsAgent: agent,
});

const apiAgent = {
  get: <T = any>(endpoint: string): Promise<T> =>
    apiSet.get<T>(endpoint).then((res: AxiosResponse<T>) => res.data),

  post: <T = any, B = Record<string, any>>(endpoint: string, body?: B): Promise<T> =>
    apiSet.post<T>(endpoint, body).then((res: AxiosResponse<T>) => res.data),
};

export default apiAgent;