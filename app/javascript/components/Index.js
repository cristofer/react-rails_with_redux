import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

import rootReducer from '../reducers'
import App from './App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

class Index extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Index
