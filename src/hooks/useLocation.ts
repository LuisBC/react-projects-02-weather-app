import { useCallback, useState } from "react";
import { getGeopositionSearch, getLocationSearch } from "../api/location";
import { Location, LocationError, LocationErrorType } from "../types/location";

const useLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<LocationError>();

  const getLocationByGeoPosition = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const location = await getGeopositionSearch(latitude, longitude);
        setLocation(location);
      } catch (e) {
        if (e instanceof Error) {
          setError({ type: LocationErrorType.Coords, message: e.message });
        }
      }
    },
    []
  );

  const getLocationBySearch = useCallback(async (search: string) => {
    try {
      const [location] = await getLocationSearch(search);
      setLocation(location);
    } catch (e) {
      console.log(e);
      if (e instanceof Error) {
        setError({ type: LocationErrorType.Search, message: e.message });
      }
    }
  }, []);

  return {
    location,
    error,
    getLocationByGeoPosition,
    getLocationBySearch,
  };
};

export default useLocation;
