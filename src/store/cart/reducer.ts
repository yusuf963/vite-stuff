import { CART_INITIAL_STATE } from "./state";
import { CART_ACTIONS } from "./action";

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  if (action.type === CART_ACTIONS.ADD_TO_CART) {
    if (state.cartItems.find((item) => item.id === action.payload.id)) {
      return state;
    }
    const newCart = {
      ...state,
      cartItems: [...state.cartItems, action.payload],
    };
    return newCart;
  }
  if (action.type === CART_ACTIONS.REMOVE_FROM_CART) {
    console.log("removeFromCartAction in red", action.payload);

    const newCart = {
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload),
    };
    return newCart;
  }
  return state;
};
