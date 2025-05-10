import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./auth/AuthContext";
import Login from "./login/Login";
import Signup from "./register/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./auth/ProtectedRoute";
import { EmployeeProvider } from './employee-management/EmployeeContext';
import EmployeeManagement from './employee-management/EmployeeManagement';
import AxiosWithReactQuery from './concepts/AxiosWithReactQuery';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div>
          <nav style={{ padding: "10px", background: "#eee" }}>
            <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
            <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
            <Link to="/signup" style={{ margin: "0 10px" }}>Signup</Link>
            <Link to="/dashboard" style={{ margin: "0 10px" }}>Dashboard</Link>
            <Link to="/employee-management" style={{ margin: "0 10px" }}>Employee Management</Link>
            <Link to="/axios-with-react-query" style={{ margin: "0 10px" }}>Axios with React Query</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/*" element={<ProtectedRoute />} />
            <Route
              path="/employee-management"
              element={
                <EmployeeProvider>
                  <EmployeeManagement />
                </EmployeeProvider>
              }
            />
            <Route
              path="/axios-with-react-query"
              element={<AxiosWithReactQuery />}
            />
          </Routes>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;