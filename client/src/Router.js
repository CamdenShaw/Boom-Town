import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import PrivateRouter from "./components/PrivateRouter/PrivateRouter"
import Login from './containers/Login'
import Layout from './components/Layout';
import CardFetchItems from './components/common/CardFetchItems'
import CardFetchUsers from './components/common/ProfileFetch'
import SharePage from './containers/SharePage'

const Home = () => <CardFetchItems />
const Profile = () => <CardFetchUsers />
const NotFound = () => <div>Error 404.  Sorry, no no such page exists</div>
const LogiN = () => <Login />
const Share = () => <SharePage />

class Routers extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={LogiN} />
            <Route path="/share" component={Share} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default Routers;