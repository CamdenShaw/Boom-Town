import React, { Component } from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { connect } from 'react-redux'

import Profile from "./Profile"

class ProfileContainer extends Component {

    id() {
        return this.props.match.params.userId
    }

    render() {
        const { data } = this.props
        return data.loading ? (
            <p>loading</p>
        ) : (
            <Profile data={data.user.itemsowned} user={data.user} />
        )
    }
}

const fetchItemData =  gql`
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

function mapStateToProps(state) {
    return {
        auth: state.auth.auth,
        userId: state.auth.userId
    }
}

const connectedProfile = connect(mapStateToProps)(ProfileContainer)

export default graphql(fetchItemData, {
        options: ownProps => ({
            x: console.log(ownProps),
            variables: { id: `${ownProps.match.params.userid}`}
        })
})(connectedProfile)