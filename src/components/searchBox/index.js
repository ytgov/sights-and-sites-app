import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';
import {YUKON_COLORS} from '~theme/config';
import routes from '~navigation/routes';

import styles from './styles';
import {connect} from 'react-redux';
import {doSearch} from '~store/actions/search';

const SearchBox = (props) => {
    const {
        navigation,
        currentQuery,
        dispatchDoSearch,
        listingRaw
    } = props;
    const [t] = useTranslation();
    const [keyword, setKeyword] = useState(currentQuery);

    const doSearch = () => {
        const sanitizedKeyword = keyword.trim()
        if (sanitizedKeyword === '') return;

        dispatchDoSearch(sanitizedKeyword, listingRaw)
        setKeyword(sanitizedKeyword)

        // Redirect to search result screen if current screen is not Search result yet.
        if (navigation.state.routeName !== routes.SCREEN_SEARCH_RESULTS) {
            navigation.navigate(routes.STACK_SEARCH)
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.inner}>
                <TextInput multiline={false}
                           style={styles.input}
                           placeholderTextColor={'white'}
                           placeholder={t('searchBox.placeholder')}
                           onChangeText={(text) => setKeyword(text)}
                           value={keyword}
                           onSubmitEditing={doSearch}
                           returnKeyType={'search'} />

                <MaterialIcons.Button
                            name="chevron-right"
                            size={28}
                            color="white"
                            iconStyle={{marginRight: 0}}
                            backgroundColor={YUKON_COLORS.primary_600}
                            onPress={doSearch} />
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        currentQuery: state.searchStore.query,
        listingRaw: state.listingStore.listingRaw
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchDoSearch: (keyword, listing) => dispatch(doSearch(keyword, listing))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(SearchBox));
