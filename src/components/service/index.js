import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as ServiceModel from '../../models/Service';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

import {Body} from '~theme/typings';

const Service = ({item}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return <>
        <TouchableOpacity onPress={toggleModal}>
            <View style={styles.wrapper}>
                <Image source={item.image} />
            </View>
        </TouchableOpacity>

        <Modal isVisible={isModalVisible}
               onBackdropPress={toggleModal}>
            <View style={styles.modal}>
                <Image source={item.image} />
                <Body black  style={{ marginTop: 8 }}>{item.name}</Body>
            </View>
        </Modal>
    </>
}

Service.propTypes = {
    item: PropTypes.instanceOf(ServiceModel)
}

export default Service;
