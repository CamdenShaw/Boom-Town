import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { ItemCard } from '../ItemCard'
import { getCardItems } from '../../redux/modules'

class CardFetchUsers extends Component {

  render() {

    const { data } = this.props

    return ( <Masonry className={'item-gallery'} elementType={'ul'} >
      {
        !data.loading ? 
        data.users.map((item) =>
          <li style={{padding: '1%', width: '33.333333333333%'}}><ItemCard fetchItem={ item } /></li>
        )
        : false
      }
    </Masonry> )
  }
}

const fetchUserData = gql`
  query {
    id
    email
    fullname
    bio
    itemsowned {
      id
      title
      description
      imageurl
      tags
      itemowner {
        id
        email
        fullname
        bio
      }
      created
      available
      borrower {
        fullname
      }
    }
    itemsborrowed {
      id
      title
      description
      imageurl
      tags
      itemowner {
        id
        email
        fullname
        bio
      }
      created
      available
      borrower {
        fullname
      }
    }
  }
`
const mapStateToProps = state => ({ filters: state.users.filters });


export default graphql(fetchUserData)(CardFetchUsers)