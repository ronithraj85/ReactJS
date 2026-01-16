import axios from "axios";
import type { Restaurant, MenuItem } from "../types/Restaurant";

const API_URL = "http://localhost:8080/api/restaurants";

export const getRestaurantById = (id: number) =>
  axios.get<Restaurant>(`${API_URL}/${id}`);

export const updateRestaurant = (id: number, data: Partial<Restaurant>) =>
  axios.put<Restaurant>(`${API_URL}/${id}`, data);

export const getMenu = (restaurantId: number) =>
  axios.get<MenuItem[]>(`${API_URL}/${restaurantId}/menu`);

export const addMenuItem = (restaurantId: number, item: Partial<MenuItem>) =>
  axios.post<MenuItem>(`${API_URL}/${restaurantId}/menu`, item);

export const updateMenuItem = (
  restaurantId: number,
  itemId: number,
  data: Partial<MenuItem>
) => axios.put<MenuItem>(`${API_URL}/${restaurantId}/menu/${itemId}`, data);

export const deleteMenuItem = (restaurantId: number, itemId: number) =>
  axios.delete(`${API_URL}/${restaurantId}/menu/${itemId}`);
