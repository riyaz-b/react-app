import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import State from "./pages/State";
import GetAPI from "./pages/GetAPI";
import GetAPIusingAxiosLib from "./pages/GetAPIusingAxiosLib";
import GetAPIusingAxiosLib1 from "./pages/GetAPIusingAxiosLib1";
import ShoppingCrtWithRedux from "./ShoppingCartWithRedux"



function App() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/work" style={{ margin: "0 10px" }}>Work</Link>
        {/* <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>   */}
        <Link to="/state" style={{ margin: "0 10px" }}>React State</Link>
        <Link to="/getApi" style={{ margin: "0 10px" }}>Get</Link>
        <Link to="/getApiAxios" style={{ margin: "0 10px" }}>Get using AXIOS</Link>
        <Link to="/getApiAxios1" style={{ margin: "0 10px" }}>API state change</Link>
        <Link to="/getShoppingCrtWithRedux" style={{ margin: "0 10px" }}>Shopping Cart With Redux</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        {/*   <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/state" element={<State />} />
        <Route path="/getApi" element={<GetAPI />} />
        <Route path="/getApiAxios" element={<GetAPIusingAxiosLib />} />
        <Route path="/getApiAxios1" element={<GetAPIusingAxiosLib1 />} />
        <Route path="/getShoppingCrtWithRedux" element={<ShoppingCrtWithRedux />} />
      </Routes>

    </div>
  );
}
export default App;
