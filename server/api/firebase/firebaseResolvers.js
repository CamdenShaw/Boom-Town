import { database } from '../../index'
import fetch from 'node-fetch'

import { createNewItem } from './firebaseHelpers'
import { getUser, getUsers, getItem, getItems } from './firebaseHelpers'

const resolversFunction = {
  Query: {
    users() {
      try {
        return getUsers('users')
      } catch (e) {
        console.log(e);
      }
    },
    user(root, { id }, context) {
      try {
        return context.loaders.User.load(id)
      } catch (e) {
        console.log(e);
      }
    },
    items() {
      try {
        return database.getItems();
      } catch (e) {
        console.log(e);
      }
    },
    item(root, { id }) {
      try {
        return context.loader.Item.load(id)
      } catch (e) {
        console.log(e);
      }
    },
  },
  Item: {
    async itemowner(item) {
      if(!item.itemowner) return null
      return await getUsers(item.itemowner)
    },
    
    async borrower(item, arg, context) {
      if(!item.borrower) return null
      return await getUsers(item.borrower)
    }
  },
  User: {
    async itemsowned(user, arg, context) {
      if(!user.id) return null
      return await context.loaders.UserOwnedItems.load(user.id)
    },
    async itemsborrowed(user, arg, context) {
      if(!user.id) return null
      return await context.loaders.UserBorrowedItems.load(user.id)
    }
  },
  Tag: {
    async itemstagged(item, arg, context) {
      if(!item.id) return null
      return await context.loaders.TaggedItems.load(item.id)
    }
  },
  Mutation: {
    addItem(root, { title, imageurl, description, itemowner }) { 
      return createNewItem( title, imageurl, description, itemowner )
    }
  }
}

export default resolversFunction