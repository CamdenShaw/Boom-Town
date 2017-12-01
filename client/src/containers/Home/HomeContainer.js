import React, { Component } from "react"
import Masonry from "react-masonry-component"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

import ItemCard from "../../components/ItemCard"
import { getCardItems } from "../../redux/modules"

class HomeContainer extends Component {
    render() {
        const { data } = this.props
        if (data.loading) return <p>loading</p>

        return (
            <Masonry className="item-gallery" elementType={"ul"}>
                {data.items.map((item, key) => (
                    <li key={key} style={{ padding: "1%", width: "33.333333333333%" }}>
                        <ItemCard fetchItem={item} />
                    </li>
                ))}
            </Masonry>
        )
    }
}

const fetchItemData = gql`
    query {
        items {
            id
            title
            description
            imageurl
            itemowner {
                bio
                id
                email
                fullname
            }
            created
            borrower {
                fullname
            }
            tags {
                tag
            }
        }
    }
`

export default graphql(fetchItemData)(HomeContainer)
