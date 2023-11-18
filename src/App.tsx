import { useEffect, useMemo, useState } from "react";
import "./App.css";
import InputSearch from "./components/InputSearch";
import MainCard from "./components/MainCard";
import SecondaryCard from "./components/SecondaryCard";
import usePosition from "./hooks/usePosition";
import useWeather from "./hooks/useWeather";
import useDebounce from "./hooks/useDebounce";
import useLocation from "./hooks/useLocation";
import { getLocationDailyForecasts } from "./utils";
import { LocationDailyForecasts } from "./types";
import {
  showLocationErrorToast,
  showPositionErrorToast,
  showWeatherErrorToast,
} from "./utils/errors";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [locationDailyForecasts, setLocationDailyForecasts] =
    useState<LocationDailyForecasts | null>(null);

  const {
    coords: { latitude, longitude },
    error: positionError,
  } = usePosition();
  const {
    location,
    getLocationByGeoPosition,
    getLocationBySearch,
    error: locationError,
  } = useLocation();
  const {
    weather,
    getFiveDaysForecastByLocationKey,
    error: weatherError,
  } = useWeather();
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const locationKey = useMemo(() => location?.Key, [location]);
  const locationName = useMemo(() => location?.LocalizedName, [location]);
  const dailyWeather = useMemo(
    () => locationDailyForecasts?.dailyWeather,
    [locationDailyForecasts]
  );

  useEffect(() => {
    (async () => {
      if (location && weather) {
        setLocationDailyForecasts(
          await getLocationDailyForecasts(location, weather)
        );
      }
    })();
  }, [location, weather]);

  useEffect(() => {
    if (latitude && longitude) getLocationByGeoPosition(latitude, longitude);
  }, [latitude, longitude, getLocationByGeoPosition]);

  useEffect(() => {
    if (debouncedValue) getLocationBySearch(debouncedValue);
  }, [debouncedValue, getLocationBySearch]);

  useEffect(() => {
    if (locationKey) getFiveDaysForecastByLocationKey(locationKey);
  }, [locationKey, getFiveDaysForecastByLocationKey]);

  useEffect(() => {
    if (positionError || locationError || weatherError) {
      setLocationDailyForecasts(null);
      if (positionError) showPositionErrorToast(positionError.type);
      if (locationError) showLocationErrorToast(locationError.type);
      if (weatherError) showWeatherErrorToast(weatherError.type);
    }
  }, [positionError, locationError, weatherError]);

  return (
    <div className="h-screen w-full flex flex-col items-center bg-[url('./assets/images/background.jpg')] bg-center relative">
      <div className="flex justify-center items-center h-40 w-full lg:h-52 ">
        <InputSearch
          name="search"
          id="search"
          placeholder="Enter a City..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex flex-row h-60 items-center bg-white/30 rounded-xl w-11/12 shadow-lg lg:w-10/12 lg:absolute lg:top-1/4 lg:h-96">
        {dailyWeather && locationName && (
          <MainCard
            imageSrc={dailyWeather[0].imageSrc}
            imageAlt={dailyWeather[0].imageAlt}
            locationName={locationName}
            minDegrees={dailyWeather[0].minDegrees}
            maxDegrees={dailyWeather[0].maxDegrees}
            phrase={dailyWeather[0].phrase}
          />
        )}
      </div>
      <div className="flex flex-row flex-1 my-8 flex-wrap w-11/12 gap-6 lg:w-8/12 lg:flex-nowrap lg:absolute lg:top-1/2 lg:mt-28">
        {dailyWeather
          ?.slice(1)
          .map(({ weekday, imageSrc, imageAlt, minDegrees, maxDegrees }) => (
            <SecondaryCard
              key={weekday}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              weekday={weekday}
              minDegrees={minDegrees}
              maxDegrees={maxDegrees}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
