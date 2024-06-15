import { useState } from "react";
import LogoSvg from "./../../../assets/Logo.svg";
import CartSvg from "./../../../assets/Cart.svg";
import { CartModal } from "../CartModal/CartModal";

export const NavBar = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <nav className="bg-red-500 border-gray-200">
      <div className="flex items-strech p-4">
        <img
          src={LogoSvg}
          width={200}
          className="rounded-sm hover:bg-accent fill-emerald-900"
        />
        <div className="grow flex gap-2 justify-end items-center">
          <button className="bg-gray-100 rounded-sm p-2 flex items-center justify-center">
            <img src={CartSvg} width={24} onClick={handleShowCartModal} />
          </button>
          {showCartModal && (
            <CartModal handleShowCartModal={handleShowCartModal} />
          )}
        </div>
      </div>
    </nav>
  );
};
