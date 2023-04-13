export const CART_ACTIONS = {
  TOGGLE_CART: "TOGGLE_CART",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  INCREASE_CART_ITEM: "INCREASE_CART_ITEM",
  DECREASE_CART_ITEM: "DECREASE_CART_ITEM",
};

export const addtoCartAction = (payload) => {
  return { type: CART_ACTIONS.ADD_TO_CART, payload };
};

export const removeFromCArtAction = (payload) => {
  return { type: CART_ACTIONS.REMOVE_FROM_CART, payload };
};

export const toggleCartAction = (payload) => {
  return { type: CART_ACTIONS.TOGGLE_CART, payload };
};
