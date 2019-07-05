import Toast from 'react-native-root-toast';
import { COLORS } from '../../../theme/config';

class NotifyService {
  constructor() {
    this.config = {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      opacity: 0.8
    };
  }

  success(message) {
    Toast.show(message, {
      ...this.config,
      backgroundColor: '#27ae60'
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