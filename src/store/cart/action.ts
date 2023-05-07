import { CART_ACTIONS } from '../../types';

export const addtoCartAction = (payload) => {
  return { type: CART_ACTIONS.ADD_TO_CART, payload };
};

export const increaseCartItemAction = (payload) => {
  return { type: CART_ACTIONS.INCREASE_CART_ITEM, payload };
};
export const decreaseCartItemAction = (payload) => {
  return { type: CART_ACTIONS.DECREASE_CART_ITEM, payload };
};

export const ClearCartAction = (payload) => {
  return { type: CART_ACTIONS.CLEAR_CART, payload };
};
export const removeFromCartAction = (payload) => {
  return { type: CART_ACTIONS.REMOVE_FROM_CART, payload };
};

export const toggleCartAction = (payload) => {
  return { type: CART_ACTIONS.TOGGLE_CART, payload };
};
