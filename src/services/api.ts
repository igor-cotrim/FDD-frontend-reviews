import axios, { AxiosInstance } from "axios";

export class Api {
  private api: AxiosInstance;
  private baseURL = ''

  constructor() {
    this.api = axios.create({
      baseURL: this.baseURL
    });
  }

  async get<T = unknown>(endpoint: string, params?: Record<string, string | number>) {
    const { data } = await this.api.get<T>(endpoint, { params });
    return data
  }

  async post<T = unknown>(endpoint: string, body: Record<string, any>) {
    return await this.api.post<T>(endpoint, body);
  }

  async put<T = unknown>(endpoint: string, body: Record<string, any>) {
    return await this.api.put<T>(endpoint, body);
  }

  async delete<T = unknown>(endpoint: string, params?: Record<string, string | number>) {
    return await this.api.delete<T>(endpoint, { params });
  }
}
