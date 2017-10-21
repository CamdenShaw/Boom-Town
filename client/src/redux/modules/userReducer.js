const initialState = {
  id: [],
  errorMSG: {},
  isLoading: false,
  allUsers: [],
  filteredUsers: []
}

const mergeItemsToUsers = (items, users) => {
  return items.map(item => {
    return {
      ...item,
      user: users.filter(user => user.id === item.itemOwner )
    }
  })
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CARD_ITEMS_BEGIN':
    case 'GET_USERS_BEGIN':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_USERS_SUCCESS':
      return {
        ...state
      }
    case 'GET_CARD_ITEMS_SUCCESS':
      return {
        ...state,
        allUsers: mergeItemsToUsers( action.users, action.items),
        id: mergeItemsToUsers( action.users, action.items ),
        isLoading: false
      }
    case 'GET_USERS_FAIL':
    case 'GET_CARD_ITEMS_FAIL':
      return {
        ...state,
        errorMSG: action.err,
        isLoading: false
      }
    default:
      return state
  }
}