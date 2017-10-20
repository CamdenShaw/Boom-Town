import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

import client from './config/apolloClient'

const configStore = (initialState) => {
  const middleware = process.env.NODE_ENV !== 'production' ?
  [thunk, client.middleware(), createLogger()] : [ thunk, client.middleware() ]

  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

export default configStore