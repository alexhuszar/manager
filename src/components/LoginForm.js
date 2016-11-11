import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux'
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    emailChanged: PropTypes.func.isRequired,
    passwordChanged: PropTypes.func.isRequired,
    email: PropTypes.string,
    password: PropTypes.string
  };

  static defaultProps = {
    email: '',
    password: '',
    loading: false
  };

  constructor(props) {
    super(props);

    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  renderButton() {

    // if(this.props.loading) {
    //   return <Spinner size="small" />
    // } else {
      return (
        <Button
          onPress={this.handleLoginUser}
        >
        Login
        </Button>
      );
    //}
  }

  handleEmailChange(value) {
    this.props.emailChanged(value)
  }

  handlePasswordChange(value) {
    this.props.passwordChanged(value)
  }

  render() {

    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label="Email"
            placeholder="user@email.com"
            onChangeText={this.handleEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.password}
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }

  handleLoginUser() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    flex: 1
  },
  errorStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#ff0000'
  }
});

const mapStateToProps = ({auth}) => {
  return {
    email: auth.email,
    password: auth.password
  }
};

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser}
)(LoginForm);
