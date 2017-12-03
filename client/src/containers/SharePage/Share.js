import React from "react"

import ShareForm from "../../components/ShareForm"
import ShareImage from "../../components/ShareImage"
import "./styles.css"

const Share = () => {
    return (
        <div className="share-container">
            <div className="share-image">
                <ShareImage />
            </div>
            <div className="share-form">
                <ShareForm />
            </div>
        </div>
    )
}

export default Share
