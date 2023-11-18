import { Location } from "../api/types/location";
import { Weather } from "../api/types/weather";
import { LocationDailyForecasts } from "../types";
import { getWeekday } from "./dates";
import { getImageSrc } from "./icons";

const getDailyWeather = async (weather: Weather) =>
  await Promise.all(
    weather.DailyForecasts.map(async ({ Day, Date: DFDate, Temperature }) => ({
      imageSrc: await getImageSrc(Day.Icon),
      imageAlt: Day.IconPhrase,
      weekday: getWeekday(DFDate),
      minDegrees: Temperature.Minimum.Value,
      maxDegrees: Temperature.Maximum.Value,
      phrase: Day.IconPhrase,
    }))
  );

export const getLocationDailyForecasts = async (
  location: Location,
  weather: Weather
): Promise<LocationDailyForecasts> => {
  return {
    locationName: location.LocalizedName,
    dailyWeather: await getDailyWeather(weather),
  };
};
