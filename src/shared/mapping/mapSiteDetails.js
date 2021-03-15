/**
 * @param item
 */
import {getSiteTypeFromString} from './mapSiteTypes';
import {getRegionFromString} from './mapRegions';
import {getHighwayFromString} from './mapHighways';

export const mapSiteDetails = (item) => {
    const {site_types, region, highway_name} = item;

    return {
        ...item,
        site_types: site_types.map((v) => getSiteTypeFromString(v)),
        region: getRegionFromString(region),
        highway: getHighwayFromString(highway_name)

    }
}
