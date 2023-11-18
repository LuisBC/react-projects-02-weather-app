export type LocationDailyForecasts = {
  locationName: string;
  dailyWeather: {
    imageSrc: string;
    imageAlt: string;
    weekday: string;
    minDegrees: number;
    maxDegrees: number;
    phrase: string;
  }[];
};
