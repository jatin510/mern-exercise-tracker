import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    console.log("navigation bar mounted");
  }
  render() {
    return (
      <div className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          ExerciseTracer
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercise
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Exercise
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
