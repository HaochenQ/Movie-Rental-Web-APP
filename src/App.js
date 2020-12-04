import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/Movies";
import NavBar from "./components/navBar";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ProtectedRouter from "./components/common/protectedRouter";
import Logout from "./components/logout";
import auth from "./services/authService";
import Home from "./components/Home";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import Profile from "./components/Profile";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <ProtectedRouter path="/movies/:id" component={MovieForm} />
            <Route path="/movies">
              {(props) => <Movies {...props} user={this.state.user} />}
            </Route>
            <Route path="/profile">
              {(props) => <Profile {...props} user={this.state.user} />}
            </Route>
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={Home} />
            {/* <Redirect exact from="/" to="/movies" /> */}
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
