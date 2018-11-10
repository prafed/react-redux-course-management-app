import { combineReducers } from 'redux'
import coursesReducer from './courseReducer'
import authorsReducer from './authorReducer'
import ajaxStatusReducer from './ajaxStatusReducer'

export default combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
  ajaxCallsInProgress: ajaxStatusReducer
})
