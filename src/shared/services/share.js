import {error} from './notify';
import i18n from '../../locale/locale';
import {Share} from 'react-native';

const formatSharedMessage = (site_name, site_description) => {
    let message = `${site_name} \n\n`;
    message += `${site_description} \n\n`;

    message += '\nGet the App \nFind the Yukon Road Trip App for IOS or Android, for free, in any app store.\n\n';
    return message;
}

export const shareOnSocialMedia = async (site_name, site_description) => {
    try {
        const result = await Share.share({
            title: site_name,
            message: formatSharedMessage(site_name, site_description)
        }, {
            subject: site_name,
            dialogTitle: 'Share: ' + site_name
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (err) {
        error(err);
        return false;
    }
    return true;
};
