import { GeoAddress, GeoAddressComponent } from './types';

export const parseGeoResult = (result: any): GeoAddress => {
  if (!result?.address_components?.length) return {};
  const res: GeoAddress = {};
  const addressConponent: GeoAddressComponent[] = result.address_components;
  res.country = addressConponent.find(a => a.types?.includes('country'))?.long_name ?? '';
  res.locality = addressConponent.find(a => a.types?.includes('locality'))?.long_name ?? '';
  res.route = addressConponent.find(a => a.types?.includes('route'))?.long_name ?? '';
  res.postalCode = addressConponent.find(a => a.types?.includes('postal_code'))?.long_name ?? '';
  res.streetNumber = addressConponent.find(a => a.types?.includes('street_number'))?.long_name ?? '';
  res.administrativeAreaLevel1 = addressConponent.find(a => a.types?.includes('administrative_area_level_1'))?.long_name ?? '';
  res.administrativeAreaLevel2 = addressConponent.find(a => a.types?.includes('administrative_area_level_2'))?.long_name ?? '';
  res.formattedAddress = result.formatted_address;
  res.latitude = typeof result.geometry.location.lat === 'function' ? result.geometry.location.lat() : result.geometry.location.lat;
  res.longitude = typeof result.geometry.location.lng === 'function' ? result.geometry.location.lng() : result.geometry.location.lng;
  return res;
}
