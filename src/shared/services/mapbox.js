import MapboxClient from '@mapbox/mapbox-sdk';
import MapboxDirectionClient from '@mapbox/mapbox-sdk/services/directions';
import {APP_CONFIG} from '~app/config';

const accessToken = APP_CONFIG.map_box;
const mapboxClient = new MapboxClient({accessToken});
const mapboxDirectionClient = new MapboxDirectionClient(mapboxClient);

export const getDrivingDistance = async (source, destination) => {
    let result = {};
    try {
        let response = await mapboxDirectionClient.getDirections({
            profile: 'driving-traffic',
            waypoints: [
                {
                    coordinates: [source.longitude, source.latitude]
                },
                {
                    coordinates: [destination.longitude, destination.latitude]
                },
            ],
            geometries: 'geojson'
        }).send();
        if (response !== null) {
            let route = response.body.routes[0];
            const distance = (parseFloat(route.distance) / 1000).toFixed(1)
            result =  {
                status: 200,
                fetched: true,
                source: source,
                distance: distance,
                duration: route.duration,
                coordinates: route.geometry.coordinates
            }
        }

    } catch (e) {
        result = {
            message: e.message
        }
        console.info('======> Got ERROR : ', e.message);
    }

    return result;
}
