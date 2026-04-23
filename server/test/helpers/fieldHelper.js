export const createUnitTestingField = (change = {}) => {
  return {
    images: [{ imageUrl: "url" }],
    ...change,
  };
};
export const createUnitTestingProgress = (change = {}) => {
  return {
    currentImageId: "id",
    completed: false,
    ...change,
  };
};
