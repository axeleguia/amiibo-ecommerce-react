import { useEffect, useState } from "react";
import { Hero } from "./../components/ui/Hero/Hero";
import { CardProduct } from "@/components/ui/CardProduct/CardProduct";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Hero />
      <div className="grid grid-cols-5 gap-x-6 gap-y-4">
        {products.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
    </>
  );
};
