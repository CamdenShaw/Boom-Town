import React, { Component } from "react"
import Masonry from "react-masonry-component"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

import ItemCard from "../../components/ItemCard"
import { getCardItems } from "../../redux/modules"
import Home from "./Home"

class HomeContainer extends Component {
    render() {
        const { data } = this.props
        if (data.loading) return <p>loading</p>

        return <Home data={data} />
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
