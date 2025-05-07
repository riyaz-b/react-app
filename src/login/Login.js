import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    if (username === "riyaz" && password === "riyaz") {
      dispatch({ type: "LOGIN", payload: { username } });
      navigate("/dashboard"); // Redirect to a protected route
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;