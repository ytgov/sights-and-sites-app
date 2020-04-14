import React from 'react';
import {Updates} from 'expo'
import {Toast} from 'native-base'

class AppUpdater extends React.Component {
    state = {
        update_available: false,
        loading: false
    };

    async componentDidMount() {

        try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                await Updates.fetchUpdateAsync();
                Toast.show({
                    text: 'App Update Ready'
                });
                await Updates.reloadFromCache();

            }
        } catch (e) {
            console.info('DEV MODE')
        }
    }


    render() {
        return null;
    }

}

export default AppUpdater;
