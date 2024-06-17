import { ICartItem } from "../interface";

export interface ICartState {
  cartItems: ICartItem[];
  quantity: number;
}

export const initialState: ICartState = {
  cartItems: [],
  quantity: 0,
};

export interface ICartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAN_CART";
  payload: ICartItem;
}

export const cartReducer = (
  state: ICartState,
  action: ICartAction,
): ICartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        const cartItems = state.cartItems.map((item) =>
          item.id === id
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : item,
        );
        return {
          ...state,
          cartItems: cartItems,
          quantity: totalItems(cartItems),
        };
      } else {
        const cartItems = [...state.cartItems, action.payload];
        return {
          ...state,
          cartItems: cartItems,
          quantity: totalItems(cartItems),
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const { id: removeItemId } = action.payload;
      const itemToRemove = state.cartItems.find(
        (item) => item.id === removeItemId,
      );
      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          const cartItems = state.cartItems.filter(
            (item) => item.id !== removeItemId,
          );
          return {
            ...state,
            cartItems: cartItems,
            quantity: totalItems(cartItems),
          };
        } else {
          const cartItems = state.cartItems.map((item) =>
            item.id === removeItemId
              ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
              : item,
          );
          return {
            ...state,
            cartItems: cartItems,
            quantity: totalItems(cartItems),
          };
        }
      }
    }
    case "CLEAN_CART": {
      return {
        ...state,
        cartItems: [],
      };
    }
    default:
      return state;
  }
};

const totalItems = (items: ICartItem[]) =>
  items.reduce((acc, item) => acc + item.quantity, 0);
