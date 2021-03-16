export const countFilter = (filtersStore) => {
    const {siteTypes, regions, highways, nearMe, myFavorites} = filtersStore

    let count = 0
    count += siteTypes.length > 0 ? 1 : 0;
    count += regions.length > 0 ? 1 : 0;
    count += highways.length > 0 ? 1 : 0;
    count += nearMe === true ? 1 : 0;
    count += myFavorites === true ? 1 : 0;

    return count;
}

export const checkActiveFilter = (filterStore, filter) => {
    if (['siteTypes', 'regions', 'highways'].includes(filter)) {
        return filterStore[filter].length > 0
    } else {
        return filterStore[filter] === true
    }
}
