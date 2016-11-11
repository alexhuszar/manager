import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Picker
} from 'react-native'

import { Button, Card, CardSection, Input, Spinner } from './common'
import { employeeUpdate } from '../actions/employeeActions'

class EmployeeCreate extends Component {

  static propTypes = {
    employeeUpdate: PropTypes.func.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string,
    shift: PropTypes.string
  };

  static defaultProps = {
    name: '',
    phone: '',
    shift: ''
  };

  constructor(props) {
    super(props);

    this.handleEmployeeNameUpdate = this.handleEmployeeNameUpdate.bind(this);
    this.handleEmployeePhoneUpdate = this.handleEmployeePhoneUpdate.bind(this);
    this.handleEmployeeShiftUpdate = this.handleEmployeeShiftUpdate.bind(this);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.name}
            label="Name"
            placeholder="Jane"
            onChangeText={this.handleEmployeeNameUpdate}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.phone}
            label="Phone"
            placeholder="555-555-555"
            onChangeText={this.handleEmployeePhoneUpdate}
          />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>

          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={this.handleEmployeeShiftUpdate}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>

        </CardSection>

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
          onPress={() => {}}
        >
          Create
        </Button>
      );
    }
  }

  handleEmployeeNameUpdate(text) {
    this.props.employeeUpdate({prop: 'name', value: text})
  }
  handleEmployeePhoneUpdate(text) {
    this.props.employeeUpdate({prop: 'phone', value: text})
  }

  handleEmployeeShiftUpdate(text) {
    this.props.employeeUpdate({prop: 'shift', value: text})
  }

}

const mapsStateToProps = (state) => {
  const {name, phone, shift } = state.employeeForm;

  return {name, phone, shift}
};

const styles = StyleSheet.create({
  pickerLabelStyle: {
    paddingLeft: 20,
    fontSize: 18
  }
});

export default connect(mapsStateToProps, {employeeUpdate})(EmployeeCreate);
