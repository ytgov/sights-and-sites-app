import React from 'react';
import PropTypes from 'prop-types';
import {isFunction as _isFunction} from 'lodash';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const BookmarkButton = ({active = false, onClick}) => {
  const onPress = _isFunction(onClick) ? onClick : () => {};

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={active ? styles.buttonActive : styles.button}>
        <Feather
          name="heart"
          size={20}
          style={active ? styles.iconActive : styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

BookmarkButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

BookmarkButton.defaultProps = {
  active: false,
  onClick: () => {},
};

const DEFAULT_ICON_COLOR = '#0097A9';
const ACTIVE_ICON_COLOR = '#FFFFFF';
const DEFAULT_BACKGROUND_COLOR = ACTIVE_ICON_COLOR;
const ACTIVE_BACKGROUND_COLOR = '#DE4300';
const ICON_PADDING = 5;
const ICON_BORDER_RADIUS = 50;

const buttonStyles = {
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  borderRadius: ICON_BORDER_RADIUS,
  paddingTop: ICON_PADDING,
  paddingRight: ICON_PADDING,
  paddingBottom: 3,
  paddingLeft: ICON_PADDING,
};

const styles = StyleSheet.create({
  button: {
    ...buttonStyles,
  },
  buttonActive: {
    ...buttonStyles,
    backgroundColor: ACTIVE_BACKGROUND_COLOR,
  },
  icon: {
    color: DEFAULT_ICON_COLOR,
  },
  iconActive: {
    color: ACTIVE_ICON_COLOR,
  },
});

export default BookmarkButton;
