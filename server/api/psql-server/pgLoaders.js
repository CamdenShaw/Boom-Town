import DataLoader from 'dataloader';
import { getItems, getItem } from './pgHelpers';
import { fetchFunction } from '../json-server/jsonHelpers'

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getItems(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getItems(id)))
    )),
    ItemBorrower: new DataLoader(ids => (
      Promise.all(ids.map(id => fetchFunction('users', id)))
    )),
    ItemOwner: new DataLoader(ids => (
      Promise.all(ids.map(id => fetchFunction('users', id)))
    )),
  }
};