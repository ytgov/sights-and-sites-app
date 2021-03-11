import React from 'react';
import PropTypes from 'prop-types';
import ListTile from './index';

const box = require('./images/box.png');
const boxChecked = require('./images/box-checked.png');

const ListTileCheckbox = (props) => {
    const {checked, label, trailingIcon, trailingIconActive, trailingIconStyle, onClick} = props

    return (
        <ListTile
            checked={checked}
            label={label}
            onClick={onClick}
            leadingIcon={box}
            leadingIconActive={boxChecked}
            trailingIcon={trailingIcon}
            trailingIconActive={trailingIconActive}
            trailingIconStyle={trailingIconStyle} />
    );
};

ListTileCheckbox.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    trailingIcon: PropTypes.node,
    trailingIconActive: PropTypes.node,
    trailingIconStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]),
    onClick: PropTypes.func.isRequired,
}

ListTileCheckbox.defaultProps = {
    checked: false,
    trailingIcon: null,
    trailingIconActive: null,
}

export default ListTileCheckbox;
