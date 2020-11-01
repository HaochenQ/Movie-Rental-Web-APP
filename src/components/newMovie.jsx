import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { saveMovie } from "../services/fakeMovieService";

class NewMovie extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(1)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };

  doSubmit = () => {
    const { history } = this.props;
    saveMovie(this.state.data);
    history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Username")}
          {this.renderSelectMenu(
            ["Action", "Comedy", "Thriller"],
            "genre",
            "Genre"
          )}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate")}
          {this.renderButton("Save")}
          {console.log(this.state.data)}
        </form>
      </div>
    );
  }
}

export default NewMovie;
