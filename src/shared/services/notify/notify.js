import Toast from 'react-native-root-toast';
import { COLORS } from '../../../theme/config';

class NotifyService {
  constructor() {
    this.config = {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      opacity: 1
    };
  }

  success(message) {
    Toast.show(message, {
      ...this.config,
      backgroundColor: '#ffffff',
      textColor: '#000000'
    });
  }

  info(message) {
    Toast.show(message, {
      ...this.config
    });
  }

  error(message) {
    Toast.show(message, {
      ...this.config,
      backgroundColor: COLORS.primary
    });
  }
}

export default NotifyService;