import DataLoader from 'dataloader';
import { fetchFunction } from './jsonHelpers';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => fetchFunction('users', id))
    ))),
    // other data loaders go here...
  }
};