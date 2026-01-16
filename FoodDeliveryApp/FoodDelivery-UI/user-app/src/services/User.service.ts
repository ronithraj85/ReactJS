import axios from "axios";
import { User } from "../types/User";

const API_URL = "http://localhost:8080/api/users";

export const getUsers = () => axios.get<User[]>(API_URL);

export const getUserById = (id: number) => axios.get<User>(`${API_URL}/${id}`);

export const updateUser = (id: number, data: Partial<User>) =>
  axios.put<User>(`${API_URL}/${id}`, data);

export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);
