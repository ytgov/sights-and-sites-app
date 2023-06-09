import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

async function trackLocation(onLocation, onLocationReset, addGMListingDispatch) {
    const enabled = await Location.hasServicesEnabledAsync();
    const {status} = await Permissions.askAsync(
        Permissions.LOCATION
    );

    if (status !== 'granted') {
        onLocationReset();
        return false;
    }
    if (!enabled) {
        onLocationReset();
        return false;
    }

    Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
    }).then(location => {
        onLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });

        // TODO:: dispatch the site map fetcher
        console.info("======> dispatch the site map fetcher");
       addGMListingDispatch()
    }).catch(() => {
        onLocationReset();
    });

    return true;
}

export {
    trackLocation
}
