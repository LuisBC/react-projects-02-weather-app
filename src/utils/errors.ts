import toast from "react-hot-toast";
import { PositionErrorType } from "../types/position";
import { LocationErrorType } from "../types/location";
import { WeatherErrorType } from "../types/weather";
import {
  LOCATION_ERROR_MESSAGES,
  POSITION_ERROR_MESSAGES,
  WEATHER_ERROR_MESSAGES,
} from "../constants/errors";

export const showPositionErrorToast = (positionErrorType: PositionErrorType) =>
  toast.error(POSITION_ERROR_MESSAGES[positionErrorType]);

export const showLocationErrorToast = (locationErrorType: LocationErrorType) =>
  toast.error(LOCATION_ERROR_MESSAGES[locationErrorType]);

export const showWeatherErrorToast = (weatherErrorType: WeatherErrorType) =>
  toast.error(WEATHER_ERROR_MESSAGES[weatherErrorType]);
