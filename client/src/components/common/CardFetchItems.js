import React, { Component } from 'react'
import { ItemCard } from './ItemCard'
import Masonry from 'react-masonry-component'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// import { connect } from 'react-redux'
import { getCardItems } from '../../redux/modules'

class CardFetchItems extends Component {

  componentDidMount() {

    // this.props.getCardItems()
  }

  render() {

    const { data } = this.props

    console.log('CardFetch', data)

    return ( <Masonry className={'item-gallery'} elementType={'ul'} >
    
      {
        !data.loading ? 
        data.items.map((item) =>
          <li style={{padding: '1%', width: '33.333333333333%'}}><ItemCard fetchItem={ item } /></li>
        )
        : false
      }
    </Masonry> )
  }
}

const fetchItemData = gql`
  query {
    items {
      id
      title
      description
      imageurl
      tags
      itemowner {
        bio
        id
        email
        fullname
      }
      created
      available
      borrower {
        fullname
      }
    }
  }
`
const mapStateToProps = state => ({ filters: state.items.filters });


export default graphql(fetchItemData)(CardFetchItems)

// WITH REDUX AND GRAPHQL
// const itemsListWithData = graphql(FetchItemData)(ItemList);
// export default connect(mapStateToProps)(itemsListWithData);

// WITH JUST REDUX
// export default connect((store) => store.users, { getCardItems })(CardFetch)