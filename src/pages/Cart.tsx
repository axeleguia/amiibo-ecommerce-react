import { FC } from "react";
import { Link } from "react-router-dom";
import { CardCredit } from "@/components/ui/CardCredit/CardCredit";
import { CartItemList } from "@/components/ui/CartItemList/CartItemList";
import { CartSummary } from "@/components/ui/CartSummary/CartSummary";
import useCartContext from "@/hooks/useCartContext";

export const Cart: FC = () => {
  const {
    state: { quantity },
  } = useCartContext();

  return (
    <>
      {quantity > 0 ? (
        <div className="flex flex-col md:gap-4 md:flex-row">
          <div className="grow">
            <CartItemList />
          </div>
          <div className="md:flex md:flex-col">
            <CartSummary />
            <CardCredit />
          </div>
        </div>
      ) : (
        <div className="mx-auto w-[100%] md:w-[50%]">
          <p className="font-bold text-xl mb-1">Tu carrito está vacio</p>
          <p className="text-md mb-8">
            ¡Aprovecha! Tenemos variedad de productos en oferta y oportunidades
            únicas.
          </p>
          <Link to={"/"}>
            <button className="w-full bg-yellow-400 p-4 rounded-full font-bold hover:outline-2 hover:outline-red-500">
              EMPEZAR A COMPRAR
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
