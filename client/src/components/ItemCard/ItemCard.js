import React, { Component } from "react"
import {
    Card,
    CardActions,
    CardMedia,
    CardTitle,
    CardText
} from "material-ui"
import { Link } from 'react-router-dom'
import RaisedButton from "material-ui/RaisedButton"
import Gravatar from "react-gravatar"
import PropTypes from 'prop-types'

import CardAuthor from "../CardContent/CardAuthor"
import CardImage from "../CardContent/CardImage"
import CardContentText from '../CardContent/CardContentText'
import CardButton from '../CardContent/CardButton'
import CardTitleSubtitle from "../CardContent/CardTitleSubtitle"
import home from "../../images/home-tr.svg"
import placeholderImage from "../../images/item-placeholder.jpg"

const ItemCard = ({ fetchItem, borrowItem }) => {
    const userName = fetchItem.itemowner.fullname
    const userEmail = fetchItem.itemowner.email
    let tags = ""
    let x = true
    let y = ""
    if (fetchItem.tags) {
        Object.values(fetchItem.tags).forEach(tag => {
            if (x === false) y = ", "
            if (x === true) x = false
            tags += `${y}${tag.tag}`
        })
    } else {
        tags = "No Tags"
    }
    return (
        <Card containerStyle={{ maxHeight: "100%", padding: 0, margin: 0 }}>
            <CardImage borrower={fetchItem.borrower} title={fetchItem.title} imageUrl={fetchItem.imageurl} />
            <Link to={`/profile/${fetchItem.itemowner.id}`} > 
                <CardAuthor userName={userName} created={fetchItem.created} userEmail={userEmail} />
            </Link>
            <CardTitleSubtitle title={fetchItem.title} tags={tags} />
            <CardContentText description={fetchItem.description} />
            <CardButton borrower={fetchItem.borrower} borrowItem={borrowItem} />
        </Card>
    )
}

ItemCard.defaultProps = {
    fetchItem: {
        itemowner: {
            fullname: null,
            email: null
        },
        borrower: false,
        imageurl: placeholderImage,
        description: 'Profound item description'
    }
}

export default ItemCard