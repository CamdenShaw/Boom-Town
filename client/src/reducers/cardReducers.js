const initialState = {
  users: [],
  errorMSG: {},
  isLoading: false,
  allItems: [],
  filteredItems: []
}

const mergeUsersItems = (users, items) => {
  return users.map(user => {
    return {
      ...user,
      items: items.filter(item => item.itemOwner === user.id)
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
        allItems: mergeUsersItems(action.items, action.users),
        users: mergeUsersItems(action.users, action.items),
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