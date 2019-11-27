import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    axios
      .get("https://localhost:5000/exercises")
      .then(response => {
        this.setState({
          exercises: response.data
        });
      })
      .then(err => console.log("error :" + err));
  }

  deleteExercise(id) {
    axios
      .delete("https://localhost:5000/exercises" + id)
      .then(res => console.log(res.data))
      .catch(err => `Error deleting exercise ${err}`);

    this.setState({
      exercises: this.state.exercises.filter(el => el._id != id)
    });
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
