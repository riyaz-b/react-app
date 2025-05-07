import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Login from "./login/Login";
import Signup from "./register/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
          <Link to="/signup" style={{ margin: "0 10px" }}>Signup</Link>
          <Link to="/dashboard" style={{ margin: "0 10px" }}>Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<ProtectedRoute />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;