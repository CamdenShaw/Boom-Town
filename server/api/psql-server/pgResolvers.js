import fetch from 'node-fetch'
import { fetchFunction, fetchStacked, createNewItem } from '../json-server/jsonHelpers'
import { getItems, getItem } from './pgHelpers'

const resolversFunction = {
  Query: {
    items() {
      return database.getItems()
    },
    item(root, { id }) {
      return getItem(id)
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
      return await context.loaders.ItemOwner.load(item.itemowner)
    },
    
    async borrower(item, arg, context) {
      if(!item.borrower) return
      return await context.loaders.ItemBorrower.load(item.borrower)
    }
  },
  User: {
    async itemsowned(user, arg, context) {
      return await context.loaders.UserOwnedItems.load(user.id)
    },
    async itemsborrowed(user, arg, context) {
      if(!user.itemsborrowed) return ''
      return await context.loaders.UserBorrowedItems.load(user.id)
    }
  },
  Mutation: {
    addItem(root, { title, imageurl, description, itemowner }) { 
      return createNewItem( title, imageurl, description, itemowner )
    }
  }
}

export default resolversFunction