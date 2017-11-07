import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import PrivateRouter from "./components/PrivateRouter/PrivateRouter"
import LoginContainer from './containers/Login/LoginContainer'
import Layout from './components/Layout';
import CardFetchItems from './components/common/CardFetchItems'
import CardFetchUsers from './components/common/ProfileFetch'
import SharePage from './containers/SharePage'

let authenticated = false

const Home = () => <CardFetchItems />
const Profile = () => <CardFetchUsers />
const NotFound = () => <Redirect to="/404" />
const Login = () => <LoginContainer />
const Share = () => <SharePage />
const p404 = () => <div>Error 404.  Sorry, no no such page exists</div>

class Routers extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
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