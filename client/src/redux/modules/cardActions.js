import { mainURL } from '../../constants';
import { getUsers } from './userActions'

const getCardItemsBegin = () => {
  return { type: 'GET_CARD_ITEMS_BEGIN' }
}

const getCardItemsSuccess = (items, users) => {
  return {
    type: 'GET_CARD_ITEMS_SUCCESS',
    items, users
  }
}

const getCardItemsFail = (error) => {
  return {
    type: 'GET_CARD_ITEMS_FAIL',
    error
  }
}

export const getCardItems = () => {
  return (dispatch) => {
    dispatch(getCardItemsBegin());
    return fetch(`${mainURL}/items`)
        .then(resp => resp.json())
        .then(items => {
          return getUsers(dispatch).then(users => {
            dispatch(getCardItemsSuccess(items, users))
          })
        })
        .catch(err => {
          dispatch(getCardItemsFail(err))
        })
  }
}

const initialState = {
  // users: [],
  // errorMSG: {},
  // isLoading: false,
  // allItems: [],
  filteredItems: []
}

// const mergeUsersItems = (users, items) => {
//   return users.map(user => {
//     return {
//       ...user,
//       items: items.filter(item => item.itemOwner === user.id)
//     }
//   })
// }

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CARD_ITEMS_BEGIN':
      return {
        ...state,
        // isLoading: true
      }
    case 'GET_CARD_ITEMS_SUCCESS':
      return {
        ...state,
        // allItems: mergeUsersItems(action.items, action.users),
        // users: mergeUsersItems(action.users, action.items),
        // isLoading: false
      }
    case 'GET_CARD_ITEMS_FAIL':
      return {
        ...state,
        // errorMSG: action.err,
        // isLoading: false
      }
    default:
      return state
  }
}