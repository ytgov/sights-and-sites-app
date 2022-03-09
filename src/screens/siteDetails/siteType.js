import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Body} from '~theme/typings';

const SiteType = props => {
  const {name, icon} = props;
  return (
    <View style={{...props.style, flexDirection: 'row', alignItems: 'center'}}>
      <Image source={icon} />
      <Body black style={{marginLeft: 12, flex: 1}}>
        {name}
      </Body>
    </View>
  );
};

SiteType.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default SiteType;
