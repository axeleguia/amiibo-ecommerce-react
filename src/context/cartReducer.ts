import { ICartItem } from "../interface";

export interface ICartState {
  cartItems: ICartItem[];
}

export const initialState: ICartState = {
  cartItems: [],
};

export interface ICartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART",
  payload: ICartItem
}

export const cartReducer = (state: ICartState, action: ICartAction): ICartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === id
              ? { ...existingItem, quantity: existingItem.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const { id: removeItemId } = action.payload;
      const itemToRemove = state.cartItems.find(
        (item) => item.id === removeItemId
      );
      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== removeItemId),
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id !== removeItemId
                ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
                : item
            ),
          };
        }
      }
    }
    default:
      return state;
  }
};
