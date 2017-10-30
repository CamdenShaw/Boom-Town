import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import PrivateRouter from "./components/PrivateRouter/PrivateRouter"
import Login from './containers/Login'
import Layout from './components/Layout';
import CardFetchItems from './components/common/CardFetchItems'
import CardFetchUsers from './components/common/ProfileFetch'
import SharePage from './containers/SharePage'

const authenticated = false;
const Home = () => authenticated ? <CardFetchItems /> : <Redirect to="/login" />
const Profile = () => authenticated ? <CardFetchUsers /> : <Redirect to="/login" />
const NotFound = () => <Redirect to="/404" />
const LogiN = () => authenticated ? <Redirect to="/" /> : <Login />
const Share = () => authenticated ? <SharePage /> : <Redirect to="/login" />
const p404 = () => authenticated ? <div>Error 404.  Sorry, no no such page exists</div> : <Redirect to="/login" />

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
            <Route path="/404" component={p404} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default Routers;