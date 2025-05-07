import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
// Provider makes the Redux store available to all components via React-Redux hooks.
// (State Management/Connecting Components/Context API)
// BrowserRouter is used for client-side routing 
// (Managing URLs/Client-Side Navigation/HTML5 History API:)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

);



