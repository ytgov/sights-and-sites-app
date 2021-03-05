import React from 'react';
import PropTypes from 'prop-types';
import ListTile from './list-tile.component';

const box = require('./images/box.png');
const boxChecked = require('./images/box-checked.png');

const ListTileCheckbox = (props) => {
    const {checked, label, trailingIcon, trailingIconActive, onClick} = props

    return (
        <ListTile
            checked={checked}
            label={label}
            onClick={onClick}
            leadingIcon={box}
            leadingIconActive={boxChecked}
            trailingIcon={trailingIcon}
            trailingIconActive={trailingIconActive} />
    );
};

ListTileCheckbox.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    trailingIcon: PropTypes.node,
    trailingIconActive: PropTypes.node,
    onClick: PropTypes.func.isRequired,
}

ListTileCheckbox.defaultProps = {
    checked: false,
    trailingIcon: null,
    trailingIconActive: null,
}

export default ListTileCheckbox;