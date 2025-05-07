import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, reduceQuantity } from '../redux/cartSlice';
import PropTypes from 'prop-types';
import './ProductList.css'; // Import the CSS file

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="product-list">
      <h2>Cart</h2>
      {cart.length === 0 ? <p>No items in cart</p> : (
        <>
          {cart.map(item => (
            <div key={item.id} className="product-item">
              <div className="product-info">
                <div className="product-name">{item.name}</div>
                <div className="product-price">{item.quantity} x ${item.price} = ${item.price * item.quantity}</div>
              </div>
              <div>
                <button  onClick={() => dispatch(reduceQuantity(item.id))}>Reduce Quantity</button>
                <button  onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default Cart;
