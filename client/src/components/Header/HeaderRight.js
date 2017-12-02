import React, { Component } from "react"
import { Link } from "react-router-dom"

import ProfileButton from "../ProfileButton"
import Logout from "../Logout"

const HeaderRight = ({ userId, curUrl }) => {
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
                <ProfileButton userId={userId} />
            </div>
            <div className="logout-container">
                <Logout />
            </div>
        </div>
    )
}

export default HeaderRight
