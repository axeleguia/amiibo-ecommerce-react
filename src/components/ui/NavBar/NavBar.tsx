import { useState } from "react";
import LogoSvg from "./../../../assets/Logo.svg";
import CartSvg from "./../../../assets/Cart.svg";
import useCartContext from "../../../hooks/useCartContext";
import { useNavigate, Link } from "react-router-dom";

export const NavBar = () => {
  const {
    state: { quantity },
  } = useCartContext();

  const navigate = useNavigate();

  const [showCartModal, setShowCartModal] = useState(false);

  const handleShowCartModal = () => null; //setShowCartModal(!showCartModal);

  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <nav className="bg-red-600 border-gray-300 fixed w-full z-10">
      <div className="flex items-strech p-4">
        <Link to={"/"}>
          <img src={LogoSvg} width={200} className="rounded-sm" />
        </Link>
        <div
          className="grow flex gap-2 justify-end items-center"
          onClick={handleNavigate}
        >
          <button className="bg-white rounded-xl p-2 flex items-center justify-center relative">
            <img src={CartSvg} width={24} onClick={handleShowCartModal} />
            {quantity > 0 && (
              <div className="absolute -top-3 -right-2 right-0 bg-yellow-400 rounded-full w-[24px] h-[24px] text-sm font-bold flex items-center justify-center">
                <span>{quantity}</span>
              </div>
            )}
          </button>
          {/* {showCartModal && (
            <CartModal handleShowCartModal={handleShowCartModal} />
          )} */}
        </div>
      </div>
    </nav>
  );
};
