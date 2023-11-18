export const getFiveDaysForecast = async (locationKey: string) => {
  const params = {
    apikey: import.meta.env.VITE_ACCU_WEATHER_API_KEY,
    metric: "true",
  };

  const response = await fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?` +
      new URLSearchParams(params).toString()
  );

  return await response.json();
};
