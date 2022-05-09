import React from "react";
import { Link } from "react-router-dom";
export const Signin = () => {

 




  return (
    <div id="signin">
      <h3>Sign in</h3>
      <input id="userE" type="text" placeholder="Email Address*" />
      <input
        id="userP"
        className="password"
        type="password"
        placeholder="Password*"
      /> <br />
      <Link to="/">
      <button id="createAccount">Sign in</button>
      </Link>
     
      {/* <i
        className="far fa-eye"
        id="togglePassword"
        style="margin-left: -30px; cursor: pointer;"
      ></i> */}
      <div id="mini">
        <div>
          <input className="checkbox" type="checkbox" />
          <p className="note">Remember me </p>
        </div>
        <a className="aclass" href="">
          Forgot password?
        </a>
      </div>
      <div className="info">
        <p>
          This site is protected by reCAPTCHA and the Google  
          <a className="links" href="">
            Privacy Policy
          </a>
          and
          <a className="links" href="">
            Terms of Service
          </a>
          apply.
        </p>
      </div>
      <hr />
      <h3>
        Don't have an account?  
        <Link to="/Signup"  >Create Account</Link> 
      </h3>
    </div>
  );
};
