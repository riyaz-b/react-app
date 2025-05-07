import React from 'react';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

import './ProductList.css'; // Import the CSS file


const products = [
  { id: 1, name: 'Phone', price: 599 },
  { id: 2, name: 'Laptop', price: 999 },
  { id: 3, name: 'Watch', price: 199 },
  { id: 4, name: 'Table', price: 10 },
];

// useDispatch() is a React-Redux hook that gives you access to the Redux store's dispatch function.
function ProductList() {
  const dispatch = useDispatch();


  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} className="product-item">
          <div className="product-info">
            <div className="product-name">{p.name}</div>
            <div className="product-price">${p.price}</div>
          </div>
          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );

}

export default ProductList;
