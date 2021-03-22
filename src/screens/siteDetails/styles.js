import {StyleSheet} from 'react-native';
import {YUKON_COLORS} from '~theme/config';

const PROGRESS_BAR_HEIGHT = 7;

const styles = StyleSheet.create({
    progressBarContainer: {
        margin: 16,
        marginBottom: 20,
        backgroundColor: YUKON_COLORS.primary_200,
        flex: 1,
        height: PROGRESS_BAR_HEIGHT,
    },
    progressBar: {
        backgroundColor: YUKON_COLORS.primary_600,
        height: PROGRESS_BAR_HEIGHT,
    }
});

export default styles;
