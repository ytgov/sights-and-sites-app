import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Animated, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import ScreenWrapper from '../../components/screenWrapper';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';
import {connect} from 'react-redux';
import {filterAddSiteType} from '../../store/actions/filters';
import Button, {ButtonStyle} from './button';

const bgDefault = require('../../shared/mapping/images/siteType/bg-type-history-culture.jpg');

const FilterByTypeScreen = (props) => {
    const {siteTypesData, filteredSiteTypesData, dispatchAddSiteType} = props

    const [background, setBackground] = useState(bgDefault);
    const [siteTypes] = useState(siteTypesData)
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

    const onListTileChange = (item) => {
        setBackground(item.background)
        dispatchAddSiteType(item.id)
        Animated.spring(
            slideAnim,
            {
                toValue: 1,
                duration: 300
            }
        ).start()
    }

    return (
        <ScreenWrapper backgroundImage={background}>
            <FilterHeader>
                <Title title={`Filter by site type`} hasArrow={true} />
            </FilterHeader>

            {siteTypes.map((item, i) => (
                <ListTileCheckbox
                    key={i}
                    label={item.name}
                    checked={filteredSiteTypesData.includes(item.id)}
                    trailingIcon={item.icon}
                    onClick={() => onListTileChange(item)} />
            ))}

            <Animated.View style={{
                ...styles.buttons,
                ...transformValue
            }}>
                <Button label={'Reset filters'}
                        buttonStyle={ButtonStyle.WHITE}
                        onPress={() => {}} />
                <Button label={'Apply filters'}
                        buttonStyle={ButtonStyle.TEAL}
                        containerStyle={{ flex: 1, flexGrow: 1}}
                        onPress={() => {}} />
            </Animated.View>
        </ScreenWrapper>
    );
};

FilterByTypeScreen.propTypes = {
    siteTypes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            background: PropTypes.node.isRequired
        })
    )
}

const mapStateToProps = (state) => {
    return {
        siteTypesData: state.siteTypesStore.siteTypes,
        filteredSiteTypesData: state.filtersStore.siteTypes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddSiteType: (value) => dispatch(filterAddSiteType(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByTypeScreen);

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
