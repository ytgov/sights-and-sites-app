import React from 'react';
import {ToastContainer} from 'react-native-root-toast';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const TOAST_MAX_WIDTH = 0.8;

let styles = StyleSheet.create({
  defaultStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    padding: 10,
    backgroundColor: '#000',
    opacity: 0.8,
    borderRadius: 5,
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
  textStyle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

class CustomToastContainer extends ToastContainer {
  constructor() {
    super(...arguments);
  }

  render() {
    let {props} = this;
    const {windowWidth} = this.state;
    let offset = props.position;

    const {windowHeight, keyboardScreenY} = this.state;
    const keyboardHeight = Math.max(windowHeight - keyboardScreenY, 0);
    let position = offset
      ? {
          [offset < 0 ? 'bottom' : 'top']:
            offset < 0 ? keyboardHeight - offset : offset,
        }
      : {
          top: 0,
          bottom: keyboardHeight,
        };

    return this.state.visible || this._animating ? (
      <View style={[styles.defaultStyle, position]} pointerEvents="box-none">
        <TouchableWithoutFeedback
          onPress={() => {
            typeof this.props.onPress === 'function'
              ? this.props.onPress()
              : null;
            this.props.hideOnPress ? this._hide() : null;
          }}>
          <Animated.View
            style={[
              styles.containerStyle,
              {marginHorizontal: windowWidth * ((1 - TOAST_MAX_WIDTH) / 2)},
              props.containerStyle,
              props.backgroundColor && {backgroundColor: props.backgroundColor},
              {
                opacity: this.state.opacity,
              },
              props.shadow && styles.shadowStyle,
              props.shadowColor && {shadowColor: props.shadowColor},
            ]}
            pointerEvents="none"
            ref={ele => (this._root = ele)}>
            {this.props.children}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    ) : null;
  }
}

export default CustomToastContainer;
