/* global process */

import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export async function getApiHealth() {
  const { data } = await apiClient.get<{
    status: string;
    service: string;
    timestamp: string;
  }>("/health");

  return data;
}
