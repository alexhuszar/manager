/**
 * Created by Alexandru Huszar on 15.02.2017.
 */

import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal
} from 'react-native';

import { CardSection } from './CardSection'
import { Button } from './Button'

const empty = () => {};

class Confirm extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    onAccept: PropTypes.func,
    onDecline: PropTypes.func,
    visible: PropTypes.bool
  };

  static defaultProps = {
    children: '',
    onDecline: () => {},
    onAccept: () => {},
    visible: false
  };

  constructor(props) {
    super(props);

    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }

  render() {

    const { children, visible } = this.props;

    const {
      cardSectionStyle,
      textStyle,
      containerStyle
    } = styles;

    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={empty}
      >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>
              {children}
            </Text>
          </CardSection>
          <CardSection>
            <Button onPress={this.handleAccept}>
              Yes
            </Button>
            <Button onPress={this.handleDecline} >
              No
            </Button>
          </CardSection>

        </View>
      </Modal>
    )
  }

  handleAccept() {
    this.props.onAccept();
  }

  handleDecline() {
    this.props.onDecline();
  }

}

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

export { Confirm };
