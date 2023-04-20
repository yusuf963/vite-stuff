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

export const increaseCartItemAction = (payload) => {
  console.log("increaseCartItemAction", payload);
  return { type: CART_ACTIONS.INCREASE_CART_ITEM, payload };
};
export const decreaseCartItemAction = (payload) => {
  console.log("decreaseCartItemAction", payload);

  return { type: CART_ACTIONS.DECREASE_CART_ITEM, payload };
};

export const ClearCartAction = (payload) => {
  return { type: CART_ACTIONS.CLEAR_CART, payload };
};
export const removeFromCartAction = (payload) => {
  console.log("removeFromCartAction", payload);

  return { type: CART_ACTIONS.REMOVE_FROM_CART, payload };
};

export const toggleCartAction = (payload) => {
  return { type: CART_ACTIONS.TOGGLE_CART, payload };
};
