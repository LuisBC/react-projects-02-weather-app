export type WeatherError = {
  type: WeatherErrorType;
  message?: string;
};

export enum WeatherErrorType {
  FiveDaysForecast = "FiveDaysForecast",
}
