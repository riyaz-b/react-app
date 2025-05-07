import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import bookReducer from '../bookstore/bookSlice';

//This creates and exports a Redux store using configureStore.
//The reducer property is an object where each key-value pair represents a slice of the state and its corresponding reducer.
//In this case, the state slice cart is managed by cartReducer.
export const store = configureStore
  ({
    reducer:
    {
      cart: cartReducer,
      books: bookReducer, // Add the book reducer here
    },
  });

//configureStore: This function sets up the Redux store with good defaults, including middleware and DevTools integration 1.
//cartReducer: This reducer function handles actions related to the cart state slice 2.
//State Management: The store created here will manage the state of your application,
//specifically the cart slice in this example 3.
export default store;