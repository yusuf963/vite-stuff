import { CART_INITIAL_STATE } from "./state";
import { CART_ACTIONS } from "./action";

export const cartReducer = (state = CART_INITIAL_STATE, action: any) => {
  if (action.type === CART_ACTIONS.INCREASE_CART_ITEM) {
    if (state.cartItems.find((item) => item.id === action.payload)) {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
      });

      const newCart = {
        ...state,
        cartItems: [...state.cartItems],
      };
      return newCart;
    }
    return state;
  }
  if (action.type === CART_ACTIONS.DECREASE_CART_ITEM) {
    if (state.cartItems.find((item) => item.id === action.payload)) {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity--;
          if (item.quantity < 0) {
            item.quantity = 0;
          }
        }
      });

      const newCart = {
        ...state,
        cartItems: [...state.cartItems],
      };
      return newCart;
    }
    return state;
  }
  if (action.type === CART_ACTIONS.ADD_TO_CART) {
    if (state.cartItems.find((item) => item.id === action.payload.id))
      return state;
    const newCart = {
      ...state,
      cartItems: [...state.cartItems, action.payload],
    };
    return newCart;
  }
  if (action.type === CART_ACTIONS.REMOVE_FROM_CART) {
    const newCart = {
      ...state,
      cartItems: state.cartItems.filter((item) => item.id !== action.payload),
    };
    return newCart;
  }
  return state;
};
