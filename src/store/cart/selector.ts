import { createSelector } from "reselect";
import { STORESTATE } from "../../types";

export const cartSelector = (state: any) => state.cart;

export const cartItemsSelector = createSelector<STORESTATE, any, any>(
  [cartSelector],
  (cart) => cart.cartItems
);
