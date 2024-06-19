import { IProduct } from "@/interface";

export const getProducts = async (
  page = 0,
  limit = 10,
): Promise<IProduct[]> => {
  try {
    const response = await fetch(
      `http://localhost:3000/products?_page=${page}&_limit=${limit}`,
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error("Failed to fetch products");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};
