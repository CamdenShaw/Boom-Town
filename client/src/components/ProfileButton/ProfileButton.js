import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import { Link } from "react-router-dom"

const MyProfile = ({ userId }) => {
    return (
        <Link to={`/profile?id=${userId}`}>
            <RaisedButton label="My Profile" primary />
        </Link>
    )
}

export default MyProfile
