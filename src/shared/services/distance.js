import { getPreciseDistance } from 'geolib';

function calculateDistanceBeetweenTwoLocations(source, target) {
  const measureAcuracy = 1;
  let response = null;

  const distance = getPreciseDistance(
    { latitude: source.latitude, longitude: source.longitude },
    { latitude: target.latitude, longitude: target.longitude },
    measureAcuracy
  )
  if (distance <= 500) {
    response = `${distance} m from here`;
    if (distance < 50) {
      response = 'You`re at the spot'
    }
  } else {
    response = `${(distance / 1000).toFixed(2)} km from here`
  }

  return response;
}

export {
  calculateDistanceBeetweenTwoLocations
}