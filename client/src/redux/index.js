import { combineReducers } from 'redux'
import cardReducer from './modules/cardReducers'
import userReducer from './modules/userReducer'
import client from '../config/apolloClient'

export default combineReducers({
  apollo: client.reducer(),
  users: cardReducer,
  items: userReducer
})