import {StyleSheet} from 'react-native';

const IntroStepOneStyles = StyleSheet.create({
    dotsBox: {
        marginTop: 15,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        borderRadius: 50,
        width: 8,
        height: 8,
        backgroundColor: '#fff',
        marginLeft: 2,
        marginRight: 2,
        opacity: 0.5
    },
    dotActive: {
        opacity: 1
    }
});

export default IntroStepOneStyles;
