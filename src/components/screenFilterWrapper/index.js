import React, {useRef} from 'react';
import ScreenWrapper from '../screenWrapper';
import PropTypes from 'prop-types';
import {Animated, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {withNavigation} from 'react-navigation';

import Button, {ButtonStyle} from '../../screens/filters/button';

const ScreenFilterWrapper = (props) => {
    const {children, backgroundImage, onResetFilter, onApplyFilter, showButtons, navigation} = props

    const slideAnim = useRef(new Animated.Value(0)).current

    const transformValue = {
        transform: [
            {
                translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [110, 0]
                })
            }
        ]
    }

    if (showButtons) {
        // animate buttons.
        Animated.spring(
            slideAnim,
            {
                toValue: 1,
                duration: 300
            }
        ).start()
    }

    return (
        <ScreenWrapper backgroundImage={backgroundImage}
                       footer={
                           <Animated.View style={{
                               ...styles.buttons,
                               ...transformValue
                           }}>
                               <Button label={'Reset filters'}
                                       buttonStyle={ButtonStyle.WHITE}
                                       onPress={onResetFilter} />
                               <Button label={'Apply filters'}
                                       buttonStyle={ButtonStyle.TEAL}
                                       containerStyle={{ flex: 1, flexGrow: 1}}
                                       onPress={onApplyFilter} />
                           </Animated.View>
                       }>
            {children}
        </ScreenWrapper>
    );
};

ScreenFilterWrapper.propTypes = {
    backgroundImage: PropTypes.node.isRequired,
    onApplyFilter: PropTypes.func.isRequired,
    onResetFilter: PropTypes.func.isRequired,
    showButtons: PropTypes.bool
}

ScreenFilterWrapper.defaultProps = {
    showButtons: false
}

export default withNavigation(ScreenFilterWrapper);

const styles = StyleSheet.create({
    buttons: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        height: DeviceInfo.hasNotch() ? 60 + 34 : 80,
    }
})
