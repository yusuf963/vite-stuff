import { connect } from "react-redux";
import { store } from "../store/rootReducer";
import {
  removeFromCartAction,
  increaseCartItemAction,
  decreaseCartItemAction,
} from "../store/cart/action";

type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
console.log("store", store.getState().trainsStore);

const ShopingCart = ({ cart, remove, increaseCartItem, decreaseCartItem }) => {
  console.log("cart", cart);

  let itemQuantity = 0;
  let itemTotal = 0;
  cart.forEach((item: Item) => {
    itemQuantity++;
    itemTotal += item.price * item.quantity;
    console.log("itemTotal", itemTotal);
  });
  let total = 0;
  cart.forEach((item: Item) => {
    total += item.price;
  });
  const totalPrice = <h4>Total {itemTotal} </h4>;

  const handleRemove = (id: number) => {
    remove(id);
  };
  const handleAddOneMore = (itemId: number) => {
    increaseCartItem(itemId);
    console.log("add one more");
  };

  const handleDecreaseItemQuantity = (itemId: number) => {
    decreaseCartItem(itemId);
    console.log("decrease");
  };

  return (
    <div>
      <h1>Shoping Cart</h1>
      {cart.map((item: Item) => (
        <div key={item.id}>
          <span>{item.name}</span> <span>£{item.price}</span>
          <span>Quantity{item.quantity}</span>
          <span>
            <button onClick={() => handleAddOneMore(item.id)}>
              Increase quantity
            </button>
            <button onClick={() => handleDecreaseItemQuantity(item.id)}>
              decrease quantity
            </button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </span>
        </div>
      ))}
      {totalPrice}
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    cart: state.cartStore.cartItems,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: any }) => any
) => {
  return {
    remove: (id: number) => dispatch(removeFromCartAction(id)),
    increaseCartItem: (id: number) => dispatch(increaseCartItemAction(id)),
    decreaseCartItem: (id: number) => dispatch(decreaseCartItemAction(id)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ShopingCart);
