import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/toastr/build/toastr.min.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { loadCourses } from './actions/courseActions'
import { loadAuthors } from './actions/authorActions'
import configureStore from './store/configureStore'

const store = configureStore()
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
