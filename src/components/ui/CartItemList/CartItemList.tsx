import useCartContext from "../../../hooks/useCartContext";
import { CartItem } from "../CartItem/CartItem";

export const CartItemList = () => {
  const {
    state: { cartItems, quantity },
  } = useCartContext();

  return (
    <div className="bg-white p-4 rounded-xl shadow-xl mb-4 border border-gray-300">
      <h3 className="text-xl font-bold mb-3">
        CARRO ({quantity} producto{`${quantity > 1 ? "s" : ""}`})
      </h3>
      <div className="">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="">
        <p className="font-bold text-xl">TOTAL</p>
        <hr />
        {/* <div className='font-semibold text-sm mb-1'>{totalAmount()} </div> */}
      </div>
      <button className="w-full bg-gray-100 p-4 border border-gray-300 rounded-xl font-bold hover:outline-2 hover:outline-red-500">
        CHECKOUT
      </button>
    </div>
  );
};
