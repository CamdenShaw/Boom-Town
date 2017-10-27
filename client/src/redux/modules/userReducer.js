const initialState = {
  // id: [],
  // errorMSG: {},
  // isLoading: false,
  // allUsers: [],
  filteredUsers: []
}

// const mergeItemsToUsers = (items, users) => {
//   return items.map(item => {
//     return {
//       ...item,
//       user: users.filter(user => user.id === item.itemOwner )
//     }
//   })
// }

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_USERS_BEGIN':
      return {
        ...state,
        // isLoading: true
      }
    case 'GET_USERS_SUCCESS':
      return {
        ...state
      }
    case 'GET_USERS_FAIL':
    default:
      return state
  }
}