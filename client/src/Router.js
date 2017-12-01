import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import PrivateRouter from "./components/PrivateRouter"
import Login from "./containers/Login"
import Layout from "./components/Layout"
import Home from "./containers/Home"
import Profile from "./containers/Profile"
import SharePage from "./containers/SharePage"

const NotFound = () => <Redirect to="/404" />
const p404 = () => <div>Error 404. Sorry, no no such page exists</div>

class Routers extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <PrivateRouter exact path="/" component={Home} />
                        <PrivateRouter path="/profile/:userid" component={Profile} />
                        <Route path="/login" component={Login} />
                        <PrivateRouter path="/share" component={SharePage} />
                        <Route path="/404" component={p404} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

export default Routers
