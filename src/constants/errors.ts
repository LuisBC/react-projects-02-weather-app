import { LocationErrorType } from "../types/location";
import { PositionErrorType } from "../types/position";
import { WeatherErrorType } from "../types/weather";

export const POSITION_ERROR_MESSAGES = {
  [PositionErrorType.PermissionDenied]:
    "Cannot get your location without permission",
  [PositionErrorType.PositionUnavailable]:
    "Cannot get your location at this time",
  [PositionErrorType.NotSupported]: "Geolocation not supported by your browser",
};

export const LOCATION_ERROR_MESSAGES = {
  [LocationErrorType.Coords]: "Cannot get location by your coordinates",
  [LocationErrorType.Search]: "Cannot get location by your search",
};

export const WEATHER_ERROR_MESSAGES = {
  [WeatherErrorType.FiveDaysForecast]:
    "Cannot get weather forecast for the next five days",
};
