import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main_nav">
      <div className="nav">
        <Link to={"/"} className="left">Shopping Cart</Link>
        <div className="right">
          <Link to={"/add"} className="btn btn-primary mx-2">Add Product</Link>
          <button className="btn btn-success mx-2">Login</button>
          <button className="btn btn-secondary mx-2">Regiter</button>
          <button className="btn btn-warning mx-2">Profile</button>
          <button className="btn btn-info mx-2">Cart</button>
          <button className="btn btn-danger mx-2">LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
