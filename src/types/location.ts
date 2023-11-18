export type LocationError = {
  type: LocationErrorType;
  message?: string;
};

export enum LocationErrorType {
  Coords = "coords",
  Search = "search",
}
