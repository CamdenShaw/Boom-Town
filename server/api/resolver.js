import fetch from "node-fetch"
import { fetchFunction, fetchStacked, createNewItem } from "./jsonHelpers"
import { database } from "../index"
import { getUsers, getUser } from "./firebase/firebaseHelpers"

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
        user(root, { id }, context) {
            return context.loaders.GetUser.load(id)
        },
        tags() {
            return database.getTags()
        },
        tag(root, { id }, context) {
            return context.loaders.GetTag.load(id)
        }
    },
    Item: {
        async itemowner(item, arg, context) {
            return await context.loaders.GetUser.load(item.itemowner)
        },
        async borrower(item, arg, context) {
            if (item.borrower === null) return null
            return await context.loaders.GetUser.load(item.borrower)
        },
        async tags(item, arg, context) {
            return await database.getTags(item.id)
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
    Tag: {
        async itemstagged(tag, arg, context) {
            return await context.loaders.ItemsTagged.load(tag.id)
        },
    },
    Mutation: {
        addItem(root, { title, imageurl, description, itemowner }) {
            return createNewItem(title, imageurl, description, itemowner)
        }
    }
}

export default resolversFunction
