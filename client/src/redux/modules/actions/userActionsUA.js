import { mainURL } from '../constants';
import { getItemsUA } from './cardActionsUA'

const getUsersBeginUA = () => {
  return { type: 'GET_USERS_BEGIN_UA' }
}

const getUsersSuccessUA = (users, items) => {
  return {
    type: 'GET_USERS_SUCCESS_UA',
    users, items
  }
}

const getUsersFailUA = (error) => {
  return {
    type: 'GET_USERS_FAIL_UA',
    error
  }
}

export const getUsersUA = () => {
  return (dispatch) => {
    dispatch(getUsersBeginUA());
    return fetch(`${mainURL}/users`)
        .then(resp => resp.json())
        .then(users => {
          return getItemsUA(dispatch).then(items => {
            dispatch(getUsersSuccessUA(users, items))
          })
        })
        .catch(err => {
          dispatch(getUsersFailUA(err))
        })
  }
}