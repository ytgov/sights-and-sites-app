import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Updates} from 'expo'
import Modal from 'react-native-modal';

class AppUpdater extends React.Component {
    state = {
        update_available: false,
        loading: false
    };

    async componentDidMount() {
        try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                this.setState({update_available: true})
            }
        } catch (e) {
            console.info('DEV MODE')
        }
    }

    async downloadUpdate() {
        this.setState({loading: true}, async () => {
            try {
                await Updates.fetchUpdateAsync();

                Updates.reloadFromCache();
            } catch (e) {
                this.setState({update_available: false})
            } finally {
                this.setState({loading: true, update_available: false});
            }
        });

    }

    render() {
        return (
            <Modal
                isVisible={this.state.update_available}
                onBackdropPress={() => this.setState({update_available: false})}
                deviceWidth={Dimensions.get('window').width}
            >
                <View style={{
                    backgroundColor: 'white',
                    padding: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <View/>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 22,
                            color: 'red'
                        }}>New App Update Available</Text>
                        <TouchableOpacity onPress={() => this.setState({update_available: false})}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        padding: 15
                    }}>
                        {
                            this.state.loading ? <Text>Loading</Text> : (
                                <TouchableOpacity onPress={() => this.downloadUpdate()} style={{
                                    borderRadius: 5,
                                    backgroundColor: '#000',
                                    paddingHorizontal: 25,
                                    paddingVertical: 10
                                }}>
                                    <Text style={{color: 'white'}}>Download</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>
            </Modal>
        )
    }

}

export default AppUpdater;
