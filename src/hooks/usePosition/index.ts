import { useCallback, useEffect, useState } from "react";
import { Coords, NavigatorPermissionState } from "./types";
import { CurrentPositionOptions } from "./constants";
import { PositionError, PositionErrorType } from "../../types/position";

const usePosition = () => {
  const [coords, setCoords] = useState<Coords>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<PositionError>();

  const getCurrentPosition = useCallback(() => {
    const success = ({
      coords: { latitude, longitude },
    }: GeolocationPosition) => setCoords({ latitude, longitude });

    const errors = (error: GeolocationPositionError) => {
      setError({
        type: PositionErrorType.PositionUnavailable,
        message: error.message,
      });
    };

    navigator.geolocation.getCurrentPosition(
      success,
      errors,
      CurrentPositionOptions
    );
  }, []);

  const getGeolocationPermissions = useCallback(async () => {
    try {
      const { state } = await navigator.permissions.query({
        name: "geolocation",
      });
      const { Granted, Prompt, Denied } = NavigatorPermissionState;
      if (state === Granted || state === Prompt) getCurrentPosition();
      if (state === Denied) {
        setError({ type: PositionErrorType.PermissionDenied });
      }
    } catch (e) {
      if (e instanceof Error) {
        setError({
          type: PositionErrorType.PositionUnavailable,
          message: e.message,
        });
      }
    }
  }, [getCurrentPosition]);

  useEffect(() => {
    navigator.geolocation
      ? getGeolocationPermissions()
      : setError({ type: PositionErrorType.NotSupported });
  }, [getGeolocationPermissions]);

  return { coords, error };
};

export default usePosition;
