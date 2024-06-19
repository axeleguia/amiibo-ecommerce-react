import MinusSvg from "@/assets/Minus.svg";
import PlusSvg from "@/assets/Plus.svg";
import useCartContext from "@/hooks/useCartContext";
import { ICartItem } from "@/interface";
import { FC } from "react";
import Swal from "sweetalert2";

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const { dispatch } = useCartContext();

  const handleRemoveItem = (item: ICartItem) => {
    if (item.quantity === 1) {
      Swal.mixin({
        customClass: {
          confirmButton: "bg-gray-600 text-white p-4 rounded-full font-bold",
          denyButton: "bg-red-600 text-white p-4 rounded-full font-bold",
          actions: "flex gap-4",
        },
        buttonsStyling: false,
      })
        .fire({
          html: `¿Deseas remover <b>${item.name}</b> del carrito?`,
          showDenyButton: true,

          confirmButtonText: "No",
          denyButtonText: "Si, remover",
        })
        .then((result) => {
          if (result.isDenied) {
            dispatch({ type: "REMOVE_FROM_CART", payload: item });
          }
        });
    } else {
      dispatch({ type: "REMOVE_FROM_CART", payload: item });
    }
  };
  const handleAddItem = (item: ICartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl flex flex-row mb-2 last:mb-4">
      <div className="p-4 flex items-center">
        <img src={item.image} alt={item.name} className="w-[75px]" />
      </div>
      <div className="p-4 flex flex-col sm:flex-row w-full">
        <div className="grow flex flex-col md:flex-row items-start mr-4">
          <span className="font-bold text-lg items-center mr-4">
            {item.name}
          </span>
          <span className="text-[12px] italic py-1 px-2 bg-yellow-400 rounded-md">
            {item.series}
          </span>
        </div>
        <div className="flex flex-col">
          <div className="grow text-lg text-right mb-1">
            S/ {item.price.toFixed(2)}
          </div>
          <div className="flex flex-row gap-4 items-center">
            <button
              id="remove-item-cta"
              onClick={() => handleRemoveItem(item)}
              className={
                "bg-gray-600 w-full h-[36px] flex items-center justify-center rounded-xl p-3"
              }
            >
              <img src={MinusSvg} alt="Remove Item" />
            </button>
            {item.quantity}
            <button
              id="remove-item-cta"
              onClick={() => handleAddItem(item)}
              className={
                "bg-gray-600 w-full h-[36px] flex items-center justify-center rounded-xl p-3"
              }
            >
              <img src={PlusSvg} alt="Add Item" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
