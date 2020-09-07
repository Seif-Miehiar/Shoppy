import React, {useState} from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import "./signup.css";

const Signup = () => {

  const[formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: false,
    errorMsg: false,
    loading: false
  });

  const {
    username, 
    email, 
    password, 
    confirmPassword, 
    successMsg, 
    errorMsg,
    loading} = formData;

    // event handlers 

    const handleChange = (event) => {
      // console.log(event.target.value)
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }

    // handle submit button
    const handleSubmit = (event) => {
      // stopping the browser to reload on submit
      event.preventDefault();
      // console.log(formData);

      // client-side validation
      if ( isEmpty(username) ||  isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword) ) {
        setFormData({
          ...formData, errorMsg: "All fields are required"
        })
      }
    }

    //views
  const showSignupForm = () => (
    <form className="signup-form" onSubmit={handleSubmit}>
      {/* username */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input 
        name="username"
        value={username}
        className="form-control"
        placeholder="Username"
        type="text" 
        onChange={handleChange}
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
        name="email"
        value={email}
        className="form-control"
        placeholder="Email address"
        type="email"
        onChange={handleChange}
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
        name="password"
        value={password}
        className="form-control"
        placeholder="Create password"
        type="password"
        onChange={handleChange}
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
        name="confirmPassword"
        value={confirmPassword}
        className="form-control"
        placeholder="Confirm password"
        type="password"
        onChange={handleChange}
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
      <p style={{color:'red'}} >

      {JSON.stringify(formData)}
      </p>
        </div>
      </div>
    </div>
  )
}

export default Signup;