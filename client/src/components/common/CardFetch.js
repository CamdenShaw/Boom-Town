import React, { Component } from 'react'
import { ItemCard } from './ItemCard'

import { connect } from 'react-redux'
import { getCardItems } from '../../actions'

class CardFetch extends Component {


  componentDidMount() {

    this.props.getCardItems()
  }

  render() {

    console.log('CardFetch', this.props)

    return ( this.props.allItems.map((item) => <ItemCard fetchItem={ item } users={ this.props.users } />))
  }
}


export default connect((store) => store.users, { getCardItems })(CardFetch)