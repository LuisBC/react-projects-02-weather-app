export const getImageSrc = async (icon: number) =>
  (await import(`./assets/images/${icon}.png`)).default;
