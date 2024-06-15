import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export const CardProduct = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const item = {
    id: product.tail,
    name: product.name,
    image: product.image,
    quantity: 1,
  };
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  return (
    <div className="group/card bg-white border border-gray-200 rounded-md flex flex-col hover:shadow-md">
      <div className="m-4 grow flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-[200px] group-hover/card:scale-[1.25] transition duration-300 ease-in-out"
        />
      </div>
      <div className="pt-4">
        <p className="text-sm text-center font-medium mb-1">{product.name}</p>
        <p className="text-center font-bold mb-3">$ 0.00</p>
        <button
          className={`w-full bg-gray-100 p-4 border-t border-gray-300 font-medium hover:outline-2 hover:outline-red-500  invisible group-hover/card:visible`}
          onClick={() => addToCart(item)}
        >
          Agregar al Carro
        </button>
      </div>
    </div>
  );
};