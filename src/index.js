import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' 
import App from './App'

import {store, persistor} from './redux/store'

ReactDOM.render(
 <Provider store={store}>
   <PersistGate persistor={persistor} >

  <BrowserRouter>
    <App />
  </BrowserRouter>
   </PersistGate>
  </Provider>,
  document.getElementById('root')
)
