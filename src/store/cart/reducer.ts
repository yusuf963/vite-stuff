import { CART_INITIAL_STATE } from "./state";
import { CART_ACTIONS } from "./action";

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  if (action.type === CART_ACTIONS.ADD_TO_CART) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
