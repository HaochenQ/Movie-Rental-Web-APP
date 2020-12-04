import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 mb-5">Backstage Management System</h1>
        <p className="lead">
          This is the backstage management system for movie rental shop - Movie
          Buff.
        </p>
        <hr class="my-4"></hr>
        <p className="lead">
          Please log in to get the full access to the system.
        </p>
        <Link to="/movies">
          <button className="btn btn-secondary btn-md mb-3">
            Check Movies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
