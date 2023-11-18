import { Location } from "./types/location";

export const getLocationSearch = async (
  location: string
): Promise<[Location]> => {
  const params = {
    apikey: import.meta.env.VITE_ACCU_WEATHER_API_KEY,
    q: location,
  };

  const response = await fetch(
    "http://dataservice.accuweather.com/locations/v1/cities/search?" +
      new URLSearchParams(params).toString()
  );

  return await response.json();
};

export const getGeopositionSearch = async (
  latitude: number,
  longitude: number
): Promise<Location> => {
  const params = {
    apikey: import.meta.env.VITE_ACCU_WEATHER_API_KEY,
    q: `${latitude},${longitude}`,
  };

  const response = await fetch(
    "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?" +
      new URLSearchParams(params).toString()
  );

  return await response.json();
};
