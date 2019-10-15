import React from 'react';
import RootNavigation from './stacks/stacks';
import {APP_CONFIG} from './config';
import {info} from './shared/services/notify';

class AppRoot extends React.Component {
    state = {}

    componentDidMount() {
        const {version} = APP_CONFIG;
        if (__DEV__) {
            info(`App Version: ${version}`);
        }
    }

    render() {
        return (
            <RootNavigation/>
        );
    }
}

export default AppRoot;
