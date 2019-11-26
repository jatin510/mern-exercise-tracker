import React, { Component } from "react";

export default class ExercisesList extends Component {
  componentDidMount() {
    console.log("exercise list mounted");
  }
  render() {
    console.log("hello");
    return (
      <div>
        <p>You are on the Exercises List Component</p>
      </div>
    );
  }
}
