import React, { Component } from "react"

import Logo from "../Logo"
import Search from "../Search"

class HeaderLeft extends Component {
    render() {
        return (
            <div className="left-container" style={{ height: 50, display: "flex" }}>
                <Logo />
                <Search />
            </div>
        )
    }
}

export default HeaderLeft
