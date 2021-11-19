import { Link, withRouter } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Accordion, Card, Button } from "react-bootstrap";
import { me } from "../lib";
import { useState, useEffect } from "react";
import { Component } from "react";
import dotenv from "dotenv/config";

class NavBar extends Component {
  state = {
    info: {
      query: "",
      input: "",
      fetchType: "",
    },
  };
  currentUser = this.props.currentUser;

  render() {
    return (
      <div className="navbar-container sticky-top">
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/home"} className="navbar-brand m-0" href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                width="36px"
              />
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div id="input-container">
              <i id="input-icon" class="bi bi-search"></i>
              <input
                className="ml-3 search"
                type="text"
                placeholder="Search"
                value={this.state.info.query}
                onChange={(e) =>
                  this.setState({
                    info: {
                      ...this.state.info,
                      query: e.currentTarget.value,
                    },
                  })
                }
              />
            </div>
            <>
              <div className="d-flex-col">
                {this.state.info.query.length > 3 ? (
                  <div className="position-absolute">
                    <div
                      onClick={(e) => {
                        this.setState({
                          ...this.state.info,
                          fetchType: "post",
                        });
                      }}
                    >
                      profile
                    </div>
                    <div
                      onClick={(e) => {
                        this.setState({
                          ...this.state.info,
                          fetchType: "post",
                        });
                      }}
                    >
                      post
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
            <div
              className="collapse navbar-collapse home-margin"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <div>
                  <li className="nav-item active navbar-li">
                    <Link to={"/home"}>
                      <img
                        className="darknavicon pt-3 ml-2"
                        src="https://img.icons8.com/material-rounded/50/000000/home.png"
                        width="22px"
                      />
                    </Link>
                    <Link
                      to={"/home"}
                      className="nav-link pt-0 ml-2 active"
                      href="#"
                    >
                      <span> Home </span>
                    </Link>
                  </li>
                </div>
                <div>
                  <li className="nav-item active navbar-li">
                    <img
                      className="darknavicon pt-3 ml-2"
                      src="https://img.icons8.com/fluency-systems-filled/50/000000/myspace.png"
                      width="22px"
                    />
                    <a className="nav-link pt-0 ml-2" href="#">
                      <span>Network</span>
                    </a>
                  </li>
                </div>
                <div>
                  <li className="nav-item active navbar-li">
                    <img
                      className="darknavicon pt-3 ml-2"
                      src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-bag-airport-kiranshastry-solid-kiranshastry.png"
                      width="22px"
                    />
                    <a className="nav-link pt-0 ml-2" href="#">
                      <span>Jobs</span>
                    </a>
                  </li>
                </div>
                <div>
                  <li className="nav-item active navbar-li">
                    <img
                      className="darknavicon pt-3 ml-2"
                      src="https://img.icons8.com/ios-glyphs/30/000000/sms.png"
                      width="22px"
                    />
                    <a className="nav-link pt-0 ml-2" href="#">
                      <span>Messaging</span>
                    </a>
                  </li>
                </div>
                <div>
                  <li className="nav-item active navbar-li">
                    <img
                      className="darknavicon pt-3 ml-2"
                      src="https://img.icons8.com/glyph-neue/30/000000/appointment-reminders.png"
                      width="22px"
                    />
                    <a className="nav-link pt-0 ml-2" href="#">
                      <span>Notifications</span>
                    </a>
                  </li>
                </div>
                <div className="xx  ">
                  <Link to={"/profile/" + this.props.currentUser._id}>
                    <Avatar
                      src={this.props.currentUser.image}
                      className="d-block avatar"
                      alt=""
                      sx={{ width: 24, height: 24 }}
                    />
                  </Link>
                  <div className="d-flex darknavicon mb-2 nav-work">
                    <div id="link">
                      <Link
                        to={"/profile/" + this.props.currentUser._id}
                        className="d-block pb-2"
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          lineSpace: "20px",
                        }}
                      >
                        <span className="text-dark">Me</span>
                      </Link>
                    </div>
                    <div className="arrow">
                      <h6 className="xxx  mb-2">
                        <img
                          src="https://img.icons8.com/ios-filled/30/000000/sort-down.png"
                          width="17px"
                        />
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="ml-2 pt-2 ">
                  <li className="nav-item active navbar-li">
                    <img
                      className="darknavicon mt-2 ml-2"
                      src="https://img.icons8.com/material-sharp/60/000000/activity-grid-2.png"
                      width="22px"
                    />
                    <a className="nav-link pt-0 ml-2" href="#">
                      <div className="d-flex nav-work">
                        <div id="">
                          <span>Work</span>
                        </div>
                        <div className="arrow">
                          <h6 className="xxx  mb-2">
                            <img
                              src="https://img.icons8.com/ios-filled/30/000000/sort-down.png"
                              width="17px"
                            />
                          </h6>
                        </div>
                      </div>
                    </a>
                  </li>
                </div>
                <div className="pt-3">
                  <a className="link-color navbar-li" href="#">
                    <span className="try-prem d-block mb-0">
                      Try premium for <br className="mt-0" /> free
                    </span>
                  </a>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
