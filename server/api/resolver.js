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
            console.log(id)
            return context.loaders.GetItem.load(id)
        },
        users() {
            return getUsers()
        },
        user(root, { id }) {
            return getUser(id)
        }
    },
    Item: {
        async itemowner(item, arg, context) {
            return await context.loaders.ItemOwner.load(item.itemowner)
        },
        async borrower(item, arg, context) {
            if(!item.borrower) return ''
            return await context.loaders.ItemBorrower.load(item.borrower)
        }
    },
    User: {
        itemsowned(user, arg, context) {
            console.log('itemsowned', user)
            return context.loaders.UserOwnedItems.load(user.id)
        },
        itemsborrowed(user, arg, context) {
            console.log("itemsborrowed", user)
            return context.loaders.UserBorrowedItems.load(user.id)
        }
    },
    Mutation: {
        addItem(root, { title, imageurl, description, itemowner, }) {
            return createNewItem( title, imageurl, description, itemowner )
        }
    }
}

export default resolversFunction