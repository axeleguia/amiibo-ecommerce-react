import { useEffect, useState } from "react";
import { BannerHero } from "../components/ui/BannerHero/BannerHero";
import { CardProduct } from "../components/ui/CardProduct/CardProduct";
import { getProducts } from "../services/product.service";
import { IProduct } from "../interface";

export const Home = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setIsLoading(false)
    })
  }, []);

  return (
    <>
      <BannerHero />
      {isLoading && <p>Cargando...</p>}
      {error && <p>Algo salio mal</p>}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {products.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
    </>
  );
};
