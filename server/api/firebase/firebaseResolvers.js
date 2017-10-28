import fetch from 'node-fetch'

import { getUser, getUsers } from './firebaseHelpers'

const resolversFunction = {
  Query: {
    users() {
      return getUsers('users')
    },
    user(root, { id }) {
      return getUser('users', id)
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