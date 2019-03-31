import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import App from './App'

const store = createStore(rootReducer)

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
