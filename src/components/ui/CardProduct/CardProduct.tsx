import { FC } from "react";
import useCartContext from "../../../hooks/useCartContext";
import { ICartItem, IProduct } from "../../../interface";
import { toast } from "sonner";

interface CartProductProps {
  product: IProduct;
}

export const CardProduct: FC<CartProductProps> = ({ product }) => {
  const { dispatch } = useCartContext();

  const item: ICartItem = {
    id: product.tail,
    name: product.name,
    series: product.gameSeries,
    image: product.image,
    quantity: 1,
    price: product.price,
  };

  const handleAddToCart = (item: ICartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success(`${item.name} se agregó al carrito`);
  };

  return (
    <div className="group/card bg-white border border-gray-300 rounded-xl flex flex-col hover:shadow-md">
      <div className="m-4 grow flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-[150px] group-hover/card:scale-[1.35] group-hover/card:rotate-[-5deg] transition duration-300 ease-in-out"
        />
      </div>
      <div className="pt-6 ">
        <p className="text-sm text-center font-medium mb-1">{product.name}</p>
        <p className="text-center font-bold mb-3 group-hover/card:scale-[1.35] transition duration-300 ease-in-out">
          S/ {item.price}
        </p>
        <div className="p-4">
          <button
            className={`w-full bg-red-600 text-white p-4 rounded-full font-bold invisible group-hover/card:visible`}
            onClick={() => handleAddToCart(item)}
          >
            Agregar al Carro
          </button>
        </div>
      </div>
    </div>
  );
};
