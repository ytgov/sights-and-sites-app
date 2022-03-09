import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Body} from '../../theme/typings';
import {YUKON_COLORS} from '../../theme/config';

export const ButtonStyle = {
  WHITE: 'white',
  TEAL: 'teal',
};

const Button = ({label, onPress, containerStyle, buttonStyle}) => {
  let backgroundColor = 'white';
  let buttonStyles = {color: 'black', fontSize: 12};
  let icon = <MaterialIcons name="close" size={18} color="black" />;

  if (buttonStyle === ButtonStyle.TEAL) {
    backgroundColor = YUKON_COLORS.primary_200;
    buttonStyles = {color: 'white'};
    icon = <MaterialIcons name="chevron-right" size={24} color="white" />;
  }

  return (
    <View style={{...styles.wrapper, ...containerStyle, backgroundColor}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.button}>
        <Body fontBold style={buttonStyles}>
          {label}
        </Body>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  buttonStyle: PropTypes.oneOf([ButtonStyle.WHITE, ButtonStyle.TEAL])
    .isRequired,
};
Button.defaultProps = {
  containerStyle: {},
  buttonStyle: ButtonStyle.TEAL,
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
