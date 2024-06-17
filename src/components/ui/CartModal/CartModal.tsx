import { FC } from "react";
import useCartContext from "../../../hooks/useCartContext";
import "./CartModal";
import { CartItem } from "../CartItem/CartItem";

interface CartModalProps {
  handleShowCartModal: () => void;
}

export const CartModal: FC<CartModalProps> = ({ handleShowCartModal }) => {
  const {
    state: { cartItems, quantity },
  } = useCartContext();

  const totalAmount = () =>
    Math.round(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) *
        100,
    ) / 100;

  return (
    <div className="absolute">
      <div className="bg-white border border-gray-300 absolute p-8 top-[100px] right-[15px] width-[300px] height-[300px] rounded-xl shadow-xl">
        <h3 className="text-xl font-bold pb-3">
          CARRO ({quantity} producto{`${quantity > 1 ? "s" : ""}`})
        </h3>
        <div className="">
          {cartItems.map((item) => (
            <CartItem key="item.id" item={item} />
          ))}
        </div>
        <div className="">
          <p className="font-bold text-xl">TOTAL</p>
          <hr />
          <div className="font-semibold text-sm mb-1">{totalAmount()} </div>
        </div>
        <button className="w-full bg-gray-100 p-4 border border-gray-300 rounded-xl font-bold">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};
