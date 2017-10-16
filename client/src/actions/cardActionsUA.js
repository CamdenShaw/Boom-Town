import { mainURL } from '../constants';

const getItemsBegin = () => {
  return { type: 'GET_ITEMS_BEGIN' }
}

const getItemsSuccess = () => {
  return {
    type: 'GET_ITEMS_SUCCESS'
  }
}

const getItemsFail = (error) => {
  return {
    type: 'GET_ITEMS_FAIL',
    error
  }
}

export const getItemsUA = (dispatch) => {
    dispatch(getItemsBegin());
    return fetch(`${mainURL}/items`)
        .then(resp => {
          dispatch(getItemsSuccess())
          return resp.json()
        })
        .catch(err => {
          dispatch(getItemsFail(err))
        })
}