import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { toast } from "sonner";
import useCartContext from "../../../hooks/useCartContext";
import { ICartItem } from "../../../interface";

export const CardCredit = () => {
  const { dispatch } = useCartContext();

  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focused: "",
  });
  const { number, name, expiry, cvc, focused } = cardData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focused: e.target.value,
    });
  };

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEventHandler<HTMLInputElement>,
  ) => {
    // e.preventDefault();
    if ([number, name, expiry, cvc].includes("")) {
      toast.error("Todos los campos son requeridos");
      return;
    }
    setCardData({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focused: cardData.focused,
    });
    dispatch({ type: "CLEAN_CART", payload: {} as ICartItem });
  };
  return (
    <div className="bg-white p-4 rounded-xl shadow-xl h-fit mb-4">
      <h3 className="text-xl font-bold mb-3">PAGO</h3>
      <div className="p-4">
        <Cards
          number={number}
          expiry={expiry}
          cvc={cvc}
          name={name}
          focused={"name"}
          preview={false}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="number" className="font-semibold text-xs mb-1">
            NUMERO
          </label>
          <input
            type="text"
            name="number"
            id="number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="border rounded-xl border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="font-semibold text-xs mb-1">
            NOMBRES
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="border rounded-xl border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="expiry" className="font-semibold text-xs mb-1">
              EXPIRACION
            </label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="border rounded-xl border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="cvc" className="font-semibold text-xs mb-1">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="border rounded-xl border-gray-300 p-2"
            />
          </div>
        </div>
      </form>
      <button
        className="w-full bg-red-600 text-white p-4 border border-gray-300 rounded-xl font-bold"
        onClick={handleSubmit}
      >
        Comprar
      </button>
    </div>
  );
};
