import React, { Component } from 'react';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'



const RouterComponent = () => {
  return(
    <Router sceneStyle={{paddingTop: 56}}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={handleOnRightAdd}
          rightTitle="Add"
          key="employees"
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Employees"
        />
      </Scene>
    </Router>
  );

};

const handleOnRightAdd = () =>  {
  Actions.employeeCreate();
};

export default RouterComponent;
