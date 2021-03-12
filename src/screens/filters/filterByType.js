import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ScreenWrapper from '../../components/screenWrapper';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';
import {connect} from 'react-redux';

const bgDefault = require('../../shared/mapping/images/siteType/bg-type-history-culture.jpg');

const FilterByTypeScreen = (props) => {
    const [background, setBackground] = useState(bgDefault);
    const {siteTypes} = props

    return (
        <ScreenWrapper backgroundImage={background}>
            <FilterHeader>
                <Title title={`Filter by site type`} hasArrow={true} />
            </FilterHeader>

            {siteTypes.map((item, i) => (
                <ListTileCheckbox
                    key={i}
                    label={item.name}
                    trailingIcon={item.icon}
                    onClick={() => setBackground(item.background)} />
            ))}
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
        siteTypes: state.siteTypesStore.siteTypes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByTypeScreen);

