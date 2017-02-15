import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS :
      return payload;
    default:
      return state;
  }
}
