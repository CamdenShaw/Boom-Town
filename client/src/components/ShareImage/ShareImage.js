import React from "react"
import PropTypes from "prop-types"
import placeholder from "../../images/item-placeholder.jpg"
import ItemCard from "../ItemCard"

import "./styles.css"

const ShareImage = ({ fetchItem }) => {
    return (
        <div className="share-image-body">
            <ItemCard fetchItem={fetchItem} />
        </div>
    )
}

ShareImage.defaultProps = {
    itemowner: {
        fullname: null,
        email: "email@email.email"
    }
}

export default ShareImage
