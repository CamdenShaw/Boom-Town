import DataLoader from 'dataloader'
import { fetchStackedLoader, fetchFunction } from './jsonHelpers'
import { database } from '../index'

export default function() {
    return {
        UserOwnedItems: new DataLoader(ids => (
            Promise.all(ids.map(id => database.getItemByOwner(id)))
        )),
        UserBorrowedItems: new DataLoader(ids => {
            console.log(ids)
            let x = []
            return Promise.all(ids.map(id => database.getItemByBorrowed(id)))
        }),
        ItemBorrower: new DataLoader(ids => (
            Promise.all(ids.map(id => fetchFunction('users', id)))
        )),
        ItemOwner: new DataLoader(ids => (
            Promise.all(ids.map(id => fetchFunction('users', id)))
        )),
        GetItem: new DataLoader(ids => (
            Promise.all(ids.map(id => database.getItem(id)))
        ))
    }
}