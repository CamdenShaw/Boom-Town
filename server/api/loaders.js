import DataLoader from 'dataloader';
import { fetchStackedLoader, fetchFunction } from './jsonHelpers';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => fetchStackedLoader('items', 'itemowner', id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => fetchStackedLoader('items', 'borrower', id)))
    )),
    ItemBorrower: new DataLoader(ids => (
      Promise.all(ids.map(id => fetchFunction('users', id)))
    )),
    ItemOwner: new DataLoader(ids => (
      Promise.all(ids.map(id => fetchFunction('users', id)))
    ))
    // other data loaders go here...
  }
};