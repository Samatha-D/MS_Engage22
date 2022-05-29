import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHome: true,
    };
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-nav fixed-top">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => this.setState({ activeHome: true })}
          >
            Video Recorder
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li
                className={
                  this.state.activeHome ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => this.setState({ activeHome: true })}
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={
                  !this.state.activeHome ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => this.setState({ activeHome: false })}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
