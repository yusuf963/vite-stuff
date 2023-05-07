export const CART_ACTIONS = {
  TOGGLE_CART: "TOGGLE_CART",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  INCREASE_CART_ITEM: "INCREASE_CART_ITEM",
  DECREASE_CART_ITEM: "DECREASE_CART_ITEM",
};

export type Item = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  dexcription?: string;
};

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [] as Item[],
  cartTotal: 0,
  cartCount: 0,
};
