import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import rootReducer from './'

import client from '../config/apolloClient'

export default createStore (
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, client.middleware()))
)