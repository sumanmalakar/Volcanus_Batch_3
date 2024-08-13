import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="left">Brand</div>
        <div className="right">
          <Link to={"/"} className="items">
            Home
          </Link>
          <Link to={"/about"} className="items">
            About
          </Link>
          <Link to={"team/"} className="items">
            Team
          </Link>
          <Link to={"/career"} className="items">
            Career
          </Link>
          <Link to={"/contact"} className="items">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar