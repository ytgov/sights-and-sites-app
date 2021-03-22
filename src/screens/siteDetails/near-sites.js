import mockNearSitesData from './near-sites.mock.json';
const mockNearSitesDataLength = mockNearSitesData.length;

const getMockNearSites = (howMany = 5) => {
    const newNearSites = [{site_id: 11392},{site_id: 11398}];
    for (let i = 0; i < howMany; i++) {
        const random = Math.round(Math.random() * (mockNearSitesDataLength - 1));
        const nearSite = mockNearSitesData[random];
        nearSite.distance =  Math.round((Math.random() * 30 * 100)) / 100;
        newNearSites.push(nearSite);
    }

    return newNearSites;
};

export default getMockNearSites;
