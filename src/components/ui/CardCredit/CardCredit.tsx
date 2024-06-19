import { Input } from "@/components/ui/common/Input/Input";
import useCartContext from "@/hooks/useCartContext";
import { ICartItem } from "@/interface";
import { FormEvent, useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { toast } from "sonner";

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
    e.target.value = e.target.value.toUpperCase();
    const validate = {
      number: () => {
        e.target.value = e.target.value.replace(/\D+/g, "");
      },
      name: () => {},
      expiry: () => {},
      cvc: () => {},
    };
    setCardData({
      ...cardData,
      [e.target.name]: validate[e.target.name]() || e.target.value,
    });
  };

  const handleInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focused: e.target.name,
    });
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if ([number, name, expiry, cvc].includes("")) {
      toast.error("Todos los campos son requeridos");
      return;
    }
    setCardData({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focused: "",
    });
    dispatch({ type: "CLEAN_CART", payload: {} as ICartItem });
  };

  return (
    <div className="bg-white p-4 border border-gray-300 rounded-xl shadow-xl h-fit mb-4">
      <h3 className="text-xl font-bold mb-3">PAGO</h3>
      <div className="p-4">
        <Cards
          number={number}
          expiry={expiry}
          cvc={cvc}
          name={name}
          focused={focused as Focused}
          preview={false}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="number"
          name="number"
          label="NUMERO"
          placeholder="XXXX XXXX XXXX XXXX"
          handleOnChange={handleInputChange}
          handleOnFocus={handleInputFocus}
        />
        <Input
          type="text"
          id="name"
          name="name"
          label="NOMBRES"
          placeholder="Ingrese su nombre aqui"
          handleOnChange={handleInputChange}
          handleOnFocus={handleInputFocus}
        />
        <div className="flex flex-row gap-4 justify-start">
          <Input
            type="text"
            id="expiry"
            name="expiry"
            label="EXPIRACION"
            placeholder="MM/YY"
            className={"max-w-[80px]"}
            handleOnChange={handleInputChange}
            handleOnFocus={handleInputFocus}
          />
          <Input
            type="text"
            id="cvc"
            name="cvc"
            label="CVC"
            placeholder="123"
            className={"max-w-[80px]"}
            handleOnChange={handleInputChange}
            handleOnFocus={handleInputFocus}
          />
        </div>
      </form>
      <button
        id="buy-cta"
        type="submit"
        className="bg-red-600 text-white p-4 rounded-full font-bold w-full"
        onClick={handleSubmit}
      >
        Pagar
      </button>
    </div>
  );
};
