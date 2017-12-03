import React from "react"
import { CardHeader } from "material-ui"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Gravatar from "react-gravatar"

const CardAuthor = ({
    userName,
    created = "a few seconds ago",
    userEmail = "email@email.email"
}) => {
    return (
        <CardHeader
            title={userName}
            subtitle={created}
            avatar={<Gravatar style={{ borderRadius: "50%" }} email={`${userEmail}`} />}
        />
    )
}

export default CardAuthor
