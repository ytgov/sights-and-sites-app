import { StyleSheet } from 'react-native';

const FeedbackStyles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row'
  },
  buttonWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#CBCBCB'
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16
  }
});

export default FeedbackStyles;