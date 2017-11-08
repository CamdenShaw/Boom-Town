import { combineReducers } from 'redux'
// import { cardReducer, userReducer, authReducer } from './modules'
import cardReducer from './modules/cardReducers'
import userReducer from './modules/userReducer'
import authReducer from './modules/authReducer'
import {reducer as formReducer} from 'redux-form'
import client from '../config/apolloClient'

export default combineReducers({
  apollo: client.reducer(),
  users: cardReducer,
  items: userReducer,
  form: formReducer,
  auth: authReducer,
  // tags: tagData
})