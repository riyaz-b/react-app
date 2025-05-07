import React from "react";
import { useSelector } from "react-redux";

const ExampleComponent = () => {
  const cart = useSelector((state) => state.cart);
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>Cart Items: {cart.length}</h1>
      <h1>Books: {books.length}</h1>
    </div>
  );
};

export default ExampleComponent;