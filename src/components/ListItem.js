/**
 * Created by Alexandru Huszar on 15.02.2017.
 */
import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux'

import { CardSection } from './common'

class ListItem extends Component {

  static propTypes = {
    employee: PropTypes.object
  };

  static defaultProps = {
    employee: {},
  };


  constructor(props) {
    super(props);
    this.handleOnRowPress = this.handleOnRowPress.bind(this);
  }

  handleOnRowPress() {
    Actions.employeeEdit({
      employee: this.props.employee
    });
  }

  render() {

    const {
      name
    } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.handleOnRowPress}>
        <View>
          <CardSection >
            <Text style={styles.title} >
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
});
export default ListItem;
