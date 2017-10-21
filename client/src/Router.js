import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import Login from './containers/Login'
import Layout from './components/Layout';
import CardFetchItems from './components/common/CardFetchItems'
import CardFetchUsers from './components/common/ProfileFetch'

const Home = () => <CardFetchItems />
const Profile = () => <CardFetchUsers />
const NotFound = () => <div>Error 404.  Sorry, no no such page exists</div>
const LogiN = () => <Login />

class Routers extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={LogiN} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default Routers;