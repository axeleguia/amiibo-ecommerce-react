import { IProduct } from "../interface";

export const getProducts = async (): Promise<IProduct[]> => {
	try {
		const response = await fetch("http://localhost:3000/products");
		const data = await response.json();
		if (response.ok) {
			return data;
		} else {
			throw new Error('Failed to fetch products')
		}
	} catch (error) {
		throw new Error('Network error')
	}
};