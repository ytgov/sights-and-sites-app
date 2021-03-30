import mockNearSitesData from './near-sites.mock.json';
const objectKeys = Object.keys(mockNearSitesData);
const mockNearSitesDataLength = objectKeys.length;

const getMockNearSites = (howMany = 5) => {
    const newNearSites = {};

    for (let i = 0; i < howMany; i++) {
        const random = Math.round(Math.random() * (mockNearSitesDataLength - 1));
        const nearSiteKey = objectKeys[random];
        const nearSite = mockNearSitesData[nearSiteKey];
        nearSite.distance =  Math.round((Math.random() * 30 * 100)) / 100;
        newNearSites[nearSiteKey] = nearSite;
    }

    return newNearSites;
};

export default getMockNearSites;
