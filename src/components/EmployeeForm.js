/**
 * Created by Alexandru Huszar on 15.02.2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  Text,
  StyleSheet,
  View,
  Picker
} from 'react-native'

import {
  employeeUpdate
} from '../actions/employeeActions'

import {CardSection, Input } from './common'

class EmployeeForm extends Component {

  static propTypes = {
    employeeUpdate: PropTypes.func,
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

    const {
      name, phone, shift
    } = this.props;

    return (
      <View style={styles.containerStyle}>
        <CardSection>
          <Input
            value={name}
            label="Name"
            placeholder="Jane"
            onChangeText={this.handleEmployeeNameUpdate}
          />
        </CardSection>

        <CardSection>
          <Input
            value={phone}
            label="Phone"
            placeholder="555-555-555"
            onChangeText={this.handleEmployeePhoneUpdate}
          />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>

          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={shift}
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
      </View>
    )
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

const styles = StyleSheet.create({
  pickerLabelStyle: {
    paddingLeft: 20,
    fontSize: 18
  }
});

const mapsStateToProps = (state) => {
  const {name, phone, shift } = state.employeeForm;

  return {name, phone, shift}
};

export default connect(mapsStateToProps, { employeeUpdate })(EmployeeForm);
