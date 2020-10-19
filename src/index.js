import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './container/App'
import { store } from './store/configureStore'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()