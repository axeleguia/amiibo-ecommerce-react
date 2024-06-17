import { FC } from "react";
import { ICartItem } from "./../../../interface";
import "./CartItem";
import useCartContext from "../../../hooks/useCartContext";
import { table } from "console";

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const { dispatch } = useCartContext();

  const handleRemoveItem = (item: ICartItem) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  const handleAddItem = (item: ICartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl flex flex-row mb-2 last:mb-4">
      <div className="p-4">
        <img src={item.image} alt={item.name} className="w-[75px]" />
      </div>
      <div className="p-4 flex flex-col">
        <div className="grow flex items-center mb-4">
          <span className="font-bold text-lg mr-4 items-center">
            {item.name}
          </span>
          <span className="text-[12px] italic py-1 px-2 bg-yellow-400 rounded-md">
            {item.series}
          </span>
        </div>
        <div>
          <div className="font-semibold text-xs mb-1">CANTIDAD </div>
          <div className="flex flex-row gap-4 items-center font-semibold">
            <button
              className="bg-gray-100 p-4 border border-gray-300 rounded-xl h-[48px] flex items-center"
              onClick={() => handleRemoveItem(item)}
            >
              -
            </button>
            <div>{item.quantity}</div>
            <button
              className="bg-gray-100 p-4 border border-gray-300 rounded-xl h-[48px] flex items-center"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
