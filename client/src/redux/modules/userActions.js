import { mainURL } from '../../constants';

const getUsersBegin = () => {
  return { type: 'GET_USERS_BEGIN' }
}

const getUsersSuccess = () => {
  return {
    type: 'GET_USERS_SUCCESS'
  }
}

const getUsersFail = (error) => {
  return {
    type: 'GET_USERS_FAIL',
    error
  }
}

export const getUsers = (dispatch) => {
    dispatch(getUsersBegin());
    return fetch(`${mainURL}/users`)
        .then(resp => {
          dispatch(getUsersSuccess())
          return resp.json()
        })
        .catch(err => {
          dispatch(getUsersFail(err))
        })
}