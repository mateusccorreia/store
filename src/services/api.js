import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const getProduct = async (id) => {
  const response = await instance.get(`/products/${id}`);
  return response.data
}