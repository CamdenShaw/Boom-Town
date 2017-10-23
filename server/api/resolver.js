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
    async itemowner(item, arg, context) {
      // return fetchFunction('users', item.itemowner)
      return await context.loaders.ItemOwner.load(item.itemowner)
    },
    
    async borrower(item, arg, context) {
      // if( !item.borrower ) return null
      // return fetchFunction('users', item.borrower)
      return await context.loaders.ItemBorrower.load(item.borrower)
    }
  },
  User: {
    async itemsowned(user, arg, context) {
      // const response = await fetchStacked('items', 'itemowner', user.id)
      // await fetch(`${url}/items/?itemowner=${user.id}`)
      // const items = await response.json()
      return await context.loaders.UserOwnedItems.load(user.id)
      // return items
    },
    // created loaders for individual users, owned items and borrowed items, items and individual items
    async itemsborrowed(user, arg, context) {
      // const response = await fetchStacked('items', 'borrower', user.id)
      // //await fetch(`${url}/items/?borrower=${user.id}`)
      // const items = await response.json()
      // return items
      return await context.loaders.UserBorrowedItems.load(user.id)
    }
  },
  Mutation: {
    addItem(root, { title, imageurl, description, itemowner, tags }) { 
      return createNewItem( title, imageurl, description, itemowner, tags )
    }
  }
}

export default resolversFunction