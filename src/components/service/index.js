import React from 'react';
import PropTypes from 'prop-types';
import * as ServiceModel from '../../models/Service';
import {Text, View, Image} from 'react-native';
import styles from './styles';

import {Body} from '~theme/typings';

const Service = ({item}) => {
    console.log('blohhh', item)
    return <View style={styles.wrapper}>
        <Image source={item.image} />
        <Body black  style={styles.title}>{item.name}</Body>
    </View>
}

Service.propTypes = {
    item: PropTypes.instanceOf(ServiceModel)
}

export default Service;
