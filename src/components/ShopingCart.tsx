import { connect } from "react-redux";
import { removeFromCartAction } from "../store/cart/action";
const ShopingCart = ({ cart, remove }) => {
  const caculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total;
  };
  const total = <h4>Total {caculateTotal()} </h4>;

  const handleRemove = (id) => {
    console.log("id", id);
    // const newCart = cart.filter((item) => item.id !== id);
    remove(id);
  };

  return (
    <div>
      <h1>Shoping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span> <span>£{item.price}</span>
          <span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </span>
        </div>
      ))}
      {total}
    </div>
  );
};

const mapStateToProp = (state) => {
  console.log(" all state", state);

  return {
    cart: state.cartStore.cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeFromCartAction(id)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ShopingCart);
