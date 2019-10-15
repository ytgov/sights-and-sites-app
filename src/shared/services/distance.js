import {getPreciseDistance} from 'geolib';
import i18n from '../../locale/locale';

function calculateDistanceBeetweenTwoLocations(source, target) {
    const measureAcuracy = 1;
    let response = null;

    const distance = getPreciseDistance(
        {latitude: source.latitude, longitude: source.longitude},
        {latitude: target.latitude, longitude: target.longitude},
        measureAcuracy
    )
    if (distance <= 500) {
        response = i18n.t('location.distanceToSiteInM', {distance});
        if (distance < 50) {
            response = i18n.t('location.distanceReached')
        }
    } else {
        response = i18n.t('location.distanceToSiteInKM', {distance: (distance / 1000).toFixed(2)});
    }

    return response;
}

export {
    calculateDistanceBeetweenTwoLocations
}
