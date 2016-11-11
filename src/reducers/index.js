import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import employeeFormReducer from './employeeFormReducer'

export default combineReducers({
  auth: AuthReducer,
  employeeForm: employeeFormReducer
})
