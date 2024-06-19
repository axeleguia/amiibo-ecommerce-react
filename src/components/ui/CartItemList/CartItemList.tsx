import { CartItem } from "@/components/ui/CartItem/CartItem";
import useCartContext from "../../../hooks/useCartContext";

export const CartItemList = () => {
  const {
    state: { cartItems, quantity },
  } = useCartContext();

  return (
    <div className="bg-white p-4 mb-4 rounded-xl shadow-xl mb-4 border border-gray-300">
      <h3 className="text-xl font-bold mb-3">
        CARRO ({quantity} producto{`${quantity > 1 ? "s" : ""}`})
      </h3>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
