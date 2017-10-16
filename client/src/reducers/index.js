import { combineReducers } from 'redux'
import cardReducer from './cardReducers'
import userReducer from './userReducer'

export default combineReducers({
  users: cardReducer,
  items: userReducer
})