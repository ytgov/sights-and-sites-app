import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const SiteAmentiesStyles = StyleSheet.create({
  carouselBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingLeft: 20,
    marginBottom: 10,
    paddingRight: 20
  }
})

export default SiteAmentiesStyles;