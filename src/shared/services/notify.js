import Toast from 'react-native-root-toast';
import { COLORS } from '../../theme/config';

const config = {
  duration: Toast.durations.SHORT,
  position: Toast.positions.BOTTOM,
  shadow: true,
  animation: true,
  hideOnPress: true,
  opacity: 1
};

function success(message) {
  Toast.show(message, {
    ...config,
    backgroundColor: '#ffffff',
    textColor: '#000000'
  });
}

function info(message) {
  Toast.show(message, {
    ...config
  });
}

function error(message) {
  Toast.show(message, {
    ...config,
    backgroundColor: COLORS.yellow
  });
}

export {
  success,
  info,
  error
}