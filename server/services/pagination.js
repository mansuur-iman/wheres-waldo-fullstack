export function getPagination(page, limit) {
  const pageNumber = Number(page) || 1;
  const limitNumber = Math.min(Number(limit) || 10, 50);

  const skip = (pageNumber - 1) * limitNumber;

  return {
    pageNumber,
    limitNumber,
    skip,
  };
}

export function getSortOrder(sort) {
  return sort === "asc" ? "asc" : "desc";
}

export const getPaginationMeta = (total, limit) => {
  return Math.ceil(total / limit);
};
