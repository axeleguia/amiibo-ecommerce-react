import { Dispatch, createContext } from "react";
import { ICartAction, ICartState } from "./cartReducer";

interface CartContextType {
    state: ICartState;
    dispatch: Dispatch<ICartAction>;
}

export const CartContext = createContext({} as CartContextType);
