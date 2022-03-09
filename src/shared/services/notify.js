import React from 'react';
import Toast from 'react-native-root-toast';
import DeviceInfo from 'react-native-device-info';
// import {Text, View} from 'react-native';
// import {Feather} from '@expo/vector-icons';
import {merge as _merge} from 'lodash';

import CustomToast from '~components/customToast/customToast';
import {COLORS} from '~theme/config';
// import {YUKON_FONTS} from '~theme/typings';

const config = {
  duration: Toast.durations.SHORT,
  position: Toast.positions.BOTTOM,
  shadow: true,
  animation: true,
  hideOnPress: true,
  opacity: 1,
};

const TOAST_WITH_ICON_DEFAULT_CONFIG = {
  position: 1,
  shadow: false,
  containerStyle: {
    top: -1,
    paddingLeft: 18,
    paddingTop: DeviceInfo.hasNotch() ? 64 : 40,
    paddingBottom: 18,
    paddingRight: 18,
    borderRadius: 0,
    backgroundColor: '#DE4300',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const ICON_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
};

function success(message) {
  Toast.show(message, {
    ...config,
    backgroundColor: '#ffffff',
    textColor: '#000000',
  });
}

function info(message, overwriteConfig = {}) {
  Toast.show(message, {
    ...config,
    ...overwriteConfig,
  });
}

function error(message) {
  Toast.show(message, {
    ...config,
    backgroundColor: COLORS.yellow,
  });
}
function customToast(message, overwriteConfig = {}) {
  const customConfig = _merge(
    {},
    config,
    TOAST_WITH_ICON_DEFAULT_CONFIG,
    overwriteConfig,
  );
  return CustomToast.show(message, customConfig);
}

// function toastWithIcon(text, icon, config = {}, iconPosition = ICON_POSITION.RIGHT) {
//     const isLeftIcon = iconPosition === ICON_POSITION.LEFT;
//     const iconElement = icon && <Feather name={icon} size={20} color="white" style={{paddingTop:3, paddingRight: 5}} />;
//
//     const children = (
//         <View style={{
//             flex: 1,
//             flexDirection: 'row',
//             alignItems: 'center',
//             alignContent: 'center',
//             justifyContent: 'space-between',
//             paddingBottom: 4
//         }}>
//             { isLeftIcon && iconElement }
//             { text && <Text style={{
//                 color: '#FFF',
//                 fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
//             }}>{text}</Text> }
//             { !isLeftIcon && iconElement }
//
//         </View>
//     );
//
//     return customToast(children, config);
//
// }

export {
  success,
  info,
  error,
  customToast,
  // toastWithIcon,
  ICON_POSITION,
};
