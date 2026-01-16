import axios from "axios";
import type { Order } from "../types/Order";

const API_URL = "http://localhost:8080/api/orders";

export const getOrdersByUser = (userId: number) =>
  axios.get<Order[]>(`${API_URL}/user/${userId}`);

export const getOrderById = (id: number) =>
  axios.get<Order>(`${API_URL}/${id}`);

export const createOrder = (order: Partial<Order>) =>
  axios.post<Order>(API_URL, order);

export const updateOrderStatus = (id: number, status: string) =>
  axios.put<Order>(`${API_URL}/${id}/status`, { status });
