/**
 * @param item
 */
import {isUndefined as _isUndefined} from 'lodash';
import {getSiteTypeFromString} from './mapSiteTypes';
import {getRegionFromString} from './mapRegions';
import {getHighwayFromString} from './mapHighways';
import {getServiceFromString} from '~shared/mapping/mapServices';

export const mapSiteDetails = (item) => {
    const {site_types, region, highway_name} = item;
    const {beach, boat_launch, outhouse, outhouse_accessible, playground, trail} = item;

    const serviceKeys = [
        'beach',
        'boat_launch',
        'outhouse',
        'outhouse_accessible',
        'playground',
        'trail'
    ];

    // const services = serviceKeys
    //     .filter(key => !_isUndefined(item[key]) && item[key] === true)
    //     .map(key => getServiceFromString(key));

    // mock data
    const services = [
        getServiceFromString('beach'),
        getServiceFromString('beach'),
        getServiceFromString('beach'),
        getServiceFromString('beach'),
        getServiceFromString('beach'),
        getServiceFromString('beach'),
        getServiceFromString('beach'),
        getServiceFromString('beach'),
        getServiceFromString('beach'),
        getServiceFromString('beach'),
    ]

    return {
        ...item,
        site_types: site_types.map((v) => getSiteTypeFromString(v)),
        region: getRegionFromString(region),
        highway: getHighwayFromString(highway_name),
        services: services
    }
}
