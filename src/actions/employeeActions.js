import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCCESS
} from './types'

const handleRedirectEmployees = (dispatch) => {
  dispatch({
    type: EMPLOYEE_CREATE
  });
  Actions.employees({type: 'reset'});
};

export const employeeUpdate = ( {prop, value} ) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value}
  }
};

export const employeeCreate = ({ name, phone, shift }) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(handleRedirectEmployees(dispatch))
  }
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {

        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        })
      })
  }
};

const handleSaveRedirectEmployees = (dispatch) => {
  dispatch({
    type: EMPLOYEE_SAVE_SUCCCESS
  });
  Actions.employees({type: 'reset'});
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(handleSaveRedirectEmployees(dispatch))
  }
};

export const employeeDelete = ({ uid }) => {
  const {currentUser} = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then( () => Actions.employees({type: 'reset'}))
  }
};
