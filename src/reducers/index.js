import { combineReducers } from 'redux'
import authReducer from './AuthReducer'
import employeeFormReducer from './employeeFormReducer'
import EmployeeReducer from './EmployeeReducer'

export default combineReducers({
  auth: authReducer,
  employeeForm: employeeFormReducer,
  employees: EmployeeReducer
})
