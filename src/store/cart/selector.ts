import { createSelector } from "reselect";

type stateStore = {
  [key: string]: any;
};

export const cartSelector = (state: any) => state.cart;

export const cartItemsSelector = createSelector<stateStore, any, any>(
  [cartSelector],
  (cart) => cart.cartItems
);
