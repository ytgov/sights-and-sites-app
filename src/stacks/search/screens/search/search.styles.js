import { StyleSheet } from 'react-native';

const SearchStyles = StyleSheet.create({
  content: {
    marginBottom: 30
  },
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
    marginRight: 11
  }
});

export default SearchStyles;