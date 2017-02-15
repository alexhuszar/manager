import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  const {payload} = action;

  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === {prop: 'name', value: 'jane'}
      return {...state, [payload.prop]: payload.value};
    case EMPLOYEE_CREATE :
      return INITIAL_STATE;

    case EMPLOYEE_SAVE_SUCCCESS :
      return INITIAL_STATE;

    default:
      return state;
  }
}
