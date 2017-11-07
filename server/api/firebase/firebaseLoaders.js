import DataLoader from 'dataloader';
import { getUsers, getItems, getUser, getItem, getTag } from './firebaseHelpers'

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getItems(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getItems(id)))
    )),
    User: new DataLoader(ids => (
      Promise.all(user.map((id) => getUser(id)))
    )),
    Item: new DataLoader(ids => (
      Promise.all(item.map((id) => getItem(id)))
    )),
    TaggedItems: new DataLoader(ids => (
      Promise.all(tag.map((id) => getTag(id)))
    ))
    // ItemBorrower: new DataLoader(ids => (
    //   Promise.all(ids.map(id => getUsers(id)))
    // )),
    // ItemOwner: new DataLoader(ids => (
    //   Promise.all(ids.map(id => getUsers(id)))
    // )),
  }
};