import React, { Component } from "react"

import ProfileButton from "../ProfileButton"
import Logout from "../Logout"

class HeaderRight extends Component {
    render() {
        return (
            <div
                className="right-container"
                style={{
                    display: "flex",
                    width: "250px",
                    justifyContent: "space-around",
                    marginRight: 12,
                    marginTop: 6
                }}
            >
                <div className="my-profile-container">
                    <ProfileButton />
                </div>
                <div className="logout-container">
                    <Logout />
                </div>
            </div>
        )
    }
}

export default HeaderRight
