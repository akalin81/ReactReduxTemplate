 import { createStore, applyMiddleware, compose } from 'redux'
 import thunkMiddleware from 'redux-thunk'
 import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { createHistory } from 'history';
import routes from '../routes'

export default function configureStore(initialState) {

  let csmiddle;
  const logger = createLogger();

  const mid = applyMiddleware(thunkMiddleware, logger);

  csmiddle = compose (mid);

  const store = csmiddle(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.
