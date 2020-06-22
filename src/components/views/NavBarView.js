import React from "react";
import { Link } from "react-router-dom";



/*
const NavLink = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}


const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
      </ul>
    </div>
  )
}


const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Signup</NavLink></li>
        <li><NavLink to='/'>Login</NavLink></li>
      </ul>
    </div>
  )
}


export default NavBarView;
*/



const NavBarView = (props) => {
  return (
    <nav class="naxbar-fixed">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul className="nav-links" id="nav-mobile" class="right hide-on-med-and-down">
        <li> <Link to="/home"> Home</Link> </li> 
        <li> <Link to="/login"> Login </Link> </li>
        <li> <Link to="/signup" > Signup </Link> </li>
        <li> <Link to="/recipes" > Recipes </Link> </li>
        <li> <Link to="/reviews" > Reviews </Link> </li>
      </ul>
    </div>
    </nav>
  );
};

export default NavBarView;


