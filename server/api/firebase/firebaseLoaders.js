import DataLoader from 'dataloader';
import { getItems } from '../psql-server/pgHelpers';
import { getUsers } from './firebaseHelpers'

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getItems(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getItems(id)))
    )),
    ItemBorrower: new DataLoader(ids => (
      Promise.all(ids.map(id => getUsers(id)))
    )),
    ItemOwner: new DataLoader(ids => (
      Promise.all(ids.map(id => getUsers(id)))
    )),
  }
};