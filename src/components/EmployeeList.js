import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  ListView,
} from 'react-native';
import ListItem from './ListItem'

import { employeesFetch } from '../actions'

class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.createDataSource(props)
  }

  componentWillMount() {
    this.props.employeesFetch();
  }

  componentWillReceiveProps(newProps) {
    this.createDataSource(newProps)
  }

  createDataSource({ employees }) {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(employees)
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        enableEmptySections
      />
    );
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

}

const mapsStateToProps = (state) => {

  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid}
  });

  return {
    employees
  }

};

export default connect(mapsStateToProps, {employeesFetch})(EmployeeList);
