import React from "react"

import ShareForm from "../../components/ShareForm"
import ShareImage from "../../components/ShareImage"
import "./styles.css"

const Share = () => {
    return (
        <div className="share-container">
            <ShareImage className="share-image" />
            <ShareForm className="share-form" />
            {/* <div className="share-image">share image</div>
            <div className="share-form">share form</div> */}
        </div>
    )
}

export default Share
