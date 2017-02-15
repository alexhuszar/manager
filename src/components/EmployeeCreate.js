import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import EmployeeForm from './EmployeeForm'

import { Button, Card, CardSection, Spinner } from './common'
import { employeeCreate  } from '../actions/employeeActions'

class EmployeeCreate extends Component {

  static propTypes = {
    employeeCreate: PropTypes.func.isRequired,
    loading: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.handleEmployeeNameUpdate = this.handleEmployeeNameUpdate.bind(this);
    this.handleEmployeePhoneUpdate = this.handleEmployeePhoneUpdate.bind(this);
    this.handleEmployeeShiftUpdate = this.handleEmployeeShiftUpdate.bind(this);
    this.handleEmployeeCreate = this.handleEmployeeCreate.bind(this);
  }

  render() {

    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }

  renderButton() {

    if(this.props.loading) {
      return <Spinner size="small" />
    } else {
      return (
        <Button
          onPress={this.handleEmployeeCreate}
        >
          Create
        </Button>
      );
    }
  }

  handleEmployeeCreate() {
    const {name, phone, shift } = this.props;
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'})
  }

}

const mapsStateToProps = (state) => {
  const {name, phone, shift } = state.employeeForm;

  return {name, phone, shift}
};

export default
  connect(mapsStateToProps, {employeeCreate})(EmployeeCreate);
