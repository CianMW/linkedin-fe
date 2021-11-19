import React from "react";
import "./style.css";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useState, useEffect } from "react";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="box">
      <div className="p-5 card101 container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card card102">
              <div className="row no-gutters">
                <div className="col-md-4 first">
                  <div className="linkedin">
                    <span className="no-gutters text-primary font-weight-bold">
                      Linked
                    </span>
                    <span className="in">in</span>
                  </div>
                </div>
                <div className="col-md-6 second pl-4 pr-4">
                  <h4 className="welcome text-primary">Welcome</h4>
                  <div className="form-group">
                    {" "}
                    <input
                      type="email number"
                      name="email number"
                      placeholder="Email or Phone"
                      className="form-control"
                    />{" "}
                    <input
                      type="Password"
                      name="Password"
                      placeholder="Password"
                      className="form-control"
                    />
                    <div className="forgot">
                      <span>Forgot Password?</span>
                    </div>
                  </div>
                  <div className="col s12 m6 offset-m3 center-align">
                    <a
                      className="btn darken-4 white black-text btn-outline-dark"
                      href="http://localhost:3001/google"
                      style={{ textTransform: "none" }}
                    >
                      <div className="left">
                        <img
                          width="20px"
                          style={{ marginTop: 7, marginRight: 8 }}
                          alt="Google sign-in"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        />
                      </div>
                      Login with Google
                    </a>
                  </div>
                  <div className="space">
                    {" "}
                    <button
                      type="button"
                      className="btn btn102 btn-primary btn101"
                    >
                      Login
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn102 btn-primary btn201"
                    >
                      Sign Up
                    </button>{" "}
                  </div>

                  <div className="row">
                    <div className="col-sm-4 under">
                      {" "}
                      <span>Copyright Policy</span>
                      <p>User Agreement</p>
                    </div>
                    <div className="col-sm-3 under">
                      {" "}
                      <span>Privacy Policy</span>
                      <p>Cookie Policy</p>
                    </div>
                    <div className="col-sm-4 under">
                      {" "}
                      <span>Send Feedback</span>
                      <p>Community Guidelines</p>
                    </div>
                    <div className="col-md-1	">
                      <p> </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <p className="lower">Linkedin © 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
