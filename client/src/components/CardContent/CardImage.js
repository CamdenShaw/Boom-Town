import React from "react"
import { CardMedia, CardTitle } from "material-ui"

const CardImage = ({ borrower = false, title, imageUrl }) => {
    return (
        <CardMedia
            style={{ margin: 0 }}
            overlay={
                borrower && (
                    <CardTitle
                        style={{ margin: 0 }}
                        subtitle={borrower && "Unavailable"}
                    />
                )
            }
        >
            <img src={imageUrl} alt="" />
        </CardMedia>
    )
}

export default CardImage
