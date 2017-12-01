import React, { Component } from "react"
import { Link } from "react-router-dom"

import logo from "../../images/boomtown-logo.svg"

class Logo extends Component {
    render() {
        return (
            <Link to="/">
                <img src={logo} style={{ height: 50, margin: "0 5px", padding: 6 }} />
            </Link>
        )
    }
}

export default Logo
