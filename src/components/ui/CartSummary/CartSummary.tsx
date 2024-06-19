import useCartContext from "@/hooks/useCartContext";

export const CartSummary = () => {
  const {
    state: { cartItems },
  } = useCartContext();

  const totalAmount = () =>
    Math.round(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) *
        100,
    ) / 100;

  return (
    <div className="bg-white p-4 border border-gray-300 rounded-xl shadow-xl h-fit mb-4">
      <h3 className="text-xl font-bold mb-3">RESUMEN DE LA ORDEN</h3>
      <div className="font-semibold text-xl flex">
        <p className="grow">Total</p>
        <p>S/ {totalAmount()}</p>
      </div>
    </div>
  );
};
