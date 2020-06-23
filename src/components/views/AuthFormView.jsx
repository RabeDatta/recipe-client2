import React from "react";
import "./styles/AuthFormView.css";

// for login page and sign up page 

const AuthFormView = (props) => {
  const {
    name,
    displayName,
    handleSubmit,
    error,
    handleChange,
    isLoggedIn,
    userEmail,
  } = props;

  return (
    <div className= "login">
      {isLoggedIn ? `The current logged in user is: ${userEmail}` : ""}
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <input type="password" name="password" id="password"/>
        <input type="password" name="confirm" id="confirm-password"/>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

export default AuthFormView;
