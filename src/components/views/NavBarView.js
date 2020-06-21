import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
  
      <ul className="nav-links">
        <Link to="/home">
          <l1>Home</l1>
        </Link>
        <Link to="/login">
          <l1>Login</l1>
        </Link>
        <Link to="/signup">
          <l1>Signup</l1>
        </Link>
        <Link to="/recipes">
          <l1>Recipes</l1>
        </Link>
        <Link to="/reviews">
          <l1>Reviews</l1>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBarView;
