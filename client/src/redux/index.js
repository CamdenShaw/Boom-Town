import { combineReducers } from 'redux'
import cardReducer from './cardReducers'
import userReducer from './userReducer'
import client from '../config/apolloClient'

export default combineReducers({
  apollo: client.reducer(),
  users: cardReducer,
  items: userReducer
})