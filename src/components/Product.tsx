import { connect } from 'react-redux';
import { addtoCartAction } from '../store/cart/action';
const data = [
  {
    id: 1,
    name: 'Bike',
    price: 100,
    quantity: 1
  },
  {
    id: 2,
    name: 'Laptop',
    price: 200,
    quantity: 1
  },
  {
    id: 3,
    name: 'TV',
    price: 300,
    quantity: 1
  },
  {
    id: 4,
    name: 'Mobile',
    price: 400,
    quantity: 1
  }
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
            style={{ paddingTop: '30px' }}
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
    add: (id) => dispatch(addtoCartAction(id))
  };
};

export default connect(null, mapDispatchToProps)(Product);
