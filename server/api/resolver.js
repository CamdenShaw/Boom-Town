import fetch from 'node-fetch'
import { fetchFunction, fetchStacked, createNewItem } from './jsonHelpers'

const url = 'http://localhost:3001'

const resolversFunction = {
  Query: {
    items() {
      return fetchFunction('items')
    },
    item(root, { id }) {
      return fetchFunction('items', id)
    },
    users() {
      return fetchFunction('users')
    },
    user(root, { id }) {
      return fetchFunction('users', id)
    }
  },
  Item: {
    itemowner(item) {
      return fetchFunction('users', item.itemowner)
    },
    
    borrower(item) {
      if( !item.borrower ) return null
      return fetchFunction('users', item.borrower)
    }
  },
  User: {
    async itemsowned(user, arg, context) {
      // const response = fetchStacked(url, 'items', 'itemowner', user.id)
      // await fetch(`${url}/items/?itemowner=${user.id}`)
      // const items = await response.json()
      // return items
      if ( !user.id ) return null
      try {
      return context.loaders.UserOwnedItems.load(user.id)
      } catch(e) {
        console.log(e)
      }
    },
    // created loaders for individual users, owned items and borrowed items, items and individual items
    async itemsborrowed(user) {
      const response = await fetchStacked('items', 'borrower', user.id)
      //await fetch(`${url}/items/?borrower=${user.id}`)
      const items = await response.json()
      return items
    }
  },
  Mutation: {
    addItem(root, { title, imageurl, description, itemowner, tags }) { 
      return createNewItem( title, imageurl, description, itemowner, tags )
    }
  }
}

export default resolversFunction