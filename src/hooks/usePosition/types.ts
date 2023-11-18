export type Coords = {
  latitude: number | null;
  longitude: number | null;
};

export enum NavigatorPermissionState {
  Granted = "granted",
  Prompt = "prompt",
  Denied = "denied",
}
