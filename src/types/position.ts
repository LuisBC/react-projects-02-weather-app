export type PositionError = {
  type: PositionErrorType;
  message?: string;
};

export enum PositionErrorType {
  PermissionDenied = "PermissionDenied",
  PositionUnavailable = "PositionUnavailable",
  NotSupported = "NotSupported",
}
