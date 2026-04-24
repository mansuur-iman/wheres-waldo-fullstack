export const getImageCoords = (e) => {
  const rect = e.target.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  console.log("CoordinatesInPercentage", x, y);
  return { x, y };
};
