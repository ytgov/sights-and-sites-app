import React from 'react';
import {connect} from 'react-redux';

import ScreenWrapper from '~components/screenWrapper';
import LabelArrow from '~components/filters/labelArrow';
import {FilterHeader} from '~theme/layout';
import Title from '~components/filters/title';
import ListTile from '~components/filters/listTile';

import filters from './data/filters';
import {checkActiveFilter} from '~app/shared/utils/filters';
import routes from '~navigation/routes';
import {toastWithIcon, ICON_POSITION} from '~app/shared/services/notify';
import {useTranslation} from 'react-i18next';
import {Dimensions} from 'react-native';

const bgIndex = require('./images/index/bg-index.jpg');
const windowWidth = Dimensions.get('window').width;

const FilterIndexScreen = (props) => {
    const { t } = useTranslation();
    const {filterStore, navigation} = props
    const { myFavorites = [] } = filterStore || {};
    const hasFavorites = myFavorites.length ? true : false;

    const cooked_filters = filters.map(item => {
        return {
            ...item,
            label: item.withArrow ? <LabelArrow label={item.label} /> : item.label
        }
    });

    const onItemClick = (destination) => {
        if (destination === routes.SCREEN_FILTER_MY_FAVORITES) {
           if (!hasFavorites) {
               toastWithIcon(t('favorites.noFavorites'), 'alert-circle', {
                   position: 110,
                   containerStyle: {
                       paddingTop: 6,
                       paddingBottom: 6,
                       width: windowWidth,
                   }
               }, ICON_POSITION.LEFT);
               return;
           }
        }

        navigation.navigate(destination);
    };


    return (
        <ScreenWrapper backgroundImage={bgIndex}>
            <FilterHeader>
                <Title title={`Filter by`} />
            </FilterHeader>

            {cooked_filters.map((item, i) =>
                <ListTile
                    key={i}
                    label={item.label}
                    checked={checkActiveFilter(filterStore, item.id)}
                    leadingIcon={item.leadingIcon}
                    leadingIconActive={item.leadingIconActive}
                    onClick={() => onItemClick(item.destination)} />
            )}
        </ScreenWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        filterStore: state.filtersStore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //dispatchSetSiteTypesFilter: (value) => dispatch(setSiteTypesFilter(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterIndexScreen);
