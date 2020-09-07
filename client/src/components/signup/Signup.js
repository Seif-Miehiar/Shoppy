import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {

  //views
  const showSignupForm = () => (
    <form className="signup-form">
      {/* username */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input 
        name=""
        className="form-control"
        placeholder="Username"
        type="text" 
        />
      </div>

      {/* email */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <input 
        name=""
        className="form-control"
        placeholder="Email address"
        type="email"
        />
      </div>

      {/* password */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
        className="form-control"
        placeholder="Create password"
        type="password"
        />
      </div>

      {/* password confirmation */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
        className="form-control"
        placeholder="Confirm password"
        type="password"
        />
      </div>

      {/* sign up button */}
      <div className="text-center text-white">
        <button type="submit" className="btn btn-primary btn-block">
          Create Account
        </button>
      </div>

      {/* already have account */}
      <p className="text-center text-white">
        Have an account? <Link to="/signin">Log In</Link>
      </p>
    </form>
  )
  
  // render
  return (
    <div className="signup-container">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
      {showSignupForm()}
        </div>
      </div>
    </div>
  )
}

export default Signup;