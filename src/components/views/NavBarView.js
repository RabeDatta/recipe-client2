import React from "react";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav className="nav-wraper indigo">
      <div className="container">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/recipe-book-4-603316.png"
          style={{ width: "20px" }}
        />

        <ul className="right hide-on-med-and-down">
          <li>
            {" "}
            <Link to="/home"> Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/recipes"> Recipes </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/reviews"> Reviews </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/login"> Login </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/signup"> Signup </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/profile"> Profile </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarView;
