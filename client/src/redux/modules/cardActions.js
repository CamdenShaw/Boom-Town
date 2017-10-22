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