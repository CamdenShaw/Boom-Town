import React, { Component }from 'react'
import { ItemCard }from './ItemCard'
import Masonry from 'react-masonry-component'
import { graphql }from 'react-apollo'
import gql from 'graphql-tag'

// import { connect } from 'react-redux'
import { getCardItems }from '../../redux/modules'

class CardFetchItems extends Component {

componentDidMount() {

// this.props.getCardItems()
}

  render() {

    const { data } = this.props
    if (data.loading) return <p>loading</p>

    return (
      <Masonry className='item-gallery' elementType={'ul'} >
        {data.items.map((item, key) => (
            <li key={key} style={{padding:'1%', width:'33.333333333333%'}} >
              <ItemCard fetchItem={item} />
            </li>
        ))}
      </Masonry >
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
    }
  }
`

export default graphql(fetchItemData)(CardFetchItems)

// const mapStateToProps = state => ({ filters: state.items.filters });
// WITH REDUX AND GRAPHQL
// const itemsListWithData = graphql(FetchItemData)(ItemList);
// export default connect(mapStateToProps)(itemsListWithData);

// WITH JUST REDUX
// export default connect((store) => store.users, { getCardItems })(CardFetch)