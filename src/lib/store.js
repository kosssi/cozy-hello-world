import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// import appReducers from '../reducers'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunkMiddleware, loggerMiddleware]

export default createStore(
  // appReducers,
  composeEnhancers(applyMiddleware.apply(null, middlewares))
)
