import { StyleSheet } from 'react-native';

const SearchStyles = StyleSheet.create({
  searchBox: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#000',
    fontSize: 16,
    fontFamily: 'montserrat-regular'
  },
  clearQueryButton: {
    marginLeft: 11,
    marginRight: 11,
    // position: 'absolute',
    // top: 0,
    // right: 10
  }
});

export default SearchStyles;