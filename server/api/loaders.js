import DataLoader from "dataloader"
import { database } from "../index"
import { getUser } from "./firebase/firebaseHelpers"

export default function() {
    return {
        UserOwnedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => database.getItemByOwner(id)))
        ),
        UserBorrowedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => database.getItemByBorrowed(id)))
        ),
        GetItem: new DataLoader(ids => Promise.all(ids.map(id => database.getItem(id)))),
        GetUser: new DataLoader(ids => Promise.all(ids.map(id => getUser(id)))),
        GetTag: new DataLoader(ids => Promise.all(ids.map(id => database.GetTags(id))))
    }
}
