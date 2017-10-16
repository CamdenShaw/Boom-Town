import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'

const Home = () => <div>Home</div>
const Profile = () => <div>Profile</div>
const NotFound = () => <div>Error 404.  Sorry, no no such page exists</div>
const Login = () => <Login />

class Router extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*put NotFound / LandingPage route & component here when in dev mode for a live site -> 'site under construction'*/}
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/Login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Router;
