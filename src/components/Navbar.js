import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {props.home} <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className={`custom-control custom-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input
              type="checkbox"
              className="custom-control-input"
              onClick={props.toggleMode}
              id="customSwitches"
            />
            <label className="custom-control-label" htmlFor="customSwitches">
            {props.mode==='dark'?'Light Mode':'Dark Mode'}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
//set default prop
Navbar.defaultProps = {
  title: "Title Here",
  home: "Home",
  aboutText: "About",
  search: "Search Here",
};
//set propTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
