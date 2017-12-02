import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const MyProfile = ({ userId }) => {
    return (
        <Link to={`/profile/${userId}`}>
            <RaisedButton label="My Profile" primary />
        </Link>
    )
}

MyProfile.propTypes = {
    userId: PropTypes.string
}

export default MyProfile
