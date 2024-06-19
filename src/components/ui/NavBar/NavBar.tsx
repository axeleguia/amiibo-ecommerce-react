import CartSvg from "@/assets/Cart.svg";
import LogoSvg from "@/assets/Logo.svg";
import useCartContext from "@/hooks/useCartContext";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const {
    state: { quantity },
  } = useCartContext();

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="bg-red-600 w-full fixed z-10">
      <div className="flex gap-4 p-4">
        <Link to={"/"}>
          <img src={LogoSvg} width={200} className="rounded-sm" />
        </Link>
        <div className="grow flex gap-2 items-center justify-between">
          <button
            className="bg-white rounded-full p-2 flex items-center justify-center font-semibold"
            onClick={() => handleNavigate("/")}
          >
            Ver productos
          </button>
          <button
            className="bg-white rounded-full p-2 flex items-center justify-center relative"
            onClick={() => handleNavigate("/cart")}
          >
            <img src={CartSvg} width={24} />
            {quantity > 0 && (
              <div className="absolute -top-3 -right-2 right-0 bg-yellow-400 rounded-full w-[24px] h-[24px] text-sm font-bold flex items-center justify-center">
                <span>{quantity}</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
