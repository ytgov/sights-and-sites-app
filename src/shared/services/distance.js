import {getPreciseDistance} from 'geolib';
import i18n from '../../locale/locale';
import MapboxClient from '@mapbox/mapbox-sdk';
import MapboxDirectionClient from '@mapbox/mapbox-sdk/services/directions';
import {APP_CONFIG} from '../../config';

const accessToken = APP_CONFIG.map_box;
const mapboxClient = new MapboxClient({accessToken});
const mapboxDirectionClient = new MapboxDirectionClient(mapboxClient);


async function getRoadInfoBetweenTwoLocations(source, target) {

    if (!source.latitude || !source.longitude) return;
    let result = {
        fetched: false,
        source: source,
        distance: getPreciseDistance(
            {latitude: source.latitude, longitude: source.longitude},
            {latitude: target.latitude, longitude: target.longitude},
            1
        ),
        coordinates: [
            [
                source.longitude,
                source.latitude
            ],
            [
                target.longitude,
                target.latitude,
            ]
        ]
    };
    try {
        let response = await mapboxDirectionClient.getDirections({
            profile: 'driving-traffic',
            waypoints: [
                {
                    coordinates: [
                        source.longitude,
                        source.latitude
                    ]
                },
                {
                    coordinates: [
                        target.longitude,
                        target.latitude,
                    ]
                },
            ],
            geometries: 'geojson'
        }).send();
        if (response !== null) {
            let route = response.body.routes[0];
            result = {
                fetched: true,
                source: source,
                distance: route.distance,
                duration: route.duration,
                coordinates: route.geometry.coordinates
            }
        }

    } catch (e) {
        result['message'] = e.message;
        console.info('======> Got ERROR : ', e.message);
    }

    return result;
}

function getFormattedDistanceText(distance = 0) {
    let response = null;
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

async function calculateDistanceBeetweenTwoLocations(source, target) {
    const measureAcuracy = 1;

    let distance = 0;

    let result = await getRoadInfoBetweenTwoLocations(source, target);

    if (result !== null) {
        const legs = result.legs[0];
        distance = legs.distance;

    } else {
        distance = getPreciseDistance(
            {latitude: source.latitude, longitude: source.longitude},
            {latitude: target.latitude, longitude: target.longitude},
            measureAcuracy
        )
    }

    return getFormattedDistanceText(distance);

}

export {
    calculateDistanceBeetweenTwoLocations,
    getRoadInfoBetweenTwoLocations,
    getFormattedDistanceText
}
