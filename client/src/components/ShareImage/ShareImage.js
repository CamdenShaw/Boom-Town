import React from "react"
import placeholder from "../../images/item-placeholder.jpg"
import ItemCard from "../ItemCard"

import "./styles.css"

const ShareImage = ({ className }) => {
    return (
        <div className="share-image-body">
            <ItemCard />
        </div>
    )
}

export default ShareImage
