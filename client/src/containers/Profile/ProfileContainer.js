import React, { Component } from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

import Profile from "./Profile"

class ProfileContainer extends Component {
    render() {
        console.log(this.props)
        const { data } = this.props
        return data.loading ? (
            <p>loading</p>
        ) : (
            <Profile data={data.user.itemsowned} user={data.user} />
        )
    }
}

const fetchItemData = gql`
    query fetchItemData($id: ID!) {
        user(id: $id) {
            bio
            id
            email
            fullname
            itemsowned {
                id
                title
                description
                imageurl
                created
                borrower {
                    fullname
                }
                itemowner {
                    fullname
                    bio
                    email
                    id
                }
                tags {
                    tag
                }
            }
            itemsborrowed {
                id
                title
                description
                imageurl
                created
                borrower {
                    fullname
                }
                itemowner {
                    email
                    fullname
                    bio
                    id
                }
                tags {
                    tag
                }
            }
        }
    }
`

export default graphql(fetchItemData, {
    options: {
        variables: { id: "Qdd5HoEin0OPxNUZcB5sDc7xGHD2" }
    }
})(ProfileContainer)
