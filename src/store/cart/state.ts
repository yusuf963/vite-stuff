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
  cartTotal: 1,
  cartCount: 0,
};
