import { BannerHero } from "@/components/ui/BannerHero/BannerHero";
import { CardProduct } from "@/components/ui/CardProduct/CardProduct";
import { Paginator } from "@/components/ui/Paginator/Paginator";
import usePaginator from "@/hooks/usePaginator";
import { getProducts } from "@/services/product.service";
import { useQuery } from "react-query";

export const Home = () => {
  const { page, limit, handleNext, handlePrevious, handleLimit } = usePaginator(
    1,
    10,
  );

  const { data, isLoading, error } = useQuery(
    ["products", page, limit],
    () => getProducts(page, limit),
    { keepPreviousData: true },
  );

  return (
    <>
      <BannerHero />
      {isLoading && <p className="font-bold text-xl">Cargando...</p>}
      {error && <p className="font-bold text-xl">Algo salio mal :(</p>}
      {data && (
        <>
          <Paginator
            classNames="justify-end"
            page={page}
            limit={limit}
            handleBackward={handlePrevious}
            handleForward={handleNext}
            handleLimit={handleLimit}
          />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
            {data?.map((product) => (
              <CardProduct key={product.tail} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
