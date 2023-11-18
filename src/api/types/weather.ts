export interface Weather {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

export interface Headline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

export interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: Temperature;
  Day: Day;
  Night: Night;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface Temperature {
  Minimum: Minimum;
  Maximum: Maximum;
}

export interface Minimum {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Maximum {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Day {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}

export interface Night {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}
