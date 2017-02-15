import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'

import EmployeeForm from './EmployeeForm'

import { Button, Card, CardSection, Spinner, Confirm } from './common'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions/employeeActions'

class EmployeeEdit extends Component {

  static propTypes = {
    employeeSave: PropTypes.func,
    name: PropTypes.string,
    phone: PropTypes.string,
    shift: PropTypes.string,
    employee: PropTypes.object,
    loading: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleSendEmail = this.handleSendEmail.bind(this);
    this.handleOnAccept = this.handleOnAccept.bind(this);
    this.handleOnDecline = this.handleOnDecline.bind(this);
    this.handleFireEmpoyee = this.handleFireEmpoyee.bind(this);
    this.handleEmployeeEdit = this.handleEmployeeEdit.bind(this);
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value})
    })
  }
  render() {

    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <CardSection>
          <Button
            onPress={this.handleSendEmail}
          >
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.handleFireEmpoyee}
          >
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.handleOnAccept}
          onDecline={this.handleOnDecline}
        >
          Are you sure you want to delete this employee?
        </Confirm>
      </Card>
    )
  }

  renderButton() {

    if(this.props.loading) {
      return <Spinner size="small" />
    } else {
      return (
        <Button
          onPress={this.handleEmployeeEdit}
        >
          Save Changes
        </Button>
      );
    }
  }

  handleEmployeeEdit() {
    const {name, phone, shift, employee } = this.props;
    this.props.employeeSave({name, phone, shift: shift, uid: employee.uid})
  }

  handleSendEmail() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  handleFireEmpoyee() {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    })
  }
  handleOnDecline() {
    this.setState({
      showModal: false
    })
  }

  handleOnAccept() {
    const { employee } = this.props;
    this.props.employeeDelete({uid: employee.uid})
  }

}

const mapsStateToProps = (state) => {
  const {name, phone, shift } = state.employeeForm;

  return {name, phone, shift}
};

export default
  connect(mapsStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
