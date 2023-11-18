import { useCallback, useState } from "react";
import { getFiveDaysForecast } from "../api/weather";
import { Weather, WeatherError, WeatherErrorType } from "../types/weather";

const useWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<WeatherError>();

  const getFiveDaysForecastByLocationKey = useCallback(
    async (locationKey: string) => {
      try {
        const weather = await getFiveDaysForecast(locationKey);
        setWeather(weather);
      } catch (e) {
        if (e instanceof Error) {
          setError({
            type: WeatherErrorType.FiveDaysForecast,
            message: e.message,
          });
        }
      }
    },
    []
  );

  return {
    weather,
    error,
    getFiveDaysForecastByLocationKey,
  };
};

export default useWeather;
