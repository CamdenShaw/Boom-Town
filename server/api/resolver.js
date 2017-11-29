import fetch from 'node-fetch'
import { fetchFunction, fetchStacked, createNewItem } from './jsonHelpers'
import { database } from '../index'
import { getUsers, getUser } from './firebase/firebaseHelpers'

const resolversFunction = {
    Query: {
        items() {
            return database.getItems()
        },
        item(root, { id }, context) {
            return context.loaders.GetItem.load(id)
        },
        users() {
            return getUsers()
        },
        async user(root, { id }, context) {
            return await context.loaders.GetUser.load(id)
        }
    },
    Item: {
        async itemowner(item, arg, context) {
            return await context.loaders.GetUser.load(item.itemowner)
        },
        async borrower(item, arg, context) {
            if(item.borrower === null) return null
            return await context.loaders.GetUser.load(item.borrower)
        }
    },
    User: {
        async itemsowned(user, arg, context) {
            return await context.loaders.UserOwnedItems.load(user.id)
        },
        async itemsborrowed(user, arg, context) {
            return await context.loaders.UserBorrowedItems.load(user.id)
        }
    },
    Mutation: {
        addItem(root, { title, imageurl, description, itemowner, }) {
            return createNewItem( title, imageurl, description, itemowner )
        }
    }
}

export default resolversFunction