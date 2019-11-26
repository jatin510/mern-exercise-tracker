import React, { Component } from "react";

export default class CreateUser extends Component {
  componentDidMount() {
    console.log("create user mounted");
  }
  render() {
    return (
      <div>
        <p>You are on the Create User Component</p>
      </div>
    );
  }
}
