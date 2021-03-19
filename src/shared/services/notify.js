import React from 'react';
import Toast from 'react-native-root-toast';
import {Text} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {merge as _merge} from 'lodash';

import CustomToast from '~components/customToast/customToast';
import {COLORS} from '~theme/config';
import {YUKON_FONTS} from '~theme/typings';

const config = {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    opacity: 1
};

const TOAST_WITH_ICON_DEFAULT_CONFIG = {
    position: Toast.positions.TOP,
    shadow: false,
    containerStyle: {
        // top: 12, //@TODO:  iPhone with notch
        paddingLeft: 18,
        paddingTop: 20,
        paddingBottom: 18,
        paddingRight: 18,
        borderRadius: 0,
        backgroundColor: '#DE4300',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    }
};

function success(message) {
    Toast.show(message, {
        ...config,
        backgroundColor: '#ffffff',
        textColor: '#000000'
    });
}

function info(message, overwriteConfig = {}) {
    Toast.show(message, {
        ...config,
        ...overwriteConfig
    });
}

function error(message) {
    Toast.show(message, {
        ...config,
        backgroundColor: COLORS.yellow
    });
}
function customToast(message, overwriteConfig = {}) {
    const customConfig = _merge({}, config, TOAST_WITH_ICON_DEFAULT_CONFIG, overwriteConfig);
    return CustomToast.show(message, customConfig);
}

function toastWithIcon(text, icon, config = {}) {
    const children = (
        <>
            {
                text
                ? <Text style={{color: '#FFF', fontFamily: YUKON_FONTS.MONTSERRAT_BOLD}}>{text}</Text>
                : null
            }
            {
                icon
                ? <Feather name={icon} size={20} color="white" style={{paddingTop:3, paddingRight: 5}} />
                : null
            }

        </>
    );

    return customToast(children, config);

}

export {
    success,
    info,
    error,
    customToast,
    toastWithIcon
}
