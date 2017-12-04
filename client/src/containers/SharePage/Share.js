import React from "react"

import placeholderImage from "../../images/item-placeholder.jpg"
import ShareForm from "../../components/ShareForm"
import ShareImage from "../../components/ShareImage"
import "./styles.css"

const Share = ({ imageUrl, title, grabImage, fetchItem, loading, ...props }) => {
    fetchItem.imageurl = imageUrl
    return (
        <div className="share-container">
            <div className="share-image">
                <ShareImage fetchItem={fetchItem} />
            </div>
            <div className="share-form">
                <ShareForm
                    imageUrl={fetchItem.imageurl}
                    loading={loading}
                    grabImage={grabImage}
                    {...props}
                />
            </div>
        </div>
    )
}

Share.defaultProps = {
    fetchItem: {
        itemowner: {
            fullname: null,
            email: null
        },
        borrower: false,
        imageurl: placeholderImage,
        description: "Profound item description"
    }
}

export default Share
