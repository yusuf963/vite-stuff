import { connect } from "react-redux";
import { addtoCartAction } from "../store/cart/action";
const data = [
  {
    id: 1,
    name: "product 1",
    price: 100,
  },
  {
    id: 2,
    name: "product 2",
    price: 200,
  },
  {
    id: 3,
    name: "product 3",
    price: 300,
  },
  {
    id: 4,
    name: "product 4",
    price: 400,
  },
];
const Product = ({ add }) => {
  const addToCart = (e) => {
    const addedItem = data.find((item) => item.id === e);
    add(addedItem);
  };

  return (
    <div>
      <h1>Product</h1>
      <ul>
        {data.map((product) => (
          <div
            onClick={() => addToCart(product.id)}
            key={product.id}
            style={{ paddingTop: "30px" }}
          >
            <li>{product.name}</li>
            <li>${product.price}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (id) => dispatch(addtoCartAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
