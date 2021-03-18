import React, { useEffect } from 'react';
import RootNavigation from './navigation/stacks';
import {APP_CONFIG} from './config';
import {info} from './shared/services/notify';
import {useTranslation} from 'react-i18next';

const AppRoot = (props)=> {
    const { i18n } = useTranslation();

    useEffect(() => {
        const {version} = APP_CONFIG;
        if (__DEV__) {
            info(`App Version: ${version}`);
        }
    }, []);

    return (
        <RootNavigation screenProps={{ i18n }}/>
    );

};

export default AppRoot;
