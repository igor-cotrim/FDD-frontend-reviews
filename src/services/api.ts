import axios, { AxiosInstance } from "axios";

export class Api {
  private api: AxiosInstance;
  private baseURL = ''

  constructor() {
    this.api = axios.create({
      baseURL: this.baseURL
    });
  }

  async get<T = any>(endpoint: string, params?: Record<string, string | number>) {
    const { data } = await this.api.get<T>(endpoint, { params });
    return data
  }

  async post<T = any>(endpoint: string, body: Record<string, string | number>) {
    return await this.api.post<T>(endpoint, body);
  }

  async put<T = any>(endpoint: string, body: Record<string, string | number>) {
    return await this.api.put<T>(endpoint, body);
  }

  async delete<T = any>(endpoint: string, params?: any) {
    return await this.api.delete<T>(endpoint, { params });
  }
}
