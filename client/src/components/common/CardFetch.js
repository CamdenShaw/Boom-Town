import React, { Component } from 'react'
import { ItemCard } from './ItemCard'
import Masonry from 'react-masonry-component'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { connect } from 'react-redux'
import { getCardItems } from '../../redux/modules'

class CardFetch extends Component {


  componentDidMount() {

    this.props.getCardItems()
  }

  render() {

    console.log('CardFetch', this.props)

    return ( <Masonry className={'item-gallery'} elementType={'ul'} >
    
      {
        this.props.allItems.map((item) =>
          <li style={{padding: '1%', width: '33.333333333333%'}}><ItemCard fetchItem={ item } users={ this.props.users } /></li>
        )
      }
    </Masonry> )
  }
}


export default connect((store) => store.users, { getCardItems })(CardFetch)