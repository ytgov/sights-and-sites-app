import React from 'react';
import RootSiblings from 'react-native-root-siblings';
import Toast from 'react-native-root-toast';
import {positions, durations} from 'react-native-root-toast/lib/ToastContainer';
import CustomToastContainer from './customToastContainer';

export default class CustomToast extends Toast {
  static show = (
    message,
    options = {position: positions.BOTTOM, duration: durations.SHORT},
  ) => {
    return new RootSiblings(
      (
        <CustomToastContainer {...options} visible={true}>
          {message}
        </CustomToastContainer>
      ),
    );
  };
}
