import React, { useContext } from "react";
import { Navigate, Link, Routes, Route } from "react-router-dom";
import AuthContext from "./AuthContext";
import Work from "../pages/Work";
import State from "../pages/State";
import GetAPI from "../pages/GetAPI";
import GetAPIusingAxiosLib from "../pages/GetAPIusingAxiosLib";
import GetAPIusingAxiosLib1 from "../pages/GetAPIusingAxiosLib1";
import ShoppingCrtWithRedux from "../ShoppingCartWithRedux";
import BookList from "../bookstore/BookList";
import CreatePost from "../pages/CreatePost";

const ProtectedRoute = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch the logout action
  };

  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/dashboard/work" style={{ margin: "0 10px" }}>Projects</Link>
        <Link to="/dashboard/state" style={{ margin: "0 10px" }}>State Management</Link>
        <Link to="/dashboard/getApi" style={{ margin: "0 10px" }}>API Fetch</Link>
        <Link to="/dashboard/getApiAxios" style={{ margin: "0 10px" }}>Axios Integration</Link>
        <Link to="/dashboard/getApiAxios1" style={{ margin: "0 10px" }}>API State Updates</Link>
        <Link to="/dashboard/getShoppingCrtWithRedux" style={{ margin: "0 10px" }}>Redux Shopping Cart</Link>
        <Link to="/dashboard/bookstore" style={{ margin: "0 10px" }}>Book Management</Link>
        <Link to="/dashboard/create-post" style={{ margin: "0 10px" }}>Post API</Link>
        <button
          onClick={handleLogout}
          style={{
            marginLeft: "20px",
            padding: "5px 10px",
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </nav>

      <Routes>
        <Route path="work" element={<Work />} />
        <Route path="state" element={<State />} />
        <Route path="getApi" element={<GetAPI />} />
        <Route path="getApiAxios" element={<GetAPIusingAxiosLib />} />
        <Route path="getApiAxios1" element={<GetAPIusingAxiosLib1 />} />
        <Route path="getShoppingCrtWithRedux" element={<ShoppingCrtWithRedux />} />
        <Route path="bookstore" element={<BookList />} />
        <Route path="create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default ProtectedRoute;