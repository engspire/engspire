import axios from 'axios';
import { ENGSPIRE_API_URL } from './constants';

export const apiClient = (token: string | null) => (axios.create({
  baseURL: ENGSPIRE_API_URL,
  headers: {
    Authorization: `Bearer ${token ?? "---"}`
  }
}))