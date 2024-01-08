export const textReduction = (
  desc: string,
  length: number,
  screenWidth: number,
  secondLength?: number,
): string => {
  const clientWidth = document.body.clientWidth;
  return clientWidth < screenWidth
    ? desc.substring(0, length)
    : secondLength
      ? desc.substring(0, secondLength)
      : desc;
};
